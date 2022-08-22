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
   } else if  (isNaN(testInput)) { 
    return "Not a Number"
   } else {
    return "Is a Number"
   }
    
} 

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");


    if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number") {
        alert ("Name fields should contain alpha only. Please review your input and resubmit the form.") 
    } else if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number") {
        alert ("Fuel and/or Cargo fields accept numbers only. Please review your input and resubmit the form.") 
    } else if(fuelLevel.value < 10000){
    faultyItems.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is Ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is Ready`;
    fuelStatus.innerHTML = "ATTENTION: There is not enough fuel for the journey!";
    launchStatus.innerHTML = "Shuttle not ready for launch" ;
    launchStatus.style.color = "red";
   } else if(cargoLevel.value > 10000){
    faultyItems.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is Ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is Ready`;
    cargoStatus.innerHTML = "ATTENTION: There is too much mass for the shuttle to take off!";
    launchStatus.innerHTML = "Shuttle not ready for launch" ;
    launchStatus.style.color = "red";
   }  else {
    faultyItems.style.visibility = "visible"; //needed this here so each status shows when shuttle is ready for launch. 
    launchStatus.innerHTML = "Shuttle is ready for launch" ;
    launchStatus.style.color = "green";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is Ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is Ready`;
  
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
