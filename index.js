var x = Math.floor(Math.random() *6) +1;
var y = Math.floor(Math.random() *6) +1;

var p= "images/dice"+ x +".png";


image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",p);

var q = "images/dice"+ y +".png";

image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",q);

if(x>y)
{
    document.querySelector(".win").innerHTML= "<i>PLAYER 1 WIN </i> ";

}
else
{
    document.querySelector(".win").innerHTML= "PLAYER 2 WIN";
}