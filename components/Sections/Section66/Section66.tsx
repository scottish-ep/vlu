import SectionLayout from "components/SectionLayout/SectionLayout";
import { isArray } from "lodash";
import Image from "next/image";
import styles from "./Section66.module.scss";
import classNames from "classnames";
interface Section66Props {
  title?: string;
  list?: { title?: string; content?: string }[];
  image?: any;
}

const Section66 = (props: Section66Props) => {
  const { title, list, image } = props;

  return (
    <SectionLayout
      className={classNames(styles.section66, !image && styles.none_bg)}
      childrenClassName={styles.section66_container}
    >
      <div
        data-aos="fade-left"
        className={classNames(
          styles.desktop_image,
          styles.image,
          !image && styles.none_bg
        )}
        style={image && { backgroundImage: `url(${image})` }}
      />
      <div className={styles.text} data-aos="fade-right">
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>
          {isArray(list) &&
            list.map((item, index) => (
              <div className={styles.item} key={index}>
                {item.content}
              </div>
            ))}
        </div>
      </div>
      <div
        data-aos="fade-left"
        className={classNames(styles.image, styles.mobile_image)}
        style={image && { backgroundImage: `url(${image})` }}
      />
    </SectionLayout>
  );
};

export default Section66;
