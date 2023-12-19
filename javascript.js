function onClick(inputName) {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  $.get(url, function (data, status) {
    if (status === "success") {
      const pokemonNames = data.results.forEach((pokemon) => {
        const h2Element = document.createElement("h2");
        h2Element.innerHTML = pokemon.name;
        console.log("None with h2 tag: ", h2Element);
        document.getElementById("displayedText").append(h2Element);
      });
    } else {
      console.log("The status is a " + status + "!");
    }
  });
}
