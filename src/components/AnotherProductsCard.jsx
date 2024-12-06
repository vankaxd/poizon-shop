export default function AnotherProductsCard({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.brand}</p>
      <p>{product.price}</p>
    </div>
  );
}
