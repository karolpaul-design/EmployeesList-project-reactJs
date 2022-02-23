import React from "react";
import loader from "./loader.gif";
import "./loader.styles.css";

const Loader = () => {
  return <img src={loader} alt="Loading" className="loader" />;
};

export default Loader;
