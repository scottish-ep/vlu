import React from "react";
import { get, isArray } from "lodash";
import classNames from "classnames";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import Carousel from "components/Carousel/Carousel";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section40.module.scss";
import Image from "next/image";
import Select from "components/Select/Select";

type IList = { title?: string; content?: string };

interface Section40Props {
  id?: string;
  title: string;
  content: string;
  image?: string;
  isShown?: boolean;
  directLabel?: string;
  directUrl?: string;
  background?: boolean;
  list: IList;
  subList: IList;
}

const Section40: React.FC<Section40Props> = ({
  id,
  title,
  content,
  image,
  isShown = true,
  directLabel,
  directUrl,
  background,
  list,
  subList,
}) => {
  if (!isShown) {
    return null;
  }

  const SelectImageGroup = ({ title }: { title?: string }) => {
    return (
      <div className={styles.item}>
        <div className={styles.title}>{title}</div>
        <div className={styles.select_container}>
          <Select placeholder="Select Faculty" />
          <Select placeholder="Select Major" />
        </div>
        <div className={styles.image}>
          <Image
            src={require("public/images/section-39_default.png")}
            alt=""
            layout="fill"
          />
        </div>
      </div>
    );
  };

  return (
    <SectionLayout
      id={id}
      className={classNames(styles.section_40, {
        [styles.background]: background,
      })}
      childrenClassName={styles.section_40_container}
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
      <div className={styles.right}>
        <SelectImageGroup title={list.title} />
        <SelectImageGroup title={list.title} />
      </div>
    </SectionLayout>
  );
};

export default Section40;
