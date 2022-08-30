import { get, isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import Card, { CardProps } from "components/Card/Card";

import styles from "./Section5.module.scss";
import classNames from "classnames";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";

interface Section5Props {
  title?: string;
  list?: CardProps[];
  directUrl?: string;
  directLabel?: string;
  background?: boolean;
  content?: string;
  className?: string;
}

const Section5 = (props: Section5Props) => {
  const {
    title,
    list,
    directLabel,
    content,
    directUrl,
    background,
    className,
  } = props;
  return (
    <SectionLayout
      className={classNames(styles.section_5, className, {
        [styles.background]: background,
      })}
      childrenClassName={styles.section_5_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        {directLabel && (
          <SeeMoreBtn
            label={directLabel}
            url={directUrl}
            className={styles.see_more_btn}
          />
        )}
        {content && <div className={styles.content}>{content}</div>}
      </div>
      <div className={styles.card_container}>
        {isArray(list) &&
          list.map((item) => (
            <Card
              key={item.title}
              image={item.image}
              title={item.title}
              content={item.content}
              date={item.date}
              directLabel={item.directLabel}
              directUrl={item.directUrl}
              directions={item.directions}
              className={classNames(styles.card, {
                [styles.length_2]: get(list, "length") === 2,
              })}
            />
          ))}
      </div>
    </SectionLayout>
  );
};

export default Section5;
