// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML =
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>
   `
}
//validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
//https://www.geeksforgeeks.org/number-validation-in-javascript/ (Number Validation in JS)
//https://www.w3schools.com/jsref/prop_style_color.asp

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty"
   } else if  (Number.isNaN(testInput)) { //try using just isNaN
    return "Not a Number"
   } else {
    return "Is a Number"
   }
    
} 



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   pilotStatus.innerHTML = `Pilot ${pilot.value} is Ready`
   copilotStatus.innerHTML = `Co-pilot ${copilot.value} is Ready`

   if(fuelLevel.value < 10000 || fuelLevel.value ==""){
    faultyItems.style.visibility = "visible";
    fuelStatus.innerHTML = "There is not enough fuel for the journey!";
    launchStatus.innerHTML = "Shuttle not ready for launch" ;
    launchStatus.style.color = "red";
   } else if (cargoLevel.value > 10000 ){
    faultyItems.style.visibility = "visible";
    cargoStatus.innerHTML = "There is too much mass for the shuttle to take off!";
    launchStatus.innerHTML = "Shuttle not ready for launch" ;
    launchStatus.style.color = "red";
   } 
      else {
    launchStatus.innerHTML = "Shuttle is ready for launch" ;
    launchStatus.style.color = "green";
   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let indexPlanetPicked = Math.floor(Math.random() * planets.length);
    return planets[indexPlanetPicked];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
