/*function espera(texto) {
  console.log(texto);
}

setTimeout(espera, 1000, "oi");

setTimeout(() => {
  console.log("aaa");
}, 2000);

for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}*/

const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick() {
  setTimeout(() => {
    this.classList.add("ativo");
  }, 1000);
}

function loop(text) {
  console.log(text);
}

setInterval(loop, 1000, "Passou 1s");

let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 20) {
    clearInterval(meuLoop);
  }
}, 1000);
