import { isArray } from "lodash";
import Image from "next/image";
import React from "react";

import Carousel from "components/Carousel/Carousel";
import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section7.module.scss";

interface Section7Props {
  title?: string;
  content?: string;
  list?: string[];
}

const Section7 = (props: Section7Props) => {
  const { title, content, list = [] } = props;

  const sliderProps = {
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SectionLayout
      className={styles.section_7}
      childrenClassName={styles.section_7_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
      </div>
      <Carousel
        className={styles.list}
        show={isArray(list)}
        carouselProps={sliderProps}
      >
        {list.map((image, index) => (
          <div key={index} className={styles.list_item}>
            <Image
              src={image || defaultAvatar}
              alt="colab-university"
              layout="intrinsic"
              className="m-auto"
            />
          </div>
        ))}
      </Carousel>
    </SectionLayout>
  );
};

export default Section7;
