import classNames from "classnames";
import Card from "components/Card/Card";
import Icon from "components/Icon/Icon";
import SectionLayout from "components/SectionLayout/SectionLayout";
import { isArray } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";

import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section43.module.scss";

interface Section43Props {
  id?: string;
  title?: string;
  background?: boolean;
  variant?: "red" | "blue" | "yellow" | "green";
  list?: {
    title?: string;
    image?: string;
    category?: string;
    content?: string;
    email?: string;
  }[];
  cardLayout?: "horizontal";
}

const Section43 = (props: Section43Props) => {
  const { id, title, list, background, variant = "blue", cardLayout } = props;
  const router = useRouter();

  const firstItem = isArray(list) ? list[0] : {};

  const cardContaierClassName = classNames(styles.card_container, {
    [styles.horizontal]: cardLayout === "horizontal",
  });

  return (
    <div
      id={id}
      className={classNames(styles.section_43, {
        [styles.background]: background,
        [styles.blue]: variant === "blue",
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
            src={firstItem.image || defaultAvatar}
            layout="fill"
            alt=""
            objectFit="cover"
            data-aos="fade-left"
            data-aos-delay={100}
          />
        </div>
        <div
          className={styles.first_item}
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <div className={styles.first_item_title}>{firstItem.title}</div>
          <div className={styles.first_item_category}>{firstItem.category}</div>
          <div className={styles.first_item_content}>{firstItem.content}</div>
        </div>
      </SectionLayout>
      <SectionLayout childrenClassName={styles.list}>
        <div className={cardContaierClassName}>
          {isArray(list) &&
            list.slice(1).map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.image}>
                  <Image
                    src={item.image || defaultAvatar}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.category}>{item.category}</p>
                  <p className={styles.content}>{item.content}</p>
                  {item.email && (
                    <div className={styles.row_emails}>
                      <Icon icon="email-outline" size={16} color="#D72134" />
                      <p className={styles.email}>{item.email}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default Section43;
