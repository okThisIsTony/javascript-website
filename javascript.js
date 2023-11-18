function onClick(inputName) {
  document.getElementById("output").innerHTML = "Welcome";
  alert("Welcome, " + inputName + "!");

  const myVariableName = { name: "Username:" + inputName };
  console.log(myVariableName.name);

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  $.get(url, function (data, status) {
    if (status === "success") {
      console.log(data.results.map(showNames));
    }
  });
}

function showNames(pokemon) {
  return pokemon.names;
}

function otherButton(inputName2) {
  document.getElementById("output2").innerHTML = "Accepted";
  alert("Email accepted: " + inputName2);

  const myList = { list: "Email:" + inputName2 };
  console.log(myList.list);
}
