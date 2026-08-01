
const figs=["🎲 Random","Busty","Very Busty","Extremely Busty","Hyper-Busty","Ultra-Busty","Buxom","Very Buxom","Extremely Buxom","Hyper-Buxom","Ultra-Buxom","Top-Heavy","Very Top-Heavy","Extremely Top-Heavy","Hyper Top-Heavy","Ultra Top-Heavy"];
const eth=["🎲 Random","Caucasian"];
const cats={Top:["🎲 Random","Navy polo shirt","White ribbed tank top","Wrap top"],Bottom:["🎲 Random","Khaki shorts","Blue jeans"],Footwear:["🎲 Random","Loafers","White sneakers","Cowboy boots"],Location:["🎲 Random","Downtown sidewalk","Texas ranch","Coffee shop"]};
function fill(id,a){let s=document.getElementById(id);a.forEach(v=>s.add(new Option(v,v)));}
fill("eth",eth);fill("fig",figs);
let ui=document.getElementById("ui");
Object.keys(cats).forEach(k=>{ui.insertAdjacentHTML("beforeend",`<label>${k}</label><select id='${k}'></select>`);fill(k,cats[k]);});
const pick=a=>a[1+Math.floor(Math.random()*(a.length-1))];
const val=(id,a)=>{let v=document.getElementById(id).value;return v==="🎲 Random"?pick(a):v;}
function gen(){document.getElementById("p").value=`Photorealistic. Story orientation. ${val("fig",figs)} ${val("eth",eth)} Woman wearing ${val("Top",cats.Top)}, ${val("Bottom",cats.Bottom)}, ${val("Footwear",cats.Footwear)}, at ${val("Location",cats.Location)}.`;}
g.onclick=gen;c.onclick=()=>navigator.clipboard.writeText(p.value);gen();
