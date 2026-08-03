import { applyRules } from "./rules.js";
import { generatePrompt } from "./generator.js";
function gen(){document.getElementById("prompt").value=generatePrompt();}
// UI module
const generateButton=document.getElementById("gen");
const resetButton=document.getElementById("rand");
const copyButton=document.getElementById("copy");
const promptBox=document.getElementById("prompt");

generateButton.addEventListener("click",gen);

resetButton.addEventListener("click",()=>{
  document.querySelectorAll("select").forEach(s=>s.selectedIndex=0);
  document.getElementById("Theme")?.dispatchEvent(new Event("change"));
});

copyButton.addEventListener("click",()=>{
  navigator.clipboard.writeText(promptBox.value);
});

// Live preview
document.querySelectorAll("select").forEach(s=>{
  s.addEventListener("change",()=>{applyRules();gen();});
});
applyRules();

gen();
