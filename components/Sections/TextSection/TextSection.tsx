import SectionLayout from "components/SectionLayout/SectionLayout";
import { isArray } from "lodash";
import styles from "./TextSection.module.scss";

interface TextSectionProps {
  title?: string;
  list?: { title?: string; content?: string }[];
}

const TextSection = (props: TextSectionProps) => {
  const { title, list } = props;
  return (
    <SectionLayout
      className={styles.text_section}
      childrenClassName={styles.text_section_container}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        {isArray(list) &&
          list.map((item, index) => (
            <div className={styles.item} key={index}>
              {item.content}
            </div>
          ))}
      </div>
    </SectionLayout>
  );
};

export default TextSection;
