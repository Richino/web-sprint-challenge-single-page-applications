import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
	padding: 10px 10px 10px 0px;
	width: 60%;
	display: flex;
	flex-direction: column;
`;

export default function Pizza() {
	const [value, setValue] = useState();
	const [price, setPrice] = useState(0);
	const [toppings, setToppings] = useState([]);
	const [size, setSize] = useState();
	const [database, setDatabase] = useState({
		getName: "",
		pizzaSize: "",
		sause: "",
		toppings: [],
		specialInstructions: "",
		price: 0,
	});

	const validation = (e) => {
		if (e.target.value < 2) {
			console.log(1);
		}
	};

	const submit = (e) => {};

	const getSause = (e) => {
		let sause = e.target.value;
		setValue(sause);
	};

	const getToppings = (e) => {
		if (e.target.checked === true) {
			setToppings([...toppings, e.target.value]);
		} else {
			let filter = toppings.filter(function (val) {
				return val !== e.target.value;
			});
			setToppings([...filter]);
		}
	};

	const getSize = (e) => {
		let size = e.target.value.toLowerCase();
		let num = 0;

		switch (size) {
			case "small":
				num = 7;
				setPrice(num);
				setSize(size);
				break;
			case "medium":
				num = 9;
				setPrice(num);
				setSize(size);
				break;
			case "large":
				num = 12;
				setPrice(num);
				setSize(size);
				break;
			default:
				num = 0;
				setPrice(num);
				setSize(size);
				break;
		}
	};

	return (
		<>
			<form>
				<Box>
					<label>Choice of size</label>
					<select onChange={getSize}>
						<option value=" ">--Please select size--</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
					</select>
					<label>Choice of sause</label>

					<label>
						<input
							type="radio"
							value="Original Red"
							onChange={getSause}
							checked={value === "Original Red"}
						/>
						Original Red
					</label>
					<label>
						<input
							type="radio"
							value="Garlic Ranch"
							onChange={getSause}
							checked={value === "Garlic Ranch"}
						/>
						Garlic Ranch
					</label>
					<label>
						<input
							type="radio"
							value="BBQ Sause"
							onChange={getSause}
							checked={value === "BBQ Sause"}
						/>
						BBQ Sause
					</label>
					<label>
						<input
							type="radio"
							value="Spinach Alfredo"
							onChange={getSause}
							checked={value === "Spinach Alfredo"}
						/>
						Spinach Alfredo
					</label>
					<label>Toppings</label>
					<div className="container">
						<div className="toppings">
							<label>
								<input
									type="checkbox"
									value="Pepperoni"
									onChange={getToppings}
								/>
								Pepperoni
							</label>
							<label>
								<input
									type="checkbox"
									value="Sausage"
									onChange={getToppings}
								/>
								Sausage
							</label>
							<label>
								<input
									type="checkbox"
									value="Canadian Bacon"
									onChange={getToppings}
								/>
								Canadian Bacon
							</label>
							<label>
								<input
									onChange={getToppings}
									type="checkbox"
									value="Grilled Chicken"
								/>
								Grilled Chicken
							</label>
							<label>
								<input
									onChange={getToppings}
									type="checkbox"
									value="Spicy Italian Sause"
								/>
								Spicy Italian Sause
							</label>
							<label>
								<input
									type="checkbox"
									value="Onions"
									onChange={getToppings}
								/>
								Onions
							</label>
							<label>
								<input
									type="checkbox"
									value="Green Pepper"
									onChange={getToppings}
								/>
								Green Pepper
							</label>
						</div>
						<div className="toppings-2">
							<label>
								<input
									type="checkbox"
									value="Diced Potato"
									onChange={getToppings}
								/>
								Diced Potato
							</label>
							<label>
								<input
									type="checkbox"
									value="Black Olives"
									onChange={getToppings}
								/>
								Black Olives
							</label>
							<label>
								<input
									type="checkbox"
									value="Roasted Garlic"
									onChange={getToppings}
								/>
								Roasted Garlic
							</label>
							<label>
								<input
									type="checkbox"
									value="Three Cheese"
									onChange={getToppings}
								/>
								Three Cheese
							</label>
							<label>
								<input
									type="checkbox"
									value="Pineapple"
									onChange={getToppings}
								/>
								Pineapple
							</label>
							<label>
								<input
									type="checkbox"
									value="Onions"
									onChange={getToppings}
								/>
								Onions
							</label>
							<label>
								<input
									type="checkbox"
									value="Extra Cheese"
									onChange={getToppings}
								/>
								Extra Cheese
							</label>
						</div>
					</div>
					<label>Additional instructions</label>
					<textarea></textarea>
					<label>Payer Name</label>
					<input onBlur={validation} minLength="2" />
					<div className="container">
						<button onClick={submit}>Pay ${price}</button>
					</div>
				</Box>
			</form>
		</>
	);
}
