import React from "react";
import Link from "next/link";
import Image from "next/image";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";

import styles from "./Section30.module.scss";

interface Section30Props {
  title: string;
  content: string;
  directLabel: string;
  directUrl?: string;
  list: {
    title: string;
    content: string;
    directLabel: string;
    directUrl?: string;
  }[];
}

const Section30: React.FC<Section30Props> = ({
  title,
  content,
  directLabel,
  directUrl,
  list,
}) => {
  return (
    <SectionLayout
      className={styles.section_30}
      childrenClassName={styles.section_30_container}
    >
      <div className={styles.background}>
        <Image
          src={require("public/images/section_30_bg.png")}
          alt="background"
          layout="fixed"
          // width={300}
          width={150}
          height={250}
        />
      </div>

      <div data-aos="fade-right" className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <SeeMoreBtn
          className={styles.button}
          label={directLabel}
          url={directUrl}
          labelColor="#fff"
          buttonColor="#FEBD25"
          iconColor="#D72134"
        />
      </div>

      <div data-aos="fade-left" className={styles.right}>
        {isArray(list) &&
          list.map((item, index) => (
            <React.Fragment key={index}>
              <div className={styles.item}>
                <h3 className={styles.item_title}>{item.title}</h3>
                <p className={styles.item_content}>{item.content}</p>
                <Link href={item.directUrl || ""}>
                  <div className={styles.item_showmore}>{item.directLabel}</div>
                </Link>
              </div>
            </React.Fragment>
          ))}
      </div>

      <div data-aos="fade-up" className={styles.mobile}>
        <SeeMoreBtn
          label={directLabel}
          url={directUrl}
          labelColor="#fff"
          buttonColor="#FEBD25"
          iconColor="#D72134"
        />
      </div>
    </SectionLayout>
  );
};

export default Section30;
