export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "default",
    label: "New York",
  },
] as const

export type Style = (typeof styles)[number]
