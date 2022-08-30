import { get } from "lodash";
const qs = require("qs");

import Hero from "components/Hero/Hero";
import Section1 from "components/Sections/Section1/Section1";
import Section10 from "components/Sections/Section10/Section10";
import Section11 from "components/Sections/Section11/Section11";
import Section12 from "components/Sections/Section12/Section12";
import Section2 from "components/Sections/Section2/Section2";
import Section3 from "components/Sections/Section3/Section3";
import Section5 from "components/Sections/Section5/Section5";
import Section6 from "components/Sections/Section6/Section6";
import Section7 from "components/Sections/Section7/Section7";
import Section8 from "components/Sections/Section8/Section8";
import Section9 from "components/Sections/Section9/Section9";
import {
  defaultHero,
  defaultSchoolFalcuties,
  defaultSection1,
  defaultSection10,
  defaultSection11,
  defaultSection12,
  defaultSection2,
  defaultSection3,
  defaultSection5,
  defaultSection6,
  defaultSection7,
  defaultSection8,
  defaultSection9,
} from "constant";
import Api from "services";

import styles from "styles/Homepage.module.scss";
import Section4 from "components/Sections/Section4/Section4";
import Image from "next/image";

const Homepage = (props) => {
  const { response = {} } = props;
  const serviceDomain = process.env.NEXT_PUBLIC_API_URL;
  console.log("response", response);
  const hero = get(response, "banner") || {};
  const aboutUs = get(response, "about_us[0]") || {};
  const awardAndStats = get(response, "awards_and_stats") || {};
  const events = get(response, "events") || {};
  const news = get(response, "news") || {};
  const offeredPrograms = get(response, "programs_offer") || {};
  const highlightMessage = get(response, "highlight_message") || {};
  const universityCollaboration =
    get(response, "international_universities_collaboration") || {};
  const feedbackSlider = get(response, "feedback_slider") || [];
  const researchSubjects = get(response, "research_focus") || {};
  const projects = get(response, "projects") || {};
  const discovery = get(response, "discovery") || {};
  const admissionsAid = get(response, "admissions_and_aid");

  return (
    <div className={styles.home}>
      <Hero
        // {...hero}
        // isShown={hero.is_shown}
        // image={
        //   get(hero, "image.data.attributes.url") &&
        //   serviceDomain + get(hero, "image.data.attributes.url")
        // }
        {...defaultHero}
      />
      <Section1
        // {...aboutUs}
        // isShown={aboutUs.is_shown}
        // directLabel={aboutUs.direct_label}
        // directUrl={aboutUs.direct_url}
        // image={
        //   get(aboutUs, "image.data.attributes.url") &&
        //   serviceDomain + get(aboutUs, "image.data.attributes.url")
        // }
        {...defaultSection1}
      />
      <Section2
        // {...awardAndStats}
        // isShown={awardAndStats.is_shown}
        // directLabel={awardAndStats.direct_label}
        // directUrl={awardAndStats.direct_url}
        // thumbnails={awardAndStats.thumbnails?.map((item) => ({
        //   title: item.title,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        {...defaultSection2}
      />
      <Section3
        // title="Featured News & Events"
        // directLabel={"View all News & Events"}
        // directUrl="/"
        // list={news.news?.map((item) => ({
        //   title: item.title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        // subList={events.events?.map((item) => ({
        //   title: item.title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        {...defaultSection3}
      />
      <Section4 {...defaultSchoolFalcuties} />
      <Section5
        // {...offeredPrograms}
        // isShown={offeredPrograms.is_shown}
        // list={offeredPrograms.list?.map((item) => ({
        //   title: item.title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        {...defaultSection5}
      />
      <Section6
        // {...highlightMessage}
        // directLabel={awardAndStats.direct_label}
        // directUrl={awardAndStats.direct_url}
        // image={
        //   get(highlightMessage, "image.data.attributes.url") &&
        //   serviceDomain + get(highlightMessage, "image.data.attributes.url")
        // }
        {...defaultSection6}
      />
      <Section7
        // {...universityCollaboration}
        // list={universityCollaboration.list?.map(
        //   (item) =>
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url")
        // )}
        {...defaultSection7}
      />
      <Section8
        // {...feedbackSlider}
        // list={feedbackSlider.map((item) => ({
        //   title: item.title,
        //   subTitle: item.sub_title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        {...defaultSection8}
      />
      <Section9
        // {...researchSubjects}
        // directLabel={projects.direct_label}
        // directUrl={projects.direct_url}
        // subTitle="Some of the projects"
        // list={researchSubjects.research_focus?.map((item) => ({
        //   title: item.title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        // cardList={projects.projects?.map((item) => ({
        //   title: item.title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        {...defaultSection9}
      />
      <Section10
        // {...discovery}
        // list={discovery.list?.map((item) => ({
        //   title: item.title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        // }))}
        // directLabel={discovery.direct_label}
        // directUrl={discovery.direct_url}
        // image={
        //   get(discovery, "image.data.attributes.url") &&
        //   serviceDomain + get(discovery, "image.data.attributes.url")
        // }
        {...defaultSection10}
        title={
          <Image src={require("public/images/pattern-string.svg")} alt="" />
        }
      />
      <Section11
        // {...admissionsAid}
        // directLabel={discovery.direct_label}
        // directUrl={discovery.direct_url}
        {...defaultSection11}
      />
      <Section12 {...defaultSection12} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const populates = [
    "banner",
    "about_us",
    "awards_and_stats",
    "events",
    "news",
    "schools_faculty_groups",
    "programs_offer",
    "highlight_message",
    "international_universities_collaboration",
    "feedback_slider",
    "research_focus",
    "projects",
    "discovery",
    "admissions_and_aid",
    "gallery",
    "key_contacts",
  ];
  const sections = {};
  populates.forEach((pop) => {
    sections[pop] = {
      populate: "*",
    };
  });

  // const params = { populate: "deep, 4" };
  const query = qs.stringify({ populate: sections });
  const response = {};
  // const response = await Api.get(`/api/home-pages?${query}`);
  const homePageData = get(response, "data.data[0].attributes");
  return {
    props: { response: homePageData || {} }, // will be passed to the page component as props
  };
}

export default Homepage;
