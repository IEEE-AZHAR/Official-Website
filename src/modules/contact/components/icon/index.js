import React, { Component } from "react";
import styles from "./style.module.css";

class Icon extends Component {
  render() {
    return (
      <section className="col-lg m-auto">
        <header>
          <h1 style={{ color: "var(--text-secondary)" }}>Contact Us</h1>
        </header>
        <svg
          className={`bi bi-envelope ${styles["message-icon"]}`}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
            clipRule="evenodd"
          />
          <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
          <a className="sr-only sr-only-focusable" href="#content">
            Skip to main content
          </a>
        </svg>
      </section>
    );
  }
}

export default Icon;
