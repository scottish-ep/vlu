import Hero1 from "components/Hero1/Hero1";
import Section24 from "components/Sections/Section24/Section24";
import Section3 from "components/Sections/Section3/Section3";
import Section31 from "components/Sections/Section31/Section31";
import Section41 from "components/Sections/Section41/Section41";
import {
  defaultHero1,
  defaultSection24,
  defaultSection3,
  defaultSection31,
  defaultSection38,
  defaultSection41,
} from "constant";

const FacultyAndInstitutes = () => {
  return (
    <div className="falculty-institute">
      <Hero1 {...defaultHero1} title="Faculty and Institutes" />
      <Section41 {...defaultSection41} title="Faculties" />
      <Section41 {...defaultSection41} title="Institutes" background />
      <Section41 {...defaultSection41} title="Department" />
      <Section24 {...defaultSection24} />
      <Section3 {...defaultSection3} />
      <Section31 {...defaultSection31} background="dark" />
    </div>
  );
};

export default FacultyAndInstitutes;
