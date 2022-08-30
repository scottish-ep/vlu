import { useRouter } from "next/router";
import { useState } from "react";
import classNames from "classnames";

import Card from "components/Card/Card";
import Icon from "components/Icon/Icon";
import SectionLayout from "components/SectionLayout/SectionLayout";
import { contacts, otherResources } from "constant";

import styles from "./Footer.module.scss";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import CustomImage from "components/CustomImage/CustomImage";

const navigationHeader = [
  { title: "Email", content: "info@vlu.edu.vn" },
  { title: "Train", content: "028 7109 2212" },
  { title: "Admissions", content: "028 7109 2212" },
];

const navigationBody = [
  {
    title: "Services",
    content: [
      { title: "Email marketing", content: "" },
      { title: "Campaigns", content: "" },
      { title: "Branding", content: "" },
      { title: "Offline", content: "" },
    ],
  },
  {
    title: "Faculty groups",
    content: [
      { title: "Technology school", content: "" },
      { title: "Medical Science school", content: "" },
      { title: "Art school", content: "" },
      { title: "Architecture school", content: "" },
    ],
  },
  {
    title: "About",
    content: [
      { title: "Our story", content: "" },
      { title: "Benefits", content: "" },
      { title: "Team", content: "" },
      { title: "Careers", content: "" },
    ],
  },
  {
    title: "Follow us",
    content: [
      {
        title: "Facebook",
        content: "",
        icon: require("public/images/facebook-logo.svg"),
      },
      {
        title: "Twitter",
        content: "",
        icon: require("public/images/twitter-logo.svg"),
      },
      {
        title: "Instagram",
        content: "",
        icon: require("public/images/instagram-logo.svg"),
      },
    ],
  },
];

const Footer = () => {
  const [selectedContact, setSelectedContact] = useState<string | undefined>();
  const router = useRouter();

  const handleSelectContact = (contact) => {
    if (selectedContact === contact) {
      setSelectedContact(undefined);
    } else {
      setSelectedContact(contact);
    }
  };

  return (
    <div className={styles.footer}>
      <SectionLayout
        className={styles.contact}
        childrenClassName={styles.contact_container}
      >
        <div className={styles.left}>
          <div className={styles.title}>Key contacts</div>
          <div className={styles.contacts}>
            {contacts.map((contact) => {
              const isSelected = selectedContact === contact.title;
              return (
                <div
                  key={contact.title}
                  className={styles.item}
                  onClick={() => handleSelectContact(contact.title)}
                >
                  <div className={styles.label}>
                    <div className={styles.item_title}>{contact.title}</div>
                    <Icon icon={isSelected ? "minus" : "plus"} />
                  </div>
                  <div
                    className={classNames(styles.content, {
                      [styles.expand]: isSelected,
                    })}
                  >
                    {contact.content}
                  </div>
                </div>
              );
            })}
            <SeeMoreBtn label="View all contact" url="" className="mt-10" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>Other Resources & Links</div>
          <div className={styles.contacts}>
            {otherResources.map((item) => (
              <Card
                size="small"
                key={item.title}
                className={styles.card}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </SectionLayout>

      <SectionLayout
        className={styles.navigation}
        childrenClassName={styles.navigation_container}
      >
        <div className={styles.navigation_header}>
          <div className={styles.col} onClick={() => router.push("/")}>
            <CustomImage
              src={require("public/icons/white-logo.svg")}
              alt="logo"
              layout="fixed"
              width={200}
              onClick={() => router.push("/")}
              className="cursor-pointer"
            />
          </div>
          {navigationHeader.map((item, index) => (
            <div key={index} className={styles.col}>
              <div className={styles.header_title}>{item.title}</div>
              <div className={styles.header_content}>{item.content}</div>
            </div>
          ))}
        </div>
        <div className={styles.navigation_body}>
          {navigationBody.map((item, index) => (
            <div key={index} className={styles.col}>
              <div className={styles.body_title}>{item.title}</div>
              <div className={styles.body_content}>
                {item.content.map((content, index) => (
                  <div key={index} className={styles.body_content_item}>
                    <CustomImage
                      src={content.icon}
                      layout="intrinsic"
                      width={20}
                    />
                    {content.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.navigation_footer}>
          <div className={styles.copy_right}>
            Copyright © 2020. LogoIpsum. All rights reserved.
          </div>
          <div className={styles.footer_right}>
            <div className={styles.copy_right}>Terms and conditions</div>
            <div className={styles.copy_right}>Privacy policies</div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Footer;
