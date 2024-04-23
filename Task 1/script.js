// Parašykite JavaScript kodą, kuris leistų vartotojui įvesti temperatūrą laipsniais Celsijaus ir
// matyti jos konversiją į:

//     Farenheitus (°F) | Formulė: °F = (°C * 9/5) + 32
//     Kelvinus (K) | Formulė: K = °C + 273.15

// Pastaba: Rezultatai turi būti matomi formoje su įvesties lauku ir mygtuku,
// ir rezultatai turi būti rodomi viduje <div id="output"></div> elemente.
// Užtikrinkite, kad naudotojo sąsaja turėtų bent minimalų stilių.

const searchBar = document.querySelector("#search");
const submitButton = document.querySelector("#submit-btn");
const fahrenheitText = document.querySelector("#fahrenheitText");
const kelvinText = document.querySelector("#kelvinText");

let celsius;
let fahrenheit;
let kelvin;

function celsiusToFahrenheit() {
  celsius = searchBar.value;
  fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheitText.textContent = `Fahrenheit: ${fahrenheit}`;
}

function celsiusToKelvin() {
  celsius = searchBar.value;
  kelvin = +celsius + 273.15;
  kelvinText.textContent = `Kelvin: ${kelvin}`;
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  celsiusToFahrenheit();
  celsiusToKelvin();
});
