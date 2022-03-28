// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (NaN(testInput)) {
        return "Not a Number";
    } else if (!NaN(testInput)) {
        return "Is a Number";
    } else if (testInput = "") {
        return "Empty";
    }
    };
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (validateInput(pilot) != 'Not a Number') {
      window.alert('Please enter valid pilot name.')
  };
  if (validateInput(copilot) != 'Not a Number') {
    window.alert('Please enter valid copilot name.')
};
if (validateInput(fuelLevel) != 'Is a Number') {
    window.alert('Please enter valid fuel level.')
};
if (validateInput(cargoLevel) != 'Is a Number') {
    window.alert('Please enter valid cargo level.')
};



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned.then( function(response) {
     const jsonPromise = response.json();
     jsonPromise.then(function(json) {
         console.log(json)
     })
     });

    return planetsReturned
};



function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
