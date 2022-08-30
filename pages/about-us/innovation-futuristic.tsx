import React from "react";

import Hero from "components/Hero/Hero";
import {
  defaultHero1InnovationFuturistic,
  defaultSection3,
  defaultSection66InnovationFuturistic,
  defaultSection71,
  defaultSection72,
} from "constant";

import styles from "styles/AboutUsMissionVision.module.scss";
import Section3 from "components/Sections/Section3/Section3";
import Hero1 from "components/Hero1/Hero1";
import Section66 from "components/Sections/Section66/Section66";
import Section71 from "components/Sections/Section71/Section71";
import Section51 from "components/Sections/Section51/Section51";
import Section72 from "components/Sections/Section72/Section72";

const AboutUsInnovationFuturistic: React.FC = (props) => {
  return (
    <div className="about-us">
      <Hero1 {...defaultHero1InnovationFuturistic} />
      <Section66 {...defaultSection66InnovationFuturistic} />
      <Section71 {...defaultSection71} />
      <Section72 list={defaultSection72} variant="secondary" />
      <Section3 {...defaultSection3} />
    </div>
  );
};

export default AboutUsInnovationFuturistic;
