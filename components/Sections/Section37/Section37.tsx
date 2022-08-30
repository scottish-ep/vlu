import React from "react";
import { isArray } from "lodash";
import Image from "next/image";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section37.module.scss";
import classNames from "classnames";

interface ItemList {
  category: string;
  title: string;
  subTitle: string;
  content: string;
  image: string;
}

interface Section37Props {
  title: string;
  directLabel: string;
  directUrl: string;
  list: ItemList[];
  background?: boolean;
}

const Section37 = (props: Section37Props) => {
  const { title, directLabel, directUrl, list, background } = props;

  const List = ({
    items,
    animation,
  }: {
    items: ItemList[];
    animation: string;
  }) => (
    <div data-aos={animation} className={styles.list}>
      {items.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.left}>
            <Image
              src={item.image || defaultAvatar}
              alt={item.title}
              layout="responsive"
              width={213}
              height={284}
              objectFit="cover"
            />
          </div>
          <div className={styles.right}>
            <h3 className={styles.category}>{item.category}</h3>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.subTitle}>{item.subTitle}</p>
            <p className={styles.content}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <SectionLayout
      className={classNames(styles.section_37, {
        [styles.background]: background,
      })}
      childrenClassName={styles.section_37_container}
    >
      <div className={styles.top}>
        <h2 data-aos="fade-right" className={styles.title}>
          {title}
        </h2>
        <SeeMoreBtn
          animation="fade-left"
          label={directLabel}
          url={directUrl}
          className={styles.see_more}
        />
      </div>

      {isArray(list) && (
        <React.Fragment>
          <List items={list.slice(0, 2)} animation="fade-down" />

          <div className={styles.divider}></div>

          <List items={list.slice(2, 4)} animation="fade-up" />
        </React.Fragment>
      )}

      <SeeMoreBtn
        animation="fade-up"
        label={directLabel}
        url={directUrl}
        className={styles.see_more_mobile}
      />
    </SectionLayout>
  );
};

export default Section37;
