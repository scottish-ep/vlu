import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import classNames from "classnames";

import styles from "./TextArea.module.scss";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  setValue?: Dispatch<SetStateAction<string>>;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { name, className, setValue, onChange, maxLength, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue?.(e.target.value);
    onChange?.(e);
  };

  return (
    <textarea
      className={classNames(styles.textarea, className)}
      name={name}
      onChange={handleChange}
      maxLength={maxLength}
      {...rest}
    ></textarea>
  );
};

export default TextArea;
