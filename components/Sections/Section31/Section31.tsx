import React from "react";
import Image from "next/image";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultBackground from "public/images/default-background.png";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";

import styles from "./Section31.module.scss";
import classNames from "classnames";

interface Section31Props {
  title: string;
  content: string;
  directLabel?: string;
  directUrl?: string;
  background?: boolean | "dark";
  list: {
    title: string;
    image: string;
    content?: string;
  }[];
}

const Section31: React.FC<Section31Props> = ({
  title,
  content,
  directLabel,
  directUrl,
  background,
  list,
}) => {
  return (
    <SectionLayout
      className={classNames(styles.section_31, {
        [styles.background]: background,
        [styles.background_dark]: background === "dark",
      })}
      childrenClassName={styles.section_31_container}
    >
      <div data-aos="fade-right" className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>

        <SeeMoreBtn label={directLabel} url={directUrl} />
      </div>

      <div data-aos="fade-up" className={styles.right}>
        {isArray(list) &&
          list.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.thumbnail_card}>
                <Image
                  src={item.image || defaultBackground}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <h3 className={styles.item_title}>{item.title}</h3>
              </div>
              {item.content && (
                <div className={styles.expand_card}>
                  <h3 className={styles.card_title}>{item.title}</h3>
                  <p className={styles.card_content}>{item.content}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </SectionLayout>
  );
};

export default Section31;
