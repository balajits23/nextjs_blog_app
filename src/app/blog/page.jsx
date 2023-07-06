import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <Link
            href={`/blog/${item._id}`}
            className={styles.item}
            key={item._id}
          >
            <div className={styles.imgContainer}>
              <Image
                src={item.img}
                className={styles.img}
                alt=""
                height={150}
                width={250}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
