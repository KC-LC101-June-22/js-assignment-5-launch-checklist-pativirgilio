window.addEventListener("load", function() {

   let listedPlanets;
   
   let listedPlanetsResponse = myFetch();
       listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       
   }).then(function () {
       
       let planetPicked = pickPlanet(listedPlanets)
       let name = planetPicked.name
       let diameter = planetPicked.diameter
       let star = planetPicked.star
       let distance = planetPicked.distance
       let moons = planetPicked.moons
       let imageUrl = planetPicked.image
      
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
       else {formSubmission(document, pilotName, coPilotName, fuelLevel, cargoMass);        
        };
    });
    
});



