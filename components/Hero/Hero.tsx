import Image from "next/image";

import SectionLayout from "components/SectionLayout/SectionLayout";
import defaultAvatar from "public/images/default-avatar.png";

import styles from "./Hero.module.scss";

interface HeroProps {
  image?: string;
  title?: string;
  content?: string;
  isShown?: boolean;
}

const Hero = (props: HeroProps) => {
  const { title, image, content, isShown } = props;
  if (!isShown) {
    return null;
  }

  return (
    <SectionLayout
      style={{
        backgroundImage: `url('${image || "/images/hero-banner.png"}')`,
      }}
      className={styles.hero}
      childrenClassName={styles.hero_container}
    >
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        className={styles.title}
      >
        {title}
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="500"
        className={styles.content}
      >
        {content}
      </div>
    </SectionLayout>
  );
};
export default Hero;
