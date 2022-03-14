document.addEventListener('DOMContentLoaded', function loaded() {

    function jourtravaille(date){

        var date = new Date(2020, 04, 13);
        var mois = date.getMonth();
        var jour = date.getDate();
        var week_end = date.getDay();
        var annee = date.getFullYear();  

        //console.log(week_end);
    
        if(annee == 2020){
            if(week_end == 1 || week_end == 2){
               
                document.write('Non, ' + jour + ' ' + mois + ' ' + annee + ' ' + ' est un week-end');
            }
    
            else if((jour == 13 && mois == 4) || (jour == 8 && mois == 5) || (jour == 21 && mois == 5) || (jour == 1 && mois == 6) || (jour == 14 && mois == 7) || (jour == 15 && mois == 8) || (jour == 1 && mois == 11) || (jour == 11 && mois == 11) || (jour == 25 && mois == 12) || (jour == 1 && mois == 1)){
                
                document.write('Le ' + jour + ' ' + mois + ' ' + annee + ' ' + ' est un jour férié');
            }

            else {

                document.write('Oui, ' + jour + ' ' + mois + ' ' + annee + ' ' + ' est un jour travaillé');
            }
        }
 
    }
    
    jourtravaille();


});