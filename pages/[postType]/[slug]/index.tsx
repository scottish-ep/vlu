import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import SectionLayout from "components/SectionLayout/SectionLayout";
import InformationForm from "components/InformationForm/InformationForm";
import Image from "next/image";

import { breadcrumbPostType } from "constant";

import { useRouter } from "next/router";

import styles from "styles/Individual.module.scss";
import EventForm from "components/EventForm/EventForm";
import { PostTypes } from "enums";
import Break from "components/Break/Break";
import { isArray } from "utils";
import Icon from "components/Icon/Icon";
import FLagBtn from "components/FlagBtn/FlagBtn";
import Card from "components/Card/Card";
import SeeMoreBtn from "components/SeeMoreBtn/SeeMoreBtn";
import { divide } from "lodash";

const DetailsPost = (props) => {
  const router = useRouter();
  const { postType } = router.query;

  const post = {
    title: "Title of post",
    from: "18/06/22",
    to: "19/06/22",
    time: "18:00",
    location:
      " 45 Nguyễn Khắc Nhu Chi, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh",
    cover: "../../../public/images/banner-events1.svg",
    summary: [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
    ],
    references: [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet diam ac libero porta euismod. Mauris congue dignissim luctus.",
      },
    ],
  };

  const fakeBreadcrumbs = [
    {
      text: "News & Events",
      path: "#",
    },
    {
      text: post.title,
      path: "#",
    },
  ];

  const IconSocial = [
    {
      icon: "twitter",
      path: "../../../public/icons/icon-twitter.svg",
    },
    {
      icon: "facebook",
      path: "../../../public/icons/icon-facebook.svg",
    },
    {
      icon: "linkedin",
      path: "../../../public/icons/icon-linkedin.svg",
    },
  ];

  const news = [
    {
      category: "News",
      image: require("public/images/section5-3.png"),
      title:
        "The VLU Faculty of Technology has completed a project to investigate in a new product...",
      time: "18:00",
    },
    {
      category: "News",
      image: require("public/images/section5-3.png"),
      title:
        "The VLU Faculty of Technology has completed a project to investigate in a new product...",
      time: "18:00",
    },
    {
      category: "News",
      image: require("public/images/section5-3.png"),
      title:
        "The VLU Faculty of Technology has completed a project to investigate in a new product...",
      time: "18:00",
    },
  ];

  const events = [
    {
      category: "Events",
      image: require("public/images/section5-3.png"),
      title:
        "The VLU Faculty of Technology has completed a project to investigate in a new product...",
      time: "18:00",
      from: "16/2/20220",
    },
    {
      category: "Events",
      image: require("public/images/section5-3.png"),
      title:
        "The VLU Faculty of Technology has completed a project to investigate in a new product...",
      time: "18:00",
      from: "16/2/20220",
    },
    {
      category: "Events",
      image: require("public/images/section5-3.png"),
      title:
        "The VLU Faculty of Technology has completed a project to investigate in a new product...",
      time: "18:00",
      from: "16/2/20220",
    },
  ];

  const relatedLinks = [
    {
      label: "Helping a local business reinvent itself ?",
      url: "#",
    },
    {
      label: "How to write content about your photographs?",
      url: "#",
    },
  ];

  const Summary = () => {
    return (
      <div className={styles.summary}>
        <h3>Summary</h3>
        {isArray(post.summary) &&
          post.summary.map((item, index) => (
            <div className="flex items-start" key={index}>
              <Icon className={styles.icon} icon="dot" size={16} />
              <p className="ml-[18px]">{item.title}</p>
            </div>
          ))}
      </div>
    );
  };

  const References = () => {
    return (
      <div className={styles.summary}>
        <h3>References</h3>
        {isArray(post.references) &&
          post.references.map((item, index) => (
            <div className="flex items-start" key={index}>
              <p className={styles.index}>[{index}]</p>
              <p className="ml-[18px]">{item.title}</p>
            </div>
          ))}
        <Break />
      </div>
    );
  };

  const Hero = () => {
    return (
      <SectionLayout className={styles.hero}>
        <Breadcrumbs data={fakeBreadcrumbs} />
        <div className={styles.post_type}>{postType} TYPE</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className="flex flex-col justify-between md:flex-row">
          <div className={styles.informations}>
            <div className="flex justify-between">
              <div className={styles.row}>
                <p className={styles.property}>
                  {postType === PostTypes.EVENTS ? "Date" : "By"}
                </p>
                {post.from && (
                  <p className={styles.text}>
                    {post.from} - {post.to}
                  </p>
                )}
              </div>
              {postType === PostTypes.EVENTS && (
                <div className={styles.row}>
                  <p className={styles.property}>Time</p>
                  <p className={styles.text}>{post.time}</p>
                </div>
              )}
            </div>
            <div className={styles.row}>
              <p className={styles.property}>
                {postType === PostTypes.EVENTS ? "Location" : "Date"}
              </p>
              <p className={styles.text}>{post.location}</p>
            </div>
          </div>
          <div className={styles.social_sharing}>
            <p className={styles.property}>SHARE IN ON</p>
            <div className="flex gap-[10px] md:mt-[15px] md:gap-[15px]">
              <Image
                className="pointer"
                src={require("../../../public/icons/icon-twitter.svg")}
                width={32}
                height={32}
              />
              <Image
                className="pointer"
                src={require("../../../public/icons/icon-facebook.svg")}
                width={32}
                height={32}
              />
              <Image
                className="pointer"
                src={require("../../../public/icons/icon-linkedin.svg")}
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <Image
            src={require("../../../public/images/banner-events1.svg")}
            layout="responsive"
          />
        </div>
      </SectionLayout>
    );
  };

  const RelatedLink = () => {
    return (
      <div className={styles.related_items}>
        {relatedLinks.map((item, index) => (
          <p
            key={index}
            className={styles.link}
            onClick={() => router.push(item.url)}
          >
            {item.label}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.individual}>
      <Hero data-aos="fade-right" />
      {postType === PostTypes.EVENTS && <EventForm className={styles.form} />}
      <SectionLayout>
        <div className={styles.detail_post} data-aos="fade-up">
          <div className={styles.content}>
            <div className={styles.introduce}>
              <p className="font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sit amet diam ac libero porta euismod. Mauris congue dignissim
                luctus. Nunc congue pretium odio, sit amet molestie nisl posuere
                nec. Quisque non lorem id augue maximus tempor.
              </p>
              <p className="font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sit amet diam ac libero porta euismod. Mauris congue dignissim
                luctus. Nunc congue pretium odio, sit amet molestie nisl posuere
                nec. Quisque non lorem id augue maximus tempor.
              </p>
            </div>
            <Break className={styles.break} />
            <div className={styles.details}>
              <h3>Article Sub Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sit amet diam ac libero porta euismod. Mauris congue dignissim
                luctus. Nunc congue pretium odio, sit amet molestie nisl posuere
                nec. Quisque non lorem id augue maximus tempor.
              </p>
              <div className={styles.wrapper_image}>
                <Image
                  src={require("../../../public/images/image-events-1.svg")}
                />
                <span className={styles.captions}>
                  Pic Resprsenting something its caption
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sit amet diam ac libero porta euismod. Mauris congue dignissim
                luctus. Nunc congue pretium odio, sit amet molestie nisl posuere
                nec. Quisque non lorem id augue maximus tempor.
              </p>
              <h3>Article Sub Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sit amet diam ac libero porta euismod. Mauris congue dignissim
                luctus. Nunc congue pretium odio, sit amet molestie nisl posuere
                nec. Quisque non lorem id augue maximus tempor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sit amet diam ac libero porta euismod. Mauris congue dignissim
                luctus. Nunc congue pretium odio, sit amet molestie nisl posuere
                nec. Quisque non lorem id augue maximus tempor.
              </p>
              <h3>Article Sub Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sit amet diam ac libero porta euismod. Mauris congue dignissim
                luctus. Nunc congue pretium odio, sit amet molestie nisl posuere
                nec. Quisque non lorem id augue maximus tempor.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sit amet diam ac libero porta euismod. Mauris congue dignissim
                luctus. Nunc congue pretium odio, sit amet molestie nisl posuere
                nec. Quisque non lorem id augue maximus tempor.
              </p>
              <Break className={styles.break} />
              {isArray(post.summary) && <Summary />}
              {postType === PostTypes.PUBLICATIONS && isArray(post.references) && (
                <div>
                  <Break />
                  <References />
                  <div className="flex justify-between">
                    <FLagBtn
                      iconColor="#1F2251"
                      className={`${styles.button} ${styles.author}`}
                    >
                      Get right & content
                    </FLagBtn>
                    <FLagBtn className={styles.button}>Download pdf</FLagBtn>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.related_post}>
            <div className={styles.list_right}>
              <p className={styles.title_related_post}>Recent News</p>
              <div>
                {isArray(news) &&
                  news.map((card, index) => (
                    <Card
                      key={index}
                      image={card.image}
                      title={card.title}
                      category={card.category}
                      className={styles.related_items}
                      size="small"
                      layout="horizontal"
                      dataAos="fade-left"
                      dataAosDuration="400"
                    />
                  ))}
              </div>
              <SeeMoreBtn
                label="Explore all News"
                className={styles.btn_more}
              />
              <Break className={styles.break} />
              <p className={styles.title_related_post}>Recent Events</p>
              <div>
                {isArray(events) &&
                  events.map((card, index) => (
                    <Card
                      key={index}
                      image={card.image}
                      title={card.title}
                      category={card.category}
                      className={styles.related_items}
                      size="small"
                      layout="horizontal"
                      dataAos="fade-left"
                      dataAosDuration="400"
                    />
                  ))}
              </div>
              <SeeMoreBtn
                label="Explore all Events"
                className={styles.btn_more}
              />
              <Break className={styles.break} />
              <p className={styles.title_related_post}>Other related links</p>
              {isArray(relatedLinks) && <RelatedLink />}
            </div>
          </div>
        </div>
      </SectionLayout>
      <InformationForm />
    </div>
  );
};

export default DetailsPost;
