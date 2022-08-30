import React from "react";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section67.module.scss";
import Image from "next/image";

interface Section67Props {
  title: string;
  content: string;
  subTitle: string;
}

const Section67: React.FC<Section67Props> = ({ title, content, subTitle }) => {
  return (
    <SectionLayout
      className={styles.section_67}
      childrenClassName={styles.section_67_container}
    >
      <div data-aos="fade-up">
        <div className={styles.title}>{title}</div>
        <div className={styles.sub_title}>{subTitle}</div>
      </div>
      <div className={styles.content} data-aos="fade-up">
        {content}
      </div>
    </SectionLayout>
  );
};

export default Section67;
