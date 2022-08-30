import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

import Icon from "components/Icon/Icon";
import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section1.module.scss";
import { useState } from "react";

interface Section1Props {
  image?: string;
  title?: string;
  content?: string;
  directLabel?: string;
  directUrl?: string;
  isShown?: boolean;
}

const Section1 = (props: Section1Props) => {
  const { directLabel, isShown, directUrl, title, image, content } = props;

  const router = useRouter();

  if (!isShown) {
    return null;
  }

  return (
    <SectionLayout
      className={styles.section_1}
      childrenClassName={styles.section_1_container}
    >
      <div className={styles.banner}>
        <Image
          src={image || defaultAvatar}
          alt="banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.content_container}>
        <div className={styles.title} data-aos="fade-left">
          {title}
        </div>
        <div className={styles.content}>{content}</div>
        <SeeMoreBtn
          label={directLabel}
          url={directUrl}
          className={styles.see_more_btn}
        />
      </div>
    </SectionLayout>
  );
};

export default Section1;
