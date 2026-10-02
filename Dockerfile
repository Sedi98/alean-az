FROM node:24-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
WORKDIR /app

FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# The complete env file is available during the build stage. Remove any traced
# copy from standalone output before that output is copied into the runtime image.
RUN DOCKER_BUILD=1 pnpm build \
  && rm -f .next/standalone/.env .next/standalone/.env.*

FROM node:24-slim AS runner

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

WORKDIR /app

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
