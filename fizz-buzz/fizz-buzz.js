var num1, num2, i, fb = 0, buzz = 0, fizz = 0;

document.getElementById("calculate-button").addEventListener("click", function () {
num1 = document.getElementById("num1").value;
num2 = document.getElementById("num2").value;


for (i = num1; i <= num2; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        fb = fb + 1 
        console.log ("Fizz-Buzz brojevi: ", i)
    }
    
    else if (i % 5 == 0) {
        buzz = buzz + 1
        console.log ("Buzz brojevi: ", i)
    }
    else if (i % 3 === 0) {
        fizz = fizz + 1
        console.log ("Fizz brojevi: ", i)
    }
}
document.getElementById("amountOfFb").textContent = fb;
document.getElementById("amountOfBuzz").textContent = buzz;
document.getElementById("amountOfFizz").textContent = fizz;
});