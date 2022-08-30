import React from "react";
import Image from "next/image";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import Carousel from "components/Carousel/Carousel";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section28.module.scss";

interface Section28Props {
  title: string;
  content: string;
  list: {
    title: string;
    image: string;
  }[];
}

const Section28: React.FC<Section28Props> = ({ title, content, list }) => {
  const sliderProps = {
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: list.length > 4 ? 2 : 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          rows: 3,
        },
      },
    ],
  };

  return (
    <SectionLayout
      className={styles.section_28}
      childrenClassName={styles.section_28_container}
    >
      <div data-aos="fade-right" className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </div>

      {isArray(list) && (
        <Carousel
          animation="fade-up"
          className={styles.right}
          carouselProps={sliderProps}
          show
        >
          {list.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.image}>
                <Image
                  src={item.image || defaultAvatar}
                  alt={item.title}
                  width={315}
                  height={243}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <span className={styles.title}>{item.title}</span>
            </div>
          ))}
        </Carousel>
      )}
    </SectionLayout>
  );
};

export default Section28;
