function onClick(inputName) {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  $.get(url, function (data, status) {
    if (status === "success") {
      const pokemonNames = data.results.map((pokemon) => {
        return "<h2>" + pokemon.name + "</h2>";
      });
      console.log(pokemonNames);
      document.getElementById("output").innerHTML = pokemonNames;
    }
  });
}
function otherButton(inputName2) {
  document.getElementById("output2").innerHTML = "Accepted";
  alert("Email accepted: " + inputName2);

  const myList = { list: "Email:" + inputName2 };
  console.log(myList.list);
}
