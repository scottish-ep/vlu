import classNames from "classnames";
import { MouseEventHandler, ReactElement, useEffect } from "react";
import styles from "./Modal.module.scss";

export interface ModalProps {
  children?: ReactElement | ReactElement[];
  visible?: boolean;
  transparent?: boolean;
  title?: any;
  titleClassName?: string;
  headerClassName?: string;
  subTitle?: string;
  closable?: boolean;
  width?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  mobilePosition?: "center" | "bottom" | "top" | "left" | "right";
  backdrop?: boolean;
  mobileFullHeight?: boolean;
  containerClassName?: string;
  contentClassName?: string;
  className?: string;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const {
    children,
    visible,
    title,
    transparent,
    width,
    height,
    className,
    titleClassName,
    headerClassName,
    maxHeight,
    maxWidth,
    closable = true,
    mobilePosition = "bottom",
    mobileFullHeight,
    containerClassName,
    contentClassName,
    backdrop = true,
    subTitle,
    onClose,
  } = props;

  const modalClassName = classNames(
    styles.modal,
    className,
    styles[mobilePosition],
    {
      [styles.show]: visible,
      [styles.no_backdrop]: backdrop === false,
      [styles.transparent]: transparent,
      [styles.full_height]: mobileFullHeight,
    }
  );

  const modalContainerClassName = classNames(
    styles.container,
    containerClassName
  );

  const modalContentClassName = classNames(styles.content, contentClassName);

  const handleOnBlurModal: MouseEventHandler<HTMLDivElement> = (e) => {
    e.target === e.currentTarget && onClose?.();
  };

  const containerHeight = () => {
    if (height) {
      return visible ? height : 0;
    } else {
      return undefined;
    }
  };

  return (
    <div className={modalClassName} onClick={handleOnBlurModal}>
      <div
        style={{
          width,
          maxHeight,
          maxWidth,
          height: containerHeight(),
        }}
        className={modalContainerClassName}
      >
        {title && (
          <div className={classNames(styles.header, headerClassName)}>
            <div>
              <div className={classNames(styles.title, titleClassName)}>
                {title}
              </div>
              {subTitle && <div className={styles.sub_title}>{subTitle}</div>}
            </div>
            {closable && (
              <div className={styles.close} onClick={onClose}>
                &#x2715;
              </div>
            )}
          </div>
        )}
        <div className={modalContentClassName}>{children}</div>
      </div>
    </div>
  );
};

export const ModalHeader = (props: {
  children: ReactElement | ReactElement[] | string;
  className?: string;
  alignTitle?: "center" | "left";
}) => {
  const { children, alignTitle = "left", className } = props;
  const headerClassName = classNames(styles.header, className, {
    [styles.center]: alignTitle === "center",
  });
  return <div className={headerClassName}>{children}</div>;
};

export const ModalFooter = (props: {
  children: ReactElement | ReactElement[];
  className?: string;
}) => {
  const { children, className } = props;
  return <div className={`${styles.footer} ${className}`}>{children}</div>;
};

export default Modal;
