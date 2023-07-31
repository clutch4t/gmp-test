import Image from "next/image";
import React from "react";
import German from "@/assets/images/german.svg";
import Dropdown from "@/assets/images/arrow-down.svg";

const Header = ({ menuData }) => {
  const header = menuData.menu;
  return (
    <header className="px-[60px] py-10 flex justify-between items-center z-10 fixed w-full">
      <div className="bg-[url('../assets/images/logo.svg')] bg-no-repeat bg-contain w-[240px] h-10"></div>
      <ul className="flex gap-10">
        {header.map((item) => {
          return (
            <li key={item.uri}>
              <a className="cursor-pointer">{item.pagetitle}</a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-3 px-5">
          <Image src={German} width={24} height={24} alt="De"></Image>
          <span>De</span>
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
