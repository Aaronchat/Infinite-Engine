const CHARACTERS=['Busty Caucasian Woman'];
const $=id=>document.getElementById(id);
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function activeThemes(){return Object.keys(THEMES).filter(k=>$(k).checked)}
function generate(){
 const c=pick(CHARACTERS);
 const o=pick(OUTFITS);
 const l=pick(LOCATIONS);
 const pool=CHAOS.filter(x=>activeThemes().includes(x.theme));
 const ch=pick(pool.length?pool:CHAOS);
 $('character').textContent=c;
 $('outfit').textContent=o;
 $('location').textContent=l;
 $('chaos').textContent=ch.text;
 $('prompt').value=`Photorealistic. Story orientation. ${c}. Wearing ${o}. At ${l}. ${ch.text}.`;
}
$('gen').onclick=generate;
$('copy').onclick=()=>navigator.clipboard.writeText($('prompt').value).then(()=>alert('Prompt copied!'));
window.onload=generate;
