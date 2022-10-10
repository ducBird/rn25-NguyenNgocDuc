import React from "react";
import imageBasicUI_2 from "../basic-images/2.jpg";

type Props = {};

function ProductImage_2({}: Props) {
  return (
    <>
      <div id="product-img2" className="d-flex justify-content-center p-2 m-1">
        <img className="w-75" src={imageBasicUI_2} alt="imageBasicUI_2" />
      </div>
    </>
  );
}

export default ProductImage_2;
