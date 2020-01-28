var h = "&#x2665;";
var d = "&#9670;";
var c = "&#9827;";
var s = "&#9824;";

const cards = [
    { type : h , num : 2, col : "red"},
    { type : h , num : 3, col : "red"},
    { type : h , num : 4, col : "red"},
    { type : h , num : 5, col : "red"},
    { type : h , num : 6, col : "red"},
    { type : h , num : 7, col : "red"},
    { type : h , num : 8, col : "red"},
    { type : h , num : 9, col : "red"},
    { type : h , num : 10, col : "red"},
    { type : h , num : "J", col : "red"},
    { type : h , num : "Q", col : "red"},
    { type : h , num : "K", col : "red"},
    { type : h , num : "A", col : "red"},
    { type : d , num : 2, col : "red"},
    { type : d , num : 3, col : "red"},
    { type : d , num : 4, col : "red"},
    { type : d , num : 5, col : "red"},
    { type : d , num : 6, col : "red"},
    { type : d , num : 7, col : "red"},
    { type : d , num : 8, col : "red"},
    { type : d , num : 9, col : "red"},
    { type : d , num : 10, col : "red"},
    { type : d , num : "J", col : "red"},
    { type : d , num : "Q", col : "red"},
    { type : d , num : "K", col : "red"},
    { type : d , num : "A", col : "red"},
    { type : c , num : 2, col : "black"},
    { type : c , num : 3, col : "black"},
    { type : c , num : 4, col : "black"},
    { type : c , num : 5, col : "black"},
    { type : c , num : 6, col : "black"},
    { type : c , num : 7, col : "black"},
    { type : c , num : 8, col : "black"},
    { type : c , num : 9, col : "black"},
    { type : c , num:10, col : "black"},
    { type : c , num : "J", col : "black"},
    { type : c , num : "Q", col : "black"},
    { type : c , num : "K", col : "black"},
    { type : c , num : "A", col : "black"},
    { type : s , num : 2, col : "black"},
    { type : s , num : 3, col : "black"},
    { type : s , num : 4, col : "black"},
    { type : s , num : 5, col : "black"},
    { type : s , num : 6, col : "black"},
    { type : s , num : 7, col : "black"},
    { type : s , num : 8, col : "black"},
    { type : s , num : 9, col : "black"},
    { type : s , num : 10, col : "black"},
    { type : s , num : "J", col : "black"},
    { type : s , num : "Q", col : "black"},
    { type : s , num : "K", col : "black"},
    { type : s , num : "A", col : "black"},
]


baant = () => {
    for( i = 1 ; i < 10 ; i++)
    {   
        var ran = Math.floor(Math.random()*cards.length);
        var randomcard = cards[ran];
        var num =randomcard.num;
        var type = randomcard.type;
        document.querySelector("#card" + i + "1").innerHTML = "<p id=\"nu"+i+"1\">"+num+"</p>" + "<p id=\"ty"+i+"1\">"+type+"</p>" ;
        document.querySelector("#card" + i + "1").style.color = randomcard.col;
        cards.splice(ran , 1);
    }
    for( i = 1 ; i < 10 ; i++)
    {   
        var ran = Math.floor(Math.random()*cards.length);
        var randomcard = cards[ran];
        var num =randomcard.num;
        var type = randomcard.type
        document.querySelector("#card" + i + "2").innerHTML = "<p id=\"nu"+i+"2\">"+num+"</p>" + "<p id=\"ty"+i+"2\">"+type+"</p>" ;
        document.querySelector("#card" + i + "2").style.color = randomcard.col;
        cards.splice(ran , 1);
    }
    /*for( i = 1 ; i < 6 ; i++)
    {   
        var ran = Math.floor(Math.random()*cards.length);
        var randomcard = cards[ran];
        document.querySelector("#stack" + i ).innerHTML = randomcard.num +"</br>"+ randomcard.type ;
        document.querySelector("#stack" + i ).style.color = randomcard.col;
        cards.splice(ran , 1);
    }*/
    
}
baant();


convert = (a) => {
    if(a =="A") return a = 14;
    if(a == "K") return a = 13;
    if(a == "Q") return a = 12;
    if(a == "J") return a = 11;
    else return a;
}

var nums = []; // here nums is the sum of both num of the card

for(i=1 ; i<=9 ; i++){
    nums[i] = parseInt(convert(document.querySelector("#nu"+i+"1").textContent)) + parseInt(convert(document.querySelector("#nu"+i+"2").textContent));
}

nums.splice(0,1)

var winningscore = Math.max(...nums);



/*var score1 = parseInt(convert(document.querySelector("#nu11").textContent)) + parseInt(convert(document.querySelector("#nu12").textContent));
var score2 = parseInt(convert(document.querySelector("#nu21").textContent)) + parseInt(convert(document.querySelector("#nu22").textContent));
var score3 = parseInt(convert(document.querySelector("#nu31").textContent)) + parseInt(convert(document.querySelector("#nu32").textContent));
var score4 = parseInt(convert(document.querySelector("#nu41").textContent)) + parseInt(convert(document.querySelector("#nu42").textContent));
var score5 = parseInt(convert(document.querySelector("#nu51").textContent)) + parseInt(convert(document.querySelector("#nu52").textContent));
var score6 = parseInt(convert(document.querySelector("#nu61").textContent)) + parseInt(convert(document.querySelector("#nu62").textContent));
var score7 = parseInt(convert(document.querySelector("#nu71").textContent)) + parseInt(convert(document.querySelector("#nu72").textContent));
var score8 = parseInt(convert(document.querySelector("#nu81").textContent)) + parseInt(convert(document.querySelector("#nu82").textContent));
var score9 = parseInt(convert(document.querySelector("#nu91").textContent)) + parseInt(convert(document.querySelector("#nu92").textContent));*/

console.log(winningscore);

var winner = nums.indexOf(winningscore) + 1;

goo = () => {
    document.querySelector("#dealer").innerHTML = "<h4> player " +winner+ " wins the game with " +winningscore+ " points </h4>";
}
/////////////////////
const marks = [9,8,9,7,9,5,7];

console.log(marks.indexOf(9));

var mode = (arr) => {
    var count = 0;
    var mode = 0;
    arr.sort((x,y)=> y-x);
    console.log(arr);
    
    
}

mode(marks);



/*var stack =[
    document.querySelector("#stack1").textContent,
    document.querySelector("#stack2").textContent,
    document.querySelector("#stack3").textContent,
    document.querySelector("#stack4").textContent,
    document.querySelector("#stack5").textContent
]

createplayerscardsarr = () =>{
    var playerarr = [];
    for(i=1;i<10;i++){
        playerarr[i] = [...stack, document.querySelector("#card"+i+"1").textContent,document.querySelector("#card"+i+"2").textContent];
        
    }
    
    console.log(playerarr);
    
}
createplayerscardsarr();*/




