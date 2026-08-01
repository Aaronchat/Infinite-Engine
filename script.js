
const tops=["a white ribbed tank top","a black fitted tank top","a burnt orange football T-shirt","a gray hoodie","an oversized sweatshirt","a navy polo shirt","a white blouse","a workout tank top"];
const bottoms=["light-wash cutoff denim shorts","dark-wash distressed denim shorts","medium-wash rolled-hem denim shorts","blue jeans","black leggings","khaki shorts","a denim skirt","athletic shorts"];
const dresses=["a floral sundress","a black cocktail dress","a white summer dress","pink silk pajamas","plaid flannel pajamas"];
const footwear=["white sneakers","cowboy boots","running shoes","sandals","high heels","loafers","ankle boots","trainers","hiking boots"];
const outerwear=["","a denim jacket","a leather jacket","a lightweight cardigan"];
const accessories=["","a silver necklace","a leather belt","aviator sunglasses","a smartwatch"];
const locations=["a neighborhood coffee shop","a Texas Longhorn football game","a quiet city park","a shopping mall","a downtown sidewalk","a lakeside dock","a local bookstore","a small-town diner","a Texas ranch","a rooftop overlooking the city","an airport terminal","a farmers market","a beach boardwalk","a suburban backyard barbecue"];
const clothingEl=document.getElementById("clothing"),locationEl=document.getElementById("location"),promptEl=document.getElementById("prompt");
const pick=a=>a[Math.floor(Math.random()*a.length)];
function outfit(){
 if(Math.random()<0.3){
   let d=pick(dresses),parts=[d];
   let o=pick(outerwear),a=pick(accessories);
   if(o)parts.push(o); if(a)parts.push(a);
   return parts.join(", ");
 }
 let parts=[pick(bottoms),pick(tops),"with "+pick(footwear)];
 let o=pick(outerwear),a=pick(accessories);
 if(o)parts.push(o); if(a)parts.push(a);
 return parts.join(", ");
}
function generate(){
 let c=outfit(),l=pick(locations);
 clothingEl.textContent=c; locationEl.textContent=l;
 promptEl.value=`Photorealistic. Story orientation. Busty Caucasian Woman wearing ${c}, at ${l}.`;
}
generateBtn.onclick=generate;
copyBtn.onclick=async()=>{try{await navigator.clipboard.writeText(promptEl.value);}catch(e){promptEl.select();document.execCommand("copy");}alert("Prompt copied!");}
generate();
