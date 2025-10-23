interface ProductType {
  readonly id: number;
  title: string;
  description?: string;
}

const product: ProductType = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
