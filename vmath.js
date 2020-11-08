//The app needs to be refreshed after every transaction, only one product may be selected at a time 
//variables used to store functions 
var coinin = 0;//used for totalCoin function
var total = 0;// used to store the sum of coins entered 
var msg =""; 
var notes = document.getElementById("note");
const cost = 20; //a cosntant used to calculate change rturned 
var countCoffee = 0;
var countHotchocolate = 0;
var countTea= 0;
var countMocha=0;
var pick = 1;


 
//setting constants for the initial value of coins 
const rand_R02 = 2;
const rand_R05 = 5;
const rand_R10 = 10;
const rand_R20 = 20;

//Creating a fumction to sum up coins inserted, new variabls created to call values inserted into the app and display as a number
function totalCoin() 
{
    var rand_R02s = Number(document.getElementById("R02").value);
    var rand_R05s = Number(document.getElementById("R05").value);
    var rand_R10s = Number(document.getElementById("R10").value);
    var rand_R20s = Number(document.getElementById("R20").value);
    
 //if statements used to enable calculation of funds available
 if (rand_R02s > 0){
    rand_R02s = rand_R02s*rand_R02
 }
 if (rand_R05s > 0){
    rand_R05s = rand_R05s*rand_R05
 }
 if (rand_R10s > 0){
    rand_R10s = rand_R10s*rand_R10
 }
 if (rand_R20s > 0){
    rand_R20s = rand_R20s*rand_R20
 }
 total = rand_R02s + rand_R05s + rand_R10s + rand_R20s;
  return total; 
} 

// This function adds up all money inserted and gives a total which is displayed on the screen
function addition()
{
    coinin = totalCoin(); 
    document.getElementById("paid").innerHTML = coinin; 

}  

 //function to refresh the coin section, set all values to 0.
function clearcoin()
{
    coinin = 0; 
    document.getElementById("paid").innerHTML = coinin; 

}  

//function to clear coins in coin field
function clearfield()
{
    document.getElementById("R02").value=0;
    document.getElementById("R05").value=0;
    document.getElementById("R10").value=0;
    document.getElementById("R20").value=0;
}
// A function to store the clear coin and coin field when refresh coin is pressed
function nocoins()
{
    totalCoin();
    notes.innerHTML="";
    if(total>0) 
    {
        msg = "Coins returned";
        notes.innerHTML = msg; 
        clearcoin();
    clearfield();
    }
    
}
//function to clear products in product field
function bev()
{
    document.getElementById("C").innerHTML=2;
    document.getElementById("H").innerHTML =2;
    document.getElementById("t").innerHTML =0;
    document.getElementById("M").innerHTML =2;
}

//function to refresh all fields (products, total and coin field)
function refresher()
{
    totalCoin();
    if (totalCoin()>0)
    {
        msg = " Transaction cancelled. Coins returned";
        notes.innerHTML=msg;
        nocoins();
        bev();
         
    }

    else if (totalCoin()==0)
    {
        msg="choose your comfort";
        notes.innerHTML=msg;
        bev();
    }
    
}

//This function is used to calculate the amount of change returned to used
function ReturnCoin()
{
    var tempcoin= 0; 
    if(totalCoin()!=0)
    {
        return(tempcoin = (totalCoin()-cost));
    }
    return tempcoin;
}

// creating a function to count products
function prodCount(choice) 
{
var cof2 = Number(document.getElementById(choice).innerHTML);
if (cof2 > 0)
{
    cof2 = cof2 - pick;
}
return cof2;
}

