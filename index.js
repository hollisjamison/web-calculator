function addNumbers() {
  let a = document.getElementById("box1").value
  const b = document.getElementById("box2").value
  var c = Number(a) + Number(b)

  document.getElementById("box3").value = c
}