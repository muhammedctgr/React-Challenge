//export const currencyFormatter = (number: number, currencyType: string) => {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: currencyType,
    style: "currency",
  });

  return formatter.format(number);
};


const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}