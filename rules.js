const legCoveringBottoms=["Blue Jeans","Skinny Jeans","Straight Jeans","Bootcut Jeans","Leggings","Yoga Pants","Cargo Pants","Leather Pants","High-Waisted Jeans","Boyfriend Jeans","Wide-Leg Jeans","Flare Jeans","Corduroy Pants","Utility Pants"];
const armCoveringTops=["Long Sleeve Tee","Button-Up Shirt","Knit Sweater","Fitted Turtleneck","Quarter-Zip Top","Off-Shoulder Sweater","Mock Neck Top"];
function setDisabled(group,key,disabled){
 const sel=document.getElementById(key);
 if(!sel) return;
 sel.disabled=disabled;
 sel.style.opacity=disabled?"0.5":"1";
 if(disabled) sel.selectedIndex=0;
}
export function applyRules(){
 const bottom=document.getElementById("Bottom").value;
 const top=document.getElementById("Top").value;
 const one=document.getElementById("CompleteOutfit").value;
 const swim=[document.getElementById("BikiniTop").value,document.getElementById("BikiniBottom").value,document.getElementById("OnePiece").value,document.getElementById("SpecialtySwimwear").value].join(",");
 const dress=document.getElementById("Dresses").value;
 const hideLegs=legCoveringBottoms.includes(bottom)||["Jumpsuit","Coveralls"].includes(one)||["Maxi Dress"].includes(dress)||["Wetsuit","Dive Suit"].includes(swim);
 setDisabled("character","LeftLegTattoo",hideLegs);
 setDisabled("character","RightLegTattoo",hideLegs);
 const hideArms=armCoveringTops.includes(top)||["Coveralls"].includes(one)||["Wetsuit"].includes(swim);
 setDisabled("character","LeftArmTattoo",hideArms);
 setDisabled("character","RightArmTattoo",hideArms);
}
