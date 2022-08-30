import classNames from "classnames";
import Icon from "components/Icon/Icon";
import React from "react";
import { isArray } from "utils";

import styles from "./List.module.scss";

export interface ListProps {
  title: string;
  list: any;
  className?: string;
  titleClassName?: string;
  content?: string;
}

const List = (props: ListProps) => {
  const { title, list, className, titleClassName, content } = props;

  return (
    <div className={classNames(styles.wrapper_component, className)}>
      {title && (
        <div className={classNames(styles.title, titleClassName)}>{title}</div>
      )}
      {content && <div className={styles.content}>{content}</div>}
      <div className={styles.list}>
        {isArray(list) &&
          list.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>
                <Icon icon="checked" size={21} />
              </div>
              <div className={styles.label}>{item.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
