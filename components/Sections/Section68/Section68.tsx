import React from "react";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section68.module.scss";
import Image from "next/image";

interface Section68Props {
  title: string;
  content: string;
  subTitle: string;
  subContent: string;
  isShown: boolean;
  image: any;
}

const Section68: React.FC<Section68Props> = ({
  title,
  content,
  subTitle,
  subContent,
  isShown,
  image,
}) => {
  return (
    <SectionLayout className={styles.section_68}>
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-right">
          <div className={styles.title}>{title}</div>
          <div className={styles.sub_title}>{subTitle}</div>
        </div>
        <div className={styles.body} data-aos="fade-left">
          <div className={styles.content}>{content}</div>
          <div className={styles.sub_content}>{subContent}</div>
        </div>
      </div>
      <div className={styles.image} data-aos="fade-up">
        <Image src={image} layout="fill" alt="" />
      </div>
    </SectionLayout>
  );
};

export default Section68;
