import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import Icon from "components/Icon/Icon";

import styles from "./FlagBtn.module.scss";

interface FlagBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | false;
  url?: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  label?: string;
  iconColor?: string;
  size?: "small" | "default" | "large";
}

const FLagBtn: React.FC<FlagBtnProps> = (props) => {
  const {
    variant = "primary",
    url,
    label,
    className,
    size = "default",
    onClick,
    type = "button",
    children,
    ...rest
  } = props;
  const router = useRouter();

  const handleDirect = () => url && router.push(url);

  const btnClassNames = classNames(styles.flag_btn, className, {
    [styles.small]: size === "small",
    [styles.secondary]: variant === "secondary",
    [styles.tertiary]: variant === "tertiary",
  });

  return (
    <button
      type={type}
      className={btnClassNames}
      onClick={(e) => {
        handleDirect();
        onClick?.(e);
      }}
      {...rest}
    >
      <div className={styles.label}>{children || label}</div>
      <Icon className={styles.icon} icon="flag_btn" width="100%" />
    </button>
  );
};

export default FLagBtn;
