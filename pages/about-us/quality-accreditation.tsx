import Hero1 from "components/Hero1/Hero1";
import SectionLayout from "components/SectionLayout/SectionLayout";
import Section14 from "components/Sections/Section14/Section14";
import Section17 from "components/Sections/Section17/Section17";
import Section20 from "components/Sections/Section20/Section20";
import Section3 from "components/Sections/Section3/Section3";
import Section31 from "components/Sections/Section31/Section31";
import Section38 from "components/Sections/Section38/Section38";
import Section39 from "components/Sections/Section39/Section39";
import Section40 from "components/Sections/Section40/Section40";
import Section6 from "components/Sections/Section6/Section6";
import Section66 from "components/Sections/Section66/Section66";
import {
  defaultHero1,
  defaultSection14,
  defaultSection17,
  defaultSection20,
  defaultSection3,
  defaultSection31,
  defaultSection38,
  defaultSection39,
  defaultSection40,
  defaultSection6,
  defaultSection66,
} from "constant";

const QualityAccreditation = () => {
  return (
    <div className="">
      <Hero1 {...defaultHero1} title="Quality Accreditation" />
      <Section20 {...defaultSection20} />
      <Section38 {...defaultSection38} />
      <Section39 {...defaultSection39} />
      <Section40
        {...defaultSection40}
        title="Program Accrediation"
        background
        list={{
          title:
            "Assessment of the training program - Standard of education & training",
        }}
        subList={{
          title:
            "Assessment of the training program - Standard of education & training",
        }}
      />
      <Section6
        {...defaultSection6}
        background="green"
        title="A highlight message on Innovation & Futuristic Outlook"
      />
      <Section3 {...defaultSection3} />
      <Section31 {...defaultSection31} />
    </div>
  );
};

export default QualityAccreditation;
