import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";
import axios from "axios";
import { APIKey } from "./APIKey";

function App() {
	/*Search*/
	const [userInput, setUserInput] = useState();

	function updateInput(text) {
		setUserInput(text);
	}

	/*Metric*/
	const [metric, setMetric] = useState();

	function updateMetric() {
		setMetric(metric === "c" ? "f" : "c");
	}

	/*API Call*/
	const [weatherData, setWeatherData] = useState();
	useEffect(() => {
		if (userInput) {
			const options = {
				method: "GET",
				url: "http://api.weatherapi.com/v1/forecast.json",
				params: { q: { userInput }, days: "3", key: { APIKey } }
			};
			axios
				.request(options)
				.then(function (response) {
					setWeatherData(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		}
	}, [userInput]);

	return (
		<>
			<main className="flex-wrapper">
				<div className="app-window-style">
					<div className="app-window-title">
						<span>What's the Weather?</span>
						<span>➖❌</span>
					</div>
					<section className="flex-window-style">
						<div className="main-weather-content">
							<Search getInput={(text) => updateInput(text)} />

							{weatherData && (
								<WeatherInfo
									data={weatherData}
									userMetric={metric}
									updateMetric={updateMetric}
								/>
							)}
						</div>

						{weatherData && <Forecast data={weatherData} userMetric={metric} />}
					</section>
					<Footer />
				</div>
			</main>
		</>
	);
}

export default App;
