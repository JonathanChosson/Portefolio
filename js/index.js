//affiche l'heure et met à jour
window.setInterval(affichageHeure, 1000);
let interval = window.setInterval(affichageHeure, 1000);

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

//affiche et masque #Experience
let btnExperience = document.getElementById('btnExperience');
let retourExperience = document.getElementById('retourExperience');

btnExperience.addEventListener('click', function(){
    affichageApp(experience);
})

retourExperience.addEventListener('click', function(){
    masquageApp(experience);
})

//affiche et masque #softSkills
let btnSoftSkills = document.getElementById('btnSoftSkills');
let retourSoftSkills = document.getElementById('retourSoftSkills');

btnSoftSkills.addEventListener('click', function(){
    affichageApp(softSkills);
})

retourSoftSkills.addEventListener('click', function(){
    masquageApp(softSkills);
})

//affiche et masque #hardSkills
let btnHardSkills = document.getElementById('btnHardSkills');
let retourHardSkills = document.getElementById('retourHardSkills');

btnHardSkills.addEventListener('click', function(){
    affichageApp(hardSkills);
})

retourHardSkills.addEventListener('click', function(){
    masquageApp(hardSkills);
})

//affiche et masque #hobbies
let btnHobbies = document.getElementById('btnHobbies');
let retourHobbies = document.getElementById('retourHobbies');

btnHobbies.addEventListener('click', function(){
    affichageApp(hobbies);
})

retourHobbies.addEventListener('click', function(){
    masquageApp(hobbies);
})

// Caroussel Hobbies //

const images = document.querySelectorAll('.caroussel');
let imgActive = 0;

//rend toute les images invisibles sauf la première
for( let i = 1; i < images.length; i++) {
    images[i].classList.add('invisible');
};

// Ecoute sur clic btn suivant
document.getElementById('suivant').addEventListener('click', function(){
    images[imgActive].classList.add('invisible');
    images[imgActive].classList.remove('slide-in-left');
    images[imgActive].classList.remove('slide-in-right');
    imgActive ++;
    if(imgActive >= images.length){
        imgActive = 0;
    }
    images[imgActive].classList.remove('invisible');
    images[imgActive].classList.add('slide-in-right');
});

// Ecoute sur bouton precedant
document.getElementById('precedant').addEventListener('click', function(){
    images[imgActive].classList.add('invisible');
    images[imgActive].classList.remove('slide-in-left');
    images[imgActive].classList.remove('slide-in-right');
    imgActive += -1;
    if(imgActive < 0){
        imgActive = images.length;
        imgActive += -1;
    }
    images[imgActive].classList.remove('invisible');
    images[imgActive].classList.add('slide-in-left');
})