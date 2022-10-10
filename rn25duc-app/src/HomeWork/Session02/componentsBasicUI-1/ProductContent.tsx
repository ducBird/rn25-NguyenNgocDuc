import React from "react";

type Props = {};

function ProductContent({}: Props) {
  return (
    <>
      <div className="col my-auto">
        <h1 style={{ fontSize: "25px" }}>Clothing & Apparel</h1>
        <div className="detail text-muted">
          <p>Accessories</p>
          <p>Bags</p>
          <p>Kid's Fashion</p>
          <p>Mens</p>
        </div>
      </div>
    </>
  );
}

export default ProductContent;
