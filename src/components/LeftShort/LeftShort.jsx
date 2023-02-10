import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import SeeMore from "../seeMore/SeeMore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const arrayAccount = [
  {
    id: 1,
    img: "/assets/image2.jpg",
    account: "khanhdo26042002",
    name: "Huy Khanh Do",
  },
  {
    id: 2,
    img: "/assets/image2.jpg",
    account: "khanhdo26042002",
    name: "Huy Khanh Do",
  },
  {
    id: 3,
    img: "/assets/image2.jpg",
    account: "khanhdo26042002",
    name: "Huy Khanh Do",
  },
  {
    id: 4,
    img: "/assets/image2.jpg",
    account: "khanhdo26042002",
    name: "Huy Khanh Do",
  },
  {
    id: 5,
    img: "/assets/image2.jpg",
    account: "khanhdo26042002",
    name: "Huy Khanh Do",
  },
  {
    id: 6,
    img: "/assets/image2.jpg",
    account: "khanhdo26042002",
    name: "Huy Khanh Do",
  },
  {
    id: 7,
    img: "/assets/image2.jpg",
    account: "khanhdo26042002",
    name: "Huy Khanh Do",
  },
];
const tabs = [
  {
    nameTab: "Short Videos",
    img: faHome,
  },
  {
    nameTab: "Blog Videos",
    img: faBlog,
  },
  {
    nameTab: "Watch Lists",
    img: faList,
  },
];

const LeftShort = () => {
  const [isMore, setIsMore] = useState(false);
  const navigate = useNavigate();
  const [type, setType] = useState("Short Videos");

  // chuyển trang
  useEffect(() => {
    if (type === tabs[0].nameTab) {
      navigate("/short");
    } else if (type === tabs[1].nameTab) {
      navigate("/post");
    } else {
      navigate("/watchlist");
    }
  }, [type]);

  return (
    <div className="pt-12">
      {tabs.map((value, index) => (
        <button
          className="flex pt-4 items-center"
          key={index}
          onClick={() => setType(value.nameTab)}
        >
          <FontAwesomeIcon
            icon={value.img}
            className="text-lg dark:text-white"
            style={
              type === value.nameTab
                ? {
                    color: "#04DB41",
                  }
                : {}
            }
          />
          <p
            className="font-bold text-lg ml-2 dark:text-white"
            style={
              type === value.nameTab
                ? {
                    color: "#04DB41",
                  }
                : {}
            }
          >
            {value.nameTab}
          </p>
        </button>
      ))}
      <p className="text-gray-500 text-sm font-bold pt-4 dark:text-gray-300">
        Following accounts
      </p>
      {isMore
        ? arrayAccount.map((value, index) => (
            <div className="flex pt-4" key={index}>
              <img
                src={value.img}
                alt=""
                className="w-[45px] h-[45px] rounded-full"
              />
              <div className="ml-4">
                <div className="flex">
                  <p className="font-semibold dark:text-white">
                    {value.account}
                  </p>
                  {value.id % 2 == 0 ? (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#00BFFF] ml-1 text-lg"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <p className="text-sm dark:text-white">{value.name}</p>
              </div>
            </div>
          ))
        : arrayAccount.slice(0, 4).map((value, index) => (
            <div className="flex pt-4" key={index}>
              <img
                src={value.img}
                alt=""
                className="w-[45px] h-[45px] rounded-full"
              />
              <div className="ml-4">
                <div className="flex">
                  <p className="font-semibold dark:text-white">
                    {value.account}
                  </p>
                  {value.id % 2 == 0 ? (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#00BFFF] ml-1 text-lg"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <p className="text-sm dark:text-white">{value.name}</p>
              </div>
            </div>
          ))}
      <SeeMore callback={setIsMore} isMore={isMore} />
    </div>
  );
};

export default LeftShort;
