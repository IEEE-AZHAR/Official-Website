import React, { Component } from "react";

import styles from "./style.module.css";

import IEEEStr650 from "assets/images/structure-650.jpg";
import IEEEStr1200 from "assets/images/structure-1200.jpg";
import IEEEStr2500 from "assets/images/structure-2500.jpg";

class Structure extends Component {
  render() {
    return (
      <>
        <section className={styles.IEEE_str}>
          <div className={styles.IEEE_Str_content}>
            <h1 className={styles.IEEE_Str_content__heading}>Our Structure</h1>
            <div className={styles.IEEE_str_img}>
              <img
                src={
                  window.innerWidth <= 767
                    ? IEEEStr650
                    : window.innerWidth >= 1200
                    ? IEEEStr1200
                    : IEEEStr2500
                }
                alt="IEEE Al-Azhar -structure-team"
                className={styles.IEEE_str_img__structureImg}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Structure;
