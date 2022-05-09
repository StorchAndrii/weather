import React from "react";
import s from "./Home.module.scss";
import ThisDay from "../components/ThisDay/ThisDay";
import ThisDayInfo from "../components/ThisDayInfo/ThisDayInfo";
import { Days } from "../components/Days/Days";

const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.this_day}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
