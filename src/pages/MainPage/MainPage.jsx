import React, { useEffect } from "react";
import "./MainPage.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section1 from "./components/Section1/Section1";
import Button from "../../components/Button/Button";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";

import Section4 from "./components/Section4/Section4";
const MainPage = () => {
  const data = useSelector((state) => state.events.event);
  const id = useSelector((state) => state.events.publicId);

  const opts = {
    height: "600",
    width: "100%",
  };
  useEffect(() => {
    AOS.init({
      offset: 150,
      delay: 0,
      duration: 1000,
    });
  }, []);

  console.log(data, 1);
  return (
    <div className="mainPage">
      <div className="section one" data-aos="zoom-in-down">
        <Section1 />
      </div>
      <div className="section two">
        <Section2 content={data} />
      </div>
      <div data-aos="flip-down" className="section">
        <YouTube videoId={data.video} opts={opts} />
      </div>
      <div className="section three">
        <Section3 content={data} />
      </div>

      <div className="section four">
        <Section4 content={data} />
      </div>
      <div className="go">
        <Button to={`/${id}/table`} text="view table" />
      </div>
    </div>
  );
};

export default MainPage;
