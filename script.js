
const library={
character:{
Ethnicity:["🎲 Random","Caucasian"],
Figure:["🎲 Random","Busty","Very Busty","Extremely Busty","Hyper-Busty","Ultra-Busty","Buxom","Very Buxom","Extremely Buxom","Hyper-Buxom","Ultra-Buxom","Top-Heavy","Very Top-Heavy","Extremely Top-Heavy","Hyper Top-Heavy","Ultra Top-Heavy"],
BodyShape:["🎲 Random","Slim","Athletic","Curvy","Voluptuous"],
HairColor:["🎲 Random","Black","Dark Brown","Brown","Light Brown","Auburn","Blonde","Platinum Blonde","Strawberry Blonde","Red","Gray","Silver","White","Blue","Cyan","Green","Purple","Pink","Magenta","Teal","Orange"],
Hairstyle:["🎲 Random","Long Straight","Long Wavy","Long Curly","Shoulder-Length","Bob Cut","Pixie Cut","Ponytail","High Ponytail","Twin Tails","Braided","French Braid","Side Braid","Bun","Messy Bun","Space Buns","Wolf Cut","Shag Cut","Mohawk","Undercut","Buzz Cut","Bald"],
EyeColor:["🎲 Random","Brown","Dark Brown","Hazel","Amber","Green","Blue","Gray","Violet"],
Expression:["🎲 Random","Neutral","Calm","Happy","Smiling","Laughing","Playful","Confident","Serious","Determined","Stoic","Smirking","Flirty","Angry","Fierce","Sad","Surprised"],
SkinTone:["🎲 Random","Pale","Fair","Light","Medium","Olive","Tan"],
Freckles:["🎲 Random","None","Light","Moderate","Heavy"],
LeftArmTattoo:["🎲 Random","None","Small Tattoo","Half Sleeve","Full Sleeve"],
RightArmTattoo:["🎲 Random","None","Small Tattoo","Half Sleeve","Full Sleeve"],
LeftLegTattoo:["🎲 Random","None","Small Tattoo","Half Sleeve","Full Sleeve"],
RightLegTattoo:["🎲 Random","None","Small Tattoo","Half Sleeve","Full Sleeve"],
TattooStyle:["🎲 Random","Traditional","Tribal","Japanese","Floral","Geometric","Blackwork","Watercolor","Realism"],
Makeup:["🎲 Random","None","Natural","Soft Glam","Full Glam","Smokey Eye","Pin-Up","Gothic","Bridal"]
},
outfit:{
Top:["🎲 Random","T-Shirt","Scoop-Neck Tee","V-Neck Tee","Henley","Long Sleeve Tee","Tank Top","Ribbed Tank Top","Crop Top","Cami Top","Halter Top","Wrap Top","Off-Shoulder Top","Bardot Top","Sweetheart Top","Peasant Blouse","Blouse","Button-Up Shirt","Tie-Front Shirt","Sports Bra","Bralette","Athletic Tank","Compression Top","Satin Blouse","Silk Blouse","Bodysuit","Corset Top","Knit Sweater","Fitted Turtleneck","Square-Neck Top","Ruched Top","Lace Blouse","Lace Cami","Racerback Tank","Knit Cami","Fitted Polo Shirt","Quarter-Zip Top","Baseball Tee","Ribbed Henley","Off-Shoulder Sweater","Mock Neck Top"],
Bottom:["🎲 Random","Blue Jeans","Skinny Jeans","Straight Jeans","Bootcut Jeans","Leggings","Yoga Pants","Cargo Pants","Leather Pants","Denim Shorts","Athletic Shorts","Running Shorts","Biker Shorts","Khaki Shorts","Linen Shorts","Mini Skirt","Denim Skirt","Pencil Skirt","Pleated Skirt","Midi Skirt","Maxi Skirt","Cargo Shorts","High-Waisted Jeans","Boyfriend Jeans","Wide-Leg Jeans","Flare Jeans","Corduroy Pants","Utility Pants","A-Line Skirt","Wrap Skirt"],
Dresses:["🎲 Random","None","Sundress","Mini Dress","Maxi Dress","Bodycon Dress","Evening Gown","Ball Gown"],
Swimwear:["🎲 Random","None","Bikini","String Bikini","One-Piece Swimsuit","Dive Suit","Wetsuit"],
OnePiece:["🎲 Random","None","Jumpsuit","Coveralls","Romper","Pink Bunny Costume"],
Footwear:["🎲 Random","Sneakers","White Sneakers","Running Shoes","Skate Shoes","Ankle Boots","Chelsea Boots","Cowboy Boots","Combat Boots","Knee-High Boots","Ballet Flats","Loafers","Oxfords","Pumps","Stilettos","Sandals","Flip-Flops","Slides","Espadrilles","Hiking Boots","Trail Shoes"],
Outerwear:["🎲 Random","None","Denim Jacket","Leather Jacket","Bomber Jacket","Blazer","Cardigan","Hoodie","Zip Hoodie","Windbreaker","Trench Coat","Peacoat","Parka","Moto Jacket","Cropped Denim Jacket","Cropped Leather Jacket","Tailored Blazer","Quilted Vest"],
Accessories:["🎲 Random","None","Aviator sunglasses","Silver necklace","Brown leather tote","Reading Glasses","Rectangular Glasses","Round Glasses","Aviator Glasses","Cat-Eye Glasses","Stud Earrings","Hoop Earrings","Drop Earrings","Choker","Chain Necklace","Pendant Necklace","Pearl Necklace","Leather Bracelet","Chain Bracelet","Beaded Bracelet","Bangle","Analog Watch","Digital Watch","Smartwatch","Wedding Band","Fashion Ring","Multiple Rings","Chain Anklet","Beaded Anklet","Baseball Cap","Beanie","Cowboy Hat","Sun Hat","Scarf","Crossbody Bag","Backpack","Messenger Bag","Tote Bag","Clutch Purse"]
},
scene:{
Location:["🎲 Random","Downtown sidewalk","Texas ranch","Coffee shop","Ancient castle","Beach","Forest","Mountain Trail","Lakeside","Waterfall","Library","Bookstore","Museum","Art Gallery","Luxury Hotel Lobby","Japanese Shrine","Medieval Tavern","Cyberpunk City","Abandoned Factory","Snowy Village","Desert Highway","Flower Field","Botanical Garden","European Street","Boardwalk","Lighthouse"],
Weather:["🎲 Random","Sunny","Cloudy","Golden hour","Light rain","Heavy Rain","Fog","Mist","Thunderstorm","Snow","Blizzard","Windy","Overcast"],
Time:["🎲 Random","Morning","Afternoon","Sunset","Night","Sunrise","Blue Hour","Midnight"]
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
addSection("character",{Ethnicity:library.character.Ethnicity,SkinTone:library.character.SkinTone,Figure:library.character.Figure,BodyShape:library.character.BodyShape});
addSection("hair",{HairColor:library.character.HairColor,Hairstyle:library.character.Hairstyle});
addSection("face",{EyeColor:library.character.EyeColor,Expression:library.character.Expression,Makeup:library.character.Makeup});
addSection("skin",{Freckles:library.character.Freckles,LeftArmTattoo:library.character.LeftArmTattoo,RightArmTattoo:library.character.RightArmTattoo,LeftLegTattoo:library.character.LeftLegTattoo,RightLegTattoo:library.character.RightLegTattoo,TattooStyle:library.character.TattooStyle});
addSection("outfit",library.outfit);
addSection("scene",library.scene);
const pick=a=>a[1+Math.floor(Math.random()*(a.length-1))];
const val=(group,key)=>{const s=document.getElementById(key).value;const arr=library[group][key];return s==="🎲 Random"?pick(arr):s;}
function gen(){
 let dress=val("outfit","Dresses"),swim=val("outfit","Swimwear"),one=val("outfit","OnePiece");
 let parts=[];
 if(dress!=="None") parts=[dress]; else if(swim!=="None") parts=[swim]; else if(one!=="None") parts=[one]; else parts=[val("outfit","Top"),val("outfit","Bottom")];
 parts.push(val("outfit","Footwear"));
 let o=val("outfit","Outerwear"); if(o!=="None") parts.push(o);
 let a=val("outfit","Accessories"); if(a!=="None") parts.push(a);
 const skin=val("character","SkinTone").toLowerCase();
 const freckles=val("character","Freckles");
 const skinDesc=freckles==="None"?`with ${skin} skin`:`with ${skin} skin and ${freckles.toLowerCase()} freckles`;
 function tattooPhrase(){
 const style=val("character","TattooStyle").toLowerCase();
 const map=[["LeftArmTattoo","left arm"],["RightArmTattoo","right arm"],["LeftLegTattoo","left leg"],["RightLegTattoo","right leg"]];
 const items=map.map(([k,p])=>({v:val("character",k),p})).filter(x=>x.v!=="None");
 if(!items.length) return "";
 const fmt=(v,p)=>`with a ${style} ${v.toLowerCase()} tattoo on her ${p}`;
 const la=items.find(x=>x.p==="left arm"),ra=items.find(x=>x.p==="right arm");
 if(la&&ra&&la.v===ra.v&&(la.v==="Full Sleeve"||la.v==="Half Sleeve")){
   const others=items.filter(x=>x!==la&&x!==ra).map(x=>fmt(x.v,x.p).replace(/^with /,""));
   let base=`with ${style} ${la.v.toLowerCase()} tattoos on both arms`;
   if(others.length) base+=" and "+others.join(" and ");
   return base;
 }
 const phrases=items.map(x=>fmt(x.v,x.p));
 if(phrases.length===1) return phrases[0];
 return phrases[0]+phrases.slice(1).map((p,i)=>i===phrases.length-2?` and ${p.replace(/^with /,"")}`:`, ${p.replace(/^with /,"")}`).join("");
 }
 const tattoo=tattooPhrase();
 const makeup=val("character","Makeup");
 const makeupDesc=(makeup==="None")?"":`with ${makeup.toLowerCase()} makeup`;
const accessory=val("outfit","Accessories");const accDesc=accessory!=="None"&&accessory!=="🎲 Random"?`, ${accessory.toLowerCase()}`:"";
 document.getElementById("prompt").value=
`Photorealistic. Story orientation. ${val("character","Figure")} ${val("character","BodyShape")} ${val("character","Ethnicity")} woman with ${val("character","Hairstyle").toLowerCase()} ${val("character","HairColor").toLowerCase()} hair, ${val("character","EyeColor").toLowerCase()} eyes, a ${val("character","Expression").toLowerCase()} expression, ${skinDesc}${makeupDesc?`, ${makeupDesc}`:""}${tattoo?`, ${tattoo}`:""}, wearing ${parts.join(", ")}${accDesc}, at ${val("scene","Location")}. ${val("scene","Time")}, ${val("scene","Weather")}.`;
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
