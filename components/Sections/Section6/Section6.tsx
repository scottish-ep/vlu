import classNames from "classnames";
import Image from "next/image";

import FLagBtn from "components/FlagBtn/FlagBtn";
import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section6.module.scss";

interface Section6Props {
  title?: string;
  content?: string;
  directLabel?: string;
  directUrl?: string;
  image?: string;
  background?: "yellow" | "green" | "red";
}

const Section6 = (props: Section6Props) => {
  const { title, content, directLabel, directUrl, image, background } = props;

  const Banner = (props) => {
    const { className } = props;
    return (
      <div
        className={classNames(styles.image, className)}
        data-aos="fade-left"
        data-aos-duration="500"
      >
        {image && <Image src={image} alt="" layout="fill" objectFit="cover" />}
        <div className={styles.deco_1_block} />
        <div className={styles.deco_2_block} />
      </div>
    );
  };

  return (
    <SectionLayout
      className={classNames(styles.section_6, {
        [styles.green]: background === "green",
        [styles.red]: background === "red",
      })}
      childrenClassName={styles.section_6_container}
    >
      <Banner className={styles.mobile_image} />
      <div className={styles.left}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
        <FLagBtn
          label={directLabel}
          url={directUrl}
          className={styles.flag_btn}
          variant={
            (background === "red" || background === "green") && "tertiary"
          }
        />
      </div>
      <Banner className={styles.desktop_image} />
    </SectionLayout>
  );
};

export default Section6;
