/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import logo from "./logo.svg";
// import imgHouse from "./image/b";
//
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import ProductContent from "./HomeWork/Session02/componentsBasicUI-1/ProductContent";
import ProductImage from "./HomeWork/Session02/componentsBasicUI-1/ProductImage";
import ProductContent_2 from "./HomeWork/Session02/componentsBasicUI-2/ProductContent_2";
import ProductImage_2 from "./HomeWork/Session02/componentsBasicUI-2/ProductImage_2";
import ProductContent_3 from "./HomeWork/Session02/componentsBasicUI-3/ProductContent_3";
import ProductImage_3 from "./HomeWork/Session02/componentsBasicUI-3/ProductImage_3";

function App() {
  /* Default App
  let isLogin = false; */
  return (
    <>
      <div id="wrapper">
        {/* Default App
        <Header checkLogin={isLogin} />
        <Section />
        <Footer /> */}

        {/* =========BEGIN BASIC UI====================================================== */}
        <div className="basic-UI text-center border border-5 border-warning">
          BASIC UI
          {/* Basic UI - 1 */}
          <div
            id="container-bsui1"
            className="row border border-2 rounded-3 mx-auto mt-4"
            style={{ width: "550px" }}
          >
            <ProductImage />
            <ProductContent />
          </div>
          {/* =============================================================== */}
          {/* Basic UI - 2 */}
          <div
            id="container-bsui2"
            className="border border-2 rounded-3 mx-auto mt-4"
            style={{ width: "550px" }}
          >
            <ProductImage_2 />
            <ProductContent_2 />
          </div>
          {/* =============================================================== */}
          {/* Basic UI - 3 */}
          <div
            id="container-bsui3"
            className="border border-2 rounded-3 mx-auto mt-4"
            style={{ width: "550px" }}
          >
            <ProductImage_3 />
            <ProductContent_3 />
          </div>
        </div>
        {/* ========END BASIC UI======================================================= */}
      </div>
    </>
  );
}

export default App;
