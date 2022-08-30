import React from "react";

import Section6 from "components/Sections/Section6/Section6";
import Section8 from "components/Sections/Section8/Section8";
import Section12 from "components/Sections/Section12/Section12";
import Section31 from "components/Sections/Section31/Section31";
import Section51 from "components/Sections/Section51/Section51";
import Section52 from "components/Sections/Section52/Section52";
import InformationForm from "components/InformationForm/InformationForm";
import Hero from "components/Hero/Hero";
import {
  defaultHero,
  defaultSection6,
  defaultSection8,
  defaultSection12,
  defaultSection31,
  defaultSection51,
  defaultSection52,
} from "constant";
import { get } from "lodash";

const Alumni: React.FC = () => {
  return (
    <div className="alumni">
      <Hero {...defaultHero} />
      <Section51
        {...defaultSection51}
        list={defaultSection51.list.map((item) => ({
          ...item,
          directLabel: "",
        }))}
      />
      <Section6
        {...defaultSection6}
        title="Life long learning"
        content="Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions o"
        directLabel="Discover now"
        background="green"
      />
      <Section52 {...defaultSection52} />
      <Section31
        {...defaultSection31}
        title="Exclusive Amini card"
        background
      />
      <Section12
        {...defaultSection12}
        directLabel=""
        content=""
        title="Gallery"
        background="blue"
      />
      <Section8
        {...defaultSection8}
        background={false}
        title="Message from the representative of the international university"
      />
      <InformationForm onSubmit={(data) => console.log({ data })} />
    </div>
  );
};

export default Alumni;
