import Image from "next/image";

import Carousel from "components/Carousel/Carousel";
import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section8.module.scss";
import classNames from "classnames";

interface Section8Props {
  list?: any[];
  background?: boolean;
  title?: string;
  variant?: "blue" | "green";
}

const Section8 = (props: Section8Props) => {
  const { title, list = [], background = true, variant = "blue" } = props;

  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SectionLayout
      className={classNames(styles.section_8, {
        [styles.background]: background,
        [styles.blue]: variant === "blue",
        [styles.green]: variant === "green",
      })}
      childrenClassName={styles.section_8_container}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.layer} />
      <Carousel carouselProps={sliderProps}>
        {list.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.image}>
              <Image
                src={item.image || defaultAvatar}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={styles.body}
              data-aos="fade-in"
              data-aos-duration="400"
            >
              <div className={styles.card_content}>{item.content}</div>
              <div className={styles.card_title}>{item.title}</div>
              <div className={styles.card_subtitle}>{item.subTitle}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </SectionLayout>
  );
};

export default Section8;
