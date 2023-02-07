const container = document.querySelector("main");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const initialState = "VICTOR IBIRONKE";
const { log, count } = console;
let iterations = 0;
let interval = null;

container.addEventListener("mouseenter", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    container.textContent = container.textContent
      .split("")
      .map((_) => letters[Math.floor(Math.random() * 26)])
      .join("");

    iterations += 1 / 2;

    const splitted = container.textContent.split("");

    for (let i = 0; i < Math.floor(iterations); i++) {
      splitted[i] = initialState[i];
    }

    container.textContent = splitted.join("");

    if (iterations == 15) {
      iterations = 0;
      clearInterval(interval);
    }
  }, 50);
});
