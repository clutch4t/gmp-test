import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/logo.svg";
import German from "@/assets/images/german.svg";
import Dropdown from "@/assets/images/arrow-down.svg";

import { baseUrl } from "@/components/utils/baseUrl";

const Header = ({ menuData, languageData }) => {
  const header = menuData.menu;
  const [currentLanguage, setCurrentLanguage] = useState("De");

  function changeLanguage() {
    if (currentLanguage === "De") {
      setCurrentLanguage("En");
    } else {
      setCurrentLanguage("De");
    }
  }

  function getLanguage() {
    languageData.map((language) => {
      console.log(language);
    });
  }

  return (
    <header className="px-[60px] py-10 flex justify-between items-center z-10 fixed w-full">
      <a href={menuData.site_url} className="flex-none">
        <Image
          src={baseUrl(menuData.logo_white)}
          alt="Logo"
          width={240}
          height={40}
          fetchPriority="high"
        ></Image>
      </a>
      <ul className="flex gap-10">
        {header.map((item) => {
          return (
            <li key={item.uri}>
              <a href={item.uri} className="cursor-pointer">{item.pagetitle}</a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-2">
        <button
          className="flex items-center gap-3 px-5"
          onClick={changeLanguage}
        >
          <Image src={German} width={24} height={24} alt="De"></Image>
          <span>{currentLanguage}</span>
          <Image src={Dropdown} width={16} height={16} alt="Dropdown"></Image>
        </button>
        <button className="py-5 px-[14px] rounded-2xl bg-blue-600 h-12 flex items-center">
          {menuData.header_btn}
        </button>
      </div>
    </header>
  );
};

export default Header;
