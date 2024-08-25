import { siElAnioEsBisiesto } from "./aniobisiesto.js";

const numero = document.querySelector("#primer-numero"); 
const form = document.querySelector("#aniobisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numeroUsr = Number.parseInt(numero.value);

  div.innerHTML = "<p>" + siElAnioEsBisiesto(numeroUsr) + "</p>";
});

