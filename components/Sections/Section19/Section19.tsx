import React from "react";
import Image from "next/image";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import Carousel from "components/Carousel/Carousel";
import defaultBackground from "public/images/default-background.png";

import styles from "./Section19.module.scss";

interface Section19Props {
  title: string;
  image: string;
  list: {
    title: string;
    content: string;
    time: number;
  }[];
  isShown?: boolean;
}

const Section19: React.FC<Section19Props> = ({
  title,
  image,
  list,
  isShown,
}) => {
  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!isShown) {
    return null;
  }

  return (
    <SectionLayout
      className={styles.section_19}
      childrenClassName={styles.section_19_container}
    >
      <h2 data-aos="fade-right" className={styles.title}>
        {title}
      </h2>

      <div className={styles.content}>
        <div data-aos="fade-right" className={styles.content_background}>
          <Image
            src={image || defaultBackground}
            alt={title}
            layout="responsive"
            width={754}
            height={440}
          />
        </div>

        {isArray(list) && (
          <Carousel
            animation="fade-left"
            className={styles.content_slider}
            carouselProps={sliderProps}
          >
            {list.map((item, index) => (
              <div className={styles.content_text} key={index}>
                <h3 className={styles.time}>{item.time}</h3>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.content}>{item.content}</p>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </SectionLayout>
  );
};

export default Section19;
