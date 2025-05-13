export function stringifyErrors(errors: Record<string, unknown>): string {
  console.log("errors", errors);
  const keys = Object.keys(errors);
  if (!keys.length) {
    return "";
  }
  return Object.keys(errors).reduce(
    (error, key) => `${error}${errors[key]} `,
    ""
  );
}
