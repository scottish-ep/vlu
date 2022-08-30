import classNames from "classnames";
import Icon from "components/Icon/Icon";
import { useRouter } from "next/router";
import styles from "./SeeMoreBtn.module.scss";

interface SeeMoreBtnProps {
  label?: string;
  url?: string;
  labelColor?: string;
  buttonColor?: string;
  iconColor?: string;
  className?: string;
  onClick?: () => void;
  animation?: string;
}

const SeeMoreBtn = (props: SeeMoreBtnProps) => {
  const {
    label,
    url,
    className,
    buttonColor,
    labelColor,
    iconColor,
    onClick,
    animation,
  } = props;
  const router = useRouter();

  const handleDirect = () => {
    url && router.push(url);
    onClick?.();
  };

  const btnClassNames = classNames(styles.see_more_btn, className);

  return (
    <div data-aos={animation} className={btnClassNames} onClick={handleDirect}>
      <div style={{ color: labelColor }}>{label}</div>
      <div
        className={styles.see_more_btn_icon}
        style={{ backgroundColor: buttonColor }}
      >
        <Icon icon="carret-right" color={iconColor || "white"} />
      </div>
    </div>
  );
};

export default SeeMoreBtn;
