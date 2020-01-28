// var c = document.querySelector("#canvascard") ;
// var ctx = c.getContext("2d");
// var grdside = ctx.createLinearGradient(0,0,150,100);
// var grdtri = ctx.createLinearGradient(0,100,120,200);
// grdtri.addColorStop(0,"blue");
// grdtri.addColorStop(1,"white");
// grdside.addColorStop(0,"red");
// grdside.addColorStop(1,"white");
// ctx.font = "30px Ariel";
//     ctx.fillText( "rahul", 10 , 100);

//     ctx.fillStyle = grdside;
//     ctx.fillStyle = grdtri;
    
//     ctx.fillRect(0,0,400,200);



var g = () => {
    var name = document.querySelector("#name").value;
    var position = document.querySelector("#position").value;
    var contact = document.querySelector("#contact").value;
    var website = document.querySelector("#website").value;
    var company = document.querySelector("#company").value;
    document.querySelector("#name1").innerHTML= name;
    document.querySelector("#pos").innerHTML= position;
    document.querySelector("#con").innerHTML= "&#x260E; phone "+ contact;
    document.querySelector("#web").innerHTML= website;
    document.querySelector("#com").innerHTML= company;

    
    
    localStorage.setItem("nam" , `${name}`);
    localStorage.setItem("com" , `${company}`);
    localStorage.setItem("pho" , `${contact}`);
    localStorage.setItem("pos" , `${position}`);
    localStorage.setItem("web" , `${website}`);
}

localst = () => {
    document.querySelector("#name").value = localStorage.getItem("nam");
    document.querySelector("#position").value = localStorage.getItem("pos");
    document.querySelector("#contact").value = localStorage.getItem("pho");
    document.querySelector("#website").value = localStorage.getItem("web");
    document.querySelector("#company").value = localStorage.getItem("com");
}
window.addEventListener('load' , localst);

goo = () => {
    
    var changcol = document.querySelector(".cardwhole");
    var rob = Math.floor(Math.random()*200);
    var van = Math.floor(Math.random()*200);
    var dam = Math.floor(Math.random()*200);

    changcol.style.backgroundColor = "rgb(" + rob + ","+ van + "," + dam +")";

    document.querySelector(".cardside").style.backgroundColor = "rgb(" + (rob+van) + ","+ (van-dam) + "," + (dam+rob) +")";
    document.querySelector(".cardtri").style.backgroundColor = "rgb(" + (rob+van-25) + ","+ (van+dam) + "," + (dam-rob) +")";
}

foo = () => {
    var rob = Math.floor(Math.random()*100) + 50;
    var van = Math.floor(Math.random()*100);
    var dam = Math.floor(Math.random()*100);

    document.querySelector(".cardside").style.clipPath = "polygon(0 0 ," + rob/2 + "% 0 ," + van + "% 100% , 0 100%)";
    document.querySelector(".cardtri").style.clipPath = "polygon(0 " +dam+ "%, 100% 100%, 0 "+rob+"%)";
}
soo = () => {
    document.querySelector(".cardtri").style.borderRadius = "50%";
    document.querySelector(".cardside").style.borderRadius = "50%";
}
doo = () => {
    document.querySelector(".cardtri").style.borderRadius = "0";
    document.querySelector(".cardside").style.borderRadius = "0";
}




 



