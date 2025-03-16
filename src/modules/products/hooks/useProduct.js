import { useState } from "react";
import { useHttp } from "../../../core";

export default function useProduct() {
  const http = useHttp();
  const [products, setProducts] = useState([]);

  const list = async () => {
    try {
      const url = "https://fakestoreapi.com/products";
      const response = await http.get(url);
      setProducts(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    models: products,
    list,
  };
}
