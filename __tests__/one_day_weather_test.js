const fetch = require("node-fetch");
import { OneDayWeather } from '../src/one_day_weather';

describe('OneDayWeather', () => {

  let weather;
  beforeEach(() => {
    weather = new OneDayWeather();
  });

  it('creates a new instance of OneDayWeather', () => {
    expect(weather instanceof OneDayWeather).toEqual(true);
  });

  it('can access the API for the current weather in London', async () => {
    const londonWeather = await weather.LondonOneDay();
    expect(londonWeather).toEqual(6.54);
  });
});
