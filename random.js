// Randomization helpers

export const pick = a => a[1 + Math.floor(Math.random() * (a.length - 1))];

export function resolve(group,key){
  const sel=document.getElementById(key).value;
  if(sel!=="🎲 Random") return sel;
  return pick(window.library[group][key]);
}
