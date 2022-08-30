import Hero from "components/Hero/Hero";
import SectionLayout from "components/SectionLayout/SectionLayout";
import Section12 from "components/Sections/Section12/Section12";
import Section14 from "components/Sections/Section14/Section14";
import Section18 from "components/Sections/Section18/Section18";
import Section22 from "components/Sections/Section22/Section22";
import Section23 from "components/Sections/Section23/Section23";
import Section24 from "components/Sections/Section24/Section24";
import Section3 from "components/Sections/Section3/Section3";
import Section4 from "components/Sections/Section4/Section4";
import Section5 from "components/Sections/Section5/Section5";
import Section51 from "components/Sections/Section51/Section51";
import Section52 from "components/Sections/Section52/Section52";
import Section8 from "components/Sections/Section8/Section8";
import {
  defaultHero,
  defaultSchoolFalcuties,
  defaultSection12,
  defaultSection14,
  defaultSection18,
  defaultSection22,
  defaultSection24,
  defaultSection3,
  defaultSection5,
  defaultSection51,
  defaultSection52,
  defaultSection8,
} from "constant";

const LifeAtVlu = () => {
  return (
    <div className="life_at_vlu">
      <Hero {...defaultHero} />
      <Section14 {...defaultSection14} variant="secondary" />
      <Section23
        title="Prepare for the Journey of the VLU"
        content="A highly accomplished electrical engineer and computer scientist with expertise in the areas of wireless, cybersecurity, and Community Engagement and Sustainability Community Engagement and Sustainability electrical engineer and computer scientist"
      />
      <Section51
        {...defaultSection51}
        list={defaultSection51.list.slice(0, 2).map((item, index) => ({
          ...item,
          title: index === 0 ? "Freshman" : "International Studen",
        }))}
      />
      <Section5
        {...defaultSection5}
        title="Life on Campus"
        content="A highly accomplished electrical engineer and computer scientist with expertise in the areas of wireless, cybersecurity, and Community Engagement and Sustainability Community Engagement"
        list={defaultSection5.list.slice(0, 7)}
        directLabel=""
        background
      />
      <Section3 {...defaultSection3} />
      <Section12 {...defaultSection12} title="Gallery" />
      <Section5
        {...defaultSection5}
        title="Student Projects"
        directLabel="Explore All Project "
        list={defaultSection5.list.slice(0, 3)}
        background
      />
      <Section52
        {...defaultSection52}
        title="Student Magazines"
        list={[]}
        subList={[
          {
            category: "News",
            title:
              "The VLU Faculty of Technology has completed a project to investigate plastic waste generation rate, volume, and really have confidentally to be and really have confidentally to be",
            image: require("public/images/section5-2.png"),
            subTitle: "By Abdhur Rahman",
            content:
              "On November 18, 2021, Van Lang students participated in a community activity to paint and",
          },
          {
            category: "News",
            title:
              "The VLU Faculty of Technology has completed a project to investigate plastic waste generation",
            image: require("public/images/section_19_bg.png"),
            subTitle: "By Abdhur Rahman",
            content:
              "On November 18, 2021, Van Lang students participated in a community activity to paint and",
          },
          {
            category: "News",
            title:
              "The VLU Faculty of Technology has completed a project to investigate plastic waste generation rate, volume",
            image: require("public/images/section6.png"),
            subTitle: "By Abdhur Rahman",
            content:
              "On November 18, 2021, Van Lang students participated in a community activity to paint and",
          },
          {
            category: "News",
            title:
              "The VLU Faculty of Technology has completed a project to investigate plastic waste generation",
            image: require("public/images/section_17_bg.png"),
            subTitle: "By Abdhur Rahman",
            content:
              "On November 18, 2021, Van Lang students participated in a community activity to paint and",
          },
        ]}
      />
      <Section18 {...defaultSection18} />
      <Section22
        {...defaultSection22}
        title="Student Care Services"
        directLabel="Know more"
      />
      <Section5
        {...defaultSection5}
        title=""
        directLabel=""
        list={defaultSection5.list.slice(0, 2)}
        background
      />
      <Section8 {...defaultSection8} />
      <Section4
        {...defaultSchoolFalcuties}
        title="Student Care Services"
        directLabel=""
      />
      <Section5
        {...defaultSection5}
        title="Support Service Center"
        list={defaultSection5.list.slice(0, 2)}
        content="A highly accomplished electrical engineer and computer scientist with expertise in the areas of wireless, cybersecurity, and Community Engagement "
        directLabel=""
      />
      <Section24 {...defaultSection24} />
    </div>
  );
};

export default LifeAtVlu;
