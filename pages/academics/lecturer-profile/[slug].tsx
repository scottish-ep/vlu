import { get } from "lodash";

import Section9 from "components/Sections/Section9/Section9";
import { defaultLeaturerProfile } from "constant";
import Api from "services";

import styles from "styles/Magazine.module.scss";
import Section4 from "components/Sections/Section4/Section4";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import SectionLayout from "components/SectionLayout/SectionLayout";
import { isArray } from "utils";
import LeacturerProfilesLayout from "components/Sections/LeacturerProfilesLayout/LeacturerProfilesLayout";

import { MagazineProps } from "components/Sections/MagazineLayout/MagazineLayout";

const MagazinePage = (props) => {
  const fakeBreadcrumbs = [
    {
      text: "Leacturer & Profiles",
      path: "#",
    },
    {
      text: "Prof Dr Ming shik ko",
      path: "#",
    },
  ];

  const ListMagazines = () => {
    return (
      <div className={styles.lists}>
        <LeacturerProfilesLayout
          className={styles.item}
          image={defaultLeaturerProfile.image}
          name={defaultLeaturerProfile.name}
          typo={defaultLeaturerProfile.typo}
          subjectArea={defaultLeaturerProfile.subjectArea}
          qualification={defaultLeaturerProfile.quaLification}
          contacts={defaultLeaturerProfile.contacts}
          academicBackground={defaultLeaturerProfile.academicBackground}
          teaching={defaultLeaturerProfile.teaching}
          publications={defaultLeaturerProfile.publications}
        />
      </div>
    );
  };

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
