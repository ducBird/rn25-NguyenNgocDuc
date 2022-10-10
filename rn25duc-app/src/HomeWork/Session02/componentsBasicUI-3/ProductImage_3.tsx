import React from "react";
import imageBasicUI_3 from "../basic-images/3.jpg";

type Props = {};

function ProductImage_3({}: Props) {
  return (
    <>
      <div id="product-img2" className="d-flex justify-content-center p-2 m-1">
        <img className="w-75" src={imageBasicUI_3} alt="imageBasicUI_3" />
      </div>
    </>
  );
}

export default ProductImage_3;
