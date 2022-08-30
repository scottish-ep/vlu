import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { get, isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import Icon from "components/Icon/Icon";
import DropdownTabs from "components/DropdownTabs/DropdownTabs";

import styles from "./SectionGroup.module.scss";
import { useRouter } from "next/router";

interface SectionGroupProps {
  tabs: {
    url: string;
    label: string;
  }[];
  seeMoreLabel?: string;
  limit?: number;
}

const SectionGroup: React.FC<SectionGroupProps> = ({
  tabs,
  seeMoreLabel,
  limit,
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(get(tabs, "[0].label") || "");

  const dropdownTabs = isArray(tabs) && limit ? tabs.slice(limit) : [];
  const visibleTabs = isArray(tabs) ? tabs.slice(0, limit) : [];

  return (
    <SectionLayout
      className={styles.section_26}
      childrenClassName={styles.section_26_container}
    >
      {isArray(tabs) && (
        <React.Fragment>
          {visibleTabs.map((tab) => (
            <div
              className={classNames(styles.tab, styles.desktop, {
                [styles.tab_active]: activeTab === tab.label,
              })}
              key={tab.label}
              onClick={() => router.push(`/${tab.url}`)}
            >
              <p>{tab.label}</p>
            </div>
          ))}

          <DropdownTabs
            seeMoreLabel={seeMoreLabel}
            dropdownTabs={dropdownTabs}
            className={styles.desktop}
          />

          {tabs && (
            <DropdownTabs
              seeMoreLabel={seeMoreLabel}
              dropdownTabs={tabs}
              className={styles.mobile}
            />
          )}
        </React.Fragment>
      )}
    </SectionLayout>
  );
};

export default SectionGroup;
