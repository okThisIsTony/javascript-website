function onClick(inputName) {
  document.getElementById("output").innerHTML = "Welcome";
  alert("Welcome, " + inputName + "!");

  const myVariableName = { name: "Adam" };
  console.log(myVariableName.name);
}

function otherButton(inputName2) {
  document.getElementById("output2").innerHTML = "Accepted";
  alert("Email accepted: " + inputName2);
}
