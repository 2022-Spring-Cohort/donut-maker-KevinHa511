import DonutMaker from "./Donutmaker.js";

const donutMaker = new DonutMaker();
const container = document.querySelector(".container");

//update view//
function updateView() {
  donutCount.innerHTML = donutMaker.donutCount;
  autoclickerCount.innerText = donutMaker.autoClickerCount;
  donutMultiplierCount.innerText = donutMaker.donutMultiplier;
  donutCount.innerText = donutMaker.donutCount.toFixed(0);
}

//making a donut w/ img//
const donutCount = document.querySelector(".DonutCount");
const donutImg = document.querySelector(".donutImg");
donutImg.addEventListener("click", () => {
  donutMaker.click(1);
  updateView();
});

//auto clicker//

const autoClickerBtn = document.querySelector(".Auto-Clicker");
const autoclickerCount = document.querySelector(".AutoclickerCount");
autoClickerBtn.addEventListener("click", () => {
  // console.log(donutMaker);
  donutMaker.buyAutoClicker();
  if (donutMaker.autoClickerCount == 1) {
  
    console.log("enable autoclicker");
    setInterval(function(){
      donutMaker.click(donutMaker.autoClickerCount);
      updateView();
      console.log("autoCLICKED");
    },1000);
  }
  updateView();
});


//donut multiplier//
const donutMultiplierCount = document.querySelector(".DonutMultiplierCount");
const donutMultiplierBtn = document.querySelector(".Donut-Multiplier");
donutMultiplierBtn.addEventListener("click", () => {
  donutMaker.buyMultiplierClicker();
  updateView();
    // if(donutMaker.click)
});
//reset button//
let resetButton = document.querySelector('.resetButton');
resetButton.addEventListener("click", ()=>{
  donutMaker.reloadPage();
})