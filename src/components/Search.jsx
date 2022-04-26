import React from "react";

function Search(props) {
	const [text, setText] = React.useState("");

	const handleSearch = () => {
		props.getInput(text);
		setText("");
	};

	return (
		<section className="citySearch flex-center">
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
			<button onClick={handleSearch}>Search</button>
		</section>
	);
}

export default Search;
