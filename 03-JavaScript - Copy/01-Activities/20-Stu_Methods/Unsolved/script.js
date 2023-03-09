var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

constellations.unshift("Canis Major");
console.log(constellations[0]);
planets.splice(5,1)
console.log(planets);
var galaxy=constellations.concat(planets);
console.log(galaxy);
var newStar = star.toUpperCase();
console.log(newStar);
// WRITE YOUR CODE BELOW
