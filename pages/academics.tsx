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
  defaultSection12,
  defaultSection17,
  defaultSection18,
  defaultSection2,
  defaultSection20,
  defaultSection21,
  defaultSection3,
  defaultSection31,
  defaultSection6,
  defaultSection7,
  defaultSection8,
  defaultSection9,
} from "constant";
import Api from "services";

import styles from "styles/Homepage.module.scss";
import Section18 from "components/Sections/Section18/Section18";
import Section31 from "components/Sections/Section31/Section31";
import Section17 from "components/Sections/Section17/Section17";
import Section20 from "components/Sections/Section20/Section20";
import Section4 from "components/Sections/Section4/Section4";
import Section21 from "components/Sections/Section21/Section21";

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
      <Section20 {...defaultSection20} />
      <Section2 {...defaultSection2} />
      <Section4 {...defaultSchoolFalcuties} />
      <Section17
        {...defaultSection17}
        title="Undergraduate Programs"
        directLabel=""
        list={[
          {
            title: "Standard",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate ",
            directions: [
              {
                label: "Explore Standard Program Admission Procedure",
                url: "",
              },
              {
                label: "Explore All Majors",
                url: "",
              },
            ],
          },
          {
            title: "Honors",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate ",
            directUrl: "",
            directions: [
              {
                label: "Go to Honors Programs Overview",
                url: "",
              },
              {
                label: "Explore All Majors",
                url: "",
              },
            ],
          },
          {
            title: "International",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate ",
            directions: [
              {
                label: "Go to International Programs Overview",
                url: "",
              },
              {
                label: "Explore All Majors",
                url: "",
              },
            ],
          },
        ]}
      />
      <Section17
        {...defaultSection17}
        title="Graduate Programs"
        list={[
          {
            title: "Masters",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate",
            directions: [
              {
                label: "Go to International Programs Overview",
                url: "",
              },
              {
                label: "Explore All Majors",
                url: "",
              },
            ],
          },
          {
            title: "phD",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate",
            directions: [
              {
                label: "Go to International Programs Overview",
                url: "",
              },
              {
                label: "Explore All Majors",
                url: "",
              },
            ],
          },
          {
            title: "International",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate",
            directions: [
              {
                label: "Go to International Programs Overview",
                url: "",
              },
              {
                label: "Explore All Majors",
                url: "",
              },
            ],
          },
        ]}
        directLabel=""
        background
      />
      <Section17
        {...defaultSection17}
        title="International Programs"
        directLabel="Know more about our International Programs"
        list={[
          {
            title: "Bachelors Programs",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate ",
            directions: [
              {
                label: "Go to International Programs Overview",
                url: "",
              },
              {
                label: "Explore All Majors",
                url: "",
              },
            ],
          },
          {
            title: "Master",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate",
            directions: [
              {
                label: "Go to International Programs Overview",
                url: "",
              },
              {
                label: "Explore All Majors",
                url: "",
              },
            ],
          },
          {
            title: "Doctoral",
            content:
              "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate",
            directions: [
              {
                label: "Go to International Programs Overview",
                url: "",
              },
              {
                label: "Explore All Majors",
                url: "",
              },
            ],
          },
        ]}
      />
      {/* <Section4/> */}
      <Section18
        {...defaultSection18}
        title="Professors & Lecturers (Academic Council)"
        content="Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
        layout="horizontal"
      />
      {/* <div className={styles.title}>
        Message from the representative of the international university
      </div> */}
      <Section8
        {...defaultSection8}
        background={false}
        title="Message from the representative of the international university"
      />
      <Section21
        {...defaultSection21}
        title="Upcoming Admission Dates"
        directLabel="View Admission calander"
      />
      <Section31 {...defaultSection31} title="Additional Information" />
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
