import classNames from "classnames";
import Icon from "components/Icon/Icon";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { isArray } from "utils";
import styles from "./DropdownTabs.module.scss";
import { useRouter } from "next/router";

interface Dropdown {
  list: any;
  seeMoreLabel?: string;
  className?: string;
}

const Dropdown = (props) => {
  const router = useRouter();
  const { list, seeMoreLabel, className } = props;

  const [showdropdownTabs, setShowdropdownTabs] = useState(false);

  return (
    <div className={classNames(styles.hidden_tab, className)}>
      <div
        className={classNames(styles.tab, styles.see_more)}
        onClick={() => setShowdropdownTabs(!showdropdownTabs)}
      >
        {seeMoreLabel && (
          <div className={styles.title_see_more}>{seeMoreLabel}</div>
        )}
        <div className={showdropdownTabs ? styles.active : ""}>
          <Icon icon="carret-right" />
        </div>
      </div>
      <div
        className={classNames(styles.drop_down, {
          [styles.expand]: showdropdownTabs,
        })}
      >
        {isArray(list) &&
          list.map((tab) => (
            <div
              onClick={() => router.push(`/${tab.url}`)}
              className={classNames(styles.tab)}
              key={tab.label}
            >
              {tab.label}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
