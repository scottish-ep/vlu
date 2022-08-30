import { isArray } from "lodash";
import Image from "next/image";
import React from "react";

import Carousel from "components/Carousel/Carousel";
import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section9.module.scss";
import Card, { CardProps } from "components/Card/Card";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";

interface Section9Props {
  title?: string;
  subTitle?: string;
  content?: string;
  directLabel?: string;
  list?: { title: string; image: string }[];
  cardList?: CardProps[];
}

const Section9 = (props: Section9Props) => {
  const {
    title,
    subTitle,
    directLabel,
    content,
    cardList = [],
    list = [],
  } = props;

  const sliderProps = {
    dots: false,
    arrows: true,
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
    <div className={styles.section_9}>
      <SectionLayout
        className={styles.section_9_top}
        childrenClassName={styles.section_9_top_container}
      >
        <div className={styles.header}>
          <div
            className={styles.title}
            data-aos="fade-right"
            data-aos-duration="400"
          >
            {title}
          </div>
          <div
            className={styles.content}
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-delay="100"
          >
            {content}
          </div>
        </div>
        <Carousel
          className={styles.list}
          show={isArray(list)}
          carouselProps={sliderProps}
        >
          {list.map((item, index) => (
            <div key={index} className={styles.list_item}>
              <div className={styles.list_item_image}>
                <Image
                  src={item.image || defaultAvatar}
                  alt="colab-university"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.list_item_title}>{item.title}</div>
            </div>
          ))}
        </Carousel>
      </SectionLayout>
      <SectionLayout
        className={styles.section_9_bottom}
        childrenClassName={styles.section_9_bottom_container}
      >
        <div className={styles.header}>
          <div className={styles.subtitle}>{subTitle}</div>
          <div className={styles.content}>
            <SeeMoreBtn
              label={directLabel}
              url=""
              className={styles.desktop_button}
            />
          </div>
        </div>
        <div className={styles.card_container}>
          {cardList.map((card, index) => (
            <Card
              key={index}
              dataAos="zoom-in"
              dataAosDuration="400"
              dataAosDelay={index * 100}
              title={card.title}
              category={card.category}
              image={card.image}
              className={styles.card}
              size="small"
            />
          ))}
        </div>
        <SeeMoreBtn
          label={directLabel}
          url=""
          className={styles.mobile_button}
        />
      </SectionLayout>
    </div>
  );
};

export default Section9;
