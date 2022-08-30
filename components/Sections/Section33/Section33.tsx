import React from "react";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section33.module.scss";

interface Section33Props {
  title: string;
  content: string;
  list: {
    title: string;
    content: string;
  }[];
}

const Section33: React.FC<Section33Props> = ({ title, content, list }) => {
  return (
    <SectionLayout
      className={styles.section_33}
      childrenClassName={styles.section_33_container}
    >
      <h2 data-aos="fade-right" className={styles.title}>
        {title}
      </h2>
      <p data-aos="fade-right" className={styles.content}>
        {content}
      </p>

      {isArray(list) && (
        <div data-aos="fade-up" className={styles.list}>
          {list.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.item_line}></div>
              <h3 className={styles.item_title}>{item.title}</h3>
              <p className={styles.item_content}>{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </SectionLayout>
  );
};

export default Section33;
