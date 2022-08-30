import React from "react";

import Hero from "components/Hero/Hero";
import {
  defaultHero1,
  defaultMissionVisionNavBar,
  defaultSection17,
  defaultSection3,
  defaultSection65,
  defaultSection6,
  defaultTextSection,
  defaultSection66,
  defaultSection67,
  defaultSection68,
  defaultSection69,
} from "constant";

import styles from "styles/AboutUsMissionVision.module.scss";
import Section26 from "components/Sections/Section26/Section26";
import Section3 from "components/Sections/Section3/Section3";
import Section17 from "components/Sections/Section17/Section17";
import Section6 from "components/Sections/Section6/Section6";
import Hero1 from "components/Hero1/Hero1";
import Section65 from "components/Sections/Section65/Section65";
import Section66 from "components/Sections/Section66/Section66";
import Section67 from "components/Sections/Section67/Section67";
import Section68 from "components/Sections/Section68/Section68";
import Section69 from "components/Sections/Section69/Section69";

const AboutUsMissionVision: React.FC = (props) => {
  return (
    <div className="about-us">
      <Hero1 {...defaultHero1} />
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
      <Section66 className={styles.section66} {...defaultSection66} />
      <Section67 {...defaultSection67} />
      <Section68 {...defaultSection68} />
      <Section65 {...defaultSection65} />
      <Section6 {...defaultSection6} background="green" />
      <Section69 {...defaultSection69} />
      <Section17
        {...defaultSection17}
        title="Undergraduate Programs"
        directLabel=""
        background
        list={[
          {
            title: "Information Topic - 1",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate ",
            directUrl: "",
          },
          {
            title: "Information Topic - 1",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate ",
          },
          {
            title: "Information Topic - 1",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate ",
          },
          {
            title: "Information Topic - 1",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate ",
          },
          {
            title: "Information Topic - 1",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate ",
          },
        ]}
      />
      <Section3 {...defaultSection3} />
    </div>
  );
};

export default AboutUsMissionVision;
