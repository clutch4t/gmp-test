import React from "react";
import Header from "./Header";
import Hero from "./Hero";

const Layout = ({ menuData, data, languageData }) => {
  return (
    <div>
      <Header menuData={menuData} languageData={languageData} />
      <Hero data={data} />
    </div>
  );
};

export default Layout;
