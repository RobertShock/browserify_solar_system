"use strict";

const outputTo = (planet, domElement) => {
	domElement.innerHTML += 
		`<h1>${planet.Name}</h1>
		<h4>Discovered in ${planet.Discovered}</h4>
		<br>Mass: ${planet.Mass}
		<br>Volume: ${planet.Volume}
		<br>Orbital distance: ${planet.Orbit}<br>`;
		
	const lists = ["Atmosphere", "Moons", "Probes"];

	lists.forEach(function(val){
		domElement.innerHTML += `${val}: `;
		planet[val].forEach(function(value, index){
			if (index === planet[val].length - 1) {
				domElement.innerHTML += `${value}<br>`;
			} else {
				domElement.innerHTML += `${value}, `;
			}
		});
	});
};

module.exports = outputTo;