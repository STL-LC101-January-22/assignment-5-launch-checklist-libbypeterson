// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");



//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
let list = document.getElementById('faultyItems');
   list.style.visibility = 'hidden';

   let listedPlanets;
   let chosenPlanet;
  
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
      
   })
  
    
    let submit = document.getElementById('launchForm');
    submit.addEventListener('submit', function (event) {
        event.preventDefault();
        let pilotName = document.querySelector("input[name='pilotName']");
        let pilot = pilotName.value;
        let copilotName = document.querySelector("input[name='copilotName']");
        let copilot = copilotName.value;
        let fuelLevelInput = document.querySelector("input[name='fuelLevel']");
        let fuelLevel = fuelLevelInput.value;
        let cargoMass = document.querySelector("input[name='cargoMass']");
        let cargoMassInput = cargoMass.value;

    
       
    
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMassInput);
     
    });
  
});

