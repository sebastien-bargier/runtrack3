document.addEventListener('DOMContentLoaded', function loaded() {

    var annee = prompt("entrez une année");

    function bisextile(annee) {

        if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))) {

            return true;

        } else {

            return false;
        }
    }


    document.write(bisextile(annee));

});