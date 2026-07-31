
const roles=['Elf Archer','Dragon Tamer','Cowgirl','Knight','Space Pilot','Detective','Sorceress','Pirate Captain'];
const locations=['Ancient castle','Texas ranch','Moon base','Haunted carnival','Luxury penthouse','Forest'];
const chaos=['Werewolves surround her','Alien invasion begins','Giant penguins take over','Dragon lands nearby','Flash mob surrounds the scene'];

const outfits={
formal:['Black evening gown','Cocktail dress','Ball gown'],
casual:['Jeans and t-shirt','Leather jacket','Sundress'],
fantasy:['Elf armor','Dragon tamer leathers','Sorceress robes'],
western:['Cowgirl outfit','Saloon dress','Ranch work clothes'],
scifi:['Spacesuit','Power armor','Starship uniform'],
athletic:['Soccer uniform','Cheerleader uniform','Tennis outfit'],
sleepwear:['Pajamas','Nightgown','Robe','Underwear']
};

const $=id=>document.getElementById(id);
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function generate(){
 let pool=[];
 Object.keys(outfits).forEach(k=>{ if($(k).checked) pool=pool.concat(outfits[k]);});
 if(pool.length===0){alert("Select at least one outfit collection.");return;}
 const role=pick(roles), outfit=pick(pool), location=pick(locations), event=pick(chaos);
 $('role').textContent=role;
 $('outfit').textContent=outfit;
 $('location').textContent=location;
 $('chaos').textContent=event;
 $('prompt').value=`Photorealistic. Story orientation. Busty Caucasian woman. ${role}. Wearing ${outfit}. At ${location}. ${event}.`;
}
$('gen').onclick=generate;
$('copy').onclick=()=>navigator.clipboard.writeText($('prompt').value).then(()=>alert('Prompt copied!'));
window.onload=generate;
