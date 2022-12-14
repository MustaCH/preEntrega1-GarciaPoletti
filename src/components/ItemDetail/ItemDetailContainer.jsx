import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/mockService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let params = useParams();

  useEffect(() => {
    getProduct(params.itemid)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => console.log(error));
  });
  return (
    <ItemDetail title={product.title} img={product.img} price={product.price} />
  );
}

export default ItemDetailContainer;
