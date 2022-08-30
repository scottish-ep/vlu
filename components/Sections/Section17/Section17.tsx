import React from "react";
import Image from "next/image";
import { get, isArray } from "lodash";
import classNames from "classnames";

import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultBackground from "public/images/default-background.png";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import Carousel from "components/Carousel/Carousel";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Section17.module.scss";

interface Section17Props {
  id?: string;
  title: string;
  content: string;
  image: string;
  images?: string[];
  directUrl?: string;
  directLabel?: string;
  background?: boolean;
  list: {
    title: string;
    content: string;
    directLabel?: string;
    directUrl?: string;
    directions?: { label?: string; url?: string }[];
  }[];
  isShown?: boolean;
}

const Section17: React.FC<Section17Props> = ({
  id,
  title,
  content,
  image,
  images = [],
  directUrl,
  directLabel,
  list,
  background,
  isShown,
}) => {
  const sliderProps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 4,
    dotsClassName: styles.left_dots,
  };

  const ContentSeeMoreGroup = () => {
    return (
      <React.Fragment>
        <p className={styles.left_content}>{content}</p>
        {directLabel && (
          <SeeMoreBtn
            className={styles.left_more}
            label={directLabel}
            url={directUrl}
          />
        )}
      </React.Fragment>
    );
  };

  if (!isShown) {
    return null;
  }

  const isImagesLayout = isArray(images) && images.length > 1;

  const CustomImage = (props: { image: string; className: string }) => {
    const { image, className } = props;
    return (
      <div
        className={classNames(styles.image, className)}
        data-aos="zoom-in"
        data-aos-duration="400"
        data-aos-offset="-20"
      >
        <Image
          src={image || defaultAvatar}
          alt="image"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.see_more_btn}> Zoom</div>
        {content}
      </div>
    );
  };

  return (
    <SectionLayout
      id={id}
      className={classNames(styles.section_17, {
        [styles.background]: background,
        [styles.images_layout]: isImagesLayout,
      })}
      childrenClassName={styles.section_17_container}
    >
      <div data-aos="fade-right" className={styles.left}>
        <h2 className={styles.left_title}>{title}</h2>
        {!isImagesLayout && <ContentSeeMoreGroup />}
        {isImagesLayout ? (
          <div className={styles.image_container}>
            <CustomImage className={styles.img1} image={images[0]} />
            <CustomImage className={styles.img2} image={images[1]} />
            <CustomImage className={styles.img3} image={images[2]} />
            <CustomImage className={styles.img4} image={images[3]} />
            <CustomImage className={styles.img5} image={images[4]} />
          </div>
        ) : (
          <div className={styles.left_background}>
            <Image
              src={image || defaultBackground}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
      </div>
      <div className={styles.right}>
        {isImagesLayout && <ContentSeeMoreGroup />}
        <div className={styles.slider}>
          {isArray(list) && (
            <Carousel animation="fade-left" carouselProps={sliderProps}>
              {list.map((item, index) => (
                <div
                  className={classNames(styles.slider_item, {
                    [styles.border]: index === 1,
                  })}
                  key={index}
                >
                  <h3 className={styles.slider_item_title}>{item.title}</h3>
                  <p className={styles.slider_item_content}>{item.content}</p>
                  {isArray(item.directions) &&
                    item.directions.map((direction, index) => (
                      <div
                        key={index}
                        className={styles.slider_item_direct_label}
                      >
                        {direction.label}
                      </div>
                    ))}
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Section17;
