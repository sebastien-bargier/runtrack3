document.addEventListener('DOMContentLoaded', function loaded() {

  var btn = document.querySelector("#button");

  function showHide(){

    var article = document.querySelector("article p");

    if(getComputedStyle(article).display != "none"){

      article.style.display = "none";

    } else {

      article.style.display = "block";
    }
  };

  btn.addEventListener("click", showHide);

});