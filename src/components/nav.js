import React from "react";

export default function Navigation() {
	return (
		<>
			<ul>
				<li>
					<a href="#home">Lambda's Pizza</a>
				</li>
				<div style={{ float: "right" }}>
					<li>
						<a href="#news">Home</a>
					</li>
					<li>
						<a href="#contact">Pizza</a>
					</li>
					<li>
						<a className="active" href="#about">
							Help
						</a>
					</li>
				</div>
			</ul>
		</>
	);
}
