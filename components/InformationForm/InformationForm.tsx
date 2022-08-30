import React, { useState } from "react";

import SectionLayout from "components/SectionLayout/SectionLayout";
import FLagBtn from "components/FlagBtn/FlagBtn";
import Input from "components/Input/Input";
import TextArea from "components/TextArea/TextArea";

import styles from "./InformationForm.module.scss";

interface InformationFormProps {
  onSubmit?: (data) => void;
}

const InformationForm: React.FC<InformationFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState({
    name: "",
    code: "",
    phone: "",
    email: "",
    note: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: value.name.trim(),
      code: value.code.trim(),
      phone: value.phone.trim(),
      email: value.email.trim(),
      note: value.note.trim(),
    };

    onSubmit?.(data);
  };

  return (
    <SectionLayout
      className={styles.section}
      childrenClassName={styles.section_container}
    >
      <div
        data-aos="fade-right"
        data-aos-duration="400"
        className={styles.left}
      >
        <h2 className={styles.left_title}>
          More Information & Help
          <div className={styles.box}></div>
        </h2>
        <p className={styles.left_content}>Connect Student Support Center</p>
      </div>
      <form
        data-aos="fade-left"
        data-aos-duration="400"
        className={styles.right}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6">
          <Input
            variant="filled"
            className="sm:w-1/2"
            placeholder="Name"
            maxLength={100}
            required
            value={value.name}
            onChange={(e) =>
              setValue({ ...value, name: (e.target as HTMLInputElement).value })
            }
          />
          <Input
            variant="filled"
            className="sm:w-1/2"
            placeholder="Student Code (optional)"
            maxLength={100}
            required
            value={value.code}
            onChange={(e) =>
              setValue({ ...value, code: (e.target as HTMLInputElement).value })
            }
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6">
          <Input
            variant="filled"
            className="sm:w-1/2"
            placeholder="Phone"
            pattern="[0-9]{10}"
            maxLength={10}
            title="Số điện thoại không hợp lệ"
            required
            value={value.phone}
            onChange={(e) =>
              setValue({
                ...value,
                phone: (e.target as HTMLInputElement).value,
              })
            }
          />
          <Input
            variant="filled"
            type="email"
            className="sm:w-1/2"
            placeholder="Email"
            required
            maxLength={100}
            title="Email không hợp lệ"
            value={value.email}
            onChange={(e) =>
              setValue({
                ...value,
                email: (e.target as HTMLInputElement).value,
              })
            }
          />
        </div>
        <TextArea
          className="h-[176px] sm:mb-[23px] sm:h-[214px]"
          placeholder="Your Question"
          required
          maxLength={4000}
        />
        <FLagBtn type="submit">Submit</FLagBtn>
      </form>
    </SectionLayout>
  );
};

export default InformationForm;
