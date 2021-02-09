import React, { useState } from "react";

// imports
//create your first component
export function Cambiarcolores() {
	let [colorBox, setColorBox] = useState("");

	return (
		<div
			style={{
				backgroundColor: "black",
				width: "250px",
				height: "630px"
			}}>
			<div className="color-box">
				<div
					className={"box " + (colorBox == "red" ? "active" : "")}
					id="boxred"
					style={{ backgroundColor: "red" }}
					onClick={() => {
						setColorBox("red");
					}}></div>
			</div>
			<div className="color-box">
				<div
					className={"box " + (colorBox == "yellow" ? "active" : "")}
					id="boxred"
					style={{ backgroundColor: "yellow" }}
					onClick={() => {
						setColorBox("yellow");
					}}></div>
			</div>
			<div className="color-box">
				<div
					className={"box " + (colorBox == "green" ? "active" : "")}
					id="boxred"
					style={{ backgroundColor: "green" }}
					onClick={() => {
						setColorBox("green");
					}}></div>
			</div>
			{/*<div className="color-box">
				<h1>yellow</h1>
				<div
					className="box"
					style={{ backgroundColor: colorBox02 }}></div>
				<p>{colorBox02}</p>
				<button onClick={cambiarColor}>Cambiar Colores</button>
			</div>
			<div className="color-box">
				<h1>green</h1>
				<div
					className="box"
					style={{ backgroundColor: colorBox03 }}></div>
				<p>{colorBox03}</p>
				<button onClick={cambiarColor}>Cambiar Colores</button>
            </div>*/}
		</div>
	);
}
