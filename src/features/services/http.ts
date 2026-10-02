import "server-only"

import axios, { type AxiosRequestConfig } from "axios"
import { notFound } from "next/navigation"

export type ApiLanguage = "az" | "en" | "ru"
export const DEFAULT_API_LANGUAGE: ApiLanguage = "az"

export interface LanguageParams {
  lang?: ApiLanguage
}

export interface ApiRequestConfig extends AxiosRequestConfig {
  /** Render the locale-aware not-found page for detail endpoint 404s. */
  notFoundOn404?: boolean
}

export interface ApiErrorPayload {
  detail?: string
  [key: string]: unknown
}

export class ApiError extends Error {
  readonly status: number
  readonly data: unknown

  constructor(status: number, message: string, data?: unknown) {
    super(message)
    this.name = "ApiError"
    this.status = status
    this.data = data
  }
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30_000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

function getErrorMessage(data: unknown, fallback: string): string {
  if (typeof data === "string" && data.length > 0) return data

  if (data && typeof data === "object" && "detail" in data) {
    const detail = (data as ApiErrorPayload).detail
    if (typeof detail === "string" && detail.length > 0) return detail
  }

  return fallback
}

function toAxiosConfig(config: ApiRequestConfig): AxiosRequestConfig {
  const axiosConfig = { ...config }
  delete (axiosConfig as ApiRequestConfig).notFoundOn404
  const params =
    axiosConfig.params && typeof axiosConfig.params === "object"
      ? axiosConfig.params
      : {}

  axiosConfig.params = {
    lang: DEFAULT_API_LANGUAGE,
    ...params,
  }

  return axiosConfig
}

function handleApiError(error: unknown, config: ApiRequestConfig): never {
  if (!axios.isAxiosError(error)) {
    throw error
  }

  const status = error.response?.status ?? 0
  const data = error.response?.data

  if (status === 404 && config.notFoundOn404) {
    notFound()
  }

  throw new ApiError(
    status,
    getErrorMessage(data, error.message || "API request failed"),
    data,
  )
}

export async function GetApi<T>(url: string, config: ApiRequestConfig = {}): Promise<T> {
  try {
    const response = await apiClient.get<T>(url, toAxiosConfig(config))
    return response.data
  } catch (error) {
    return handleApiError(error, config)
  }
}

export async function PostApi<TPayload, TResponse>(
  url: string,
  payload: TPayload,
  config: ApiRequestConfig = {},
): Promise<TResponse> {
  try {
    const response = await apiClient.post<TResponse>(
      url,
      payload,
      toAxiosConfig(config),
    )
    return response.data
  } catch (error) {
    return handleApiError(error, config)
  }
}
