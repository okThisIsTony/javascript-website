function onClick(inputName) {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  $.get(url, function (data, status) {
    if (status === "success") {
      addNamesToHTML(data);
    } else {
      console.log("The status is a " + status + "!");
    }
  });
}
function addNamesToHTML(data) {
  const pokemonNames = data.results.map((pokemon) => {
    const h2Element = document.createElement("h2");
    h2Element.innerHTML = pokemon.name;
    console.log("None with h2 tag: ", h2Element);
    return h2Element;
  });
  $("#displayedText").html(pokemonNames);
}
