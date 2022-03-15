document.addEventListener('DOMContentLoaded', function loaded() {

  var btn = document.querySelector("#button");

  function addOne() {

    var compt = document.querySelector("#compteur").textContent;

		compt++;
		document.querySelector("#compteur").textContent = compt;


  }

  btn.addEventListener("click", addOne);

});
