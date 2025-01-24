import "./styles.css";
window.wantcalc = function () {
  document.getElementById("y").innerHTML =
    "<h1><strong>Let's Start !! ^ - ^ </strong></h1>";
};
window.dontcalc = function () {
  window.alert("Oops!!....No worries!!");
};
window.Solve = function (val) {
  document.getElementById("res").value += val;
};

window.Result = function () {
  var num1 = document.getElementById("res").value;
  var num2 = new Function("return " + num1)();
  document.getElementById("res").value = num2;
};

window.Clear = function () {
  document.getElementById("res").value = "";
};

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const validKeys = "0123456789+-*/";
  if (validKeys.includes(key)) {
    window.Solve(key);
  } else if (key === "Enter") {
    window.Result();
  } else if (key === "c") {
    window.Clear();
  }
});
