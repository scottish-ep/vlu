import React from "react";
import Image from "next/image";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import Carousel from "components/Carousel/Carousel";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section29.module.scss";

interface Section29Props {
  title: string;
  content: string;
  directLabel: string;
  directUrl?: string;
  list: {
    title: string;
    content: string;
    image: string;
  }[];
}

const Section29: React.FC<Section29Props> = ({
  title,
  content,
  directLabel,
  directUrl,
  list,
}) => {
  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    dots: false,
  };

  return (
    <SectionLayout
      className={styles.section_29}
      childrenClassName={styles.section_29_container}
    >
      <div className={styles.top}>
        <div data-aos="fade-right" className={styles.left}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.content}>{content}</p>
        </div>
        <div data-aos="fade-left" className={styles.right}>
          <SeeMoreBtn label={directLabel} url={directUrl} />
        </div>
      </div>

      {isArray(list) && (
        <div data-aos="fade-up" className={styles.list}>
          {list.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.image}>
                <Image
                  src={item.image || defaultAvatar}
                  alt={item.title}
                  layout="responsive"
                  width={305}
                  height={381}
                  objectFit="cover"
                />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.content}>{item.content}</p>
            </div>
          ))}
        </div>
      )}

      {isArray(list) && (
        <Carousel
          animation="fade-up"
          className={styles.list_mobile}
          carouselProps={sliderProps}
        >
          {list.map((item, index) => (
            <div className={styles.item} key={index}>
              <Image
                src={item.image || defaultAvatar}
                alt={item.title}
                layout="responsive"
                objectFit="cover"
              />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.content}>{item.content}</p>
            </div>
          ))}
        </Carousel>
      )}

      <div data-aos="fade-up" className={styles.button_mobile}>
        <SeeMoreBtn label={directLabel} url={directUrl} />
      </div>
    </SectionLayout>
  );
};

export default Section29;
