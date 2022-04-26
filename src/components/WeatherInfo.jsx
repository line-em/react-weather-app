import React from "react";

function WeatherInfo(props) {
	function backgroundChange() {
		if (props.data.current.condition.text.includes("snow")) {
			document.body.style.backgroundImage = "url(../imgs/pexels-photo-3462588.jpeg)";
		} else if (props.data.current.temp_c <= 15) {
			document.body.style.backgroundImage = "url(../imgs/pexels-photo-1367192.jpeg)";
		} else if (props.data.current.temp_c > 15 && props.data.current.temp_c <= 25) {
			document.body.style.backgroundImage = "url(../imgs/unsplash_bg_default.jpg)";
		} else {
			document.body.style.backgroundImage = "url(../imgs/pexels-photo-72473.jpeg)";
		}
	}
	backgroundChange();
	return (
		<section id="weather-info" className="box-style box-padding y-separator">
			<article className="weather-info-content">
				{/* City header */}

				<article className="title weather-info-content--header">
					<div className="textContent">
						<h2>{props.data.location.name}</h2>
						<h3>{props.data.location.country}</h3>
						<p>{props.data.current.condition.text}</p>
					</div>
					{props.data.current.condition.icon && (
						<img
							src={`http://
									${props.data.current.condition.icon}`}
							alt="weather icon"
							className="weather-icon"
						/>
					)}
				</article>

				{/* Current Weather */}

				<article className="weather-info-content--body">
					<div className="weather-info-content--temperature">
						{props.userMetric === "c" ? (
							<span className="temperature-current">
								{props.data.current.temp_c} &deg;C
							</span>
						) : (
							<span className="temperature-current">
								{props.data.current.temp_f} &deg;F
							</span>
						)}

						{props.userMetric === "c" ? (
							<button onClick={props.updateMetric}>Switch to &deg;F</button>
						) : (
							<button onClick={props.updateMetric}>Switch to &deg;C</button>
						)}
					</div>

					<div className="weather-info-content--column">
						<div>
							<h4>Feels like</h4>
							{props.userMetric === "c" ? (
								<p>{props.data.current.feelslike_c} &deg;C</p>
							) : (
								<p>{props.data.current.feelslike_f} &deg;F</p>
							)}
						</div>
						<div>
							<h4>Min/Max</h4>
							{props.userMetric === "c" ? (
								<p>
									{props.data.forecast.forecastday[0].day.mintemp_c} &deg;C /{" "}
									{props.data.forecast.forecastday[0].day.maxtemp_c} &deg;C
								</p>
							) : (
								<p>
									{props.data.forecast.forecastday[0].day.mintemp_f} &deg;F /{" "}
									{props.data.forecast.forecastday[0].day.maxtemp_f} &deg;F
								</p>
							)}
						</div>
					</div>

					{/* Other Info */}

					<div className="weather-info-content--column">
						<div>
							<h4>Wind</h4>
							<span>{props.data.current.wind_kph} km/h</span>
						</div>
						<div>
							<h4>Rain</h4>
							<span>
								{props.data.forecast.forecastday[0].day.daily_chance_of_rain} %
							</span>
						</div>
						<div>
							<h4>Humidity</h4>
							<span>{props.data.current.humidity} %</span>
						</div>
					</div>
					<div className="weather-info-content--column">
						<div>
							<h4>Sunrise</h4>
							<p>{props.data.forecast.forecastday[0].astro.sunrise}</p>
						</div>
						<div>
							<h4>Sunset</h4>
							<p>{props.data.forecast.forecastday[0].astro.sunset}</p>
						</div>
					</div>
					<p>
						<b>Last Updated:</b> {props.data.current.last_updated}
					</p>
				</article>
			</article>
		</section>
	);
}

export default WeatherInfo;
