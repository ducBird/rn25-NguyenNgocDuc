import React from "react";
import imageBasicUI_1 from "../basic-images/1.jpg";

type Props = {};

function ProductImage({}: Props) {
  return (
    <>
      <div id="product-img1" className="col p-2 m-1">
        <img className="w-100" src={imageBasicUI_1} alt="imageBasicUI_1" />
      </div>
    </>
  );
}

export default ProductImage;
