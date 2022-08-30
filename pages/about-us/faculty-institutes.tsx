import Hero1 from "components/Hero1/Hero1";
import Section24 from "components/Sections/Section24/Section24";
import Section26 from "components/Sections/Section26/Section26";
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
import { useRouter } from "next/router";

const FacultyAndInstitutes = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="falculty-institute">
      <Hero1 {...defaultHero1} title="Faculty and Institutes" />
      <Section26
        tabs={[
          { text: "Faculties", slug: `${pathname}/#faculties` },
          {
            text: "Institutes",
            slug: `${pathname}/#institutes`,
          },
          {
            text: "Department",
            slug: `${pathname}/#department`,
          },
        ]}
      />
      <Section41 {...defaultSection41} title="Faculties" id="faculties" />
      <Section41
        {...defaultSection41}
        title="Institutes"
        background
        id="institutes"
      />
      <Section41 {...defaultSection41} title="Department" id="department" />
      <Section24 {...defaultSection24} />
      <Section3 {...defaultSection3} />
      <Section31
        {...defaultSection31}
        background="dark"
        title="Additional information"
      />
    </div>
  );
};

export default FacultyAndInstitutes;
