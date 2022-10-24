import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import SummaryInfo from "../../components/summaryInfo";
import Slider from "react-slick";
import { NextIcon, PreIcon } from "../../assets";
import ListMovie from "../../components/listMovie";

const PrA = (props) => {
  const { className, onClick, size } = props;

  return (
    <div onClick={onClick} className={className}>
      <PreIcon size={size} />
    </div>
  );
};

const NeA = (props) => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={className}>
      <NextIcon />
    </div>
  );
};

const Home = () => {
  return (
    <div className="backdrop-blur-3xl-sm relative overflow-x-hidden">
      <Slider
        dots
        infinite
        initialSlide={2}
        prevArrow={<PrA size={"h-10 w-10"} />}
        nextArrow={<NeA />}
        pauseOnHover={true}
      >
        <SummaryInfo />
        <SummaryInfo />
        <SummaryInfo />
      </Slider>
      <ListMovie />
    </div>
  );
};

export default Home;
