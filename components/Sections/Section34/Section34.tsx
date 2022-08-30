import classNames from "classnames";
import Card from "components/Card/Card";
import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import { get, isArray } from "lodash";
import styles from "./Section34.module.scss";

interface Section34Props {
  title?: string;
  directLabel?: string;
  directUrl?: string;
  content?: string;
  layout?: "default" | "horizontal";
  background?: boolean;
  cardLayout?: "horizontal" | "verticle" | "center";
  list?: {
    title?: string;
    content?: string;
    directLabel?: string;
    image?: string;
    directUrl?: string;
  }[];
}

const Section34 = (props: Section34Props) => {
  const {
    layout,
    title,
    cardLayout,
    list,
    background,
    content,
    directLabel,
    directUrl,
  } = props;
  const cardList =
    isArray(list) && layout === "horizontal" ? list.slice(0, 2) : list;
  return (
    <SectionLayout
      className={classNames(styles.section_34, {
        [styles.horizontal]: layout === "horizontal",
        [styles.background]: background,
      })}
      childrenClassName={styles.section_34_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
        {directLabel && <SeeMoreBtn label={directLabel} url={directUrl} />}
      </div>
      <div className={styles.body}>
        {isArray(cardList) &&
          cardList.map((item, index) => (
            <div key={index} className={styles.item}>
              <Card
                title={item.title}
                image={item.image}
                content={item.content}
                directLabel={item.directLabel}
                directUrl={item.directUrl}
                variant="dark"
                layout={cardLayout}
                dataAos="zoom-in"
              />
            </div>
          ))}
      </div>
    </SectionLayout>
  );
};

export default Section34;
