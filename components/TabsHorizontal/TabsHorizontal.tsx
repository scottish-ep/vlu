import classNames from "classnames";
import { get, isEqual } from "lodash";
import React, { ReactNode, useState } from "react";
import { useEffect } from "react";
import { isArray } from "utils";
import styles from "./TabsHorizontal.module.scss";

export interface ITab {
  className?: string;
  label: string;
  value: string | number;
  content?: ReactNode | ReactNode[];
  currentTab?: string | number;
  customSelected?: string;
  onSelectedTab?: (e: string | number) => void;
}

const TabNav = (props: ITab) => {
  const {
    className,
    label,
    value,
    currentTab,
    customSelected = "",
    onSelectedTab = () => "",
  } = props;

  const selectedClassNames = classNames(styles.tab_nav, className, {
    [styles.selected]: currentTab === value,
  });

  const formatLabel = (value: string) => {
    return value.replace("-", " ");
  };

  return (
    <h3 className={selectedClassNames} onClick={() => onSelectedTab(value)}>
      <span className="capitalize">{formatLabel(label)}</span>
    </h3>
  );
};

interface TabsHorizontalProps {
  className?: string;
  type?:
    | "secondary-no-outline"
    | "secondary-outline"
    | "primary-no-outline"
    | "primary-outline";
  tabList?: ITab[];
  selectedTab?: string | number;
  onChange?: (e) => void;
}

const TabsHorizontal = (props: TabsHorizontalProps) => {
  const {
    className,
    selectedTab,
    type = "secondary-no-outline",
    tabList = [],
    onChange = () => "",
  } = props;

  const [currentTab, setCurrentTab] = useState<string | number | undefined>(
    selectedTab || get(tabList, "[0]?.value")
  );

  const getCurrentTabIndex = tabList.findIndex(
    (item) => item.value === currentTab
  );

  const typeClassName = classNames({
    [styles.secondary_outline]: type === "secondary-outline",
    [styles.secondary_no_outline]: type === "secondary-no-outline",
    [styles.primary_outline]: type === "primary-outline",
    [styles.primary_no_outline]: type === "primary-no-outline",
  });

  const handleSelectedTab = (e) => {
    setCurrentTab(e);
    onChange(e);
  };

  return (
    <React.Fragment>
      <div className={classNames(className, styles.tab_container)}>
        {isArray(tabList) &&
          tabList.map((tab: ITab) => {
            return (
              <TabNav
                className={typeClassName}
                key={tab.value}
                label={tab.label}
                value={tab.value}
                currentTab={currentTab}
                onSelectedTab={handleSelectedTab}
              />
            );
          })}
      </div>

      <div className={styles.panel_container}>
        {tabList[getCurrentTabIndex]?.content}
      </div>
    </React.Fragment>
  );
};

export default TabsHorizontal;
