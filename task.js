// smart home
var home=prompt("is there any body yes or no :")
var season=prompt("enter season :")
if(home==="no"){
    console.log("lights offed")
    console.log("door locked")
}
else{
    console.log("lights on")
    if(season==="winter"){
        console.log("temperature setuped to 22 deg")
    }
    else{
        if(season==="summer"){
            console.log("temperature setuped to 18 deg")
        }
    }
    
}

//pass both math and science to graduate

var mathmarks=+prompt("enter math marks:");
var sciencemarks=+prompt("enter science marks:");
if(mathmarks>=50 && sciencemarks>=50){
    console.log("graduated")
}
else{
    console.log("not graduated")
}

//booking a flight

var ticket=+prompt("enter ticket cost:")
// var amount=500;
if(ticket<500){
    var morning=prompt("is providing morning:")
    var duringflightmeal=prompt("is providing meal during flight:")
    if(morning==="yes" || duringflightmeal==="yes"){
        console.log("buy it")
    }
    else{
        console.log("look for another flight.") 
    }
}
else{
    console.log("look for another flight.")
}

//buying a laptop

var laptopprice=+prompt("enter laptop price :");
var amount=80000;
if(laptopprice<=amount){
    var ram=+prompt("enter ram : ");
    var graphics=prompt("is graphics good ;");
    if(ram===8 && graphics==="yes"){
        console.log("buy it")
    }
    else{
        console.log("look for alternatives.")
    }
}
else{
     console.log("look for alternatives.")
}

//attend the class trip

var parcentage=+prompt("enter percentage (eg:80) :")
if(parcentage>=80){
    var grade=prompt("enter grade(eg:a) :");
    if((grade=="b")||(grade=="a") || (grade=="a+")){
    console.log("can attend")
    }
    else{
       console.log(" cannot go.")    
    }
}

else{
    console.log(" cannot go.")
}