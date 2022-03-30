// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");



//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

    let submit = document.getElementById('formSubmit');
    submit.addEventListener('submit', formSubmission());

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
  
});