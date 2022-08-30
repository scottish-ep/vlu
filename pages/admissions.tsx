import Hero from "components/Hero/Hero";
import ConsultationForm from "components/Sections/ConsultationForm/ConsultationForm";
import Section2 from "components/Sections/Section2/Section2";
import Section22 from "components/Sections/Section22/Section22";
import Section3 from "components/Sections/Section3/Section3";
import Section31 from "components/Sections/Section31/Section31";
import Section34 from "components/Sections/Section34/Section34";
import Section5 from "components/Sections/Section5/Section5";
import Section52 from "components/Sections/Section52/Section52";
import TextSection from "components/Sections/TextSection/TextSection";
import {
  defaultHero,
  defaultSection2,
  defaultSection22,
  defaultSection3,
  defaultSection31,
  defaultSection34,
  defaultSection5,
  defaultSection52,
  defaultTextSection,
} from "constant";
import styles from "styles/Admissions.module.scss";

const Admissions = () => {
  return (
    <div className="admissions">
      <Hero {...defaultHero} />
      <TextSection {...defaultTextSection} />
      <Section2 {...defaultSection2} />
      <Section34 {...defaultSection34} content="" />
      <Section5
        {...defaultSection5}
        title="Scholarship & Financial Aid"
        list={[
          {
            image: require("public/images/section5-1.png"),
            title: "Undergraduate Programs",
            content:
              "Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise",
            directions: [
              {
                label: "Graduate Scholarship",
                url: "",
              },
              {
                label: "Undergraduate Scholarship",
                url: "",
              },
              {
                label: "International Scholarship",
                url: "",
              },
            ],
          },
          {
            image: require("public/images/section5-1.png"),
            title: "Undergraduate Programs",
            content:
              "Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise",
            directions: [
              {
                label: "Graduate Scholarship",
                url: "",
              },
              {
                label: "Undergraduate Scholarship",
                url: "",
              },
            ],
          },
        ]}
        background
      />
      <Section52 {...defaultSection52} title="Admissions News & Events" />
      <Section22
        {...defaultSection22}
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
        title="Student Care Services"
        directLabel="Know  more about us"
        background
      />
      <Section5
        {...defaultSection5}
        title=""
        directLabel=""
        list={defaultSection5.list.slice(0, 2)}
      />
      <Section34
        {...defaultSection34}
        content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
        title="This could be a Small quote saying someting"
        layout="horizontal"
        background
        list={[
          {
            title: "Undergraduate Programs",
            image: "https://picsum.photos/500/250",
            directLabel: "Apply now",
          },
          {
            image: "https://picsum.photos/500/250",
            title: "Graduate Programs",
            directLabel: "Apply now",
          },
        ]}
        cardLayout="center"
      />
      <Section31 {...defaultSection31} title="Additional Information" />
      <ConsultationForm />
    </div>
  );
};

export default Admissions;
