import React, { useState } from "react";

import SectionLayout from "components/SectionLayout/SectionLayout";
import FLagBtn from "components/FlagBtn/FlagBtn";
import Input from "components/Input/Input";
import TextArea from "components/TextArea/TextArea";

import styles from "./EventForm.module.scss";
import Select from "components/Select/Select";

import classNames from "classnames";

interface EventFormProps {
  onSubmit?: (data) => void;
  className?: string;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, className }) => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    id: "",
    department: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: value.firstName.trim(),
      lastName: value.lastName.trim(),
      phone: value.phone.trim(),
      email: value.email.trim(),
      id: value.id.trim(),
      department: value.department.trim(),
    };

    onSubmit?.(data);
  };

  return (
    <SectionLayout
      className={classNames(styles.event_form, className)}
      childrenClassName={styles.section_container}
    >
      <div data-aos="fade-right" data-aos-duration="400">
        <h2 className={styles.title}>
          Register for the event
          <div className={styles.box}></div>
        </h2>
      </div>
      <form
        data-aos="fade-left"
        data-aos-duration="400"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <Input
            variant="filled"
            className="w-full sm:w-1/2"
            placeholder="First Name"
            maxLength={352}
            required
            value={value.firstName}
            onChange={(e) =>
              setValue({
                ...value,
                firstName: (e.target as HTMLInputElement).value,
              })
            }
          />
          <Input
            variant="filled"
            className="w-full sm:w-1/2"
            placeholder="Last Name"
            maxLength={352}
            required
            value={value.lastName}
            onChange={(e) =>
              setValue({
                ...value,
                lastName: (e.target as HTMLInputElement).value,
              })
            }
          />
        </div>
        <div className={styles.row}>
          <Input
            variant="filled"
            placeholder="Email"
            className="w-full"
            maxLength={352}
            required
            value={value.email}
            onChange={(e) =>
              setValue({
                ...value,
                email: (e.target as HTMLInputElement).value,
              })
            }
          />
        </div>
        <div className={styles.row}>
          <Input
            variant="filled"
            className="w-full sm:w-1/2"
            placeholder="Phone"
            pattern="[0-9]{10}"
            maxLength={352}
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
            className="w-full sm:w-1/2"
            placeholder=" Van Lang ID ( optional )"
            maxLength={352}
            required
            value={value.id}
            onChange={(e) =>
              setValue({
                ...value,
                id: (e.target as HTMLInputElement).value,
              })
            }
          />
        </div>
        <div className="mb-[25px] sm:mb-[40px]">
          <label className={styles.label}>Major:</label>
          <Select
            defaultValue={value.department}
            className="flex gap-5 mt-3"
            placeholder="Select Department"
          />
        </div>
        <FLagBtn type="submit">Submit</FLagBtn>
      </form>
    </SectionLayout>
  );
};

export default EventForm;
