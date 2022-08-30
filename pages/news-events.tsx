import React from "react";

import Hero2 from "components/Hero2/Hero2";
import Section35 from "components/Sections/Section35/Section35";
import Section36 from "components/Sections/Section36/Section36";
import Section37 from "components/Sections/Section37/Section37";
import {
  defaultHero2,
  defaultSection35,
  defaultSection36,
  defaultSection37,
} from "constant";

const NewsEvents: React.FC = () => {
  return (
    <div className="news-events">
      <Hero2 {...defaultHero2} />
      <Section35
        {...defaultSection35}
        list={{
          ...defaultSection35.list,
          list: defaultSection35.list.list.map((item) => ({
            ...item,
            category: "News",
          })),
        }}
        title="Featured News"
      />
      <Section36 {...defaultSection36} />
      <Section37 {...defaultSection37} />
    </div>
  );
};

export default NewsEvents;
