(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const earth = {
        "Name": "Earth",
        "Discovered": "4000 BC according to creationists",
        "Mass": "5.9724 x 10^24 kg",
        "Volume": "1.0832 x 10^12 km³",
        "Orbit": "150 million km",
        "Atmosphere": ["nitrogen", "oxygen", "water", "argon", "CO2"],
        "Moons": ["Moon"],
        "Probes": ["All of them"]
    };

module.exports = earth;
},{}],2:[function(require,module,exports){
"use strict";

const jupiter = {
        "Name": "Jupiter",
        "Discovered": "Prehistory",
        "Mass": "1.8986 x 10^27 kg",
        "Volume": "1.4313 x 10^15 km³",
        "Orbit": "778 million km",
        "Atmosphere": ["hydrogen", "helium", "methane", "ammonia", "trace gases"],
        "Moons": ["Io", "Europa", "Ganymede", "Callisto", "Amalthea", "Himalia", "Elara", "Pasiphae", "Sinope", "Lysithea", "Carme", "Ananke", "Leda", "Thebe", "Adrastea", "Metis", "Callirrhoe", "Themisto", "Megaclite", "Taygete", "Chaldene", "Harpalyke", "Kalyke", "Iocaste", "Erinome", "Isonoe", "Praxidike", "Autonoe", "Thyone", "Hermippe", "Aitne", "Eurydome", "Euanthe", "Euporie", "Orthosie", "Sponde", "Kale", "Pasithee", "Hegemone", "Mneme", "Aoede", "Thelxinoe", "Arche", "Kallichore", "Helike", "Carpo", "Eukelade", "Cyllene", "Kore", "Herse", "Dia", "18 more unnamed"],
        "Probes": ["Pioneer 10 and 11", "Voyager 1 and 2", "Ulysses", "Galileo", "Cassini", "New Horizons", "Juno"]
    };

    module.exports = jupiter;
},{}],3:[function(require,module,exports){
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
},{"./earth":1,"./jupiter":2,"./mars":4,"./mercury":5,"./neptune":6,"./planetmaker":7,"./saturn":8,"./uranus":9,"./venus":10}],4:[function(require,module,exports){
"use strict";

const mars =  {
    "Name": "Mars",
    "Discovered": "Prehistory",
    "Mass": "6.4171 x 10^23 kg",
    "Volume": "1.6318 x 10^11 km³",
    "Orbit": "228 million km",
    "Atmosphere": ["CO2", "argon", "nitrogen", "oxygen", "CO"],
    "Moons": ["Phobos", "Deimos"],
    "Probes": ["various Mariner and Mars probes", "Viking 1 and 2", "Mars Global Surveyor", "Mars Pathfinder", "Sojourner", "2001 Mars Odyssey", "Mars Express", "Spirit", "Opportunity", "Mars Reconnaissance Orbiter", "Phoenix", "Dawn", "Curiosity", "Mars Orbiter Mission", "MAVEN", "ExoMars TGO", "Schiaparelli"]
};


module.exports = mars;
},{}],5:[function(require,module,exports){
"use strict";

 const mercury = {
        "Name": "Mercury",
        "Discovered": "Prehistory",
        "Mass": "3.3011 x 10^23 kg",
        "Volume": "6.083 x 10^10 km³",
        "Orbit": "57 million km",
        "Atmosphere": ["oxygen", "sodium", "hydrogen", "helium", "potassium", "trace gases"],
        "Moons": ["none"],
        "Probes": ["Mariner 10"]
    };




module.exports = mercury;
},{}],6:[function(require,module,exports){
"use strict";

const neptune = {
        "Name": "Neptune",
        "Discovered": "1846",
        "Mass": "1.0243 x 10^26 kg",
        "Volume": "1.0243 x 10^26 km³",
        "Orbit": "4.5 million km",
        "Atmosphere": ["hydorgen", "helium", "methane", "trace gases"],
        "Moons": ["Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso", "1 unnamed"],
        "Probes": ["Voyager 2"]
    };

    module.exports = neptune;
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
"use strict";

const saturn = {
        "Name": "Saturn",
        "Discovered": "Prehistory",
        "Mass": "5.6836 x 10^26 kg",
        "Volume": "8.2713 x 10^14 km³",
        "Orbit": "1.4 billion km",
        "Atmosphere": ["hydrogen", "helium", "methane", "trace gases"],
        "Moons": ["Mimas", "Enceladus", "Tethys", "Dione", "Rhea", "Titan", "Hyperion", "Iapetus", "Phoebe", "Janus", "Epimetheus", "Helene", "Telesto", "Calypso", "Atlas", "Prometheus", "Pandora", "Pan", "Ymir", "Paaliaq", "Tarvos", "Ijiraq", "Suttungr", "Kiviuq", "Mundilfari", "Albiorix", "Skathi", "Erriapus", "Siarnaq", "Thrymr", "Narvi", "Methone", "Pallene", "Polydeuces", "Daphnis", "Aegir", "Bebhionn", "Bergelmir", "Bestla", "Farbauti", "Fenrir", "Fornjot", "Hati", "Hyrrokkin", "Kari", "Loge", "Skoll", "Surtur", "Anthe", "Jarnsaxa", "Greip", "Tarqeq", "Aegaeon", "9 more unnamed"],
        "Probes": ["Pioneer 11", "Voyager 1 and 2", "Cassini"]
    };

module.exports = saturn;
},{}],9:[function(require,module,exports){
"use strict";

const uranus = {
    "Name": "Uranus",
    "Discovered": "1782",
    "Mass": "8.6810 x 10^25 kg",
    "Volume": "6.833 x 10^13 km³",
    "Orbit": "2.9 billion km",
    "Atmosphere": ["hydrogen", "helium", "methane", "trace gases"],
    "Moons": ["Ariel", "Umbriel", "Titania", "Oberon", "Miranda", "Cordelia", "Ophelia", "Bianca", "Cressida", "Desdemona", "Juliet", "Portia", "Rosalind", "Belinda", "Puck", "Caliban", "Sycorax", "Prospero", "Setebos", "Stephano", "Trinculo", "Francisco", "Margaret", "Ferdinand", "Perdita", "Mab", "Cupid"],
    "Probes": ["Voyager 2"]
    };

module.exports = uranus;
},{}],10:[function(require,module,exports){
"use strict";

const venus = {
    "Name": "Venus",
    "Discovered": "Prehistory",
    "Mass": "4.8675 x 10^24 kg",
    "Volume": "9.2843 x 10^11 km³",
    "Orbit": "108 million km",
    "Atmosphere": ["carbon dioxide", "nitrogen", "trace gases"],
    "Moons": ["none"],
    "Probes": ["various Venera and Mariner", "Vega 1 and 2", "Magellan", "Venus Express", "Akatsuki", "IKAROS"]
    };




module.exports = venus;
},{}]},{},[3]);