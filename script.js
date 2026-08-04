import { clothingData } from './clothing.js';
import { accessoriesData } from './accessories.js';
import { sceneData } from './locations.js';
import { lightingData } from './lighting.js';
import { appearanceData } from './appearance.js';

const library={
character: appearanceData,
outfit: {...clothingData, ...swimwearData};
function updateThemeOutfit(){
 const theme=document.getElementById("Theme");
 const outfit=document.getElementById("ThemeOutfit");
 if(!theme||!outfit)return;
 const outfitLabel=outfit.previousElementSibling;
 outfit.innerHTML="";
 ["🎲 Random","None",...(themeOutfitMap[theme.value]||[])].forEach(x=>outfit.add(new Option(x,x)));
 const show=theme.value!=="None"&&theme.value!=="🎲 Random";
 outfit.style.display=show?"":"none";
 if(outfitLabel) {
   outfitLabel.style.display=show?"":"none";
   outfitLabel.textContent=show?theme.value+" Outfit":"ThemeOutfit";
 }
}

const themeSelect=document.getElementById("Theme");
const themeLabel=themeSelect.previousElementSibling;
const outfitSelect=document.getElementById("ThemeOutfit");
const outfitLabel=outfitSelect.previousElementSibling;
themeSelect.after(outfitLabel,outfitSelect);
themeSelect.addEventListener("change",updateThemeOutfit);
updateThemeOutfit();
const pick=a=>a[1+Math.floor(Math.random()*(a.length-1))];
const val=(group,key)=>{const s=document.getElementById(key).value;const arr=library[group][key];return s==="🎲 Random"?pick(arr):s;}

function resolve(group,key){
 const s=document.getElementById(key).value;
 return s==="🎲 Random"?pick(library[group][key]):s;
}

// --- Rules Engine ---
const legCoveringBottoms=["Blue Jeans","Skinny Jeans","Straight Jeans","Bootcut Jeans","Leggings","Yoga Pants","Cargo Pants","Leather Pants","High-Waisted Jeans","Boyfriend Jeans","Wide-Leg Jeans","Flare Jeans","Corduroy Pants","Utility Pants"];
const armCoveringTops=["Long Sleeve Tee","Button-Up Shirt","Knit Sweater","Fitted Turtleneck","Quarter-Zip Top","Off-Shoulder Sweater","Mock Neck Top"];
function setDisabled(group,key,disabled){
 const sel=document.getElementById(key);
 if(!sel) return;
 sel.disabled=disabled;
 sel.style.opacity=disabled?"0.5":"1";
 if(disabled) sel.selectedIndex=0;
}
function applyRules(){
 const bottom=document.getElementById("Bottom").value;
 const top=document.getElementById("Top").value;
 const one=document.getElementById("CompleteOutfit").value;
 const swim=[document.getElementById("BikiniTop").value,document.getElementById("BikiniBottom").value,document.getElementById("OnePiece").value,document.getElementById("SpecialtySwimwear").value].join(",");
 const dress=document.getElementById("Dresses").value;
 const hideLegs=legCoveringBottoms.includes(bottom)||["Jumpsuit","Coveralls"].includes(one)||["Maxi Dress"].includes(dress)||["Wetsuit","Dive Suit"].includes(swim);
 const hideArms=armCoveringTops.includes(top)||["Coveralls"].includes(one)||["Wetsuit"].includes(swim);
}


function gen(){
 const R={};
 const get=(g,k)=>{const id=g+"."+k;if(!(id in R)) R[id]=resolve(g,k); return R[id];};
 let dress=get("outfit","Dresses"),bt=get("outfit","BikiniTop"),bb=get("outfit","BikiniBottom"),op=get("outfit","OnePiece"),ss=get("outfit","SpecialtySwimwear"),one=get("outfit","CompleteOutfit");
 const themeOutfit=get("outfit","ThemeOutfit");
 let parts=[];
 if(themeOutfit!=="None" && themeOutfit!=="🎲 Random") parts=[themeOutfit];
 else if(dress!=="None" && dress!=="🎲 Random") parts=[dress];
 else if([bt,bb,op,ss].some(x=>x!=="None"&&x!=="🎲 Random")){parts=[bt,bb,op,ss].filter(x=>x!=="None"&&x!=="🎲 Random");}
 else if(one!=="None" && one!=="🎲 Random") parts=[one];
 else {
   const top=get("outfit","Top"), bottom=get("outfit","Bottom");
   if(top!=="None") parts.push(top);
   if(bottom!=="None") parts.push(bottom);
 }
 parts.push(get("outfit","Footwear"));
 let o=get("outfit","Outerwear"); if(o!=="None") parts.push(o);
 let a=get("outfit","Accessories"); if(a!=="None") parts.push(a);
 const skin=get("character","SkinTone").toLowerCase();
 const freckles=get("character","Freckles");
 const skinDesc=freckles==="None"?`with ${skin} skin`:`with ${skin} skin and ${freckles.toLowerCase()} freckles`;
 function tattooPhrase(){
 const tattoo=tattooPhrase();
 const makeup=get("character","Makeup");
 const makeupDesc=(makeup==="None")?"":`with ${makeup.toLowerCase()} makeup`;
const accessory=get("outfit","Accessories");const accDesc=accessory!=="None"&&accessory!=="🎲 Random"?`, ${accessory.toLowerCase()}`:"";
 document.getElementById("prompt").value=
`Photorealistic. Story orientation. ${get("character","Figure")} ${get("character","BodyShape")} ${get("character","Ethnicity")} woman with ${get("character","Hairstyle").toLowerCase()} ${get("character","HairColor").toLowerCase()} hair, ${get("character","EyeColor").toLowerCase()} eyes, a ${get("character","Expression").toLowerCase()} expression, ${skinDesc}${makeupDesc?`, ${makeupDesc}`:""}${tattoo?`, ${tattoo}`:""}, wearing ${parts.join(", ")}, at ${get("scene","Location")}. ${get("scene","Time")}, ${get("scene","Weather")}. Captured on a ${get("camera","Camera")}, ${get("camera","Lens").toLowerCase()}, ${get("camera","Framing").toLowerCase()}.`;
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

// Live preview
document.querySelectorAll("select").forEach(s=>{
  s.addEventListener("change",()=>{applyRules();gen();});
});
applyRules();

gen();