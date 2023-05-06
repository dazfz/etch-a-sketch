const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let size = prompt(
    "Enter grid size less than 101 (e.g. 16 for a 16x16 grid):"
  );
  size = parseInt(size);
  if (size < 101 && Number.isInteger(size) && size > 0) {
    main.style.setProperty("--size", size); // cambiar variable size del css
    createGrid(size);
  } else alert("Invalid input. Please enter a positive integer less than 101.");
});

const main = document.querySelector("main"); // seleccionar main
function createGrid(size) {
  main.innerHTML = ""; // resetea el contenido de main
  for (let i = 0; i < size * size; i++) {
    // crear div hijo de main
    const div = document.createElement("div");
    main.appendChild(div);

    // color rgb random
    let baseColor = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    let darkness = 0;

    // si se mantiene el mouse apretado, y se pasa por encima de un div, se colorea
    div.addEventListener("mousedown", () => (isMouseDown = true));
    div.addEventListener("mouseup", () => (isMouseDown = false));
    div.addEventListener("mouseover", () => {
      if (isMouseDown) {
        let light = 1 + darkness * 0.1;
        let color = `rgb(${baseColor[0] * light}, ${baseColor[1] * light}, ${
          baseColor[2] * light
        })`;
        div.style.backgroundColor = color;
        darkness++;
      }
    });
  }
}

createGrid(16);
