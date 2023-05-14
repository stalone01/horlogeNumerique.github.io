// det le variable de selector

var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    //Declaration des variables qui seront utilisées
    var today, annee, listeMois, mois, listeJours, jourNumero, jourNom,
    heures, minutes, secondes, deuxChiffres;

    //Recuperation des variables
    today = new Date();
    annee = today.getFullYear();

    listeMois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Septembre",
"Octobre","Novembre","Decembre"];
    mois = listeMois[today.getMonth()];

    jourNumero = today.getDate();
    listeJours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    jourNom = listeJours[today.getDay()];

    //Afficher les heures, minutes et secondes tjrs avec 2 chiffres

    deuxChiffres = function(element){
        if(element<10){
            return element = "0"+ element;
        }else{
            return element;
        }
    }
    //Recuperation de l'heure,minutes et secondes
    heures = deuxChiffres(today.getHours());
    minutes = deuxChiffres(today.getMinutes());
    secondes = deuxChiffres(today.getSeconds());

    //affichage dans le Div du HTML
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + "," + jourNumero + " " + mois + " " + annee;

    //Lancer la function affichage heures tous les 1 sec
    setTimeout(affichageHeure, 1000);
}
//Lancer la function
affichageHeure();