import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextIcon, PreIcon } from "../../assets";
import Card from "../../components/card";

const PrA = (props) => {
  const { onClick, size } = props;
  const currentSlide = 0;

  return (
    <div>
      {(currentSlide == props.currentSlide) == 0 ? (
        <div onClick={onClick} className="absolute left-[-2rem] top-1/3 z-50">
          <PreIcon size={size} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const NeA = (props) => {
  const { onClick, size } = props;
  console.log(props.currentSlide);
  console.log(((14 - 1) / 6) * 6);
  return (
    <div>
      {props.currentSlide == Math.floor((7 - 1) / 6) * 6 ? (
        <></>
      ) : (
        <div onClick={onClick} className="absolute right-[-0.3rem] top-1/3">
          <NextIcon size={size} />
        </div>
      )}
    </div>
  );
};
const ListMovie = () => {
  const size = 12;
  return (
    <div className="relative top-[-8rem] mx-14 ">
      <h1 className="text-3xl text-white mb-4 pt-8 w-full">Trending</h1>
      <Slider
        slidesToShow={6}
        adaptiveHeight={true}
        slidesToScroll={6}
        prevArrow={<PrA size={"h-5 w-5"} />}
        nextArrow={<NeA size={"h5- w-5"} />}
      >
        <Card count={0} />
        <Card count={1} />
        <Card count={2} />
        <Card count={3} />
        <Card count={4} />
        <Card count={5} />
        <Card count={6} />
      </Slider>
    </div>
  );
};

export default ListMovie;
