import React, { Component } from "react";

class List extends Component {
	// state = {}

	render() {
		return (
			<>
				<h1>Weekend Away</h1>
				<form>
					<label>Where are you dining out this weekend?</label>
					<input
						type="text"
						name="City"
						value="Type city here..."
					/>
				</form>
			</>
		);
	}
}

export default List;
