import classNames from "classnames";
import Icon from "components/Icon/Icon";
import Link from "next/link";
import React from "react";
import { isArray } from "utils";
import styles from "./Breadcrumbs.module.scss";
export interface BreadcrumbsProps {
  text: string;
  path: string;
}

const Breadcrumbs = (props: { data: BreadcrumbsProps[] }) => {
  const { data } = props;

  return (
    <React.Fragment>
      <nav aria-label="breadcrumb" className={styles.container}>
        <ol className={classNames(styles.breadcrumbs)}>
          {isArray(data) &&
            data?.map((breadcrumb, index) => {
              if (index === data.length - 1) {
                return (
                  <li
                    key={index}
                    className={styles.breadcrumb_item}
                    aria-current="page"
                  >
                    {breadcrumb.text}
                  </li>
                );
              }
              return (
                <li key={index} className={styles.breadcrumb_item}>
                  <Link href={breadcrumb.path}>{breadcrumb.text}</Link>
                  <Icon
                    icon="icon-breadcrumbs"
                    size={16}
                    className="mx-[10px]"
                  />
                </li>
              );
            })}
        </ol>
      </nav>
    </React.Fragment>
  );
};

export default Breadcrumbs;
