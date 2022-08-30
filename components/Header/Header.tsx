import Image from "next/image";

import SectionLayout from "components/SectionLayout/SectionLayout";
import { bottomHeaderList, topHeaderList } from "constant";

import styles from "./Header.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "components/Modal/Modal";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import { get, isArray } from "lodash";
import classNames from "classnames";
import Icon from "components/Icon/Icon";

const menuItems = {
  aboutUs: [
    { label: "Mission, Vision, Values, Strategic Targets", value: "" },
    { label: "VLU History & Milestones", value: "" },
    { label: "VLU Board of Trustees and Adminsitrators", value: "" },
    { label: "Quality Accreditation", value: "" },
    { label: "Innovation and Futuristic Outlook", value: "" },
    { label: "Campuses & Facilities", value: "" },
    { label: "Diploma System", value: "", slug: "/about-us/diploma-systems" },
    { label: "Faculties & Institutes", value: "" },
  ],
  academics: [
    {
      label: "Our Programs",
      directLabel: "Explore All Faculty Groups",
      directUrl: "",
      icon: require("public/images/section11-1.svg"),
      list: [
        { label: "Undergraduate Programs", value: "" },
        { label: "Graduate Programs", value: "" },
        { label: "International Programs", value: "" },
      ],
    },
    {
      label: "Our faculty groups",
      icon: require("public/images/section11-2.svg"),
      list: [
        { label: "Technology ", value: "" },
        { label: "Art ", value: "" },
        { label: "Tourism Management ", value: "" },
        { label: "Medical Science ", value: "" },
        { label: "Architecture", value: "" },
        { label: "Business", value: "" },
        { label: "Humanities", value: "" },
      ],
    },
    {
      label: "Our Programs",
      directLabel: "Explore All Majors",
      directUrl: "",
      icon: require("public/images/section11-3.svg"),
      list: [
        { label: "Technology", value: "" },
        { label: "Nursing & Medical Testing", value: "" },
        { label: "Accounting", value: "" },
        { label: "Automotive Engineering", value: "" },
        { label: "Pharmacy", value: "" },
        { label: "Business Adminstration", value: "" },
        { label: "Information Technology", value: "" },
        { label: "Medicine", value: "" },
        { label: "Banking & Finance", value: "" },
      ],
    },
  ],
  admissions: [
    {
      label: "Undergraduate",
      icon: require("public/images/section11-4.svg"),
      list: [
        { label: "Admission Procedure", value: "" },
        { label: "Tution Fee", value: "" },
        { label: "Scholarship", value: "" },
        { label: "Financial Aid", value: "" },
        { label: "News & Events", value: "" },
      ],
    },
    {
      label: "Graduate",
      icon: require("public/images/section11-5.svg"),
      list: [
        { label: "Admission Procedure", value: "" },
        { label: "Tution Fee", value: "" },
        { label: "Scholarship", value: "" },
        { label: "Financial Aid", value: "" },
        { label: "News & Events", value: "" },
      ],
    },
    {
      list: [
        { label: "Interntional Program", value: "" },
        { label: "Proffessional Carreer Support", value: "" },
        { label: "Student exchange opportunities", value: "" },
        { label: "Student care services", value: "" },
        { label: "Resources", value: "" },
        { label: "FAQ", value: "" },
      ],
    },
  ],
  research: [
    {
      label: "Our research",
      icon: require("public/images/section11-6.svg"),
      list: [
        { label: "Focus Areas", value: "" },
        { label: "Research Projects", value: "" },
        { label: "Research Publication", value: "" },
        { label: "Science journals", value: "" },
      ],
    },
    {
      list: [
        { label: "Resource & Facilities", value: "" },
        { label: "Research Unit", value: "" },
        { label: "Partnership", value: "" },
        { label: "Research support", value: "" },
        { label: "Research Integrity & Ethics", value: "" },
        { label: "Research Awards", value: "" },
        { label: "News &  Events", value: "" },
      ],
    },
  ],
  lifeAtVlu: [
    {
      list: [
        {
          label: "Freshmen",
          value: "",
          icon: require("public/images/section11-1.svg"),
        },
        {
          label: "International Student",
          value: "",
          icon: require("public/images/section11-2.svg"),
        },
      ],
    },
    {
      label: "Life on campus",
      icon: require("public/images/section11-3.svg"),
      list: [
        { label: "Acommodation", value: "" },
        { label: "IT & Technology", value: "" },
        { label: "Student Clubs", value: "" },
        { label: "Support Service Center", value: "" },
        { label: "Skills & Work Experiences", value: "" },
        { label: "Community Engagement", value: "" },
      ],
    },
    {
      list: [
        { label: "Student awards", value: "" },
        { label: "Explore All Students Magazines", value: "" },
        { label: "Explore all Ceremonies", value: "" },
        { label: "Explore All Project", value: "" },
      ],
    },
  ],
  newsAndEvents: [
    {
      list: [
        { label: "Explore all News", value: "" },
        { label: "Explore all News", value: "" },
        { label: "Explore all News", value: "" },
        { label: "Explore all News", value: "" },
      ],
    },
  ],
};

