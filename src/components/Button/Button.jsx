import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

const Button = ({ text = "", url = "" }) => {
  return (
    <Link href={url}>
      <button className={styles.btnContainer}>{text}</button>
    </Link>
  );
};

export default Button;
