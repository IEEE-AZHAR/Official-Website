import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import AboutHeader from "./components/header";
import IEEESection from "./components/IEEESection/index";
import Structure from "./components/structure/index";
import IEEEAZHARSection from "./components/IEEEAZHARSection/index";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title> About us | IEEE Al-Azhar Student Branch</title>
      </Helmet>
      <div className="container">
        <AboutHeader />
        <IEEESection />
        <IEEEAZHARSection />
        <Structure />
      </div>
    </>
  );
}
export default AboutPage;
