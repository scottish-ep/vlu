import React from "react";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section27.module.scss";

interface Section27Props {
  title: string;
  content: string;
  list: {
    title: string;
    content: string;
  }[];
}

const Section27: React.FC<Section27Props> = ({ title, content, list }) => {
  return (
    <SectionLayout
      className={styles.section_27}
      childrenClassName={styles.section_27_container}
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
              <h3 className={styles.item_title}>{item.title}</h3>
              <div className={styles.item_line}></div>
              <p className={styles.item_content}>{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </SectionLayout>
  );
};

export default Section27;
