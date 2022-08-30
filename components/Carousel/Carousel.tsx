import classNames from "classnames";
import Icon from "components/Icon/Icon";
import { get } from "lodash";
import Slider, { Settings } from "react-slick";

import styles from "./Carousel.module.scss";

interface CarouselProps extends Settings {
  dotsClassName?: string;
}

interface CarouselProps {
  children?: any;
  carouselProps?: CarouselProps;
  className?: string;
  show?: boolean;
  animation?: string;
}

const Carousel = (props: CarouselProps) => {
  const { className, show = true, children, carouselProps, animation } = props;

  const PrevArrow = (arrowProps) => {
    const { className, style, onClick } = arrowProps;
    return (
      <div className={styles.arrow} style={{ ...style }} onClick={onClick}>
        <Icon icon="carret-left" color="#d72134" />
      </div>
    );
  };

  const NextArrow = (arrowProps) => {
    const { className, style, onClick } = arrowProps;
    return (
      <div className={styles.arrow} style={{ ...style }} onClick={onClick}>
        <Icon icon="carret-right" color="#d72134" />
      </div>
    );
  };

  const sliderProps = {
    customPaging: () => <div className={styles.carousel_slick_dot}></div>,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    className: carouselProps?.arrows ? styles.slider : undefined,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    dotsClass: classNames(
      styles.carousel_slick_dots,
      carouselProps?.dotsClassName
    ),
    ...carouselProps,
  };

  if (!show) {
    return null;
  }

  return (
    <div
      data-aos={animation}
      className={classNames(styles.carousel, className)}
    >
      <Slider {...sliderProps}>{show && children}</Slider>
    </div>
  );
};

export default Carousel;
