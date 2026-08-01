
const clothing=[
"light-wash cutoff denim shorts, a white ribbed tank top, and white sneakers",
"dark-wash distressed denim shorts, a black fitted tank top, and cowboy boots",
"medium-wash rolled-hem denim shorts, a burnt orange football T-shirt, and cowboy boots",
"blue jeans, a gray hoodie, and running shoes",
"black leggings, an oversized sweatshirt, and white sneakers",
"pink silk pajamas",
"plaid flannel pajamas",
"a floral sundress with sandals",
"a black cocktail dress with high heels",
"a white summer dress with sandals",
"khaki shorts, a navy polo shirt, and loafers",
"a denim skirt, a white blouse, and ankle boots",
"athletic shorts, a workout tank top, and trainers",
"a leather jacket, jeans, and hiking boots"
];

const locations=[
"a neighborhood coffee shop",
"a Texas Longhorn football game",
"a quiet city park",
"a shopping mall",
"a downtown sidewalk",
"a lakeside dock",
"a local bookstore",
"a small-town diner",
"a Texas ranch",
"a rooftop overlooking the city",
"an airport terminal",
"a farmers market",
"a beach boardwalk",
"a suburban backyard barbecue"
];

const clothingEl=document.getElementById("clothing");
const locationEl=document.getElementById("location");
const promptEl=document.getElementById("prompt");

function pick(a){return a[Math.floor(Math.random()*a.length)];}

function generate(){
 const c=pick(clothing);
 const l=pick(locations);
 clothingEl.textContent=c;
 locationEl.textContent=l;
 promptEl.value=`Photorealistic. Story orientation. Busty Caucasian Woman wearing ${c}, at ${l}.`;
}

document.getElementById("generateBtn").addEventListener("click",generate);
document.getElementById("copyBtn").addEventListener("click",async()=>{
 try{await navigator.clipboard.writeText(promptEl.value);}
 catch(e){promptEl.select();document.execCommand("copy");}
 alert("Prompt copied!");
});

generate();
