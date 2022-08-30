import Hero1 from "components/Hero1/Hero1";
import Hero2 from "components/Hero2/Hero2";
import SectionLayout from "components/SectionLayout/SectionLayout";
import Section17 from "components/Sections/Section17/Section17";
import Section26 from "components/Sections/Section26/Section26";
import Section3 from "components/Sections/Section3/Section3";
import Section4 from "components/Sections/Section4/Section4";
import Section44 from "components/Sections/Section44/Section44";
import Section6 from "components/Sections/Section6/Section6";
import Section66 from "components/Sections/Section66/Section66";
import {
  defaultHero1,
  defaultHero2,
  defaultSection17,
  defaultSection3,
  defaultSection6,
  defaultSection66InnovationFuturistic,
} from "constant";
import { useRouter } from "next/router";

const HistoryAndMilestone = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="history-milestone">
      <Hero1 {...defaultHero1} title="History & Milestone" />
      <Section66 {...defaultSection66InnovationFuturistic} />
      <Section44 {...defaultHero2} title="Key Milestones" />
      <Section26
        tabs={[
          { text: "2020 to Date", slug: `${pathname}/#to-date` },
          { text: "2010 to 2019", slug: `${pathname}/#2010-2019` },
          { text: "2000 to 2009", slug: `${pathname}/#2000-2009` },
          { text: "1995 to 1999", slug: `${pathname}/#1995-1999` },
        ]}
      />
      <Section17
        {...defaultSection17}
        id="to-date"
        directLabel=""
        title="2020 to Date"
        images={[
          "https://picsum.photos/500/601",
          "https://picsum.photos/500/602",
          "https://picsum.photos/500/603",
          "https://picsum.photos/500/604",
          "https://picsum.photos/500/605",
          "https://picsum.photos/500/606",
        ]}
      />
      <Section17
        {...defaultSection17}
        background
        directLabel=""
        title="2010-2019"
        id="2010-2019"
        images={[
          "https://picsum.photos/500/601",
          "https://picsum.photos/500/602",
          "https://picsum.photos/500/603",
          "https://picsum.photos/500/604",
          "https://picsum.photos/500/605",
          "https://picsum.photos/500/606",
        ]}
      />
      <Section6 {...defaultSection6} background="green" />
      <Section17
        {...defaultSection17}
        directLabel=""
        title="2000-2009"
        id="2000-2009"
        images={[
          "https://picsum.photos/500/601",
          "https://picsum.photos/500/602",
          "https://picsum.photos/500/603",
          "https://picsum.photos/500/604",
          "https://picsum.photos/500/605",
          "https://picsum.photos/500/606",
        ]}
      />
      <Section17
        {...defaultSection17}
        id="1995-1999"
        title="1995-1999"
        directLabel=""
        background
        images={[
          "https://picsum.photos/500/601",
          "https://picsum.photos/500/602",
          "https://picsum.photos/500/603",
          "https://picsum.photos/500/604",
          "https://picsum.photos/500/605",
          "https://picsum.photos/500/606",
        ]}
      />
      <Section3 {...defaultSection3} />
    </div>
  );
};

export default HistoryAndMilestone;
