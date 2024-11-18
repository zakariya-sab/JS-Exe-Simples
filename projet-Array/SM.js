let array = [];
let ele;
document.getElementById("submit").addEventListener("click", function () {
  ele = document.getElementById("text").value;
  console.log(ele);
  if (ele !== "") {
    array.push(ele);
    console.log(array);
    document.getElementById("output").innerHTML = array;
    document.getElementById("text").value = '';
  }

})
document.getElementById("reset").addEventListener("click", function () {
  if (array !== null) {
    array.pop("ele");
    console.log(array);
    document.getElementById("output").innerHTML = array;
  }
})