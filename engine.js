const CHARACTERS=['Busty Caucasian Woman'];
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function activeThemes(){return Object.keys(THEMES).filter(k=>document.getElementById(k)?.checked)}
function generate(){
character=pick(CHARACTERS);
outfit=pick(OUTFITS);
location=pick(LOCATIONS);
let t=activeThemes();
let pool=CHAOS.filter(c=>t.includes(c.theme));
chaos=pick(pool.length?pool:CHAOS);
renderPrompt();
}