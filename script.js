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
document.getElementById("clickme").addEventListener("click", function () {
  window.alert("Message sent!");
});
