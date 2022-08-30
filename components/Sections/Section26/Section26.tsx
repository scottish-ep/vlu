import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { get, isArray } from "lodash";

import SectionLayout from "components/SectionLayout/SectionLayout";
import Icon from "components/Icon/Icon";

import styles from "./Section26.module.scss";
import { useRouter } from "next/router";

interface Section26Props {
  tabs: {
    text: string;
    key?: string;
    slug?: string;
  }[];
}

const Section26: React.FC<Section26Props> = ({ tabs }) => {
  const router = useRouter();
  const { asPath } = router;

  const [activeTab, setActiveTab] = useState(asPath || "");
  const [showSelectTab, setShowSelectTab] = useState(false);

  const activeTabText = tabs.find((tab) => tab.slug === activeTab)?.text;

  const unSelectedTabs = isArray(tabs)
    ? tabs.filter((tab) => tab.slug !== activeTab)
    : [];

  const textArrowClassNames = classNames(styles.text_arrow, {
    [styles.active]: showSelectTab,
  });

  return (
    <SectionLayout
      className={styles.section_26}
      childrenClassName={styles.section_26_container}
    >
      {isArray(tabs) && (
        <React.Fragment>
          {tabs.map((tab) => (
            <div
              key={tab.slug}
              onClick={() => tab.slug && setActiveTab(tab.slug)}
              className={classNames(styles.tab, {
                [styles.tab_active]: activeTab === tab.slug,
              })}
            >
              <Link href={tab.slug || ""}>{tab.text}</Link>
            </div>
          ))}

          <div
            className={styles.text}
            onClick={() => setShowSelectTab(!showSelectTab)}
          >
            <div className={styles.bold}> {activeTabText}</div>

            {showSelectTab && (
              <SectionLayout className={styles.text_children}>
                {unSelectedTabs.map((tab) => (
                  <div
                    className={styles.name}
                    key={tab.slug}
                    onClick={() => {
                      tab.slug && setActiveTab(tab.slug);
                      setShowSelectTab(false);
                    }}
                  >
                    {tab.text}
                  </div>
                ))}
              </SectionLayout>
            )}

            <div className={textArrowClassNames}>
              <Icon icon="carret-right" />
            </div>
          </div>
        </React.Fragment>
      )}
    </SectionLayout>
  );
};

export default Section26;
