import classNames from "classnames";
import Card, { CardProps } from "components/Card/Card";
import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import { isArray } from "lodash";
import { ItemTypes } from "../Section32/Section32";

import styles from "./Section3.module.scss";

interface Section3Props {
  title?: string;
  directLabel?: string;
  directUrl?: string;
  list?: CardProps[];
  subList?: CardProps[];
  layout?: "default" | "revert";
}

const Section3 = (props: Section3Props) => {
  const {
    title,
    directLabel,
    layout,
    directUrl,
    list = [],
    subList = [],
  } = props;
  const listFirstItem = list[0] || {};
  const otherListItems = list.slice(1);
  return (
    <SectionLayout
      className={classNames(styles.section_3, {
        [styles.revert]: layout === "revert",
      })}
      childrenClassName={styles.section_3_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        {directLabel && <SeeMoreBtn label={directLabel} />}
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          <Card
            image={listFirstItem.image}
            images={listFirstItem.images}
            title={listFirstItem.title}
            category={listFirstItem.category}
            dataAos="fade-right"
            dataAosDuration="400"
            className={styles.thumbnail}
          />
          <div className={styles.list_right}>
            {isArray(otherListItems) &&
              otherListItems.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  category={card.category}
                  className={styles.list_right_item}
                  size="small"
                  layout="horizontal"
                  dataAos="fade-left"
                  dataAosDuration="400"
                />
              ))}
          </div>
        </div>
        <div className={styles.sub_list}>
          <div className={styles.sub_list_container}>
            {isArray(subList) &&
              subList
                .slice(0, 3)
                .map((card, index) => (
                  <Card
                    key={index}
                    className={styles.sub_list_item}
                    image={card.image}
                    title={card.title}
                    category={card.category}
                    size="small"
                    variant="outlined"
                    date={card.date}
                    dataAos="fade-up"
                    dataAosDuration="400"
                    dataAosOffset={layout === "revert" ? -10 : undefined}
                    dataAosDelay={index * 100}
                  />
                ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Section3;
