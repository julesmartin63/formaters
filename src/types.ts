// 🔹 Type générique pour un formatter
export type Formatter = {
  format: (value: string) => string
  normalize: (value: string) => string
  placeholder: string
}
