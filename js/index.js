//affiche l'heure et met à jour
window.setInterval(affichage, 1000);
let interval = window.setInterval(affichage, 1000);

//affiche et masque #MaFiche
let btnMaFiche = document.getElementById('btnMaFiche');
let retourMafiche = document.getElementById('retourMafiche');

btnMaFiche.addEventListener('click', function(){
    affichageApp(MaFiche);
})

retourMafiche.addEventListener('click', function(){
    masquageApp(MaFiche);
})

//affiche et masque #formation
let btnFormation = document.getElementById('btnFormation');
let retourFormation = document.getElementById('retourFormation');

btnFormation.addEventListener('click', function(){
    affichageApp(formation);
})

retourFormation.addEventListener('click', function(){
    masquageApp(formation);
})
