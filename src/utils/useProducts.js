import { useEffect, useState } from "react";

const useProducts = (id) => {
  const [single, setSingle] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function getsingleProductData() {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await data.json();
        setSingle(json);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setSingle(null);
      }
    }

    getsingleProductData();
  }, [id]);
  return single;
};

export default useProducts;
