// open main menu
mainmenu();
function mainmenu(){
const button=document.getElementById("#menu-button");
const navbarleft=document.querySelectorAll("navSub");
button.addEventListener("click"),()=>{
navbarleft.forEach(item=>{
item.classList.remove("visibility-hidden");
item.classList.add("visibility-visible");
})
}
}
