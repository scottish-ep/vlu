import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Section5 from "./Section5";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Section5",
  component: Section5,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Section5>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Section5> = (args) => (
  <Section5 {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Programs that we offer",
  list: [
    {
      image: require("public/images/section5-1.png"),
      title: "Undergraduate Programs",
      content:
        "Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise",
      directLabel: "Explore Undergraduate Programs",
      directUrl: "",
    },
    {
      image: require("public/images/section5-2.png"),
      title: "Graduate Programs",
      content:
        "Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise",
      directLabel: "Explore Undergraduate Programs",
      directUrl: "",
    },
    {
      image: require("public/images/section5-3.png"),
      title: "International Programs",
      content:
        "Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise",
      directLabel: "Explore Undergraduate Programs",
      directUrl: "",
    },
  ],
};
