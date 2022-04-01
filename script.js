// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");



//const { myFetch } = require("./scriptHelper");

/*window.addEventListener("load", function() {
    
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
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
  
});*/

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
    })
    
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
 
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
 
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
 
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelInput.value);
 
        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoInput.value);
 
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
 });


















