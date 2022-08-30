import classNames from "classnames";
import Break from "components/Break/Break";
import FLagBtn from "components/FlagBtn/FlagBtn";
import Image from "next/image";
import styles from "./MagazineLayout.module.scss";

export interface MagazineProps {
  image: string;
  category?: string;
  title?: string;
  author?: string;
  date?: string;
  content?: string;
  downloadUrl?: string;
  className?: string;
}

const MagazineLayout = (props: MagazineProps) => {
  const {
    image,
    category,
    className,
    title,
    author,
    date,
    content,
    downloadUrl,
  } = props;

  const magazineLayoutStyle = classNames(styles.container, className);

  return (
    <div className={magazineLayoutStyle} data-aos="zoom-in">
      <div className={styles.image}>
        <Image src={image} layout="responsive" />
      </div>
      <div className={styles.content}>
        <div className={styles.category}>{category}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.row}>
          <p className={styles.heading}>BY</p>
          <p className={styles.text}>{author}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>DATE</p>
          <p className={styles.text}>{date}</p>
        </div>
        <Break className={styles.break} />
        <div className={styles.content_details}>{content}</div>
        <FLagBtn className={styles.button_download} url={downloadUrl}>
          Download Magazine
        </FLagBtn>
      </div>
    </div>
  );
};

export default MagazineLayout;
