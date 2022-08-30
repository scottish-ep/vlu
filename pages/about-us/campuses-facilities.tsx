import React from "react";

import {
  defaultHeroCanpusesFacility,
  defaultCampusesFacilitySection12,
  defaultCampusesFacilitySection6,
  defaultSection31,
  defaultCampusesFacilitySection5,
  defaultSection70,
} from "constant";

import styles from "styles/AboutUsCampusesFacility.module.scss";
import Section6 from "components/Sections/Section6/Section6";
import Hero1 from "components/Hero1/Hero1";
import Section12 from "components/Sections/Section12/Section12";
import Section31 from "components/Sections/Section31/Section31";
import Section51 from "components/Sections/Section51/Section51";
import Section5 from "components/Sections/Section5/Section5";
import SectionGroup from "components/SectionGroup/SectionGroup";

const AboutUsCampusesFacility: React.FC = (props) => {
  return (
    <div className="about-us">
      <Hero1 {...defaultHeroCanpusesFacility} />
      <SectionGroup
        limit={5}
        {...defaultSection70}
        seeMoreLabel="More Campus"
      />
      <Section12 {...defaultCampusesFacilitySection12} />
      <Section6 {...defaultCampusesFacilitySection6} />
      <Section5
        className={styles.section5}
        {...defaultCampusesFacilitySection5}
        title="Block A"
        content="Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and "
        list={defaultCampusesFacilitySection5.list.slice(0, 7)}
        directLabel=""
        background
      />
      <Section5
        className={styles.section5}
        {...defaultCampusesFacilitySection5}
        title="Block A"
        content="Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and "
        list={defaultCampusesFacilitySection5.list.slice(0, 7)}
        directLabel=""
        background
      />
      <Section5
        className={styles.section5}
        {...defaultCampusesFacilitySection5}
        title="Block A"
        content="Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and "
        list={defaultCampusesFacilitySection5.list.slice(0, 7)}
        directLabel=""
        background
      />
      <Section31 {...defaultSection31} title="Additional Information" />
    </div>
  );
};

export default AboutUsCampusesFacility;
