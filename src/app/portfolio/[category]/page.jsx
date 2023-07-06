import React from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "./page.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";

function getData(cat) {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
}

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => {
        return (
            <div className={styles.item} key={item.id}>
              <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
                <Button url="#" text="See More" />
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={item.image}
                  fill={true}
                  className={styles.img}
                  alt={item.title}
                />
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default Category;
