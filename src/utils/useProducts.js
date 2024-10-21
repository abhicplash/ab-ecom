import React, { useEffect, useState } from "react";

const useProducts = (id) => {
  const [single, setSingle] = useState({});
  useEffect(() => {
    getsingleProductData(id);
  }, []);
  async function getsingleProductData(id) {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await data.json();
    setSingle(json);
  }
  return single;
};

export default useProducts;
