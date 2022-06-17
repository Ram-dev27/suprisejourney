import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CallIcon from "@mui/icons-material/Call";
import BusinessIcon from "@mui/icons-material/Business";
import companyLogo from "../../assets/companyLogo.jpeg";
import youtubeIcon from '../../assets/Icons/youtubeIcon.svg'
import styles from "../Footer/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerMain}>
        <div className={styles.companyWrap}>
          <img
            className={styles.companyLogo}
            src={companyLogo}
            alt="companyLogo"
          />
          <span>Suprise Journey</span>
        </div>
        <div>
          <div>Contact US</div>
          <div>
            <PersonPinIcon />
            Name
          </div>
          <div>
            <MailIcon />
            Email
          </div>
          <div>
            <CallIcon />
            phone number
          </div>
          <div>
            <BusinessIcon />
            Address
          </div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <img src={youtubeIcon} alt="youtube"></img>
        social media link</div>
    </div>
  );
};

export default Footer;
