// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById('missionTarget');
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
  <ol><li>Name: ${name}</li><li>Diameter: ${diameter}</li> <li>Star: ${star}</li> 
  <li>Distance from Earth: ${distance}</li><li>Number of Moons: ${moons}</li></ol> <img src='${imageUrl}'>`;
   
};

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
    };
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

  /*if (validateInput(pilot) != 'Not a Number') {
      return window.alert('Please enter valid pilot name.')
  };

  if (validateInput(copilot) != 'Not a Number') {
   return window.alert('Please enter valid copilot name.')
};
if (validateInput(fuelLevel) != 'Is a Number') {
    return window.alert('Please enter valid fuel level.')
};
if (validateInput(cargoLevel) != 'Is a Number') {
   return window.alert('Please enter valid cargo level.')
};*/

let faultyItems = document.getElementById('faultyItems');

let pilotStatus = document.getElementById('pilotStatus');

let copilotStatus = document.getElementById('copilotStatus');

let launchStatus = document.getElementById('launchStatus');
let fuelStatus = document.getElementById('fuelStatus');
let cargoStatus = document.getElementById('cargoStatus');

if (fuelLevel < 10000 && cargoLevel > 10000) {
faultyItems.style.visibility = "visible";
pilotStatus = `Pilot ${pilot} is ready for launch`;
copilotStatus = `Co-pilot ${copilot} is ready for launch`;
fuelStatus.innerHTML = "Fuel level too low for launch";
cargoStatus.innerHTML = "Cargo mass too heavy for launch";
launchStatus.innerHTML = "Shuttle Not ready for launch";
launchStatus.style.color = "rgb(199, 37, 78)";
} else
if (fuelLevel < 10000) {
    faultyItems.style.visibility = "visible";
    pilotStatus = `Pilot ${pilot} is ready for launch`;
    copilotStatus = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle Not ready for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
} else 
if (cargoLevel > 10000) {
    faultyItems.style.visibilty = "visible";
    pilotStatus = `Pilot ${pilot} is ready for launch`;
    copilotStatus = `Co-pilot ${copilot} is ready for launch`;
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    launchStatus.innerHTML= "Shuttle Not ready for launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
} else 
if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    faultyItems.style.visibilty = "visible";
    pilotStatus = `Pilot ${pilot} is ready for launch`;
    copilotStatus = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML= "Shuttle is Ready for launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
};


};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        if (response.status >= 400) {
            throw new Error("bad response")
        }
        console.log(response)
     return response.json();
    
     });
   
     
    return planetsReturned
};



function pickPlanet(planets) {
let planetIndex = Math.floor(Math.random()*6);
return planets[planetIndex]
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
