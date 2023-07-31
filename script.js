document.body.style.backgroundColor = "blue";

let pokemonImages = document.querySelectorAll(".pokemon_images");
pokemonImages.forEach((image) => {
  image.style.border = "5px dotted yellow";
});

let startersImageDiv = document.querySelector("img");
startersImageDiv.style.border = "5px dotted yellow";

let bulbasaurContainer = document.getElementById("bulbasaur_container");
bulbasaurContainer.style.backgroundColor = "#008080";

let footer = document.querySelector("footer");
footer.style.textDecoration = "overline underline";

let pokemonNames = document.querySelectorAll(".pokemon_names");
pokemonNames.forEach((name) => {
  name.style.color = "yellow";
});

let h2Element = document.querySelector(".introduction h2");
h2Element.style.textAlign = "center";

let h1Element = document.querySelector(".introduction h1");
h1Element.style.textDecoration = "underline";
