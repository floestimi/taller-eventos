const div = document.querySelector("div");
const btn = document.querySelector("button");

div.addEventListener("click", () => {
    alert("Hola!, soy el div")
});

btn.addEventListener("click" , (event) => {
    alert('Hola!');
    event.stopPropagation();
});