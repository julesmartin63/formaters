// 🇨🇦 Formatter NAS

export const nasFormatter = {
  format(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 9)

    if (digits.length > 6) {
      return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`
    }

    if (digits.length > 3) {
      return `${digits.slice(0, 3)} ${digits.slice(3)}`
    }

    return digits
  },

  normalize(value: string): string {
    return value.replace(/\D/g, '').slice(0, 9)
  },

  placeholder: '123 456 789'
}
