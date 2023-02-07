const container = document.querySelector("main");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const initialState = "VICTOR IBIRONKE";
let count = 0;
let interval = null;

container.addEventListener("mouseenter", () => {
  interval = setInterval(() => {
    container.textContent = container.textContent
      .split("")
      .map((letter, index) => {
        if (index < count) {
          return initialState[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (count >= initialState.length) {
      clearInterval(interval);
    }

    count += 1 / 3;
  }, 30);
});
