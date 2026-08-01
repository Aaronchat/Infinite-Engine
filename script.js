
const C=["Busty Caucasian Elf","Busty Caucasian Archer","Busty Caucasian Dragon Tamer","Busty Caucasian Cowgirl"];
const O=["Evening gown","Thong","Power armor","Pajamas"];
const L=["Ancient castle","Tokyo rooftop","Texas ranch","Space station"];
const H=["Alien invasion begins","Dragon lands nearby","Werewolves emerge from the shadows"];
const pick=a=>a[Math.floor(Math.random()*a.length)];
function generate(){
const c=pick(C),o=pick(O),l=pick(L),h=pick(H);
character.textContent=c;outfit.textContent=o;location.textContent=l;chaos.textContent=h;
prompt.value=`Photorealistic. Story orientation. ${c}. Wearing ${o}. At ${l}. ${h}.`;
}
window.onload=()=>{gen.onclick=generate;copy.onclick=()=>navigator.clipboard.writeText(prompt.value);generate();}
