
const cats={
Top:["Navy polo shirt","White ribbed tank top","Scoop-neck tee","Henley (top buttons undone)","Wrap top","Square-neck knit top"],
Bottom:["Khaki shorts","Light-wash cutoff denim shorts","Blue jeans","Black leggings"],
Footwear:["Loafers","White sneakers","Cowboy boots","Ankle boots"],
Outerwear:["None","Denim jacket","Leather jacket","Cardigan"],
Accessory:["None","Aviator sunglasses","Silver necklace","Brown leather tote"],
Location:["Downtown sidewalk","Coffee shop","Texas ranch","Ancient castle"],
Weather:["Sunny","Cloudy","Light rain","Golden hour"],
Time:["Morning","Afternoon","Sunset","Night"]
};
const grid=document.getElementById('grid');
for(const [k,v] of Object.entries(cats)){
 const row=document.createElement('div');row.className='row';
 row.innerHTML=`<label>${k}</label><select id="${k}"></select>`;
 grid.appendChild(row);
 const s=row.querySelector('select');
 s.add(new Option("🎲 Random","__RANDOM__"));
 v.forEach(x=>s.add(new Option(x,x)));
}
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function value(id){const s=document.getElementById(id).value;return s==="__RANDOM__"?pick(cats[id]):s;}
function gen(){
 const outer=value("Outerwear"), acc=value("Accessory");
 let outfit=`${value("Top")}, ${value("Bottom")}, ${value("Footwear")}`;
 if(outer!=="None") outfit+=`, ${outer}`;
 if(acc!=="None") outfit+=`, ${acc}`;
 document.getElementById("out").textContent=
`Photorealistic. Story orientation.\nBusty Caucasian Woman wearing ${outfit}, at ${value("Location")}. ${value("Time")}, ${value("Weather")}.`;
}
document.getElementById("gen").onclick=gen;
document.getElementById("randomAll").onclick=()=>{
 document.querySelectorAll("select").forEach(s=>s.selectedIndex=0);gen();
};
document.getElementById("copy").onclick=()=>navigator.clipboard.writeText(document.getElementById("out").textContent);
gen();
