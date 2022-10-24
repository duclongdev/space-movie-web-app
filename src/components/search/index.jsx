import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchIcon } from "../../assets";

const Search = () => {
  const [message, setMessage] = useState("");
  const { t } = useTranslation();
  return (
    <div className="search-container">
      <div className="flex-1">
        <input
          type="text"
          value={message}
          placeholder={t("Search")}
          className=" border-white bg-transparent focus:outline-0 pl-4 w-full"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <span className="bg-gray-400 w-px h-4/6"></span>
      <button className="btn-search">
        <SearchIcon strokerColor={message.length === 0 ? "gray" : "black"} />
      </button>
    </div>
  );
};

export default Search;
