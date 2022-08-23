import KrogerProduct from "../models/KrogerProduct";
import "./BlueberryProduct.css";

interface Props {
  product: KrogerProduct;
}

const BlueberryProduct = ({ product }: Props) => {
  return (
    <li className="BlueberryProduct">
      <h3>{product.description}</h3>
      <p>{product.brand}</p>
      <p>{product.categories}</p>
      <p>{product.countryOrigin}</p>
      <img src={product.images[0].sizes[0].url} alt={product.description} />
    </li>
  );
};

export default BlueberryProduct;
