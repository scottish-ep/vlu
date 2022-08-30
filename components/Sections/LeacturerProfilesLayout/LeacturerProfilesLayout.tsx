import classNames from "classnames";
import Break from "components/Break/Break";
import FLagBtn from "components/FlagBtn/FlagBtn";
import { ContactTypes } from "enums";
import Image from "next/image";
import styles from "./LeacturerProfilesLayout.module.scss";
import Icon from "components/Icon/Icon";
import { isArray } from "utils";
import TabsHorizontal, { ITab } from "components/TabsHorizontal/TabsHorizontal";

export interface LeacturerProfilesLayoutProps {
  image: string;
  name?: string;
  typo?: string;
  subjectArea?: string;
  qualification?: string;
  contacts: {
    label: string;
    value: string;
  }[];
  className?: string;
  academicBackground?: string;
  teaching?: string;
  publications?: string;
}

const LeacturerProfilesLayout = (props: LeacturerProfilesLayoutProps) => {
  const {
    image,
    name,
    typo,
    subjectArea,
    qualification,
    className,
    contacts,
    academicBackground,
    teaching,
    publications,
  } = props;

  const contactIcons = {
    [ContactTypes.EMAIL]: "email",
    [ContactTypes.PHONE]: "call",
  };

  const tabList: ITab[] = [
    {
      label: "Academic Background",
      value: "Academic Background",
      content: (
        <p className={styles.content_details}>
          I grew up in Bowhill, a former coal-mining village in Fife, Scotland.
          Thanks to the dedication and support of my teachers at Denend Primary
          School and Glenrothes High School, I became the first person in my
          family to attend University. I studied Classics and Gaelic at
          Edinburgh University and taught at Harvard University before coming to
          University College. I have been a Research Fellow of the Alexander von
          Humboldt-Stiftung, the British Academy, and the Leverhulme Trust, and
          have also taught as a visiting Professor at Universities in Germany
          and New Zealand.{" "}
        </p>
      ),
    },
    {
      label: "Teaching",
      value: "Teaching",
      content: <p className={styles.content_details}>Teaching</p>,
    },
    {
      label: "Publications",
      value: "Publications",
      content: (
        <p className={styles.content_details}>
          I grew up in Bowhill, a former coal-mining village in Fife, Scotland.
          Thanks to the dedication and support of my teachers at Denend Primary
          School and Glenrothes High School, I became the first person in my
          family to attend University. I studied Classics and Gaelic at
          Edinburgh University and taught at Harvard University before coming to
          University College. I have been a Research Fellow of the Alexander von
          Humboldt-Stiftung, the British Academy, and the Leverhulme Trust, and
          have also taught as a visiting Professor at Universities in Germany
          and New Zealand.{" "}
        </p>
      ),
    },
  ];

  return (
    <div className={classNames(styles.container, className)} data-aos="zoom-in">
      <div className={styles.image}>
        <Image src={image} layout="fill" alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.typo}>{typo}</div>
        <div className={styles.row}>
          <p className={styles.label}>Subject Area</p>
          <p className={styles.text}>{subjectArea}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>Qualification</p>
          <p className={styles.text}>{qualification}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.label}>Contact</p>
          <div className={styles.contacts}>
            {isArray(contacts) &&
              contacts.map((item) => (
                <div key={item.label} className={styles.item}>
                  <Icon
                    icon={contactIcons[item.label]}
                    size="16"
                    color="#D72134"
                  />
                  <p className={styles.text}>{item.value}</p>
                </div>
              ))}
          </div>
        </div>
        <Break className={styles.break} />
        <TabsHorizontal
          type="secondary-outline"
          tabList={tabList}
          selectedTab="Academic Background"
        />
      </div>
    </div>
  );
};

export default LeacturerProfilesLayout;
