import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import { isArray } from "lodash";
import Image from "next/image";
import defaultAvatar from "public/images/default-avatar.png";
import { ReactNode } from "react";

import styles from "./Section10.module.scss";

interface Section10Props {
  image?: string;
  title?: ReactNode;
  directLabel?: string;
  directUrl?: string;
  list?: { title?: string; content?: string }[];
}

const Section10 = (props: Section10Props) => {
  const { title, directLabel, image, list = [], directUrl } = props;

  return (
    <SectionLayout
      className={styles.section_10}
      childrenClassName={styles.section_10_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <SeeMoreBtn label={directLabel} className={styles.desktop_btn} />
      </div>
      <div className={styles.body}>
        <div
          className={styles.image}
          data-aos="fade-right"
          data-aos-duration="400"
        >
          <Image
            src={image || defaultAvatar}
            alt="banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.list}>
          {isArray(list) &&
            list.map((card, index) => (
              <div
                className={styles.card}
                key={index}
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-delay={index * 100}
              >
                <div className={styles.title}>{card.title}</div>
                <div className={styles.content}>{card.content}</div>
              </div>
            ))}
        </div>
      </div>
      <SeeMoreBtn label={directLabel} className={styles.mobile_btn} />
    </SectionLayout>
  );
};

export default Section10;
