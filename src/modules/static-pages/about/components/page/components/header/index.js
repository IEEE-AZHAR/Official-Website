import React, { Component } from "react";
import styles from "./style.module.css";
import AboutVideo from "../../../video";

class AboutHeader extends Component {
  render() {
    return (
      <header className={styles.header_about}>
        <h1 className={styles.header_about__heading}> Know more About Us </h1>
        <AboutVideo autoPlay={true} />
      </header>
    );
  }
}
export default AboutHeader;
