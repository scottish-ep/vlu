import Hero1 from "components/Hero1/Hero1";
import Section31 from "components/Sections/Section31/Section31";
import Section42 from "components/Sections/Section42/Section42";
import { defaultHero1, defaultSection31, defaultSection42 } from "constant";

const HighlightStatsAndAwards = () => {
  return (
    <div className="">
      <Hero1 {...defaultHero1} title="All Highlight Stats & Awards" />
      <Section42
        {...defaultSection42}
        variant="blue"
        title="About the University"
      />
      <Section42 {...defaultSection42} variant="red" background />
      <Section42 {...defaultSection42} variant="blue" title="Research" />
      <Section42
        {...defaultSection42}
        variant="green"
        background
        title="Admissions"
      />
      <Section42 {...defaultSection42} variant="yellow" title="Academics" />
      <Section31 {...defaultSection31} background="dark" />
    </div>
  );
};

export default HighlightStatsAndAwards;
