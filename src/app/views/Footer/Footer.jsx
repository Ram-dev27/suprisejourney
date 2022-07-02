import React from "react";
import { useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CallIcon from "@mui/icons-material/Call";
import BusinessIcon from "@mui/icons-material/Business";
import youtubeIcon from "../../assets/Icons/youtubeIcon.svg";
import suprise from "../../assets/Icons/suprise.png";
import instagramIcon from "../../assets/Icons/instagramIcon.png";
import facebookIcon from "../../assets/Icons/facebookIcon.png";

import { contact } from "../../../strings";
import styles from "../Footer/footer.module.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerMain}>
        <div className={styles.companyWrap}>
          <img
            onClick={() => handleClick()}
            className={styles.companyLogo}
            src={suprise}
            alt="companyLogo"
          />
        </div>
        <div className={styles.contactUs}>
          <div className={styles.contactText}>Contact Us</div>
          <div className={styles.info}>
            <PersonPinIcon />
            <span>{contact.Name}</span>
          </div>
          <div className={styles.info}>
            <MailIcon />
            <span>
              <a href="mailto:surprisejourneyofficial@gmail.com.">
                {contact.MailId}
              </a>
            </span>
          </div>
          <div className={styles.info}>
            <CallIcon />
            <span>{contact.Contact}</span>
          </div>
          <div className={styles.info}>
            <BusinessIcon />
            <span>{contact.Address}</span>
          </div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCbGko3F8lrWuM49Gp4G-vzw/featured"
        >
          <img src={youtubeIcon} alt="youtube"></img>{" "}
        </a>
        <a
          href="https://www.instagram.com/surprise_journey/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="youtube"></img>
        </a>
        <a
          href="https://www.instagram.com/surprise_journey/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="youtube"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
