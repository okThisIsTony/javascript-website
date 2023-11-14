function onClick(inputName) {
  document.getElementById("output").innerHTML = "Welcome";
  alert("Welcome, " + inputName + "!");

  const myVariableName = { name: "Username:" + inputName };
  console.log(myVariableName.name);
}

function otherButton(inputName2) {
  document.getElementById("output2").innerHTML = "Accepted";
  alert("Email accepted: " + inputName2);

  const myList = { list: "Email:" + inputName2 };
  console.log(myList.list);
}
