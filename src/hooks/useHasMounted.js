import { useState, useEffect } from "react";
import { Product} from "../api"

const productCtrole = new Product();

export function useHasMounted() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect (() => {
    (async () => {
      await getProducts();
    })();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true)
      const response = await productCtrole.obtain();
      setProducts(response);
    } catch(error){
      setError(error);
    } finally{
      setLoading(false);
    }
  }

  return{
    products,
    loading,
    error,
    getProducts,
  };
}