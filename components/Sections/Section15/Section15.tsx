import React from "react";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section15.module.scss";

interface Section15Props {
  title: string;
  list: {
    title: string;
    content: string;
  }[];
  hashtag: {
    title: string;
    list: string[];
  };
}

const Section15: React.FC<Section15Props> = ({ title, list, hashtag }) => {
  return (
    <SectionLayout
      className={styles.section_15}
      childrenClassName={styles.section_15_container}
    >
      <h2 data-aos="fade-right" className={styles.title}>
        {title}
      </h2>

      <div className={styles.background}>
        <div data-aos="fade-down" className={styles.list}>
          {isArray(list) &&
            list.map((item, index) => (
              <div key={index} className={styles.item}>
                <h3 className={styles.item_title}>{item.title}</h3>
                <div className={styles.crossbar}></div>
                <p className={styles.item_content}>{item.content}</p>
              </div>
            ))}
        </div>
        <div data-aos="fade-up" className={styles.hashtag}>
          <h3 className={styles.hashtag_title}>{hashtag.title}</h3>
          <div className={styles.crossbar}></div>
          <div className={styles.hashtag_list}>
            {isArray(hashtag.list) &&
              hashtag.list.map((tag, index) => (
                <div key={index} className={styles.hashtag_item}>
                  <span>#</span>
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Section15;
