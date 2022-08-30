import classNames from "classnames";
import React from "react";

import styles from "./SectionLayout.module.scss";

interface SectionLayoutProps {
  id?: string;
  className?: string;
  childrenClassName?: string;
  style?: React.CSSProperties;
  childrenStyle?: React.CSSProperties;
  children?: any;
  dataAos?: string;
  dataAosDuration?: string | number;
}

const SectionLayout = (props: SectionLayoutProps) => {
  const {
    id,
    className,
    childrenStyle,
    dataAos,
    dataAosDuration,
    childrenClassName,
    style,
    children,
  } = props;
  const sectionClassNames = classNames(styles.section, className);
  const childrenClassNames = classNames(
    styles.children_container,
    childrenClassName
  );

  return (
    <div
      id={id}
      className={sectionClassNames}
      style={style}
      data-aos={dataAos}
      data-aos-duration={dataAosDuration || 400}
    >
      <div className={childrenClassNames} style={childrenStyle}>
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
