//affiche et masque #MaFiche
let btnMaFiche = document.getElementById('btnMaFiche');
let retourMafiche = document.getElementById('retourMafiche');

btnMaFiche.addEventListener('click', function(){
    affichageApp(MaFiche);
})

retourMafiche.addEventListener('click', function(){
    masquageApp(MaFiche);
})

window.setInterval(affichage, 1000);
let interval = window.setInterval(affichage, 1000);