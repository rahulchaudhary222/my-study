let getbody = document.querySelector("#container");

let newelement = document.createElement("h1");

let date = new Date();
let currenthour = date.getHours();

let createtextmsg;

//async func

 dictionary = async () => {
    const dat = await fetch(`https://developer.spotify.com/`);
    console.log(dat);
}
dictionary();


if(currenthour >= 4 && currenthour < 10)
{
    createtextmsg = "GOOD MORNING!";
}
else if(currenthour >= 10 && currenthour < 15)
{
    createtextmsg = "GOOD AFTERNOON!";
}
else if(currenthour >= 15 && currenthour <20)
{
    createtextmsg = "GOOD EVENING!";
}
else
{
    createtextmsg = "GOOD NIGHT!";
}
let eletext = document.createTextNode(createtextmsg);

newelement.append(eletext);

getbody.append(newelement);

newelement.setAttribute("id" , "welcomemsg");


function g()
{
    var a = parseFloat(document.querySelector("#value1").value);
    var inp = document.querySelector("#input1").value;
    var op = document.querySelector("#operator").value;
    var conv;  // HERE VAR conv is not neccesory to be declared BECAUSE in down below code we have declared conv in block level scope i.e an if statement,for,while wor any loop or conditional staments
    if(inp == "C" && op == "C")
    {
        conv = a + " celcius";
    }
    else if(inp == "C" && op == "F")
    {
        conv = 9 * a /5 + 32 + " ferenhiet" ;
    }
    else if (inp == "C" && op == "K")
    {
        conv = a + 273 +" kelvin";
    }
    else if (inp == "K" && op =="K")
    {
        conv = a + " kelvin";
    }
    else if(inp == "K" && op == "C")
    {
        conv = a - 273 +" celcius";
    }
    else if(inp == "K" && op =="F")
    {
        conv =  (a - 273) * 9 / 5 + 32 + " ferenhiet";
    }
    else if (inp == "F" && op == "F")
    {
        conv = a + " ferenhiet";
    }
    else if (inp == "F" && op == "C")
    {
        conv = (a - 32) * 5 / 9 + " celcius";
    }
    else if (inp == "F" && op == "K")
    {
        conv = (a - 32) * 5 / 9 + 273 + " kelvin";
    }

    document.querySelector("#result").innerHTML = conv;
}
//now the toggle menu function :-
var togglenavstatus = false; //check whether making first letter uppercase makes any differece?
var getsidebar = document.querySelector(".nav-sidebar");
var getsidebarul = document.querySelector(".nav-sidebar ul");
var togglenav = function()
{
   if (togglenavstatus === false) 
    {
        getsidebarul.style.visibility = "visible"
        getsidebar.style.width = "330px";
        setTimeout(() => {

            getsidebar.style.width = "300px";
            
        }, 500);

        togglenavstatus = true;
    }
   else if (togglenavstatus === true) 
   {
       getsidebarul.style.visibility = "hidden"
       getsidebar.style.width = "0px";

       togglenavstatus = false;
   }
}
var closeall = function()
{
    getsidebarul.style.visibility = "hidden";
    getsidebar.style.width = "0px";
    
    togglenavstatus = false;
    document.querySelector("#settings").style.width="40px";
    document.querySelector("#settings").style.height="40px";
    document.querySelector("#settings").style.right="-10px";
    document.querySelector("#settings").style.top="-10px";
    document.querySelector("#settings").style.opacity="1";
    document.querySelector(".settingcontent").style.display="none";
    
}


function c()
{
    let x = parseFloat(document.querySelector("#num1").value);
    let y = parseFloat(document.querySelector("#num2").value);
    let kk = document.querySelector("#kyakaru").value;
    let ans;
    if (kk == "add")
    {
        ans = x + y ;
    }
    else if (kk == "sub")
    {
        ans = x - y ;
    }
    else if(kk == "div")
    {
        ans = x / y ;
    }
    else if(kk == "mul")
    {
        ans = x * y ;
    }

    document.querySelector("#calcresult").innerHTML = ans ;
}
let whatisshowing = document.querySelector("#content").innerHTML;
let scb = document.querySelector(".simcalbtn");
let tc = document.querySelector(".teperaturec")
var temcon = document.querySelector("#main");
var simcalc = document.querySelector("#simcal");
function showsimplecalculator()
{
    
    temcon.style.display = "none";
    simcalc.style.display = "block";
}
function showtemparatureconverter()
{
   
    temcon.style.display = "block";
    simcalc.style.display = "none";
}
scb.onclick = showsimplecalculator;
tc.onclick = showtemparatureconverter;
//practice

////design////

const divhead = document.querySelector("#header");

small = () => {
    let x = parseInt(Math.random()*250);
    let y = parseInt(Math.random()*250);
    let z = parseInt(Math.random()*250);
    setTimeout(el => {
        divhead.style.width = "300px";
        divhead.style.left = "150px";
        divhead.style.backgroundColor = `rgb(${x},${y},${z})`;
        big(); 
    }, 1500);
}

big = () => {
    let x = parseInt(Math.random()*250);
    let y = parseInt(Math.random()*250);
    let z = parseInt(Math.random()*250);
    setTimeout(el => {
        divhead.style.width = "600px";
        divhead.style.left = "0px";
        divhead.style.backgroundColor = `rgb(${x},${y},${z})`;
        small(); 
    }, 1500);
}
big();

showsett = () => {
    document.querySelector("#settings").style.width="1500px";
    document.querySelector("#settings").style.height="1500px";
    document.querySelector("#settings").style.right="-750px";
    document.querySelector("#settings").style.top="-750px";
    document.querySelector("#settings").style.opacity="0.5";
    document.querySelector(".settingcontent").style.display="block";
    document.querySelector(".settingcontent").style.opacity="1";
}
nightmode = () => {
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("body").style.backgroundImage="none";
    

}