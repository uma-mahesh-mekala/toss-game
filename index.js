const myButton = document.getElementById("btn");
function toss()
{
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 2);
    var imageList = ["./assets/head.jpg","./assets/tail.jpg"];
    image = imageList[randomNumber];
    document.querySelector("img").setAttribute("src", image);
    if (randomNumber === 0)
    {
        document.querySelector("h1").textContent = "😉It's Heads."
        document.querySelector("img").setAttribute("alt", "Heads");
    }
    else
    {
        document.querySelector("h1").textContent = "It's tails😉."
        document.querySelector("img").setAttribute("alt", "Tails");
        }


}
myButton.addEventListener('click', toss);