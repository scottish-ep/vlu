import React from "react";
import Image from "next/image";
import { get, isArray } from "lodash";
import classNames from "classnames";

import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultBackground from "public/images/default-background.png";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import Carousel from "components/Carousel/Carousel";

import styles from "./Section38.module.scss";

interface Section38Props {
  title: string;
  content: string;
  image?: string;
  directUrl?: string;
  directLabel?: string;
  background?: boolean;
  list: {
    date?: string;
    title?: string;
    content: string;
    directLabel?: string;
    directUrl?: string;
    directions?: { label?: string; url?: string }[];
  }[];
  isShown?: boolean;
}

const Section38: React.FC<Section38Props> = ({
  title,
  content,
  image,
  directUrl,
  directLabel,
  list,
  background,
  isShown,
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
      className={styles.section_38}
      childrenClassName={styles.section_38_container}
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

      {isArray(list) && (
        <Carousel
          animation="fade-left"
          className={styles.right}
          carouselProps={sliderProps}
        >
          {list.map((item, index) => (
            <div
              className={classNames(styles.right_item)}
              key={index}
              data-aos="fade-left"
            >
              <div className={styles.right_item_date}>{item.date}</div>
              <div>
                {item.title && (
                  <h3 className={styles.right_item_title}>{item.title}</h3>
                )}
                <p className={styles.right_item_content}>{item.content}</p>
                {item.directLabel && <SeeMoreBtn label={item.directLabel} />}
                {isArray(item.directions) &&
                  item.directions.map((direction, index) => (
                    <SeeMoreBtn label={direction.label} key={index} />
                  ))}
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </SectionLayout>
  );
};

export default Section38;