const Header = (props) => {
  const { id } = props;
  const router = useRouter();
  const { asPath, pathname } = router;
  const [selectedCategory, setSelectedCategory] =
    useState<{
      [key: string]: any;
    }>();
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [expandDepartment, setExpandDepartment] = useState(false);

  const selectedDepartment = topHeaderList.find((dep) =>
    pathname.includes(dep.value)
  );

  const Logo = () => {
    return (
      <Image
        src={require("public/icons/logo.svg")}
        alt="logo"
        layout="fixed"
        height={42}
        width={138}
        onClick={() => {
          setShowMenuModal(false);
          router.push("/");
        }}
      />
    );
  };

  const handleMenuClick = (category) => {
    setShowMenuModal(true);
    setSelectedCategory(category);
  };

  const handleDirectMenu = () => {
    setShowMenuModal(false);
    router.push(`/${selectedCategory?.slug}`);
  };

  const handleCloseMenuModal = () => {
    setShowMenuModal(false);
  };

  const toggleDepartment = () => setExpandDepartment(!expandDepartment);

  const sectionIcon = (icon) => {
    return (
      icon && (
        <Image alt="icon" src={icon} layout="fixed" width={28} height={28} />
      )
    );
  };

  const currentCategory = bottomHeaderList.find((item) =>
    pathname.includes(item.slug)
  )?.value;

  return (
    <div className={styles.header} id={id}>
      <div className={styles.desktop_header}>
        <SectionLayout
          className={styles.header_top}
          childrenClassName={styles.header_top_container}
        >
          {topHeaderList.map((tab) => (
            <div
              key={tab.value}
              className={classNames(styles.menu_item, {
                [styles.active]: pathname.includes(tab.value),
              })}
              onClick={() => router.push(`/${tab.value}`)}
            >
              {tab.label}
            </div>
          ))}
        </SectionLayout>
        <SectionLayout
          className={styles.header_bottom}
          childrenClassName={styles.header_bottom_container}
        >
          <div className={styles.bottom_left}>
            <Logo />
          </div>
          <div className={styles.bottom_right}>
            {bottomHeaderList.map((tab) => (
              <div
                key={tab.value}
                className={classNames(styles.menu_item, {
                  [styles.current]: currentCategory === tab.value,
                })}
                onClick={() => handleMenuClick(tab)}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </SectionLayout>
        <Modal
          visible={showMenuModal}
          title={
            <>
              {selectedCategory?.label}
              <SeeMoreBtn label="Know more" onClick={handleDirectMenu} />
            </>
          }
          titleClassName={styles.header_modal_title}
          height="100vh"
          onClose={handleCloseMenuModal}
          className={styles.header_modal}
          containerClassName={styles.header_modal_container}
          contentClassName="px-[30px]"
        >
          <div className={styles.scroll_box}>
            <div className={styles.menu}>
              {menuItems[selectedCategory?.value || ""]?.map((section) => {
                if (isArray(section.list)) {
                  return (
                    <div className={styles.section}>
                      {section.label && (
                        <div className={styles.section_label}>
                          {sectionIcon(section.icon)}
                          <div>{section.label}</div>
                        </div>
                      )}
                      <div className={styles.section_container}>
                        {section.list.map((item, index) => (
                          <div
                            key={index}
                            className={classNames(styles.section_item, {
                              [styles.narrow]:
                                selectedCategory?.value == "admissions",
                            })}
                          >
                            {item.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={styles.menu_item}
                      onClick={() => {
                        setShowMenuModal(false);
                        router.push(section.slug);
                      }}
                    >
                      {section.label}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </Modal>
      </div>

      <div className={styles.mobile_header}>
        <SectionLayout childrenClassName={styles.mobile_header_container}>
          <div>
            <Logo />
          </div>
          <div className={styles.right_col}>
            <Icon icon="search" size={30} />
            <Icon icon="calendar-2" size={30} />
            <Icon
              icon="ham---menu"
              size={30}
              onClick={() => setShowMenuModal(true)}
            />
          </div>
        </SectionLayout>
        <Modal
          onClose={handleCloseMenuModal}
          visible={showMenuModal}
          title={<Logo />}
          headerClassName="py-[8px] flex items-center"
          mobileFullHeight
          width="100%"
          mobilePosition="right"
          className={styles.mobile_menu_modal}
        >
          <div className={styles.department}>
            <div className={styles.department_title} onClick={toggleDepartment}>
              <div>Van Lang University</div>
              <Icon
                size={25}
                icon="carret-right"
                className={classNames(styles.carret, {
                  [styles.active]: expandDepartment,
                })}
              />
            </div>
            <div
              className={classNames(styles.department_container, {
                [styles.expand]: expandDepartment,
              })}
            >
              {topHeaderList.map((dep) => (
                <div
                  key={dep.value}
                  className={classNames(styles.department_item, {
                    [styles.selected_dep]:
                      selectedDepartment?.value === dep.value,
                  })}
                  onClick={() => {
                    setShowMenuModal(false);
                    router.push(dep.value);
                  }}
                >
                  {dep.label}
                </div>
              ))}
            </div>
            <div
              className={classNames(styles.selected, {
                [styles.show]: !expandDepartment,
                ["hidden"]: !selectedDepartment?.label,
              })}
            >
              {selectedDepartment?.label}
            </div>
          </div>
          <div className={styles.menu}>
            {bottomHeaderList.map((category, index) => {
              const isCategorySelected =
                selectedCategory?.value === category.value;
              const categoryClassNames = classNames(styles.category, {
                [styles.expand]: isCategorySelected,
              });
              return (
                <div key={index} className={categoryClassNames}>
                  <div
                    className={styles.category_label}
                    onClick={() =>
                      setSelectedCategory(
                        category === selectedCategory ? undefined : category
                      )
                    }
                  >
                    {category.label}
                    <Icon
                      size={25}
                      icon="carret-right"
                      className={classNames(styles.carret, {
                        [styles.active]: isCategorySelected,
                      })}
                    />
                  </div>
                  <div className={styles.category_container}>
                    <SeeMoreBtn
                      className="my-3 text-[16px]"
                      label={`Know more ${category.label}`}
                      onClick={handleDirectMenu}
                    />
                    {menuItems[category.value].map((section, index) => (
                      <div key={index} className={styles.section}>
                        {section.label && (
                          <div
                            className={
                              section.list ? styles.section_label : styles.item
                            }
                          >
                            {sectionIcon(section.icon)}
                            {section.label}
                          </div>
                        )}
                        <div className={classNames(styles.section_container)}>
                          {section.list?.map((item, index) => (
                            <div key={index} className={styles.item}>
                              {item.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
