import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LeacturerProfilesLayout from "./LeacturerProfilesLayout";
import { defaultLeaturerProfile } from "constant";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/LeacturerProfilesLayout",
  component: LeacturerProfilesLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LeacturerProfilesLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LeacturerProfilesLayout> = (args) => (
  <LeacturerProfilesLayout {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = defaultLeaturerProfile
