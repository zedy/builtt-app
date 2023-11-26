export function parsePriceWithDecimal(price: number) {
  if (price.toString().length > 3) {
    return new Intl.NumberFormat('de-DE').format(price);
  }

  return price;
}

export function deepCopyObj(obj: Record<string, unknown>) {
  return JSON.parse(JSON.stringify(obj));
}
