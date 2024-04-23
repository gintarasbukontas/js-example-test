// Parašykite JavaScript kodą, kuris leis vartotojui paspaudus ant mygtuko "Rodyti pranešimus"
// gauti pranešimų duomenis iš JSONPlaceholder API (API endpoint'as pateiktas žemiau).

// Paspaudus mygtuką "Rodyti pranešimus":

//     Pranešimų informacija turi būti pateikta <div id="output"></div> bloke.
//     1.1. Informacija, kuri turi būti pateikta: "title" ir "body" (kortelėje).
//     Žinutė "Paspauskite mygtuką "Rodyti pranešimus" norėdami pamatyti pranešimus" turi išnykti.

// Pastaba: Pranešimų informacija (kortelė) turi turėti bent minimalų stilių.

// API endpoint'as:
// const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

const output = document.querySelector("#output");
const messagePlaceholder = document.querySelector("#message");
const btn = document.querySelector("#btn");

async function getMessages() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const messages = response.json();
  return messages;
}

async function showMessages() {
  const messages = await getMessages();

  messagePlaceholder.remove();

  messages.forEach((message) => {
    const messageHolder = document.createElement("div");
    output.append(messageHolder);
    messageHolder.classList.add("messageHolder");

    const title = document.createElement("p");
    messageHolder.append(title);
    title.classList.add("title");
    title.textContent = `Title: ${message.title}`;

    const body = document.createElement("p");
    messageHolder.append(body);
    body.classList.add("body");
    body.textContent = `Body: ${message.body}`;
  });
}

btn.addEventListener("click", showMessages);
