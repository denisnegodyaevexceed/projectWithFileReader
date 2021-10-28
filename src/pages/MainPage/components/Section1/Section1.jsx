import React from "react";
import "./Section1.scss";
import { Link } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import arrow from "../../../../assets/arrow.png";
import star from "../../../../assets/star.svg";
import blur from "../../../../assets/blur.svg";
const Section1 = () => {
  return (
    <div className="section1">
      <Parallax
        styleOuter={{ position: "absolute", left: "0" }}
        y={[-200, 100]}
        tagOuter="flex"
      >
        <img
          style={{ width: "105px", left: "20px", bottom: "0" }}
          src={star}
          alt={star}
        ></img>
      </Parallax>
      <Parallax
        styleOuter={{ position: "absolute", right: "20px", top: "0" }}
        y={[0, 200]}
        tagOuter="flex"
      >
        <img style={{ width: "205px" }} src={blur} alt={blur}></img>
      </Parallax>
      <span data-aos="slide-up" data-aos-delay="1000">
        Welcome to the
      </span>
      <h2 data-aos="zoom-in" data-aos-delay="1000">
        <span data-aos="zoom-in" data-aos-delay="1000">
          E
        </span>
        xceed team
      </h2>
      <span data-aos="slide-down" data-aos-delay="1000">
        TOURNAMENT
      </span>
      <Link
        data-aos="flip-up"
        spy={true}
        smooth={true}
        to="firstInsideContainer"
      >
        <img src={arrow} alt={arrow} />
      </Link>
    </div>
  );
};

export default Section1;
