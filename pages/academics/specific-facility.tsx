import React from "react";
import Hero1 from "components/Hero1/Hero1";
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
  defaultAcademicSpecificFacility,
  defaultSection3,
  defaultSection6,
  defaultSection8,
  defaultSection20,
  defaultSection27,
  defaultSection28,
  defaultSection29AcademicsSpecificFacility,
  defaultSection30,
  defaultSection31,
  defaultSection32,
  defaultSection33,
  defaultSection35,
  defaultSection5,
  defaultSection37AcademicsSpecificFacility,
} from "constant";

import styles from "styles/Research.module.scss";
import Section5 from "components/Sections/Section5/Section5";
import Section37 from "components/Sections/Section37/Section37";

const Research: React.FC = () => {
  return (
    <div className={styles.research}>
      <Hero1 {...defaultAcademicSpecificFacility} />
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
      <Section37 background {...defaultSection37AcademicsSpecificFacility} />
      <Section29 {...defaultSection29AcademicsSpecificFacility} />
      <Section30 {...defaultSection30} />
      <Section3 {...defaultSection3} />
      <Section6 {...defaultSection6} background="green" />
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
