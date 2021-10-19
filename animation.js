window.onload= function (){
var paper = new Raphael("container", 900, 600,);
var backGround = paper.rect(0,0,900,600);
backGround.attr({ fill: "darkblue"});

var img = paper.image(src= "house.png", 350, 350, 200, 200);
var stars = paper.image(src= "stars.png", 0, 0, 900, 600);
stars.attr({opacity:0});
var rectangle = paper.rect(0, 450, 900, 200);
rectangle.attr({fill:"#228B22"});
img.toFront();

var ball = paper.circle(600,50,50);
ball.attr({ fill: "45-yellow-yellow"});



function sunset() {

ball.animate({ r: 20, cx: 600, cy: 700}, 6000, 'ease-in', sunrise);
backGround.attr({fill:"darkblue"});
rectangle.attr({fill:"green"});
ball.attr({fill:"white"});
stars.attr({opacity:0.5});
}

function sunrise() {

ball.animate({r: 40, cx: 600, cy: 80}, 6000, 'ease-out', sunset);
backGround.attr({fill:"blue"});
rectangle.attr({fill:"#228B22"});
ball.attr({fill:"yellow"});
stars.attr({opacity:0});


}

sunset();
sunrise();


}
