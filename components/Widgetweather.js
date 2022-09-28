
const  Widgetweather= () => {
  return ( <div
    id="tie-weather-widget-2"
    className="widget tie-weather-widget"
    >
    <div
      id="tie-weather-widget-13"
      className="widget tie-weather-widget"
    >
      <div className="widget-title the-global-title">
        <div className="the-subtitle">
          Weather
          <span className="widget-title-icon tie-icon" />
        </div>
      </div>
      <span
        className="tie-weather-user-location has-title"
        data-options="{'location':'Cairo','units':'C','forecast_days':'5','custom_name':'Cairo','animated':'true'}"
      >
        <span className="tie-icon-gps" />
      </span>
      <div
        id="tie-weather-cairo"
        className="weather-wrap is-animated"
      >
        <div className="weather-icon-and-city">
          <div className="weather-icon">
            <div className="icon-moon" />
          </div>
          <div className="weather-name the-subtitle">
            Cairo
          </div>
          <div className="weather-desc">Clear Sky</div>
        </div>
        <div className="weather-todays-stats">
          <div className="weather-current-temp">
            {" "}
            21 <sup>℃</sup>{" "}
          </div>
          <div className="weather-more-todays-stats">
            <div className="weather_highlow">
              {" "}
              <span
                aria-hidden="true"
                className="tie-icon-thermometer-half"
              />{" "}
              21º - 13º
            </div>
            <div className="weather_humidty">
              {" "}
              <span
                aria-hidden="true"
                className="tie-icon-raindrop"
              />{" "}
              <span className="screen-reader-text" /> 35%{" "}
            </div>
            <div className="weather_wind">
              {" "}
              <span
                aria-hidden="true"
                className="tie-icon-wind"
              />{" "}
              <span className="screen-reader-text" /> 5.14
              km/h
            </div>
          </div>
        </div>
        <div className="weather-forecast small-weather-icons weather_days_5">
          <div className="weather-forecast-day">
            <div className="weather-icon">
              <div className="icon-moon" />
            </div>
            <div className="weather-forecast-day-temp">
              21<sup>℃</sup>
            </div>
            <div className="weather-forecast-day-abbr">
              Sun
            </div>
          </div>
          <div className="weather-forecast-day">
            <div className="weather-icon">
              <div className="icon-sun" />
            </div>
            <div className="weather-forecast-day-temp">
              24<sup>℃</sup>
            </div>
            <div className="weather-forecast-day-abbr">
              Mon
            </div>
          </div>
          <div className="weather-forecast-day">
            <div className="weather-icon">
              <div className="icon-cloud" />
              <div className="icon-cloud-behind" />
              <div className="icon-basecloud-bg" />
              <div className="icon-sun-animi" />
            </div>
            <div className="weather-forecast-day-temp">
              28<sup>℃</sup>
            </div>
            <div className="weather-forecast-day-abbr">
              Tue
            </div>
          </div>
          <div className="weather-forecast-day">
            <div className="weather-icon">
              <div className="icon-cloud" />
              <div className="icon-cloud-behind" />
              <div className="icon-basecloud-bg" />
              <div className="icon-sun-animi" />
            </div>
            <div className="weather-forecast-day-temp">
              28<sup>℃</sup>
            </div>
            <div className="weather-forecast-day-abbr">
              Wed
            </div>
          </div>
          <div className="weather-forecast-day">
            <div className="weather-icon">
              <div className="icon-cloud" />
              <div className="icon-cloud-behind" />
              <div className="icon-basecloud-bg" />
              <div className="icon-sun-animi" />
            </div>
            <div className="weather-forecast-day-temp">
              30<sup>℃</sup>
            </div>
            <div className="weather-forecast-day-abbr">
              Thu
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> );
}
 
export default Widgetweather;
