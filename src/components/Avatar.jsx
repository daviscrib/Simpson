import React, { useState } from "react";

function Avatar({ img1, donutsCount = 0, img, firstName, lastName, isBG = false }) {
	const [donuts, setDonuts] = useState(donutsCount);

	/**
	 * convention camelCase
	 * donuts, setDonuts
	 * isBG, setIsBG
	 */

	return (
		<div className={isBG ? "bg" : ""}>
			<img src={img}  alt={firstName} />
			{/*
				<img src="https://www.stickees.com/files/cartoon/the-simpsons/2240-bart-simpson-skate.png" 
				alt="Simpson Bart" />

				*/}
			<p>
				{firstName} {lastName}
				<button
					onClick={() => {
						setDonuts(donuts + 1);
					}}
				>
					🍩 {donuts}{" "}
					{donuts < 0
						? "On m'a volé des donuts"
						: donuts > 30
						? "J'ai trop mangé"
						: "C'est ok fréro"}

				</button>
			</p>
		</div>
	);
}

export default Avatar;