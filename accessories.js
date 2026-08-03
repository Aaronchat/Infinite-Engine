export const accessoriesData=["🎲 Random","None","Aviator sunglasses","Silver necklace","Brown leather tote","Reading Glasses","Rectangular Glasses","Round Glasses","Aviator Glasses","Cat-Eye Glasses","Stud Earrings","Hoop Earrings","Drop Earrings","Choker","Chain Necklace","Pendant Necklace","Pearl Necklace","Leather Bracelet","Chain Bracelet","Beaded Bracelet","Bangle","Analog Watch","Digital Watch","Smartwatch","Wedding Band","Fashion Ring","Multiple Rings","Chain Anklet","Beaded Anklet","Baseball Cap","Beanie","Cowboy Hat","Sun Hat","Scarf","Crossbody Bag","Backpack","Messenger Bag","Tote Bag","Clutch Purse"]
},
camera:cameraData,
scene:{...sceneData,...lightingData}
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
addSection("character",{Ethnicity:library.character.Ethnicity,SkinTone:library.character.SkinTone,Figure:library.character.Figure,BodyShape:library.character.BodyShape});
addSection("hair",{HairColor:library.character.HairColor,Hairstyle:library.character.Hairstyle});
addSection("face",{EyeColor:library.character.EyeColor,Expression:library.character.Expression,Makeup:library.character.Makeup});
addSection("skin",{Freckles:library.character.Freckles,LeftArmTattoo:library.character.LeftArmTattoo,RightArmTattoo:library.character.RightArmTattoo,LeftLegTattoo:library.character.LeftLegTattoo,RightLegTattoo:library.character.RightLegTattoo,TattooStyle:library.character.TattooStyle});
addSection("outfit",library.outfit);
addSection("camera",library.camera);
addSection("scene",library.scene);

const themeOutfitMap={
"Sci-Fi":["Space Suit","Futuristic Bodysuit","Cyberpunk Jacket","Mech Pilot Suit","Tactical Exosuit","Galactic Officer Uniform"];
