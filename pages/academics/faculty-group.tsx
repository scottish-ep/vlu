import React from "react";

import Hero from "components/Hero/Hero";
import {
  defaultHero1FacultyGroup,
  defaultSection3,
  defaultSection31,
  defaultSection66InnovationFuturistic,
  defaultSection71,
  defaultSection24,
  defaultSection42,
  defaultSection76,
} from "constant";

import styles from "styles/AboutUsMissionVision.module.scss";
import Hero1 from "components/Hero1/Hero1";
import Section66 from "components/Sections/Section66/Section66";
import Section3 from "components/Sections/Section3/Section3";
import Section24 from "components/Sections/Section24/Section24";
import Section26 from "components/Sections/Section26/Section26";
import Section31 from "components/Sections/Section31/Section31";
import Section42 from "components/Sections/Section42/Section42";
import Section76 from "components/Sections/Section76/Section76";

const AcademicProfessorsLectures: React.FC = (props) => {
  return (
    <div className="about-us">
      <Hero1 {...defaultHero1FacultyGroup} />
      <Section26
        tabs={[
          {
            slug: `#facility`,
            text: "Faculties",
          },
          {
            slug: `#institutes`,
            text: "Institutes",
          },
        ]}
      />
      <Section76 {...defaultSection76} title="Faculties" />
      <Section42 {...defaultSection42} variant="red" background />
      <Section24 {...defaultSection24} />
      <Section3 {...defaultSection3} />
      <Section31 {...defaultSection31} />
    </div>
  );
};

export default AcademicProfessorsLectures;
