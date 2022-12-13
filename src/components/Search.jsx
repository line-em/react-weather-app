import React from "react";

function Search(props) {
	const [text, setText] = React.useState("");

	const handleSearch = () => {
		e.preventDefault();
		props.getInput(text);
		setText("");
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
				<form onSubmit={handleSearch}>
					<label htmlFor="citySearch" className="visually-hidden">
						Type a city to check its weather
					</label>
					<input
						type="text"
						name="citySearch"
						id="citySearch"
						placeholder="Type a city name here..."
						value={text}
						onChange={(event) => setText(event.target.value)}
					/>
					<button type="submit">Search</button>
				</form>
			</section>
		</>
	);
}

export default Search;
