import React, { Component } from "react";
import styles from "./style.module.css";
import LogoLight from "assets/images/logo.png";
import LogoDark from "assets/images/logo-white.png";
import { ThemeProvider } from "globals/contexts/theme.context.js";

class IEEESection extends Component {
  static contextType = ThemeProvider;

  render() {
    const { theme } = this.context;
    return (
      <>
        <section className={styles.AZA_IEEE_sec}>
          <h1 className={styles.AZA_IEEE_sec__heading}>IEEE Al-AZhar</h1>
          <div className={styles.content_AZAIEEE}>
            <div className={styles.IEEEAZALogo}>
              <img
                src={theme === "light" ? LogoLight : LogoDark}
                className={styles.IEEEAZALogo__Azalogo}
                alt=""
                width="300"
              />
            </div>
            <div className={styles.IEEEAZApara}>
              <p className={styles.IEEEAZApara__Azaparagraph}>
                IEEE Al-Azhar University Student Branch is a student activity
                continued to IEEE Egypt Section, located in Al-Azhar University
                in Cairo and est. 2011 We provide free courses and trainings for
                students (especially engineering students) to bridge the gap
                between the scientific and practical sides The internal
                structure of the team includes a number of committees which are
                academic like technical and some other operational committees
                like HR, PR & FR, Marketing, Multimedia, DCR and Logistics
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default IEEESection;
