import classNames from "classnames";
import Carousel from "components/Carousel/Carousel";
import FLagBtn from "components/FlagBtn/FlagBtn";
import Icon from "components/Icon/Icon";
import { divide, isArray } from "lodash";
import Image from "next/image";

import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Card.module.scss";

export interface CardProps {
  directions?: {
    label?: string;
    url?: string;
  }[];
  image?: string;
  images?: string[];
  title?: string;
  from?: string;
  content?: string;
  directLabel?: string;
  directUrl?: string;
  className?: string;
  category?: string;
  variant?: "default" | "outlined" | "dark";
  size?: "default" | "small" | "large";
  layout?: "horizontal" | "verticle" | "center" | "end";
  dataAos?: string;
  dataAosDuration?: string;
  dataAosDelay?: string | number;
  dataAosOffset?: string | number;
  date?: string;
  onClick?: () => void;
}

const Card = (props: CardProps) => {
  const {
    size,
    image,
    images,
    category,
    directions,
    from,
    title,
    content,
    directLabel,
    directUrl,
    variant,
    dataAosDuration,
    dataAos,
    layout,
    className,
    dataAosDelay,
    dataAosOffset,
    date,
    onClick,
  } = props;

  const PrevArrow = (arrowProps) => {
    const { className, style, onClick } = arrowProps;
    return (
      <div className={styles.arrow_prev} style={{ ...style }} onClick={onClick}>
        <Icon icon="carret-left" color="white" />
      </div>
    );
  };

  const NextArrow = (arrowProps) => {
    const { className, style, onClick } = arrowProps;
    return (
      <div className={styles.arrow_next} style={{ ...style }} onClick={onClick}>
        <Icon icon="carret-right" color="white" />
      </div>
    );
  };

  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: styles.image_slider,
  };

  return (
    <div
      data-aos={dataAos}
      data-aos-duration={dataAosDuration || "1000"}
      data-aos-delay={dataAosDelay || 0}
      data-aos-offset={dataAosOffset}
      className={classNames(styles.card, className, {
        [styles.small]: size === "small",
        [styles.horizontal]: layout === "horizontal",
        [styles.center]: layout === "center",
        [styles.end]: layout === "end",
        [styles.outlined]: variant === "outlined",
        [styles.dark]: variant === "dark",
      })}
      onClick={onClick}
    >
      {isArray(images) && images.length > 1 ? (
        <Carousel
          animation="fade-left"
          className={styles.right}
          carouselProps={sliderProps}
        >
          {images.map((item, index) => (
            <div className={styles.card_image} key={index}>
              <Image
                src={image || defaultAvatar}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className={styles.card_image}>
          <Image
            src={image || defaultAvatar}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div className={styles.body}>
        {(date || category) && (
          <div className={styles.header}>
            {category && <div className={styles.card_category}>{category}</div>}
            {date && (
              <FLagBtn label={date} className={styles.card_date} size="small" />
            )}
          </div>
        )}
        {title && <div className={styles.card_title}>{title}</div>}
        {from && <div className={styles.card_from}>{from}</div>}
        {content && <div className={styles.card_content}>{content}</div>}
        {isArray(directions) &&
          directions.length > 1 &&
          directions.map((item, index) => (
            <div key={index} className={styles.card_direct_label}>
              {item.label}
            </div>
          ))}
        {directLabel && variant !== "dark" && (
          <div className={styles.card_direct_label}>{directLabel}</div>
        )}
        {directLabel && variant === "dark" && (
          <FLagBtn
            label={directLabel}
            url={directUrl}
            className={styles.card_direct_label}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
