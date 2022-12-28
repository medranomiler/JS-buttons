document.getElementById('button-1').addEventListener("click", red);

function red() {
    alert("You clicked the red button");
    var redbutton = document.getElementById('button-1');
    redbutton.style.display = 'none';
    var button = document.createElement('button');
    var textnode = document.createTextNode("Click Me");
    button.appendChild(textnode);
    document.getElementById("buttons").appendChild(button);
    button.style.backgroundColor = 'pink';
    button.style.fontSize = '30px';
    button.style.borderRadius = '20px';
    button.style.margin = '10px';
    button.id = 'pink-button';


document.getElementById('pink-button').addEventListener("click", tipCalculator);
    
    function tipCalculator(mealCost, tipPercentage){
  
        var mealCost = Number(prompt("what was your meal cost?"));
        var tipPercentage = Number(prompt("what percentage do you want to leave for the tip?"));
        document.getElementById('pink-button').style.display = "none";
        var mealTotal = mealCost + mealCost * (tipPercentage / 100)
        return alert(mealTotal);
    };
        };




document.getElementById('button-2').addEventListener("click", orangePill);

function orangePill() { 
    if(confirm('do you want a random number between any two numbers?')){
        var x = getRandomInt();
        function getRandomInt(min, max){
            min = Math.ceil(prompt("choose your first number: "));
            max = Math.floor(prompt("choose your second number: "));
            return Math.floor(Math.random() * (max - min + 1) + min); 
        }
        alert(x);
        var orange = document.getElementById('button-2');
        orange.style.display = 'none';
    };
};

document.getElementById('button-3').addEventListener("click", yellow);

function yellow(){
    var dog = document.createElement('div');
    var textnode = document.createTextNode('click to clear');
    dog.appendChild(textnode);
    dog.style.width = "220px";
    dog.style.height = "220px";
    dog.style.backgroundImage = 'url("https://media.tenor.com/2P5oqmBWeBkAAAAM/dog-huh.gif")';
    document.body.appendChild(dog);
    dog.addEventListener("click", clearImage);
    function clearImage(){
        dog.style.display = "none";
        document.getElementById('button-3').style.display = "none";
    };
}


