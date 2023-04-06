export const currencyFormatter = (number: number, currencyType: string) => {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: currencyType,
    style: "currency",
  });

  return formatter.format(number);
};


