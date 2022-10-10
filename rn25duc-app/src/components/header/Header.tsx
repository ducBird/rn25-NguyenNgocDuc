import React from "react";

type Props = {
  checkLogin: boolean;
};

function Header(props: Props) {
  return (
    <>
      <header
        id="header"
        className="d-flex justify-content-between align-items-center"
      >
        <h1 className="d-inline bg-primary">Header</h1>
        <button className="btn btn-primary">
          {props.checkLogin ? "Login" : "Logout"}
        </button>
      </header>
    </>
  );
}

export default Header;
