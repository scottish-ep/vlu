import React from "react";
import { get, isArray } from "lodash";
import classNames from "classnames";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import Carousel from "components/Carousel/Carousel";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section39.module.scss";
import Image from "next/image";

interface Section39Props {
  title: string;
  content: string;
  image?: string;
  isShown?: boolean;
  directLabel?: string;
  directUrl?: string;
}

const Section39: React.FC<Section39Props> = ({
  title,
  content,
  image,
  isShown = true,
  directLabel,
  directUrl,
}) => {
  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 4,
  };

  if (!isShown) {
    return null;
  }

  return (
    <SectionLayout
      className={styles.section_39}
      childrenClassName={styles.section_39_container}
    >
      <div data-aos="fade-right" className={styles.left}>
        <h2 className={styles.left_title}>{title}</h2>
        <p className={styles.left_content}>{content}</p>
        {directLabel && (
          <SeeMoreBtn
            className={styles.left_more}
            label={directLabel}
            url={directUrl}
          />
        )}
      </div>
      <div className={styles.right}>
        <Image src={image || defaultAvatar} alt="" layout="fill" />
      </div>
    </SectionLayout>
  );
};

export default Section39;
