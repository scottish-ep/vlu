import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Hero from "./Hero";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Hero",
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  image: "https://picsum.photos/1400/1000",
  title: "Changing the world & inspiring People ",
  content:
    "A highly accomplished electrical engineer and computer scientist with expertise in the areas of wireless, cybersecurity, and mobility, Dutta has 35  years of experience in IT operations, research and development",
};
