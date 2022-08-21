// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
       listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       //console.log(listedPlanets);
   }).then(function () {
       //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetPicked = pickPlanet(listedPlanets)
       let name = planetPicked.name
       let diameter = planetPicked.diameter
       let star = planetPicked.star
       let distance = planetPicked.distance
       let moons = planetPicked.moons
       let imageUrl = planetPicked.image
       //console.log(planetPicked);
       //call the adddestinationinfo function from scripthelper so mission target div on the index.html can be updated with what we have on the missionTarget.innerHTML in the scripthelper.
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
   })
   
});

window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]");
        let coPilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass= document.querySelector("input[name=cargoMass]");
        if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("All fields are required!")
        } 
       else {formSubmission(document, "list", pilotName, coPilotName, fuelLevel, cargoMass);        
        };
    });
    
});



