import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Section6 from "./Section6";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Section6",
  component: Section6,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Section6>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Section6> = (args) => (
  <Section6 {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  image: "https://picsum.photos/1000/500",
  title: "A highlight message on Innovation & Futuristic Outlook",
  content:
    "A highly accomplished electrical engineer and computer scientist with expertise in the areas of wireless, cybersecurity, and ",
  directLabel: "Explore Opportunities",
  directUrl: "",
};
