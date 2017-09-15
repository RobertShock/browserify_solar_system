"use strict";

const PlanetMaker = require("./planetmaker");
const mars = require("./mars");
const mercury = require("./mercury");
const venus = require("./venus");
const earth = require("./earth");
const jupiter = require("./jupiter");
const saturn = require("./saturn");
const uranus = require("./uranus");
const neptune = require("./neptune");

const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

planets.forEach(function(value){
	PlanetMaker(value, document.getElementById("output"));
	});