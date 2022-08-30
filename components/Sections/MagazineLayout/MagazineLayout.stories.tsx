import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MagazineLayout from "./MagazineLayout";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MagazineLayout",
  component: MagazineLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MagazineLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MagazineLayout> = (args) => (
  <MagazineLayout {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  image: "public/images/magazine-1.svg",
  category: "Science",
  title: "How to design a product that can grow itself 10x in year",
  author: "Abdhur Rahman",
  date: "24/02/22",
  content:
    "I grew up in Bowhill, a former coal-mining village in Fife, Scotland. Thanks to the dedication and support of my teachers at Denend Primary School and Glenrothes High School, I became the first person in my family to attend University. I studied Classics and Gaelic at Edinburgh University and taught at Harvard University before coming to University College. I have been a Research Fellow of the Alexander von Humboldt-Stiftung, the British Academy, and the Leverhulme Trust, and have also taught as a visiting Professor at Universities in Germany and New Zealand. ",
  downloadUrl: "#",
};
