import { resolve } from "./random.js";
import { legCoveringBottoms, armCoveringTops } from "./rules.js";

export function buildPrompt(){
 const R={};
 const get=(g,k)=>{const id=g+"."+k;if(!(id in R)) R[id]=resolve(g,k); return R[id];};
 const dress=get("outfit","Dresses"),bt=get("outfit","BikiniTop"),bb=get("outfit","BikiniBottom"),op=get("outfit","OnePiece"),ss=get("outfit","SpecialtySwimwear"),one=get("outfit","CompleteOutfit");
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
 const style=get("character","TattooStyle").toLowerCase();
 const map=[["LeftArmTattoo","left arm"],["RightArmTattoo","right arm"],["LeftLegTattoo","left leg"],["RightLegTattoo","right leg"]];
 const items=map.map(([k,p])=>({v:get("character",k),p})).filter(x=>x.v!=="None");
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

 const bottom=get("outfit","Bottom"),top=get("outfit","Top");
 const swimItems=[bt,bb,op,ss];
 const hideLegs=legCoveringBottoms.includes(bottom)||["Jumpsuit","Coveralls"].includes(one)||dress==="Maxi Dress"||swimItems.some(x=>["Wetsuit","Dive Suit"].includes(x));
 const hideArms=armCoveringTops.includes(top)||one==="Coveralls"||swimItems.includes("Wetsuit");
 if(hideLegs){R["character.LeftLegTattoo"]="None";R["character.RightLegTattoo"]="None";}
 if(hideArms){R["character.LeftArmTattoo"]="None";R["character.RightArmTattoo"]="None";}
 const tattoo=tattooPhrase();
 const makeup=get("character","Makeup");
 const makeupDesc=(makeup==="None")?"":`with ${makeup.toLowerCase()} makeup`;
 const accessory=get("outfit","Accessories");const accDesc=accessory!=="None"&&accessory!=="🎲 Random"?`, ${accessory.toLowerCase()}`:"";
 document.getElementById("prompt").value=
`Photorealistic. Story orientation. ${get("character","Figure")} ${get("character","BodyShape")} ${get("character","Ethnicity")} woman with ${get("character","Hairstyle").toLowerCase()} ${get("character","HairColor").toLowerCase()} hair, ${get("character","EyeColor").toLowerCase()} eyes, a ${get("character","Expression").toLowerCase()} expression, ${skinDesc}${makeupDesc?`, ${makeupDesc}`:""}${tattoo?`, ${tattoo}`:""}, wearing ${parts.join(", ")}, at ${get("scene","Location")}. ${get("scene","Time")}, ${get("scene","Weather")}. Captured on a ${get("camera","Camera")}, ${get("camera","Lens").toLowerCase()}, ${get("camera","Framing").toLowerCase()}.`;
}

window.buildPrompt=buildPrompt;
