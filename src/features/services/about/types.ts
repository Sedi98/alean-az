export interface Stat {
  value: string
  label: string
}

export interface HomeIata {
  logo: string | null
  caption: string
}

export interface IataFeature {
  text: string
}

export interface Iata {
  logo: string | null
  caption: string
  title: string
  description: string
  features: IataFeature[]
}

export interface Who {
  eyebrow: string
  headline: string
  intro_left: string
  intro_right: string
}

export interface Story {
  image: string | null
  title: string
  text: string
}

export interface Mission {
  eyebrow: string
  title: string
  text: string
}

export interface Vision {
  title: string
  text: string
}

export interface ValueOut {
  number: string
  icon: string | null
  title: string
  description: string
}

export interface Why {
  eyebrow: string
  title: string
  subtitle: string
  values: ValueOut[]
}

export interface Timeline {
  year: number
  title: string
  description?: string
}

export interface TimelineSection {
  title: string
  subtitle: string
  items: Timeline[]
}

export interface AboutBlock {
  eyebrow: string
  headline: string
  stats: Stat[]
  iata: HomeIata
}

export interface PublicAbout {
  who: Who
  stats: Stat[]
  iata: Iata
  story: Story
  mission: Mission
  vision: Vision
  why: Why
  timeline: TimelineSection
}
