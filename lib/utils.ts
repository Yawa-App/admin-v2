/**
 * Combines class names into a single string.
 * @param classes - A list of class names to combine.
 * @returns A string of combined class names.
 */
export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
