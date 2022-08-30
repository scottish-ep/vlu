import React from "react";
import Image from "next/image";
import { isArray } from "lodash";

import defaultBackground from "public/images/default-background.png";
import Carousel from "components/Carousel/Carousel";

import styles from "./Section44.module.scss";
import SectionLayout from "components/SectionLayout/SectionLayout";

interface Section44Props {
  title?: string;
  list?: {
    image?: string;
    title?: string;
    content?: string;
  }[];
}

const Section44 = (props: Section44Props) => {
  const { list, title } = props;

  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SectionLayout
      className={styles.section_44}
      childrenClassName={styles.section_44_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
      </div>
      {isArray(list) && (
        <Carousel className={styles.list} carouselProps={sliderProps}>
          {list.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.left}>
                <Image
                  src={item.image || defaultBackground}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div data-aos="fade-left" className={styles.right}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.content}>{item.content}</p>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </SectionLayout>
  );
};
export default Section44;
