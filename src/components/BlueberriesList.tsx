import { useEffect, useState } from "react";
import KrogerProduct from "../models/KrogerProduct";
import { getProducts } from "../services/krogerService";
import "./BlueberriesList.css";
import BlueberryProduct from "./BlueberryProduct";

const BlueberriesList = () => {
  const [blueberryProducts, setBlueberryProducts] = useState<KrogerProduct[]>(
    []
  );

  useEffect(() => {
    getProducts().then((response) => setBlueberryProducts(response.data));
  }, []);

  return (
    <ul className="BlueberriesList">
      {blueberryProducts.map((product) => (
        <BlueberryProduct product={product} />
      ))}
    </ul>
  );
};

export default BlueberriesList;
