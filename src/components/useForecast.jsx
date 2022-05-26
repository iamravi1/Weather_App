import { useState } from "react";
import axios from "axios";
import detailscurrentDayforecast from "../help/detailscurrentDayforecast";
import getCurrentdayforecast from "../help/getCurrentdayforecast";

function useForecast() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getdata = async (location) => {
    const loc = location;
    const apikey = process.env.REACT_APP_PORT1;
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}&units=metric`;
    try {
      const req = axios.get(Url);
      const res = await req;

      return res.data;
    } catch (e) {
      // console.log(err.message);
    }
  };

  const getForcastedData = (data, location) => {
    const currentDay = getCurrentdayforecast(data, location);
    const currentDayDetails = detailscurrentDayforecast(data);
    setForecast({ currentDay, currentDayDetails });
    setLoading(false);
  };

  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);

    const data = await getdata(location);

    if (!data || data.length === 0) {
      setError("Location not found");
      setLoading(false);
      return {};
    }
    getForcastedData(data, location);
  };
  return {
    isError,
    isLoading,
    forecast,
    submitRequest
  };
}

export default useForecast;
