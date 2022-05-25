import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import s from "./Home.module.scss";
import ThisDay from "../../components/ThisDay/ThisDay";
import ThisDayInfo from "../../components/ThisDayInfo/ThisDayInfo";
import { Days } from "../../components/Days/Days";
import { getWeather } from "../../weatherSlice/weatherSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather("Киев"));
  }, [dispatch]);

  return (
    <>
      <div className={s.home}>
        <div className={s.this_day}>
          <ThisDay />
          <ThisDayInfo />
        </div>
        <div className={s.days}>
          <Days />
        </div>
      </div>
    </>
  );
};

export default Home;
