import React from "react";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";

import styles from "./Section16.module.scss";

interface Section16Props {
  title: string;
  directLabel: string;
  directUrl?: string;
  list: {
    title: string;
    content: string;
  }[];
  isShown?: boolean;
}

const Section16: React.FC<Section16Props> = ({
  title,
  directLabel,
  directUrl,
  list,
  isShown,
}) => {
  if (!isShown) {
    return null;
  }

  return (
    <SectionLayout
      className={styles.section_16}
      childrenClassName={styles.section_16_container}
    >
      <h2 data-aos="fade-right" className={styles.title}>
        {title}
      </h2>

      <div data-aos="fade-up" className={styles.list}>
        {isArray(list) &&
          list.map((item, index) => (
            <div className={styles.item} key={index}>
              <h3 className={styles.item_title}>{item.title}</h3>
              <p className={styles.item_content}>{item.content}</p>
            </div>
          ))}
      </div>

      <div data-aos="fade-right" className="flex justify-center">
        <SeeMoreBtn
          className={styles.read_more}
          label={directLabel}
          url={directUrl}
        />
      </div>
    </SectionLayout>
  );
};

export default Section16;
