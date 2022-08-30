import React from "react";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section69.module.scss";
import Image from "next/image";

import { isArray } from "utils";
import List, { ListProps } from "components/List/List";

interface Section69Props {
  title: string;
  content: string;
  list: Array<ListProps>;
}

const Section69: React.FC<Section69Props> = ({ title, content, list }) => {
  return (
    <SectionLayout className={styles.section_69}>
      <div className={styles.header}>
        <div className={styles.title} data-aos="fade-right">
          {title}
        </div>
        <div className={styles.content} data-aos="fade-left">
          {content}
        </div>
      </div>
      <div className={styles.list} data-aos="fade-up">
        {isArray(list) &&
          list.map((item, index) => {
            return <List className={styles.item} key={index} {...item} />;
          })}
      </div>
    </SectionLayout>
  );
};

export default Section69;
