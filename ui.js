const characterEl=document.getElementById('character');
const outfitEl=document.getElementById('outfit');
const locationEl=document.getElementById('location');
const chaosEl=document.getElementById('chaos');
const prompt=document.getElementById('prompt');
function copyPrompt(){prompt.select();document.execCommand('copy');alert('Copied!');}