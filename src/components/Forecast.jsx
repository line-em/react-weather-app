import React from "react";

function Forecast(props) {
	const forecast = props.data.forecast.forecastday.map((val) => {
		const weekDay = new Date(val.date_epoch * 1000).toLocaleString("en-us", {
			weekday: "long",
			day: "numeric",
			month: "long"
		});
		return (
			<div key={val.date_epoch}>
				<article className="forecastDay">
					<span className="forecastDay--weekday">{weekDay}</span>
				</article>
				<article className="forecastDetails">
					<div className="forecastDetails--textContent">
						<p>{val.day.condition.text}</p>
						{props.userMetric === "c" ? (
							<p>
								{val.day.maxtemp_c} °C / {val.day.mintemp_c} °C
							</p>
						) : (
							<p>
								{val.day.maxtemp_f} °F / {val.day.mintemp_f} °F
							</p>
						)}
						<p>
							<strong>Rain:</strong> {val.day.daily_chance_of_rain}%
						</p>
						<p>
							<strong>Snow:</strong> {val.day.daily_chance_of_snow}%
						</p>
					</div>
					<div className="forecast-day-icon">
						<img
							src={`https://${val.day.condition.icon}`}
							alt="weather icon"
							className="weather-icon"
						/>
					</div>
				</article>
			</div>
		);
	});
	// props.data.forecast.forecastday[index].date_epoch
	// props.data.forecast.forecastday[index].day.condition.text
	// props.data.forecast.forecastday[index].day.condition.icon
	// props.data.forecast.forecastday[index].day.condition.maxtemp_c
	// props.data.forecast.forecastday[index].day.condition.mintemp_c
	// props.data.forecast.forecastday[index].day.daily_chance_of_rain
	// props.data.forecast.forecastday[index].day.daily_chance_of_snow

	return (
		<section className="forecast box-style box-padding">
			<h2 className="title">3 Day Forecast</h2>
			{forecast}
		</section>
	);
}

export default Forecast;
