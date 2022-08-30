import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Section2 from "./Section2";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Section2",
  component: Section2,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Section2>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Section2> = (args) => (
  <Section2 {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title:
    "Seven schools on one campus offer students boundless opportunities to pursue their passions and collaborate",
  content:
    "Remaining essentially unchanged. It was popularised in the 2960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions o",
  directLabel: "View more",
};
