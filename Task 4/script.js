/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į countries.json failą (fetch("./countries.json"))
ir iš atvaizduos visas šalis ir jų eksportus. 
Kiekviena šalis turės savo atvaizdavimo "kortelę", kurioje bus 
nurodoma šalis ir jos eksportai.


Pastaba: Informacija apie šalis turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.querySelector("#output");

async function getCountries() {
  const response = await fetch("./countries.json");
  const countries = await response.json();
  return countries;
}

async function showCountries() {
  const countries = await getCountries();
  console.log(countries);

  countries.forEach((country) => {
    const countryCard = document.createElement("div");
    output.append(countryCard);
    countryCard.classList.add("countryCard");

    const countryName = document.createElement("p");
    countryCard.append(countryName);
    countryName.classList.add("countryName");
    countryName.textContent = country.country;

    const countryExport = document.createElement("p");
    countryCard.append(countryExport);
    countryExport.classList.add("countryExport");
    countryExport.textContent = `Exports: ${[...country.exports]}`;
  });
}

window.onload = function () {
  showCountries();
};
