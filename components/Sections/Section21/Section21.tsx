import { isArray } from "lodash";
import Image from "next/image";
import classNames from "classnames";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section21.module.scss";

interface Section21Props {
  title?: string;
  content?: string;
  directLabel?: string;
  directUrl?: string;
  image?: string;
  background?: boolean;
  list?: {
    image?: string;
    title?: string;
    content?: string;
    subTitle?: string;
    date?: string;
  }[];
}

const Section21 = (props: Section21Props) => {
  const { title, background, content, list, directLabel, directUrl, image } =
    props;

  return (
    <SectionLayout
      className={classNames(styles.section_21, {
        [styles.background]: background,
      })}
      childrenClassName={styles.section_21_container}
    >
      <div className={styles.background}>
        <Image
          src={require("public/images/section-21-pattern.svg")}
          layout="fill"
          alt="pattern"
          objectFit="cover"
        />
      </div>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <SeeMoreBtn label={directLabel} url={directUrl} labelColor="white" />
      </div>
      <div className={styles.body}>
        {isArray(list) &&
          list.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay={index * 100}
            >
              <div className={styles.card_image}>
                <Image src={item.image || defaultAvatar} alt="" layout="fill" />
                <div className={styles.card_date}>{item.date}</div>
              </div>
              <div className={styles.card_body}>
                <div className={styles.card_title}>{item.title}</div>
                <div className={styles.card_content}>{item.content}</div>
              </div>
            </div>
          ))}
      </div>
    </SectionLayout>
  );
};

export default Section21;
