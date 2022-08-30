import FLagBtn from "components/FlagBtn/FlagBtn";
import Icon from "components/Icon/Icon";
import Input from "components/Input/Input";
import Radio from "components/Radio/Radio";
import SectionLayout from "components/SectionLayout/SectionLayout";
import Select from "components/Select/Select";
import styles from "./ConsultationForm.module.scss";

const ConsultationForm = () => {
  return (
    <SectionLayout
      className={styles.consultation_form}
      childrenClassName={styles.consultation_form_container}
    >
      <div className={styles.header}>
        <div className={styles.title}>
          Leave your infomation Now for Consultation
        </div>
        <div className={styles.contact}>
          <div>
            <Icon icon="mail" color="#FEBD25" /> v.dtqt@vanlanguni.edu.vn
          </div>
          <div>
            <Icon icon="call" color="#FEBD25" /> 0931 645 130
          </div>
        </div>
      </div>
      <form className={styles.form}>
        <div className="flex gap-5  md:flex-row flex-col">
          <Input placeholder="Name" className="w-full" variant="filled" />
          <Input placeholder="Phone" className="w-full" variant="filled" />
        </div>
        <Input placeholder="Email" variant="filled" />
        <div>
          <label className={styles.label}>You are interested in:</label>
          <div className="flex mt-3 md:gap-5 gap-3 md:flex-row flex-col">
            <Radio label="Graduate" value="graduate" name="intersted" />
            <Radio
              label="Under graduate"
              value="undergraduate"
              name="intersted"
            />
          </div>
        </div>
        <div>
          <label className={styles.label}>Major:</label>
          <Select
            className="flex gap-5 mt-3"
            placeholder="Select Interested Major"
          />
        </div>
        <div>
          <label className={styles.label}>Program:</label>
          <div className="flex gap-5 mt-3 md:flex-row flex-col">
            <Radio label="Standard" value="standard" name="program" />
            <Radio label="Honor" value="honor" name="program" />
            <Radio label="International" value="international" name="program" />
          </div>
        </div>
        <FLagBtn label="Submit" className={styles.submit_btn} />
      </form>
    </SectionLayout>
  );
};

export default ConsultationForm;
