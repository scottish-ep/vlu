import Image from "next/image";

import Carousel from "components/Carousel/Carousel";
import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section23.module.scss";
import classNames from "classnames";

interface Section23Props {
  list?: any[];
  background?: boolean;
  title?: string;
  content?: string;
}

const Section23 = (props: Section23Props) => {
  const { title, list = [], content, background = true } = props;

  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SectionLayout
      className={classNames(styles.section_23)}
      childrenClassName={styles.section_23_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </SectionLayout>
  );
};

export default Section23;
