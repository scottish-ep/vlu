import classNames from "classnames";
import Card from "components/Card/Card";
import SectionLayout from "components/SectionLayout/SectionLayout";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import { get, isArray } from "lodash";
import styles from "./Section22.module.scss";

interface Section22Props {
  title?: string;
  directLabel?: string;
  directUrl?: string;
  content?: string;
  background?: boolean;
  list?: {
    title?: string;
    content?: string;
    directLabel?: string;
    image?: string;
    directUrl?: string;
  }[];
}

const Section22 = (props: Section22Props) => {
  const { title, list, background, content, directLabel, directUrl } = props;
  return (
    <SectionLayout
      className={classNames(styles.section_22, {
        [styles.background]: background,
      })}
      childrenClassName={styles.section_22_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
        {directLabel && <SeeMoreBtn label={directLabel} url={directUrl} />}
      </div>
      <div className={styles.body}>
        {isArray(list) &&
          list.map((item, index) => (
            <div key={index} className={styles.item}>
              <Card
                title={item.title}
                image={item.image}
                directUrl={item.directUrl}
                variant="dark"
                dataAos="zoom-in"
                layout="end"
              />
            </div>
          ))}
      </div>
    </SectionLayout>
  );
};

export default Section22;
