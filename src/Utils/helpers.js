export function toPascalCase(str) {
  const words = str.split(/(\W+)/);

  return words
    .map((word) => {
      if (/^[a-zA-Z]+$/.test(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    })
    .join("");
}
export function formatCurrency(
  amount,
  locale = "en-US",
  currency = "USD",
  minimumFractionDigits = 2
) {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: minimumFractionDigits,
  });

  return formatter.format(amount);
}
