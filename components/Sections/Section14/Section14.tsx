import React from "react";
import Image from "next/image";

import Icon from "components/Icon/Icon";
import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section14.module.scss";
import classNames from "classnames";

interface Section14Props {
  content: string;
  title: string;
  subTitle: string;
  avatar: string;
  variant?: "primary" | "secondary";
}

const Section14: React.FC<Section14Props> = ({
  content,
  title,
  subTitle,
  avatar,
  variant = "primary",
}) => {
  return (
    <SectionLayout
      className={classNames(styles.section_14, {
        [styles.secondary]: variant === "secondary",
      })}
      childrenClassName={styles.section_14_container}
    >
      <div data-aos="fade-right" className={styles.left}>
        <div className={styles.left_content}>
          <p className={styles.left_content_content}>{content}</p>
          <div className="flex gap-x-2 items-center">
            <span className={styles.left_content_name}>{title}</span>
            <span className={styles.left_content_role}>{subTitle}</span>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className={styles.right}>
        <Image
          src={avatar || defaultAvatar}
          layout="fixed"
          alt={title}
          width={385}
          height={481}
        />
      </div>
    </SectionLayout>
  );
};

export default Section14;
