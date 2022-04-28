import React from "react";

function Search(props) {
	const [text, setText] = React.useState("");

	const handleSearch = () => {
		props.getInput(text);
		setText("");
	};

	const enterKey = (event) => {
		if (event.key === "Enter") {
			handleSearch();
			event.preventDefault();
		}
	};

	const errorStyle = {
		color: "var(--white)",
		textAlign: "center",
		fontWeight: "400",
		margin: "var(--small-spacing)",
		backgroundColor: "var(--red)",
		borderRadius: "var(--medium-spacing)",
		display: "none"
	};

	return (
		<>
			<div style={errorStyle} id="searchError">
				City not found.
			</div>
			<section className="citySearch flex-center">
				<label htmlFor="citySearch" className="visually-hidden">
					Type a city to check its weather
				</label>
				<input
					type="text"
					name="citySearch"
					id="citySearch"
					onKeyDown={enterKey}
					placeholder="Type a city name here..."
					value={text}
					onChange={(event) => setText(event.target.value)}
				/>
				<button onClick={handleSearch}>Search</button>
			</section>
		</>
	);
}

export default Search;
