import { isArray } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section2.module.scss";

interface Section2Props {
  title?: string;
  content?: string;
  thumbnails?: { image?: string; title?: string }[];
  list?: { title?: string; content?: string }[];
  directLabel?: string;
  directUrl?: string;
}

const Section2 = (props: Section2Props) => {
  const { directLabel, directUrl, title, thumbnails, list, content } = props;
  const router = useRouter();

  const SeeMoreButton = ({ className }) => (
    <SeeMoreBtn
      className={className}
      label={directLabel}
      labelColor="white"
      buttonColor="#FEBD25"
    />
  );

  return (
    <div className={styles.section_2}>
      <SectionLayout
        className={styles.section_2_top}
        childrenClassName={styles.section_2_top_container}
      >
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{content}</div>
          <SeeMoreButton className={styles.see_more_mobile} />
        </div>
        <div className={styles.body}>
          <div className={styles.images_container}>
            {isArray(thumbnails) &&
              thumbnails.map((item, index) => {
                return (
                  <div key={item.title} className={styles.image_item}>
                    <Image
                      src={item.image || defaultAvatar}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className={styles.title}>{item.title}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        className={styles.section_2_bottom}
        childrenClassName={styles.section_2_bottom_container}
      >
        <SeeMoreButton className={styles.see_more_desktop} />
        <div className={styles.list_container}>
          {isArray(list) &&
            list.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={styles.item}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="500"
                >
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.content}>{item.content}</div>
                </div>
              );
            })}
        </div>
      </SectionLayout>
    </div>
  );
};

export default Section2;
