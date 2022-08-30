import Hero1 from "components/Hero1/Hero1";
import Section26 from "components/Sections/Section26/Section26";
import Section3 from "components/Sections/Section3/Section3";
import Section31 from "components/Sections/Section31/Section31";
import Section4 from "components/Sections/Section4/Section4";
import Section43 from "components/Sections/Section43/Section43";
import Section6 from "components/Sections/Section6/Section6";
import Section66 from "components/Sections/Section66/Section66";
import {
  defaultHero1,
  defaultMissionVisionNavBar,
  defaultSection3,
  defaultSection31,
  defaultSection42,
  defaultSection43,
  defaultSection6,
  defaultSection66,
} from "constant";
import { useRouter } from "next/router";

const TrusteesAdministrators = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="trustees-administrators">
      <Hero1 {...defaultHero1} title="Board of Trustees & Admins" />
      <Section26
        tabs={[
          {
            slug: `${pathname}#trustees`,
            text: "Board of Trustees",
          },
          {
            slug: `${pathname}#administrator`,
            text: "Administrators",
          },
        ]}
      />
      <Section66 {...defaultSection66} />
      <Section43
        {...defaultSection43}
        title="Board of Vanlang University"
        background
        id="trustees"
      />
      <Section6 {...defaultSection6} />
      <Section43
        {...defaultSection43}
        id="administrator"
        title="Administrators"
        variant="green"
        background
      />
      <Section3 {...defaultSection3} />
      <Section31 {...defaultSection31} background="dark" />
    </div>
  );
};

export default TrusteesAdministrators;
