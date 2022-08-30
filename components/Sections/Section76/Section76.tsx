import React, { useState } from "react";
import Image from "next/image";
import { get, isArray } from "lodash";
import classNames from "classnames";

import SectionLayout from "components/SectionLayout/SectionLayout";
import Carousel from "components/Carousel/Carousel";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section76.module.scss";
import Select from "components/Select/Select";
interface Section76Props {
  title: string;
  image?: string;
  directUrl?: string;
  directLabel?: string;
  background?: boolean;
  list: {
    image?: string;
    label: string;
    value: string;
    list: {
      title: string;
      image: string;
    }[];
  }[];
  isShown?: boolean;
}

const Section76: React.FC<Section76Props> = ({
  title,
  list,
  background,
  isShown,
}) => {
  const [selectedItem, setSelectedItem] = useState(list[0] || {});

  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 5,
  };

  if (!isShown) {
    return null;
  }

  return (
    <SectionLayout
      className={classNames(styles.section_41, {
        [styles.background]: background,
      })}
      childrenClassName={styles.section_41_container}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.dropdown}>
        <Select options={list} onChange={(e) => setSelectedItem(e)} />
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          {isArray(list) &&
            list.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className={classNames(styles.left_item, {
                  [styles.selected]: selectedItem.label === item.label,
                })}
              >
                <label className={styles.left_item_label}>{item.label}</label>
              </div>
            ))}
        </div>
        <div data-aos="fade-left" className={styles.right}>
          <Carousel animation="fade-right" carouselProps={sliderProps}>
            {isArray(selectedItem.list) &&
              selectedItem.list.map((item, index) => (
                <div className={styles.selected_items} key={index}>
                  <div className={styles.item}>
                    <p className={styles.item_title}>{item.title}</p>
                    <Image
                      className={styles.item_image}
                      src={item.image || defaultAvatar}
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className={styles.item}>
                    <p className={styles.item_title}>{item.title}</p>
                    <Image
                      className={styles.item_image}
                      src={item.image || defaultAvatar}
                      alt=""
                      layout="fill"
                    />
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Section76;
