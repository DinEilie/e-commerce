import validator from 'validator';

export function validateEmail(value: string): string {
  // Check if the string is empty
  if (value.length === 0) {
    return 'none';
  }

  // Check if the string is not too long
  if (value.length > 254) {
    return 'Email is too long.';
  }

  // Check if the string is not a valid Email format.
  if (!validator.isEmail(value)) {
    return 'Email is invalid.';
  }

  // Return a valid response.
  return 'ok';
}
