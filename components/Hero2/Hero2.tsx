import React from "react";
import Image from "next/image";
import { isArray } from "lodash";

import defaultBackground from "public/images/default-background.png";
import Carousel from "components/Carousel/Carousel";

import styles from "./Hero2.module.scss";

interface Hero2Props {
  list?: {
    category?: string;
    image?: string;
    title?: string;
    content?: string;
  }[];
}

const Hero2 = (props: Hero2Props) => {
  const { list } = props;

  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.hero2}>
      {isArray(list) && (
        <Carousel className={styles.list} carouselProps={sliderProps}>
          {list.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.left}>
                <Image
                  src={item.image || defaultBackground}
                  alt={item.title}
                  layout="fill"
                  // width={818}
                  // height={708}
                  objectFit="cover"
                />
              </div>

              <div data-aos="fade-left" className={styles.right}>
                <h4 className={styles.category}>{item.category}</h4>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.content}>{item.content}</p>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};
export default Hero2;
