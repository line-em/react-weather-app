import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";
import api from "./components/api";
import axios from "axios";
import { DotWave } from "@uiball/loaders";

function App() {
	/*Search*/
	const [userInput, setUserInput] = useState();
	const [isLoading, setIsLoading] = useState(false);

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
			const forecastOptions = {
				method: "GET",
				// url: "https://localhost:8000/",
				url: "https://api.weatherapi.com/v1/forecast.json",
				params: { q: { userInput }, days: "3", key: api.key }
			};
			setIsLoading(true);
			axios
				.request(forecastOptions)
				.then(function (response) {
					setTimeout(() => {
						setIsLoading(false);
						setWeatherData(response.data);
						document.body.querySelector("#searchError").style.display = "none";
						document.body.querySelector("input").style.border = "none";
					}, 1000);
				})
				.catch(function (error) {
					setTimeout(() => {
						console.error(error);
						document.body.querySelector("input").style.border = "var(--red) 2px solid";
						document.body.querySelector("#searchError").style.display = "block";
						setIsLoading(false);
					}, 1000);
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
							{isLoading && (
								<div className="y-separator flex-center">
									<DotWave color="#f1cef5" />
								</div>
							)}
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
