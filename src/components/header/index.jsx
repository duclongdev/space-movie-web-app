import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderBtn } from "../button";
import { LogoBtn } from "../button";
import { SwitchModeBtn } from "../button";
import ChangeLangBtn from "../button/ChangeLangBtn";
import Search from "../search";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row place-content-between px-16 py-2">
      <div className="flex flex-row">
        <LogoBtn />
        <SwitchModeBtn />
      </div>
     <Search />
      <div>
        <div className="flex flex-row">
          <ChangeLangBtn />
          <HeaderBtn name={t("History")} type="History" />
          <HeaderBtn name={t("Me")} type="Me" />
        </div>
      </div>
    </div>
  );
};

export default Header;
