function myfun() {
  var a = document.getElementById("form").value;

  if (a == "") {
    document.getElementById("massage").innerHTML = "*please fill email*";
    return false;
  }
  if (a.length < 3) {
    document.getElementById("massage").innerHTML = "*username must be 3 char*";
    return false;
  }
  if (a.length > 30) {
    document.getElementById("massage").innerHTML =
      "*usernane must be less than 20 char*";
    return false;
  }
  var x = document.getElementById("pass").value;
  if(x == ""){
    document.querySelector("#massages").innerHTML = "*!please fill password";
    return false;
  }
}
