import Hero1 from "components/Hero1/Hero1";
import SectionLayout from "components/SectionLayout/SectionLayout";
import Section12 from "components/Sections/Section12/Section12";
import Section31 from "components/Sections/Section31/Section31";
import Section51 from "components/Sections/Section51/Section51";
import Section6 from "components/Sections/Section6/Section6";
import Section66 from "components/Sections/Section66/Section66";
import TextSection from "components/Sections/TextSection/TextSection";
import {
  defaultHero1,
  defaultSection12,
  defaultSection31,
  defaultSection51,
  defaultSection6,
  defaultSection66,
  defaultTextSection,
} from "constant";

const DiplomaSystems = () => {
  return (
    <div className="">
      <Hero1
        {...defaultHero1}
        title="Diploma systems"
        content="A highly accomplished electrical engineer and computer scientist with expertise in the areas of wireless, cybersecurity, and mobility, Dutta has 35  years of experience in IT operations, research and development"
      />
      <Section66 {...defaultSection66} />
      <Section51
        {...defaultSection51}
        variant="secondary"
        title="This could be a big title leading to one important section"
      />
      <Section6
        {...defaultSection6}
        title="A highlight message on Innovation & Futuristic Outlook"
        background="red"
      />
      <Section12
        {...defaultSection12}
        title="Gallery"
        content=""
        directLabel=""
      />
      <Section31 {...defaultSection31} title="Additional Information" />
    </div>
  );
};

export default DiplomaSystems;
