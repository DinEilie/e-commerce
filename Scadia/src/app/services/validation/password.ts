export function validatePassword(value: string): string {
  // Check if the string is empty
  if (value.length === 0) {
    return 'none';
  }

  // Check password length
  if (value.length < 8) return 'Password must be at least 8 characters long.';

  // Check password characters
  const validRegex = /^[0-9A-Za-z!@#$%_]+$/;
  if (!validRegex.test(value))
    return 'Password must contain only letters, digits, and one special characters (e.g.  !@#$%_  ).';

  // Check password capital letters
  const validCapitalRegex = /[A-Z]/;
  if (!validCapitalRegex.test(value)) return 'Password must contain at least one capital letter.';

  // Password is valid
  return 'ok';
}
