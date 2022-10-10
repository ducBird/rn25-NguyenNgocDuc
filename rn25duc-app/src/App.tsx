/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import logo from "./logo.svg";
// import imgHouse from "./image/b";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Section from "./components/section/Section";

function App() {
  let isLogin = false;
  return (
    <>
      <div id="wrapper">
        <Header checkLogin={isLogin} />
        <Section />
        <Footer />
      </div>
    </>
  );
}

export default App;
