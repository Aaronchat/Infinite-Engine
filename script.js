const characters=[
'Busty Caucasian Woman',
'Busty Caucasian Elf',
'Busty Caucasian Archer',
'Busty Caucasian Dragon Tamer',
'Busty Caucasian Cowgirl',
'Busty Caucasian Witch'
];

const outfits=[
'Evening gown',
'Cowgirl outfit',
'Leather armor',
'Power armor',
'Pajamas',
'Thong',
'Bikini'
];

const locations=[
'Ancient castle',
'Tokyo rooftop',
'Texas ranch',
'Moon base',
'Abandoned mall'
];

const chaos=[
'Werewolves emerge from the shadows.',
'Alien invasion begins.',
'A dragon lands nearby.',
'A flash mob surrounds the scene.',
'Giant penguins take over the city.'
];

const pick=a=>a[Math.floor(Math.random()*a.length)];

const characterEl=document.getElementById('character');
const outfitEl=document.getElementById('outfit');
const locationEl=document.getElementById('location');
const chaosEl=document.getElementById('chaos');
const promptEl=document.getElementById('prompt');
const generateBtn=document.getElementById('generateBtn');
const copyBtn=document.getElementById('copyBtn');

function generate(){
 const c=pick(characters);
 const o=pick(outfits);
 const l=pick(locations);
 const h=pick(chaos);

 characterEl.textContent=c;
 outfitEl.textContent=o;
 locationEl.textContent=l;
 chaosEl.textContent=h;

 promptEl.value=`Photorealistic. Story orientation. ${c}. Wearing ${o}. At ${l}. ${h}`;
}

generateBtn.addEventListener('click',generate);

copyBtn.addEventListener('click',async()=>{
 try{
   await navigator.clipboard.writeText(promptEl.value);
   alert('Prompt copied!');
 }catch(e){
   promptEl.select();
   document.execCommand('copy');
   alert('Prompt copied!');
 }
});

generate();
