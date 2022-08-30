import classNames from "classnames";
import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import Image from "next/image";

import styles from "./Section20.module.scss";

interface Section20Props {
  title?: string;
  content?: string;
  directLabel?: string;
  directUrl?: string;
  image?: string;
  background?: boolean;
}

const Section20 = (props: Section20Props) => {
  const { title, background, content, directLabel, directUrl, image } = props;

  const Banner = ({ className }) => (
    <div
      className={classNames(styles.image, className)}
      style={{ backgroundImage: `url(${image})` }}
      data-aos="fade-left"
      data-aos-duration="400"
    />
  );

  return (
    <SectionLayout
      className={classNames(styles.section_20, {
        [styles.background]: background,
      })}
      childrenClassName={styles.section_20_container}
    >
      <div className={styles.left}>
        <div className={styles.title}>{title}</div>
        <Banner className={styles.mobile_image} />
        <div className={styles.content}>{content}</div>
        {directLabel && <SeeMoreBtn label={directLabel} url={directUrl} />}
      </div>
      <Banner className={styles.desktop_image} />
    </SectionLayout>
  );
};

export default Section20;
