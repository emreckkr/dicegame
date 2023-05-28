var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
diceimg="dice"+randomNumber1+".png";
console.log(diceimg);
randomsourceimg1="./images/"+diceimg;
image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsourceimg1);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
diceimg="dice"+randomNumber2+".png";
randomsourceimg2="./images/"+diceimg;
image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsourceimg2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}