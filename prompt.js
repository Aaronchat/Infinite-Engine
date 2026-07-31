let character,outfit,location,chaos;
function renderPrompt(){
characterEl.textContent=character;
outfitEl.textContent=outfit;
locationEl.textContent=location;
chaosEl.textContent=chaos.text;
prompt.value=`Photorealistic. Story orientation. ${character}. Wearing ${outfit}. At ${location}. ${chaos.text}.`;
}