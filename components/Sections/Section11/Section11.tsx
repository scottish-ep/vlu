import Card, { CardProps } from "components/Card/Card";
import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import Image from "next/image";

import styles from "./Section11.module.scss";

interface Section11Props {
  title?: string;
  directLabel?: string;
  directUrl?: string;
  list?: CardProps[];
}

const section11Images = [
  require("public/images/section11-1.svg"),
  require("public/images/section11-2.svg"),
  require("public/images/section11-3.svg"),
  require("public/images/section11-4.svg"),
  require("public/images/section11-5.svg"),
  require("public/images/section11-6.svg"),
];

const Section11 = (props: Section11Props) => {
  const { title, list = [], directUrl, directLabel } = props;
  return (
    <SectionLayout
      className={styles.section_11}
      childrenClassName={styles.section_11_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <SeeMoreBtn
          label={directLabel}
          url={directUrl}
          className={styles.desktop_btn}
        />
      </div>
      <div className={styles.card_container}>
        {list.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay={index * 50}
          >
            <div className={styles.card_icon}>
              <Image
                alt="icon"
                src={section11Images[index]}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.body}>
              <div className={styles.card_title}>{card.title}</div>
              <div className={styles.card_content}>{card.content}</div>
              <div className={styles.card_direct_label}>{card.directLabel}</div>
            </div>
          </div>
        ))}
      </div>
      <SeeMoreBtn
        label={directLabel}
        url={directUrl}
        className={styles.mobile_btn}
      />
    </SectionLayout>
  );
};

export default Section11;
