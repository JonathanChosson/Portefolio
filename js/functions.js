//Fonction qui affiche une app
const affichageApp = (app) => {
    console.log(app);
    app.classList.remove("invisible");
    app.classList.remove("scale-out-center");
    app.classList.add("scale-in-center");
}

//Fonction qui masque une app 
const masquageApp = (app) => {
    console.log(app);
    
    app.classList.remove("scale-in-center");
    app.classList.add("scale-out-center");
}

//Affiche l'heure
const affichage = function(){
    let date = new Date();

    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    if (secondes < 10){
        secondes = "0" + secondes;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    let horloge = heures + ":" + minutes;
    document.getElementById('heure').innerText = horloge;
};