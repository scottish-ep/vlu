import React from "react";
import Image from "next/image";

import Icon from "components/Icon/Icon";
import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section14.module.scss";
import classNames from "classnames";
import { isArray } from "lodash";
import Carousel from "components/Carousel/Carousel";

interface Section14Props {
  title: string;
  content?: string;
  background?: boolean;
  list?: {
    name?: string;
    content: string;
    position?: string;
    image: string;
  }[];
  variant?: "primary" | "secondary";
}

const Section14: React.FC<Section14Props> = ({
  content,
  background,
  title,
  variant = "primary",
  list,
}) => {
  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SectionLayout
      className={classNames(styles.section_14, {
        [styles.secondary]: variant === "secondary",
        [styles.background]: background,
      })}
      childrenClassName={styles.section_14_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
      </div>
      {isArray(list) && (
        <Carousel animation="fade-left" carouselProps={sliderProps}>
          {list.map((item, index) => (
            <div key={index} className={styles.item}>
              <div data-aos="fade-right" className={styles.left}>
                <div className={styles.left_content}>
                  <p className={styles.left_content_content}>{item.content}</p>
                  <div className="flex gap-x-2 items-center">
                    <span className={styles.left_content_name}>
                      {item.name},
                    </span>
                    <span className={styles.left_content_role}>
                      {item.position}
                    </span>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className={styles.right}>
                <Image
                  src={item.image || defaultAvatar}
                  layout="fixed"
                  alt={title}
                  width={385}
                  height={481}
                />
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </SectionLayout>
  );
};

export default Section14;
