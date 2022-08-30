import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import { isArray } from "lodash";
import Image from "next/image";

import styles from "./Section4.module.scss";

interface Section4Props {
  title?: string;
  content?: string;
  directLabel?: string;
  directUrl?: string;
  list?: {
    title?: string;
    icon?: string;
    list?: { title?: string; url?: string }[];
  }[];
}

const Section4 = (props: Section4Props) => {
  const { title, content, directLabel, directUrl, list = [] } = props;

  return (
    <SectionLayout
      className={styles.section_4}
      childrenClassName={styles.section_4_container}
    >
      <div className={styles.background}>
        <Image
          src={"/images/section_14_bg.png"}
          alt="background"
          layout="fill"
        />
      </div>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
        {directLabel && <SeeMoreBtn label={directLabel} url={directUrl} />}
      </div>
      <div className={styles.body}>
        {isArray(list) &&
          list.map((group, index) => {
            return (
              <div
                key={index}
                className={styles.group}
                data-aos="fade-right"
                data-aos-delay={index * 50}
                data-aos-duration="300"
              >
                <div className={styles.group_title}>
                  {group.icon && (
                    <Image
                      src={group.icon}
                      layout="fixed"
                      height={40}
                      width={40}
                      alt=""
                    />
                  )}
                  {group.title}
                </div>
                <div className={styles.group_container}>
                  {group.list?.map((item, index) => {
                    return (
                      <div key={index} className={styles.group_item}>
                        {item.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </SectionLayout>
  );
};

export default Section4;
