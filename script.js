/*

http://codeshare.io/GkHYJ		HTML-u'
http://codeshare.io/flIoR		Css-u'
http://codeshare.io/gA4tk		JavaScriptu'

*/

var overLVL = 0;
var cash = 500;

var lemonade = {
  baseProfit: 1,
  basePeriod: 2,
  profit: function(){
    return this.baseProfit * this.stand.number;
  }, // Se inchide functia profit
  period: function(){
    return this.worker.efficiency() * this.basePeriod;
  }, // Se inchide functia speed

  stand:{
    number: 0,
    cost: 100,
    modifier: 2,
    isAffordable: function(){
      if (cash >= this.cost){
        return true;
      }
      else{
        return false;
      }
    }, // Se inchide functia isAffordable pentru stand.
    buy: function(){
      if (this.isAffordable()){
      	cash -= this.cost;
      	this.number++;
      	this.cost *= this.modifier;
      }
    } // Se inchide functia buy pentru stand.
    
  }, // Se inchide obiectul stand.
  
  worker: {
    number: 1,
    cost: 100,
    modifier: 1.5,
    baseEfficiency: 1.1,
    
    isAffordable: function(){
    	if (cash >= this.cost){
        return true;
      }
      else{
        return false;
      }   
    }, //Se inchide functia isAffordable pentru worker.
      
    buy: function(){
      if (this.isAffordable() && this.number <= 30){
    		cash -= this.cost;
      	this.number++;
      	this.cost *= this.modifier;
      }
    },  // Se inchide functia buy pentru worker.
      
    efficiency: function(){
      return Math.pow(this.baseEfficiency, this.number);
    } // Se inchide functia efficiency pentru worker.
    
  }, // Se inchide obiectul worker.
  
  manager: {
  
  
  
  } // Se inchide obiectul manager.
  
}; // Se inchide obiectul lemonade.      





// Incepe update
var ct = 1;
var fps = 30;
function update(){
  if (ct % (Math.floor(lemonade.period() * fps)) == 0)
  		cash += lemonade.profit();
  ct++;
  if (ct == 300000000)
    ct = 1;
}

function render(){
  document.getElementById("cashVar").innerHTML = Math.floor(cash);
  document.getElementById("lemonadeNumber").innerHTML = lemonade.number;
  document.getElementById("lemonadeProfit").innerHTML = lemonade.profit();
  document.getElementById("lemonadeCost").innerHTML = lemonade.cost;
}

setInterval(update,1000/fps);
setInterval(render,1000/fps);

//button functions

function newGame(){
  document.getElementById("businessList").style.display = "inline";
}

function selectBusiness(id){
  switch(id){
    default:;
    case 1: //Lemonade
      if(lemonade.stand.isAffordable()){
        lemonade.stand.buy();
        document.getElementById("lemonadeButton").style.display = "none";
        document.getElementById("lemonadeBusiness").style.display = "inline";
      }
      break;
    case 2:
      alert("Boutique");
      break;
    case 3:
      alert("lemonparty1232");
      break;
    case 4:
      alert("lemonparty1232");
      break;
  }
}

function buyLemonade(){
  lemonade.stand.buy();
}

function buyWorker(){
	lemonade.worker.buy();
}