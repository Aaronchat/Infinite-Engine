const CHARACTERS=[
'Busty Caucasian Elf','Busty Caucasian Archer','Busty Caucasian Dragon Tamer',
'Busty Caucasian Cowgirl','Busty Caucasian Viking','Busty Caucasian Witch'];
const OUTFITS=['Evening gown','Thong','Bikini','Leather armor','Power armor','Cowgirl outfit','Pajamas'];
const LOCATIONS=['Ancient castle','Tokyo rooftop','Texas ranch','Abandoned mall','Space station'];
const CHAOS=['Werewolves emerge from the shadows','Alien invasion begins','Dragon lands nearby','Flash mob surrounds the scene','Meteor shower lights the sky'];
const pick=a=>a[Math.floor(Math.random()*a.length)];
function gen(){
let c=pick(CHARACTERS),o=pick(OUTFITS),l=pick(LOCATIONS),h=pick(CHAOS);
character.textContent=c;outfit.textContent=o;location.textContent=l;chaos.textContent=h;
prompt.value=`Photorealistic. Story orientation. ${c}. Wearing ${o}. At ${l}. ${h}.`;
}
gen.onclick=gen;
copy.onclick=()=>navigator.clipboard.writeText(prompt.value);
window.onload=gen;