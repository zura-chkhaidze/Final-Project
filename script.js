// burger bar//
function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//alert//
document.getElementById("click me").addEventListener("click", function () {
  window.alert("Message sent!");
});
