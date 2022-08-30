import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Section1 from "./Section1";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Section1",
  component: Section1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Section1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Section1> = (args) => (
  <Section1 {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  image: "/images/hero-banner.png",
  title:
    "Seven schools on one campus offer students boundless opportunities to pursue their passions and collaborate",
  content:
    "Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions o",
  directLabel: "View more",
};
