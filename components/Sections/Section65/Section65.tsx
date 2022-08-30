import React from "react";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section65.module.scss";
import Image from "next/image";

interface Section65Props {
  title: string;
  content: string;
  list: {
    image: string;
    imageHover: string;
    title: string;
    content: string;
  }[];
}

const Section65: React.FC<Section65Props> = ({ title, content, list }) => {
  return (
    <SectionLayout
      className={styles.section_65}
      childrenClassName={styles.section_65_container}
    >
      <h2 data-aos="fade-down" className={styles.title}>
        {title}
      </h2>
      <p data-aos="fade-down" className={styles.content}>
        {content}
      </p>

      {isArray(list) && (
        <div data-aos="fade-up" className={styles.list}>
          {list.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.wrapper_images}>
                <div className={styles.image}>
                  <Image src={item.image} layout="fill" alt="" />
                </div>
                <div className={styles.image_hover}>
                  <Image src={item.imageHover} layout="fill" alt="" />
                </div>
              </div>
              <h3 className={styles.item_title}>{item.title}</h3>
              <p className={styles.item_content}>{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </SectionLayout>
  );
};

export default Section65;
