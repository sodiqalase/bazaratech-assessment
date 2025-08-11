export function formatWithCommas(value: number | string): string {
  const num = Number(value);
  if (isNaN(num)) return String(value);
  return num.toLocaleString("en-US");
}