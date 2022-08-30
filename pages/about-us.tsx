import React from "react";
import { get } from "lodash";
import qs from "qs";

import Section14 from "components/Sections/Section14/Section14";
import Section15 from "components/Sections/Section15/Section15";
import Section16 from "components/Sections/Section16/Section16";
import Section17 from "components/Sections/Section17/Section17";
import Section18 from "components/Sections/Section18/Section18";
import Section19 from "components/Sections/Section19/Section19";
import Section6 from "components/Sections/Section6/Section6";
import Section2 from "components/Sections/Section2/Section2";
import Section8 from "components/Sections/Section8/Section8";
import Section12 from "components/Sections/Section12/Section12";
import Hero from "components/Hero/Hero";
import Api from "services";
import {
  defaultHero,
  defaultSection12,
  defaultSection14,
  defaultSection15,
  defaultSection16,
  defaultSection17,
  defaultSection18,
  defaultSection19,
  defaultSection2,
  defaultSection6,
  defaultSection8,
} from "constant";

const AboutUs: React.FC = (props) => {
  // const { response }: any = props;
  // const serviceDomain = process.env.NEXT_PUBLIC_API_URL;

  // const introduce = get(response, "introduce") || {};
  // const coreValues = get(response, "discovery[0]") || {};
  // const discovery = get(response, "discovery[1]") || {};
  // const awardAndStats = get(response, "awards_and_stats") || {};
  // const educationPhiliosphy = get(response, "education_philiosphy") || {};
  // const slider = get(response, "slider") || [];
  // const strategicTargets = get(response, "strategic_targets") || {};
  // const studentPotrait = get(response, "student_potrait") || {};
  // const times = get(response, "times") || {};
  // const highlightMessage = get(response, "highlight_message") || {};
  // const gallery = get(response, "gallery") || {};

  // console.log("response", response);

  return (
    <div className="about-us">
      <Hero
        // {...hero}
        // isShown={hero.is_shown}
        // image={
        //   get(hero, "image.data.attributes.url") &&
        //   serviceDomain + get(hero, "image.data.attributes.url")
        // }
        {...defaultHero}
      />
      <Section14
        // title={introduce.title}
        // content={introduce.content}
        // subTitle={introduce.sub_title}
        // avatar={
        //   get(introduce, "image.data.attributes.url") &&
        //   serviceDomain + get(introduce, "image.data.attributes.url")
        // }
        {...defaultSection14}
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
      <Section15
        // title="A place for learning, discovery, innovation, expression and discourse"
        // list={discovery.items}
        // hashtag={{
        //   title: coreValues.title,
        //   list: coreValues.items?.map((item) => item.title),
        // }}
        {...defaultSection15}
      />
      <Section16
        // isShown={educationPhiliosphy.is_shown}
        // title={educationPhiliosphy.title}
        // directLabel={
        //   educationPhiliosphy.direct_label ||
        //   "Read more about our Mission, Vision, Values, and Philosophy"
        // }
        // directUrl={educationPhiliosphy.direct_url}
        // list={educationPhiliosphy.list}
        {...defaultSection16}
      />
      <Section8
        // {...slider}
        // list={slider?.map((item) => ({
        //   title: item.title,
        //   subTitle: item.sub_title,
        //   content: item.content,
        //   directLabel: item.direct_label,
        //   image:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        variant="green"
        {...defaultSection8}
      />
      <Section17
        // isShown={strategicTargets.is_shown}
        // title={strategicTargets.title}
        // content={strategicTargets.content}
        // directLabel={strategicTargets.direct_label || "Know  more about us"}
        // directUrl={strategicTargets.direct_url}
        // image={
        //   get(strategicTargets, "image.data.attributes.url") &&
        //   serviceDomain + get(strategicTargets, "image.data.attributes.url")
        // }
        // list={strategicTargets.list}
        {...defaultSection17}
      />
      <Section18
        // isShown={studentPotrait.is_shown}
        // title={studentPotrait.title}
        // directLabel={studentPotrait.direct_label || "Know more about us"}
        // directUrl={studentPotrait.direct_url}
        // list={studentPotrait.items?.map((item) => ({
        //   title: item.title,
        //   content: item.content,
        //   role: item.sub_title,
        //   avatar:
        //     get(item, "image.data.attributes.url") &&
        //     serviceDomain + get(item, "image.data.attributes.url"),
        // }))}
        {...defaultSection18}
      />
      <Section19
        // isShown={times.is_shown}
        // title={times.title}
        // image={
        //   get(times, "image.data.attributes.url") &&
        //   serviceDomain + get(times, "image.data.attributes.url")
        // }
        // list={times.items?.map((item) => ({
        //   title: item.sub_title,
        //   time: item.title,
        //   content: item.content,
        // }))}
        {...defaultSection19}
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
        background="green"
      />
      <Section12
        // title={gallery.title}
        // content={gallery.content}
        // directLabel={gallery.direct_label}
        // directUrl={gallery.direct_url}
        // list={gallery.items?.map((item) =>
        //   get(item, "image.data.attributes.url")
        // )}
        {...defaultSection12}
        title="Campus & Facilities"
      />
    </div>
  );
};

export async function getServerSideProps() {
  const params = {
    populate: "deep,4",
  };
  const query = qs.stringify(params);
  // const response = await Api.get(`/api/about-us-pages?${query}`);
  const response = {};
  const aboutUsPageData = get(response, "data.data[0].attributes");
  return {
    props: { response: aboutUsPageData || {} }, // will be passed to the page component as props
  };
}

export default AboutUs;
