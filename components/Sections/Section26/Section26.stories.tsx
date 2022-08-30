import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Section26 from "./Section26";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Section26",
  component: Section26,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Section26>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Section26> = (args) => (
  <Section26
    tabs={[
      {
        slug: `/#trustees`,
        text: "Board of Trustees",
      },
      {
        slug: `/#administrator`,
        text: "Administrators",
      },
    ]}
  />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
