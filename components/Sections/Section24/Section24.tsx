import FLagBtn from "components/FlagBtn/FlagBtn";
import SectionLayout from "components/SectionLayout/SectionLayout";

import styles from "./Section24.module.scss";

interface Section24Props {
  title?: string;
  content?: string;
  directLabel?: string;
  directUrl?: string;
}

const Section24 = (props: Section24Props) => {
  const { title, content, directLabel, directUrl } = props;
  return (
    <SectionLayout
      className={styles.section_24}
      childrenClassName={styles.section_24_container}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>
        <div className={styles.content} data-aos="fade-left">
          {content}
        </div>
        <FLagBtn
          label={directLabel}
          url={directUrl}
          className={styles.see_more_btn}
          data-aos="fade-left"
          data-aos-delay="100"
        />
      </div>
    </SectionLayout>
  );
};

export default Section24;
