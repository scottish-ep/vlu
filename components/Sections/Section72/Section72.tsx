import React from "react";
import _, { isArray } from "lodash";
import classNames from "classnames";
import Image from "next/image";

import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section72.module.scss";
import List from "components/List/List";

interface Section72Props {
  variant?: "primary" | "secondary";
  list?: any;
}

const Section72: React.FC<Section72Props> = ({ list, variant }) => {
  return (
    <div
      className={classNames(styles.section_72, {
        [styles.secondary]: variant === "secondary",
      })}
    >
      {isArray(list) && (
        <React.Fragment>
          {list.map((item, index) => (
            <SectionLayout
              data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}
              data-aos-duration="400"
              className={classNames(styles.item)}
              childrenClassName={styles.item_container}
              key={index}
            >
              <div className={styles.item_left}>
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className={styles.item_right}>
                <List titleClassName={styles.title} key={index} {...item} />
              </div>
            </SectionLayout>
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default Section72;
