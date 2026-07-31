const outfits=[
"Leather Jacket",
"Evening Gown",
"Astronaut Suit",
"Cowgirl Outfit",
"Victorian Dress",
"Football Jersey"
];

const locations=[
"Abandoned Motel",
"Moon Base",
"Haunted Carnival",
"Texas Football Stadium",
"Pirate Ship",
"Ancient Castle"
];

const chaos=[
"Giant Penguins",
"Alien Invasion",
"Werewolves",
"Zombie Outbreak",
"T-Rex Escape",
"Robot Rebellion"
];

function pick(a){
 return a[Math.floor(Math.random()*a.length)];
}

function randomize(){
 document.getElementById("outfit").textContent=pick(outfits);
 document.getElementById("location").textContent=pick(locations);
 document.getElementById("chaos").textContent=pick(chaos);
}
