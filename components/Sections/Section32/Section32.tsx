import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";
import Icon from "components/Icon/Icon";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import Carousel from "components/Carousel/Carousel";

import styles from "./Section32.module.scss";

export enum ItemTypes {
  text = "text",
  image = "image",
}

interface Section32Props {
  title: string;
  content: string;
  directLabel: string;
  directUrl?: string;
  list: {
    type: ItemTypes;
    directUrl?: string;
    title?: string;
    content?: string;
    image?: string;
  }[][];
}

const Section32: React.FC<Section32Props> = ({
  title,
  content,
  directLabel,
  directUrl,
  list,
}) => {
  const sliderProps = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const reverseArray = (arr: any[], index: number) => {
    const _arr = [...arr];
    return index % 2 !== 0 ? _arr.reverse() : _arr;
  };

  const rowReverseClassName = (index: number) => {
    return index % 2 !== 0 ? "lg:flex-row-reverse" : "";
  };

  const CardItem = ({ item, key: index }) => {
    if (item.type === ItemTypes.text) {
      return (
        <div className={styles.item_text}>
          <div
            className={classNames(
              "flex items-center justify-between",
              rowReverseClassName(index)
            )}
          >
            <h3 className={styles.title}>{item.title}</h3>
            <Link href={item.directUrl || ""}>
              <div className={styles.icon}>
                <Icon
                  className={index % 2 !== 0 ? "lg:rotate-180" : ""}
                  icon="next"
                  color="#f4f4f4"
                />
              </div>
            </Link>
          </div>

          <p className={styles.content}>{item.content}</p>
        </div>
      );
    } else {
      return (
        <div className={styles.item_image}>
          <Image
            src={item.image || defaultAvatar}
            alt="image"
            layout="fixed"
            // width={323}
            // height={260}
            objectFit="cover"
          />
        </div>
      );
    }
  };

  return (
    <SectionLayout
      className={styles.section_32}
      childrenClassName={styles.section_32_container}
    >
      <div className={styles.top}>
        <h2 data-aos="fade-right" className={styles.title}>
          {title}
        </h2>
        <p data-aos="fade-down" className={styles.content}>
          {content}
        </p>
        <div data-aos="fade-left" className={styles.button}>
          <SeeMoreBtn label={directLabel} url={directUrl} labelColor="#fff" />
        </div>
      </div>

      {isArray(list) &&
        list.map(
          (children, index) =>
            isArray(children) && (
              <Carousel
                animation="fade-up"
                className={styles.list}
                key={index}
                carouselProps={sliderProps}
              >
                {reverseArray(children, index).map((item, i) => (
                  <CardItem key={i} item={item} />
                ))}
              </Carousel>
            )
        )}

      <div data-aos="fade-up" className={styles.button_mobile}>
        <SeeMoreBtn label={directLabel} url={directUrl} labelColor="#fff" />
      </div>
    </SectionLayout>
  );
};

export default Section32;
