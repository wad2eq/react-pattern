import React from "react";

export const Product = ({product}) => {
  return(
    <>
      <div>
        <h2>Product </h2>
        {product?.name}
      </div>
    </>
  )
}