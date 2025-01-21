export const formatCurrency = (number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    maximumSignificantDigits: 3,
    currency: "USD",
  }).format(number);

export const formatDate = (date) => {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat("en-Us", { dateStyle: "long" }).format(newDate);
};
