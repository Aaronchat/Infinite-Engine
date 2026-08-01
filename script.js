
const data={
top:["Random","navy polo shirt","white ribbed tank top","scoop-neck t-shirt","henley with top buttons undone","wrap top"],
bottom:["Random","khaki shorts","light-wash cutoff denim shorts","blue jeans"],
footwear:["Random","loafers","white sneakers","cowboy boots"],
accessory:["Random","aviator sunglasses","silver necklace","brown leather tote"],
location:["Random","a downtown sidewalk","a Texas ranch","a coffee shop"]
};
function fill(id){
 const s=document.getElementById(id);
 data[id].forEach(v=>{let o=document.createElement("option");o.textContent=v;s.appendChild(o);});
}
["top","bottom","footwear","accessory","location"].forEach(fill);
function pick(arr){return arr[1+Math.floor(Math.random()*(arr.length-1))]}
function val(id){const v=document.getElementById(id).value;return v==="Random"?pick(data[id]):v;}
function build(){
 const p=`Photorealistic. Story orientation. Busty Caucasian Woman wearing ${val("top")}, ${val("bottom")}, ${val("footwear")}, ${val("accessory")}, at ${val("location")}.`;
 document.getElementById("out").textContent=p;
}
document.getElementById("gen").onclick=build;
document.getElementById("copy").onclick=()=>navigator.clipboard.writeText(document.getElementById("out").textContent);
build();
