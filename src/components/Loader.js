import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Loader.module.css";

const Loader = ({ spinner, src, message }) => {
  return (
    <div className={`${styles.Loader}`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Loader;