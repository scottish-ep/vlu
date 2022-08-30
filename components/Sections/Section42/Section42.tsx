import classNames from "classnames";
import Card from "components/Card/Card";
import SectionLayout from "components/SectionLayout/SectionLayout";
import { isArray } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";

import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section42.module.scss";

interface Section42Props {
  title?: string;
  subTitle?: string;
  image?: string;
  background?: boolean;
  variant?: "red" | "blue" | "yellow" | "green";
  content?: string;
  list?: { title?: string; content?: string }[];
  subList?: { title?: string; image?: string; directUrl?: string }[];
}

const Section42 = (props: Section42Props) => {
  const {
    title,
    subTitle,
    list,
    subList,
    image,
    background,
    variant = "red",
  } = props;
  const router = useRouter();

  return (
    <div
      className={classNames(styles.section_42, {
        [styles.background]: background,
        [styles.red]: variant === "red",
        [styles.blue]: variant === "blue",
        [styles.yellow]: variant === "yellow",
        [styles.green]: variant === "green",
      })}
    >
      <SectionLayout childrenClassName={styles.header}>
        <div className={styles.title}>{title}</div>
      </SectionLayout>
      <SectionLayout
        className={styles.banner}
        childrenClassName={styles.banner_container}
      >
        <div className={styles.image}>
          <Image
            src={image || defaultAvatar}
            layout="fill"
            alt=""
            objectFit="cover"
            data-aos="fade-left"
            data-aos-delay={100}
          />
        </div>
        <div className={styles.list} data-aos="fade-left" data-aos-delay={100}>
          {isArray(list) &&
            list.map((item, index) => (
              <div key={index} className={styles.list_item}>
                <div className={styles.list_item_title}>{item.title}</div>
                <div className={styles.list_item_content}>{item.content}</div>
              </div>
            ))}
        </div>
      </SectionLayout>
      <SectionLayout childrenClassName={styles.sublist}>
        <div className={styles.sub_title}>{subTitle}</div>
        <div className={styles.scroll_box}>
          <div className={styles.card_container}>
            {isArray(subList) &&
              subList.map((item, index) => (
                <Card
                  key={index}
                  className={styles.card}
                  image={item.image}
                  title={item.title}
                  variant="dark"
                  onClick={() => item.directUrl && router.push(item.directUrl)}
                />
              ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Section42;
