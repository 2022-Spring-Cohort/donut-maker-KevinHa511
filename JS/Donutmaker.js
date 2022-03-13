export default class DonutMaker{
    constructor(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.donutMultiplier = 0;
        this.autoBuyEnabled = false;
        this.autoCost = 10;
        this.multiCost = 10;
        this.reloadPage;
    }
    click(numOfClick){
        this.donutCount += numOfClick * Math.pow(1.2,this.donutMultiplier); 
        console.log("Donuts per Click " + numOfClick * Math.pow(1.2,this.donutMultiplier));
    }
    buyAutoClicker(){
        console.log("reached buy ")
        if(this.donutCount>= this.autoCost){
            this.autoClickerCount++

            console.log("donutCount " + this.donutCount)
            this.donutCount -= this.autoCost;
            console.log("donutCount " + this.donutCount)
            this.autoCost = this.autoCost * 1.1;
            console.log(this)
            }
        
    }
    
    

    buyMultiplierClicker(){
        if(this.donutCount >= this.multiCost){
            this.donutMultiplier++
            this.donutCount -= this.multiCost;
            this.multiCost = this.multiCost * 1.1;
        }

    }
     reloadPage(){
        window.location.reload();
     }
    
}