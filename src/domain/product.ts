export type ProductTitle = string;
export type Product = {
  id: UniqueId;
  title: ProductTitle;
  price: PriceCents;
  toppings: Ingredient[];
};

export const ingredients: Record<Ingredient, string> = {
  fish: "fish",
  chicken: "chicken",
  bbq: "bbq",
  spicy: "spicy",
  peanuts: "peanuts",
};

export function totalPrice(products: Product[]): PriceCents {
  return products.reduce((total, { price }) => total + price, 0);
}
