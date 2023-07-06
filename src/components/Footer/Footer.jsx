import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©️2023 Lamamia.All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="Facebook"
          className={styles.socialLogo}
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          alt="Instagram"
          className={styles.socialLogo}
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          alt="Twitter"
          className={styles.socialLogo}
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          alt="Youtube"
          className={styles.socialLogo}
        />
      </div>
    </div>
  );
};

export default Footer;
