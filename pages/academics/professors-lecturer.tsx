import React from "react";

import Hero from "components/Hero/Hero";
import {
  defaultHero1AcademicProfessorsLectures,
  defaultSection24AcademicsProfessorsLecture,
  defaultSection3,
  defaultSection75,
  defaultSection66InnovationFuturistic,
  defaultSection71,
} from "constant";

import styles from "styles/AboutUsMissionVision.module.scss";
import Hero1 from "components/Hero1/Hero1";
import Section66 from "components/Sections/Section66/Section66";
import Section3 from "components/Sections/Section3/Section3";
import Section24 from "components/Sections/Section24/Section24";
import Section43 from "components/Sections/Section43/Section43";

const AcademicProfessorsLectures: React.FC = (props) => {
  return (
    <div className="about-us">
      <Hero1 {...defaultHero1AcademicProfessorsLectures} />
      <Section66 {...defaultSection66InnovationFuturistic} />
      <Section43
        cardLayout="horizontal"
        {...defaultSection75}
        title="Faculty Management Board"
        background
        id="trustees"
      />
      <Section24 {...defaultSection24AcademicsProfessorsLecture} />
      <Section3 {...defaultSection3} />
    </div>
  );
};

export default AcademicProfessorsLectures;