// function enables counting of coffee and price check to enable selection, used on coffee button 
function coffeeFunction()
{
countCoffee = prodCount(choice="C");
totalCoin();
notes.innerHTML="";

    if(Number(document.getElementById("C").innerHTML)>0)
    {
        if(totalCoin()>=20)
        {
            msg= "Enjoy! R"+ ReturnCoin() +"returned";
            notes.innerHTML=msg; 
            document.getElementById("C").innerHTML = countCoffee;
            total=total-20;
            clearfield();
            total=0;
            document.getElementById("paid").innerHTML = total; 
        }
        else if(totalCoin()<20){
            msg = "Insufficient funds. R" + ReturnCoin()+ "returned";
            notes.innerHTML=msg; 
            clearfield();
            total=0;
            document.getElementById("paid").innerHTML = total; 
        }
    }

    else
    {
        msg = "Coffee not available. R" + ReturnCoin()+ "returned";
        notes.innerHTML=msg;
        clearfield();
        total=0;
        document.getElementById("paid").innerHTML = total; 
    }

}

// function enables counting of hot chocolate and price check to enable selection, used on hot chocolate button 
function hotchocolateFunction()
{
    if(Number(document.getElementById("H").innerHTML)>0)
    {
        countHotchocolate  = prodCount(choice="H");
        totalCoin();
        notes.innerHTML=""; 

        if(totalCoin()>=20)
        {
            msg= "Enjoy! R"+ ReturnCoin() +"returned";
            notes.innerHTML=msg; 
            document.getElementById("H").innerHTML = countHotchocolate ;
            clearfield();
            total=0;
            document.getElementById("paid").innerHTML = total; 
        }
        else if(totalCoin()<20)
        {
            msg = "Insufficient funds. R" + ReturnCoin()+ "returned";
            notes.innerHTML=msg; 
            clearfield();
            total=0;
            document.getElementById("paid").innerHTML = total; 
        }
    }
    else
    {
            msg = "Hot Chocolate not available. R" + ReturnCoin() + "returned";
            notes.innerHTML=msg;
            clearfield();
            total=0;
            document.getElementById("paid").innerHTML = total; 
    }
}

// function enables counting of tea and price check to enable selection, used on tea
function teaFunction()
{
    if(Number(document.getElementById("t").innerHTML)>0)
    {
        countTea = prodCount(choice="t");
    totalCoin();
    notes.innerHTML=""; 
        if(totalCoin()>=20)
        {
            msg= "Enjoy! R"+ ReturnCoin() +"returned";
            notes.innerHTML=msg; 
            document.getElementById("t").innerHTML = countTea;
            clearfield();
            total=0;
            document.getElementById("paid").innerHTML = total; 
        }
        else if(totalCoin()<20)
        {
            msg = "Insufficient funds. R" + ReturnCoin()+ "returned";
            notes.innerHTML=msg; 
            clearfield();
            total=0;
            document.getElementById("paid").innerHTML = total; 
        }
    }
    else
    {
        msg = "Tea not available. R" + ReturnCoin() + "returned";
        notes.innerHTML=msg;
        clearfield();
        total=0;
        document.getElementById("paid").innerHTML = total; 
    }
}
// Function to depict return of coin if no product is available, used on mocha 
      function mochaFunction()
{         if(Number(document.getElementById("M").innerHTML)>0)
          {
           countMocha = prodCount(choice="M");
          totalCoin();
          notes.innerHTML=""; 
           if(totalCoin()>=20)
          {
         msg= "Enjoy! R"+ ReturnCoin() +"returned";
         notes.innerHTML=msg; 
         document.getElementById("M").innerHTML = countMocha;
         clearfield();
         total=0;
         document.getElementById("paid").innerHTML = total; 
    }
    else if(totalCoin()<20)
    {
        msg = "Insufficient funds. R" + ReturnCoin()+ "returned";
        notes.innerHTML=msg; 
        clearfield();
        total=0;
        document.getElementById("paid").innerHTML = total; 
     }
    }

    else{
        msg = "Mocha not available. R" + ReturnCoin() + "returned";
       notes.innerHTML=msg;
      clearfield();
      total=0;
      document.getElementById("paid").innerHTML = total;
     }
 
    
 }
