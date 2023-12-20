function capitalizeString(str) {
  const newString = str.split("");
  newString[0] = newString[0].toUpperCase();
  return newString.join("");
}

const currencyOptions = {
  style: "currency",
  currency: "CLP",
};
const numberFormat = new Intl.NumberFormat("es-CL", currencyOptions);

export { capitalizeString, numberFormat };
