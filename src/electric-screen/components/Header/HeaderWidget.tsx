import dayjs from "dayjs";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { getLunarDate } from "./header.helper";
import Cloudy from "./svg/Cloudy";
import { Buttons, Divider, PM, Time, Weather } from "./StyledComponent";
import Menu from "./svg/Menu";
import Setting from "./svg/Setting";
import Return from "./svg/Return";
import { IWeather } from "../../../types";
import { getWeatherInfo } from "../../../utils/request";

type Props = {};

export default function HeaderWidget({}: Props) {
  const [time, setTime] = useState(dayjs());
  const [weatherInfo, setWeatherInfo] = useState<IWeather>();
  const timer = useRef<any>();

  const fetchWeatherInfo = () => {
    getWeatherInfo().then((data: IWeather) => {
      setWeatherInfo(data);
    });
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    () => clearInterval(timer.current);
  }, []);

  return (
    <Wrapper>
      <Time>
        <div>
          <span className="time">{time.format("HH:mm:ss")}</span>
          <span className="date">{time.format("YYYY/M/DD")}</span>
        </div>
        <span className="lunar">{getLunarDate(time.toDate())}</span>
      </Time>

      <Divider />

      <Weather>
        <div className="left">
          <div>
            <Cloudy />
          </div>
          <div className="cloudyText">{weatherInfo?.weather}</div>
        </div>
        <div className="right">
          <span>{weatherInfo?.temperature}</span>
          <span className="unit">°C</span>
        </div>
      </Weather>

      <Divider />

      <PM>
        <div>{weatherInfo?.pmConcentration}</div>
        <div className="bottom">PM 2.5</div>
      </PM>

      <Divider />

      <Buttons>
        <Menu />
        <Setting />
        <Return />
      </Buttons>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  font-family: Source Han Sans CN;
  font-weight: 400;
  margin-left: 304px;
  display: flex;
  align-items: center;
  color: #fff;
`;
