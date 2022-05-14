const axios = require("axios");

export const options = {
  method: "GET",
  url: "http://api.weatherapi.com/v1/forecast.json?",
  params: {
    q: "Киев",
    lat: "0",
    lon: "0",
    callback: "test",
    id: "2172797",
    lang: "null",
    units: "imperial",
    mode: "xml",
    key: "e36cf73269e1466bbcd105339221305",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
