import { get } from "lodash";

import Section9 from "components/Sections/Section9/Section9";
import { defaultMagazines } from "constant";
import Api from "services";

import styles from "styles/Magazine.module.scss";
import Section4 from "components/Sections/Section4/Section4";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import SectionLayout from "components/SectionLayout/SectionLayout";
import { isArray } from "utils";
import MagazineLayout from "components/Sections/MagazineLayout/MagazineLayout";

import { MagazineProps } from "components/Sections/MagazineLayout/MagazineLayout";

const MagazinePage = (props) => {
  const fakeBreadcrumbs = [
    {
      text: "News & Events",
      path: "#",
    },
    {
      text: "Magazine",
      path: "#",
    },
    {
      text: "Name of post",
      path: "#",
    },
  ];

  const ListMagazines = () => {
    return (
      <div className={styles.lists}>
        <MagazineLayout
          className={styles.item}
          image={defaultMagazines.image}
          category={defaultMagazines.category}
          title={defaultMagazines.title}
          author={defaultMagazines.author}
          date={defaultMagazines.date}
          content={defaultMagazines.content}
          downloadUrl={defaultMagazines.downloadUrl}
        />
      </div>
    );
  };
  console.log("defaultMagazines", defaultMagazines);
  return (
    <div className={styles.magazines}>
      <SectionLayout>
        <Breadcrumbs data={fakeBreadcrumbs} />
        <ListMagazines />
      </SectionLayout>
    </div>
  );
};

export default MagazinePage;
