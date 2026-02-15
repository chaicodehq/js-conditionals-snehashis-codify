/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (password === "" || typeof password !== "string") {
    return "weak";
  } else {
    const criteria1 = password.length >= 8;
    const criteria2 = password
      .split("")
      .some((val) => val === val.toUpperCase());
    const criteria3 = password
      .split("")
      .some((val) => val === val.toLowerCase());
    const criteria4 = password.split("").some((val) => !isNaN(Number(val)));
    const criteria5 = password
      .split("")
      .some((val) => "!@#$%^&*()_+-=[]{}|;:,.<>?".split("").includes(val));
    if (criteria1) {
      return "weak";
    } else if (criteria1 && criteria2 && criteria3) {
      return "medium";
    }
    // not done
  }
  // Your code here
}
