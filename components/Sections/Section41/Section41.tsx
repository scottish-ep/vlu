import React, { useState } from "react";
import Image from "next/image";
import { get, isArray } from "lodash";
import classNames from "classnames";

import SectionLayout from "components/SectionLayout/SectionLayout";
import Carousel from "components/Carousel/Carousel";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section41.module.scss";
import Select from "components/Select/Select";

interface Section41Props {
  title: string;
  content: string;
  image?: string;
  directUrl?: string;
  directLabel?: string;
  background?: boolean;
  list: {
    label: string;
    image?: string;
    dean?: string;
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
    value: string;
  }[];
  isShown?: boolean;
}

const Section41: React.FC<Section41Props> = ({
  title,
  content,
  image,
  directUrl,
  directLabel,
  list = [],
  background,
  isShown,
}) => {
  const [selectedItem, setSelectedItem] = useState(list[0] || {});

  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 8,
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
        <p className={styles.content}>{content}</p>
      </div>
      <div className={styles.dropdown}>
        <Select options={list} onChange={(e) => setSelectedItem(e)} />
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <Carousel animation="fade-right" carouselProps={sliderProps}>
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
          </Carousel>
        </div>
        <div data-aos="fade-left" className={styles.right}>
          <div className={styles.selected_item_label}>{selectedItem.label}</div>
          <div className={styles.selected_item_body}>
            <div className={styles.image}>
              <Image
                src={selectedItem.image || defaultAvatar}
                layout="fill"
                alt=""
                objectFit="cover"
              />
            </div>
            <div className={styles.information}>
              {/* TODO: use map after BE return clean data */}
              <div style={{ display: "flex", gap: 30 }}>
                <div className={styles.information_label}>Dean: </div>
                <div className={styles.information_content}>
                  {selectedItem.dean}
                </div>
              </div>
              <div style={{ display: "flex", gap: 30 }}>
                <div className={styles.information_label}>Phone: </div>
                <div className={styles.information_content}>
                  {selectedItem.dean}
                </div>
              </div>
              <div style={{ display: "flex", gap: 30 }}>
                <div className={styles.information_label}>Address: </div>
                <div className={styles.information_content}>
                  {selectedItem.address}
                </div>
              </div>
              <div style={{ display: "flex", gap: 30 }}>
                <div className={styles.information_label}>Email: </div>
                <div className={styles.information_content}>
                  {selectedItem.email}
                </div>
              </div>
              <div style={{ display: "flex", gap: 30 }}>
                <div className={styles.information_label}>Website: </div>
                <div className={styles.information_content}>
                  {selectedItem.website}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Section41;
