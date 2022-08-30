import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import Carousel from "components/Carousel/Carousel";

import styles from "./Section18.module.scss";

interface Section18Props {
  title: string;
  directUrl: string;
  directLabel?: string;
  content?: string;
  layout?: "horizontal" | "vertical";
  list: {
    title: string;
    content: string;
    role: string;
    avatar: string;
  }[];
  isShown?: boolean;
}

const Section18: React.FC<Section18Props> = ({
  title,
  directUrl,
  directLabel,
  content,
  list,
  layout,
  isShown,
}) => {
  const sliderProps = {
    slidesToShow: layout === "horizontal" ? 2 : 3,
    slidesToScroll: layout === "horizontal" ? 2 : 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const avatarContentClassNames = classNames(
    styles.center_item_avatar_content,
    "transition-all"
  );

  if (!isShown) {
    return null;
  }

  return (
    <SectionLayout
      className={classNames(styles.section_18, {
        [styles.horizontal]: layout === "horizontal",
      })}
      childrenClassName={styles.section_18_container}
    >
      <div className={styles.top}>
        <h2 className={styles.top_title}>{title}</h2>
        <div className={styles.top_content}>{content}</div>
        <SeeMoreBtn label={directLabel} labelColor="#fff" url={directUrl} />
      </div>

      {isArray(list) && (
        <Carousel
          animation="fade-up"
          className={styles.center}
          carouselProps={sliderProps}
        >
          {list.map((item, index) => (
            <div className={styles.center_item} key={index}>
              <div className={styles.center_item_avatar}>
                <Image
                  src={item.avatar || defaultAvatar}
                  alt={item.title}
                  layout="responsive"
                  width={420}
                  height={394}
                  objectFit="cover"
                />
                <div className={avatarContentClassNames}>{item.content}</div>
              </div>
              <h3 className={styles.center_item_title}>{item.title}</h3>
              <span className={styles.center_item_role}>{item.role}</span>
            </div>
          ))}
        </Carousel>
      )}
    </SectionLayout>
  );
};

export default Section18;
