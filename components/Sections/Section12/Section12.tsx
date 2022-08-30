import { isArray } from "lodash";
import Image from "next/image";
import React from "react";
import classNames from "classnames";

import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";

import styles from "./Section12.module.scss";
import FLagBtn from "components/FlagBtn/FlagBtn";

interface Section12Props {
  title?: string;
  content?: string;
  list?: string[];
  directLabel?: string;
  directUrl?: string;
  background?: "none" | "blue";
  className?: string;
}

const Section12 = (props: Section12Props) => {
  const {
    title,
    content,
    directLabel,
    directUrl,
    background = "none",
    list = [],
    className,
  } = props;

  const CustomImage = (props: { image: string; className: string }) => {
    const { image, className } = props;
    return (
      <div
        className={classNames(styles.image, className)}
        data-aos="zoom-in"
        data-aos-duration="400"
        data-aos-offset="-20"
      >
        <Image
          src={image || defaultAvatar}
          alt="image"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.see_more_btn}> Zoom</div>
        {content}
      </div>
    );
  };

  return (
    <SectionLayout
      className={classNames(styles.section_12, className, {
        [styles.blue]: background === "blue",
        [styles.no_content]: !content,
      })}
      childrenClassName={styles.section_12_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={classNames(styles.content, styles.mobile_content)}>
          {content}
        </div>
        {directLabel && <SeeMoreBtn label={directLabel} url={directUrl} />}
      </div>
      <div className={styles.list_container}>
        {content && (
          <div className={classNames(styles.content, styles.desktop_content)}>
            {content}
          </div>
        )}
        <CustomImage className={styles.img1} image={list[0]} />
        <CustomImage className={styles.img2} image={list[1]} />
        <CustomImage className={styles.img3} image={list[2]} />
        <CustomImage className={styles.img4} image={list[3]} />
        <CustomImage className={styles.img5} image={list[4]} />
        <CustomImage className={styles.img6} image={list[5]} />
      </div>
    </SectionLayout>
  );
};

export default Section12;
