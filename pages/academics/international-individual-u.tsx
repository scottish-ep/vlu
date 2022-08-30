import Hero1 from "components/Hero1/Hero1";
import ConsultationForm from "components/Sections/ConsultationForm/ConsultationForm";
import Section12 from "components/Sections/Section12/Section12";
import Section14 from "components/Sections/Section14/Section14";
import Section2 from "components/Sections/Section2/Section2";
import Section20 from "components/Sections/Section20/Section20";
import Section27 from "components/Sections/Section27/Section27";
import Section3 from "components/Sections/Section3/Section3";
import Section31 from "components/Sections/Section31/Section31";
import Section33 from "components/Sections/Section33/Section33";
import Section4 from "components/Sections/Section4/Section4";
import Section43 from "components/Sections/Section43/Section43";
import Section8 from "components/Sections/Section8/Section8";
import {
  defaultHero1,
  defaultSchoolFalcuties,
  defaultSection12,
  defaultSection14,
  defaultSection2,
  defaultSection20,
  defaultSection27,
  defaultSection3,
  defaultSection31,
  defaultSection33,
  defaultSection43,
  defaultSection8,
} from "constant";

const defaultSection27List = [
  {
    title: "Online Orientation",
    content:
      "University staff is available at reception, 24 hours a day, 7 days per week to assist and care for occupants. Accommodation Officers are available from 7am – 10pm daily and security officers from 10pm – 7am daily.",
  },
  {
    title: "Traveling Preparation at VLU",
    content:
      "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate Education",
  },
  {
    title: "Finding Housing",
    content:
      "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate Education",
  },
  {
    title: "Online Orientation",
    content:
      "University staff is available at reception, 24 hours a day, 7 days per week to assist and care for occupants. Accommodation Officers are available from 7am – 10pm daily and security officers from 10pm – 7am daily.",
  },
  {
    title: "Traveling Preparation at VLU",
    content:
      "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate Education",
  },
  {
    title: "Finding Housing",
    content:
      "Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate Education",
  },
];

const InternationalUniversityIndividual = () => {
  return (
    <div className="">
      <Hero1 {...defaultHero1} title="International University" />
      <Section20
        {...defaultSection20}
        title="Seven schools on one campus offer students boundless opportunities & More"
        directLabel="Explore University"
      />
      <Section43
        id="trustees"
        title="Message from the representative of VLU"
        list={[
          {
            title: "Dr. Nguyen Cao Tri",
            image: "https://picsum.photos/500/250",
            category: "Chairman",
            content:
              "Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. /n/ Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            email: "tosajadkaja@vl.vie.com",
          },
        ]}
      />
      <Section14
        {...defaultSection14}
        title="Message from the representative of the international university"
        background
      />
      <Section2 {...defaultSection2} />
      <Section27 {...defaultSection27} list={defaultSection27List} />
      <Section4 {...defaultSchoolFalcuties} />
      <Section8 {...defaultSection8} />
      <Section3 {...defaultSection3} />
      <Section27 {...defaultSection27} list={defaultSection27List} />
      <Section12 {...defaultSection12} />
      <Section31 {...defaultSection31} title="Additional Information" />
      <ConsultationForm />
    </div>
  );
};

export default InternationalUniversityIndividual;
