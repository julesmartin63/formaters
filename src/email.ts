// 📧 Validation et normalisation d'email

/**
 * 🔹 Regex simple et fiable pour email
 * (évite les regex monstres inutiles)
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * 🔹 Vérifie si un email est valide
 */
export const isValidEmail = (value: string): boolean => {
  if (!value) return false

  // 🔹 Trim pour éviter erreurs dues aux espaces
  const email = value.trim()

  return EMAIL_REGEX.test(email)
}

/**
 * 🔹 Normalise un email (utile backend)
 * - trim
 * - lowercase
 */
export const normalizeEmail = (value: string): string => {
  return value.trim().toLowerCase()
}