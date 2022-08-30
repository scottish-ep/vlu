import React from "react";

import Hero from "components/Hero/Hero";
import Section3 from "components/Sections/Section3/Section3";
import Section6 from "components/Sections/Section6/Section6";
import Section8 from "components/Sections/Section8/Section8";
import Section20 from "components/Sections/Section20/Section20";
import Section26 from "components/Sections/Section26/Section26";
import Section27 from "components/Sections/Section27/Section27";
import Section28 from "components/Sections/Section28/Section28";
import Section29 from "components/Sections/Section29/Section29";
import Section30 from "components/Sections/Section30/Section30";
import Section31 from "components/Sections/Section31/Section31";
import Section32 from "components/Sections/Section32/Section32";
import Section33 from "components/Sections/Section33/Section33";
import Section35 from "components/Sections/Section35/Section35";

import {
  defaultHero,
  defaultSection3,
  defaultSection6,
  defaultSection8,
  defaultSection20,
  defaultSection27,
  defaultSection28,
  defaultSection29,
  defaultSection30,
  defaultSection31,
  defaultSection32,
  defaultSection33,
  defaultSection35,
} from "constant";

import styles from "styles/Research.module.scss";

const Research: React.FC = () => {
  return (
    <div className={styles.research}>
      <Hero
        // {...hero}
        // isShown={hero.is_shown}
        // image={
        //   get(hero, "image.data.attributes.url") &&
        //   serviceDomain + get(hero, "image.data.attributes.url")
        // }
        {...defaultHero}
      />
      <Section26
        tabs={[
          {
            slug: "tab-1",
            text: "Overview",
          },
          {
            slug: "tab-2",
            text: "Objectives",
          },
          {
            slug: "tab-3",
            text: "Research Focus Area",
          },
          {
            slug: "tab-4",
            text: "Project & Publications",
          },
          {
            slug: "tab-5",
            text: "News & Events",
          },
        ]}
      />
      <Section20 {...defaultSection20} directLabel="" />
      <Section27 {...defaultSection27} />
      <Section28 {...defaultSection28} />
      <Section35
        title="Featured Research Projects & Publications"
        list={{
          title: "PROJECTS",
          directLabel: "Explore all Research Projects",
          list: defaultSection35.list.list.slice(0, 3),
        }}
        subList={{
          title: "PUBLICATIONS",
          directLabel: "Explore all Publications",
          list: defaultSection35.list.list.slice(3, 6),
        }}
      />
      <Section29 {...defaultSection29} />
      <Section30 {...defaultSection30} />
      <Section3
        // title="Featured News & Events"
        // directLabel={"View all News & Events"}
        // directUrl="/"
        // list={news.news?.map((item) => ({
        //   title: item.title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        // subList={events.events?.map((item) => ({
        //   title: item.title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        {...defaultSection3}
      />
      <Section6
        // {...highlightMessage}
        // directLabel={awardAndStats.direct_label}
        // directUrl={awardAndStats.direct_url}
        // image={
        //   get(highlightMessage, "image.data.attributes.url") &&
        //   serviceDomain + get(highlightMessage, "image.data.attributes.url")
        // }
        {...defaultSection6}
        background="green"
      />
      <Section31 {...defaultSection31} />
      <Section32 {...defaultSection32} />
      <Section33 {...defaultSection33} />
      <Section8
        {...defaultSection8}
        background={false}
        title="Message from the representative of the international university"
      />
    </div>
  );
};

export default Research;
