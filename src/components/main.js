import React from "react";
import image from "../pizza.png";

export default function Pizza() {
	return (
		<>
			<img src={image} alt="pizza" />
			<div className="button">Order</div>
		</>
	);
}
