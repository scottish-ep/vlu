import React from "react";
import Image from "next/image";
import { isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import defaultBackground from "public/images/default-background.png";

import styles from "./Section35.module.scss";

interface ItemList {
  title?: string;
  directLabel?: string;
  directUrl?: string;
  list?: {
    category?: string;
    title?: string;
    content?: string;
    image?: string;
  }[];
}

interface Section35Props {
  title?: string;
  directLabel?: string;
  directUrl?: string;
  list?: ItemList;
  subList?: ItemList;
}

const Section35 = (props: Section35Props) => {
  const { title, directLabel, directUrl, list, subList } = props;

  const List = ({
    items,
    animation,
    isDivided = false,
  }: {
    items: ItemList;
    animation: string;
    isDivided?: boolean;
  }) => (
    <React.Fragment>
      {isDivided && <div className={styles.divider}></div>}
      <div data-aos={animation} className={styles.list}>
        {(items.title || items.directLabel) && (
          <div className={styles.list_top}>
            <h3 data-aos="fade-right" className={styles.title}>
              {items.title}
            </h3>
            {items.directLabel && (
              <SeeMoreBtn
                animation="fade-left"
                label={items.directLabel}
                url={items.directUrl}
                className={styles.list_see_more}
              />
            )}
          </div>
        )}

        {isArray(items.list) && (
          <div className={styles.list_body}>
            {items.list.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.image}>
                  <Image
                    src={item.image || defaultBackground}
                    alt={item.title}
                    layout="responsive"
                    width={420}
                    height={236}
                    objectFit="cover"
                  />
                </div>
                <h4 className={styles.category}>{item.category}</h4>
                <p className={styles.title}>{item.title}</p>
              </div>
            ))}
          </div>
        )}

        {items.directLabel && (
          <SeeMoreBtn
            animation="fade-up"
            label={items.directLabel}
            url={items.directUrl}
            className={styles.list_see_more_mobile}
          />
        )}
      </div>
    </React.Fragment>
  );

  return (
    <SectionLayout
      className={styles.section_35}
      childrenClassName={styles.section_35_container}
    >
      <div className={styles.top}>
        <h2 data-aos="fade-right" className={styles.title}>
          {title}
        </h2>
        {directLabel && (
          <SeeMoreBtn
            animation="fade-left"
            label={directLabel}
            url={directUrl}
            className={styles.see_more}
          />
        )}
      </div>
      {list && <List items={list} animation="fade-down" />}
      {subList && <List items={subList} animation="fade-down" isDivided />}
      <SeeMoreBtn
        animation="fade-up"
        label={directLabel}
        url={directUrl}
        className={styles.see_more_mobile}
      />
    </SectionLayout>
  );
};

export default Section35;
