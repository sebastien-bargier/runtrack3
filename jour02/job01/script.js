document.addEventListener('DOMContentLoaded', function loaded() {

  var btn = document.querySelector("#button");

  function citation() {

    var citation = document.querySelector("#citation");
    console.log(citation.textContent);
  };

  btn.addEventListener("click", citation);

});