import React from "react";
import _, { isArray } from "lodash";
import classNames from "classnames";
import Image from "next/image";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section51.module.scss";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";

interface Section51Props {
  title?: string;
  variant?: "primary" | "secondary";
  list: {
    title: string;
    content: string;
    image: string;
    directLabel?: string;
    directUrl?: string;
  }[];
}

const Section51: React.FC<Section51Props> = ({ list, title, variant }) => {
  return (
    <div
      className={classNames(styles.section_51, {
        [styles.secondary]: variant === "secondary",
      })}
    >
      {isArray(list) && (
        <React.Fragment>
          {list.map((item, index) => (
            <SectionLayout
              data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}
              data-aos-duration="400"
              className={styles.item}
              childrenClassName={styles.item_container}
              key={index}
            >
              {index === 0 && <div className={styles.title}>{title}</div>}
              <div className={styles.item_left}>
                <Image
                  src={item.image}
                  layout="responsive"
                  width={649}
                  height={385}
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className={styles.item_right}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.content}>{item.content}</p>
                {item.directLabel && (
                  <SeeMoreBtn
                    label={item.directLabel}
                    className={styles.see_more_btn}
                  />
                )}
              </div>
            </SectionLayout>
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default Section51;
