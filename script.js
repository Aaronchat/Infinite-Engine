
const library={
character:{
Ethnicity:["🎲 Random","Caucasian"],
Figure:["🎲 Random","Busty","Very Busty","Extremely Busty","Hyper-Busty","Ultra-Busty","Buxom","Very Buxom","Extremely Buxom","Hyper-Buxom","Ultra-Buxom","Top-Heavy","Very Top-Heavy","Extremely Top-Heavy","Hyper Top-Heavy","Ultra Top-Heavy"],
BodyShape:["🎲 Random","Slim","Athletic","Curvy","Voluptuous"],
HairColor:["🎲 Random","Black","Dark Brown","Brown","Light Brown","Auburn","Blonde","Platinum Blonde","Strawberry Blonde","Red","Gray","Silver","White","Blue","Cyan","Green","Purple","Pink","Magenta","Teal","Orange"],
Hairstyle:["🎲 Random","Long Straight","Long Wavy","Long Curly","Shoulder-Length","Bob Cut","Pixie Cut","Ponytail","High Ponytail","Twin Tails","Braided","French Braid","Side Braid","Bun","Messy Bun","Space Buns","Wolf Cut","Shag Cut","Mohawk","Undercut","Buzz Cut","Bald"],
EyeColor:["🎲 Random","Brown","Dark Brown","Hazel","Amber","Green","Blue","Gray","Violet"],
Expression:["🎲 Random","Neutral","Calm","Happy","Smiling","Laughing","Playful","Confident","Serious","Determined","Stoic","Smirking","Flirty","Angry","Fierce","Sad","Surprised"]
},
outfit:{
Top:["🎲 Random","White ribbed tank top","Black fitted tank top","Navy polo shirt","Scoop-neck tee","V-neck tee","Wrap top","Henley (top buttons undone)","White blouse"],
Bottom:["🎲 Random","Blue jeans","Khaki shorts","Light-wash cutoff denim shorts","Black leggings","Denim skirt"],
Footwear:["🎲 Random","Cowboy boots","White sneakers","Loafers","Ankle boots"],
Outerwear:["🎲 Random","None","Denim jacket","Leather jacket","Cardigan"],
Accessories:["🎲 Random","None","Aviator sunglasses","Silver necklace","Brown leather tote"]
},
scene:{
Location:["🎲 Random","Downtown sidewalk","Texas ranch","Coffee shop","Ancient castle"],
Weather:["🎲 Random","Sunny","Cloudy","Golden hour","Light rain"],
Time:["🎲 Random","Morning","Afternoon","Sunset","Night"]
}
};
function addSection(id,obj){
 const root=document.getElementById(id);
 for(const [k,v] of Object.entries(obj)){
  const lab=document.createElement('label');lab.textContent=k;
  const sel=document.createElement('select');sel.id=k;
  v.forEach(x=>sel.add(new Option(x,x)));
  root.append(lab,sel);
 }
}
addSection("character",library.character);
addSection("outfit",library.outfit);
addSection("scene",library.scene);
const pick=a=>a[1+Math.floor(Math.random()*(a.length-1))];
const val=(group,key)=>{const s=document.getElementById(key).value;const arr=library[group][key];return s==="🎲 Random"?pick(arr):s;}
function gen(){
 let parts=[val("outfit","Top"),val("outfit","Bottom"),val("outfit","Footwear")];
 let o=val("outfit","Outerwear"); if(o!=="None") parts.push(o);
 let a=val("outfit","Accessories"); if(a!=="None") parts.push(a);
 document.getElementById("prompt").value=
`Photorealistic. Story orientation. ${val("character","Figure")} ${val("character","BodyShape")} ${val("character","Ethnicity")} woman with ${val("character","Hairstyle").toLowerCase()} ${val("character","HairColor").toLowerCase()} hair, ${val("character","EyeColor").toLowerCase()} eyes and a ${val("character","Expression").toLowerCase()} expression, wearing ${parts.join(", ")}, at ${val("scene","Location")}. ${val("scene","Time")}, ${val("scene","Weather")}.`;
}
const generateButton=document.getElementById("gen");
const resetButton=document.getElementById("rand");
const copyButton=document.getElementById("copy");
const promptBox=document.getElementById("prompt");

generateButton.addEventListener("click",gen);

resetButton.addEventListener("click",()=>{
  document.querySelectorAll("select").forEach(s=>s.selectedIndex=0);
  gen();
});

copyButton.addEventListener("click",()=>{
  navigator.clipboard.writeText(promptBox.value);
});

// Live preview: update whenever a selection changes.
document.querySelectorAll("select").forEach(s=>{
  s.addEventListener("change",gen);
});

gen();
