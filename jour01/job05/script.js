document.addEventListener('DOMContentLoaded', function loaded() {

    function afficherjourssemaines(){
		let jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
		for (i=0; i<6; i++) {
            console.log(jourssemaines[i]);
		}
        return(jourssemaines[i])
    }
    afficherjourssemaines();

});