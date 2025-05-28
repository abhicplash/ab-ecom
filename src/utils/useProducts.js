import { useEffect, useState } from "react";

const useProducts = (id) => {
  const [single, setSingle] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function getsingleProductData() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch product. Status: ${response.status}`);
        }

        const text = await response.text();

        if (!text) {
          throw new Error("Response body is empty");
        }

        const json = JSON.parse(text);
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
