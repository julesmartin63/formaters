// 📮 Formatter code postal canadien

export const postalCodeFormatter = {
  format(value: string): string {
    const cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 6)

    if (cleaned.length > 3) {
      return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`
    }

    return cleaned
  },

  normalize(value: string): string {
    return value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 6)
  },

  placeholder: 'H2H 2H2'
}
