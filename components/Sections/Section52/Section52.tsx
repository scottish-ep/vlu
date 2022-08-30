import React from "react";
import { isArray } from "lodash";
import Image from "next/image";
import { format } from "date-fns";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import FLagBtn from "components/FlagBtn/FlagBtn";
import Carousel from "components/Carousel/Carousel";

import styles from "./Section52.module.scss";
import classNames from "classnames";

interface Section52Props {
  title: string;
  directLabel: string;
  directUrl?: string;
  list: {
    title: string;
    time: string;
    content: string;
    image: string;
  }[];
  subList: {
    category?: string;
    title: string;
    subTitle?: string;
    content?: string;
    image: string;
  }[];
}

const Section52: React.FC<Section52Props> = ({
  title,
  directLabel,
  directUrl,
  list,
  subList,
}) => {
  const sliderProps = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const SublistCard = ({ item }) => {
    return (
      <div
        className={classNames(styles.sublist_item, {
          [styles.full_context]: item.content && item.subTitle && item.category,
        })}
      >
        <div className={styles.sublist_item_left}>
          <Image src={item.image} layout="fill" objectFit="cover" alt="" />
        </div>
        <div className={styles.sublist_item_right}>
          <h3 className={styles.category}>{item.category}</h3>
          <p className={styles.title}>{item.title}</p>
          {item.subTitle && (
            <div className={styles.subtitle}>{item.subTitle}</div>
          )}
          {item.content && <div className={styles.content}>{item.content}</div>}
        </div>
      </div>
    );
  };

  return (
    <SectionLayout
      className={styles.section_52}
      childrenClassName={styles.section_52_container}
    >
      <div className={styles.top}>
        <h2 data-aos="fade-right" className={styles.title}>
          {title}
        </h2>
        <div data-aos="fade-left" className={styles.see_more}>
          <SeeMoreBtn label={directLabel} url={directUrl} />
        </div>
      </div>

      {isArray(list) && (
        <Carousel
          animation="fade-down"
          className={styles.list}
          carouselProps={sliderProps}
        >
          {list.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.item_top}>
                <Image
                  src={item.image}
                  layout="responsive"
                  width={420}
                  height={236}
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className={styles.item_bottom}>
                <h3 className={styles.title}>
                  {item.title}
                  <FLagBtn
                    label={format(new Date(item.time), "dd - MM - yy")}
                    size="small"
                  />
                </h3>
                <p className={styles.content}>{item.content}</p>
              </div>
            </div>
          ))}
        </Carousel>
      )}

      {isArray(subList) && (
        <React.Fragment>
          <div data-aos="fade-up" className={styles.sublist}>
            {subList.slice(0, 2).map((item, index) => (
              <SublistCard key={index} item={item} />
            ))}
          </div>
          <div className={styles.divider} />
          <div data-aos="fade-up" className={styles.sublist}>
            {subList.slice(2, 4).map((item, index) => (
              <SublistCard key={index} item={item} />
            ))}
          </div>
        </React.Fragment>
      )}

      <div data-aos="fade-up" className={styles.see_more_mobile}>
        <SeeMoreBtn label={directLabel} url={directUrl} />
      </div>
    </SectionLayout>
  );
};

export default Section52;
