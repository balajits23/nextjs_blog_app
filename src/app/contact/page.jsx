import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import contactImg from "/public/contact.png";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={contactImg}
            alt="contact"
            fill={true}
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            className={styles.textArea}
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
