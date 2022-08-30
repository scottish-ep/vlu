import IcomoonReact from "icomoon-react";
import React from "react";

import iconSet from "./selection.json";

export interface IconProps {
  color?: string;
  size?: number | string;
  icon: string;
  className?: string;
  stroke?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  width?: string | number;
}

const Icon: React.FC<IconProps> = (props) => {
  const {
    style,
    onClick,
    color,
    width,
    size = 20,
    icon = "",
    className = "",
  } = props;

  return icon ? (
    <IcomoonReact
      width={width}
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      style={{ ...style }}
      onClick={onClick}
    />
  ) : null;
};

export default Icon;
