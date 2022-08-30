import Image from "next/image";
import { get, isArray } from "lodash";
import { format } from "date-fns";

import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import FLagBtn from "components/FlagBtn/FlagBtn";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section36.module.scss";

interface Section36Props {
  title: string;
  directLabel: string;
  directUrl: string;
  list: {
    title: string;
    image: string;
    date: string;
    time: string;
  }[];
}

const Section36 = (props: Section36Props) => {
  const { title, directLabel, directUrl, list } = props;

  const firstItem = get(list, "[0]") || {};

  return (
    <SectionLayout
      className={styles.section_36}
      childrenClassName={styles.section_36_container}
    >
      <div className={styles.layer} />

      <div className={styles.top}>
        <h2 data-aos="fade-right" className={styles.title}>
          {title}
        </h2>
        <SeeMoreBtn
          animation="fade-left"
          label={directLabel}
          url={directUrl}
          className={styles.see_more}
        />
      </div>

      {isArray(list) && (
        <div className={styles.bottom}>
          <div data-aos="fade-right" className={styles.left}>
            <div className={styles.image}>
              <Image
                src={firstItem.image || defaultAvatar}
                alt={firstItem.title}
                layout="fill"
                width={623}
                height={350}
                objectFit="cover"
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{firstItem.title}</h3>
              <span className={styles.time}>{firstItem.time}</span>
              <FLagBtn className={styles.date}>
                {format(new Date(firstItem.date), "dd - MM - yy")}
              </FLagBtn>
            </div>
          </div>

          <div data-aos="fade-left" className={styles.right}>
            {list.slice(1).map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.item_left}>
                  <div className={styles.image}>
                    <Image
                      src={item.image || defaultAvatar}
                      alt={item.title}
                      layout="fill"
                      // width={172}
                      // height={97}
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.time}>
                    {format(new Date(item.date), "dd - MM - yy")}
                  </div>
                </div>
                <div className={styles.item_right}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.time}>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <SeeMoreBtn
        animation="fade-up"
        label={directLabel}
        url={directUrl}
        className={styles.see_more_mobile}
      />
    </SectionLayout>
  );
};

export default Section36;
