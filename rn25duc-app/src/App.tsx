/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import logo from "./logo.svg";
// import imgHouse from "./image/b";

import "./App.css";

function App() {
  return (
    <>
      <div id="wrapper">
        <header id="header"></header>
        <section id="section">
          <div id="content-left">
            <ul id="nav">
              <li>
                <a href="">The Drive</a>
              </li>
              <li>
                <a href="">The Walk</a>
              </li>
              <li>
                <a href="">The Return</a>
              </li>
              <li>
                <a href="">The End</a>
              </li>
            </ul>
          </div>
          <div id="content-center">
            <h1>The Walk</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              ullam corrupti, vero reprehenderit obcaecati, pariatur laborum
              porro unde repudiandae itaque aperiam quam dicta illum commodi
              possimus iure cupiditate ad corporis.
            </p>
            <img
              src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png"
              alt=""
            />
          </div>
          <div id="content-right">
            <ul id="nav-right">
              <li>
                <h1>What?</h1>
                <p>The Pulpit Rock is in way</p>
              </li>
              <li>
                <h1>Where?</h1>
                <p>The Pulpit Rock is in way</p>
              </li>
              <li>
                <h1>Price?</h1>
                <p>The walk is free!</p>
              </li>
            </ul>
          </div>
        </section>
        <footer id="footer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            necessitatibus ex, rem iure laborum tenetur tempore quia eligendi.
            Corporis cum nemo eum ipsam nostrum perspiciatis aperiam magni
            cumque neque totam!
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
