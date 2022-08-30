import React from "react";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section71.module.scss";
import Image from "next/image";

import { isArray } from "utils";
import List, { ListProps } from "components/List/List";

interface Section71Props {
  title: string;
  content: string;
  subTitle: string;
  image: any;
}

const Section71: React.FC<Section71Props> = ({
  title,
  subTitle,
  content,
  image,
}) => {
  return (
    <SectionLayout
      dataAos="fade-right"
      dataAosDuration="400"
      className={styles.section_71}
      childrenClassName={styles.section_71_container}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.left}>
        <Image src={image} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
        <span className={styles.see_more}>See more</span>
      </div>
    </SectionLayout>
  );
};

export default Section71;
