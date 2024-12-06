// ECF-1 PROJECT :

// Apparition & Disparition du menu Burger :

const menuBurger = document.getElementById("menuBurger");
const btnBurger = document.getElementById("btnBurger");

function interrupteur(){
    btnBurger.classList.toggle("disparition");
}

menuBurger.addEventListener('click', interrupteur);

// Je charge ma DIV "destinations" en fonction d'un tableau :
// Création des différents liens de destination <a>

const divDest = document.getElementById('destinations');

let destinations=['Bresil', 'Canada', 'Maroc', 'Tunisie'];
let destination;
let i=0;
let newA = document.createElement('a');

for(let valeur of destinations){
    destination=destinations[i];
    console.log(destination);
    newA = document.createElement('a');
    newA.textContent = destination;
    newA.href = './'+destination+'.html'
    divDest.append(newA)
    i++;
    }

// Lorsque le bouton "DESTINATIONS" est cliqué :
// J'affiche ou je masque la DIV "destinations"

const btnDest = document.querySelectorAll('.activeDivDest');

function activeDest(){
    if (divDest.style.display === 'none' || divDest.style.display === ''){
        divDest.style.display = 'flex';
    } else {
        divDest.style.display = 'none';
    }
}

btnDest.forEach(function(eachBtnDest) {
    eachBtnDest.addEventListener('click', function(e){
        e.preventDefault();
        activeDest();
    });
});

// Changement css de l'image de fond (background-image) 
//   en fonction du chemin de la page actuelle :

// Obtenir le chemin de la page actuelle
let path = window.location.pathname;

// Sélectionner l'élément figure
let figure = document.querySelector('figure');

// Définir des images de fond différentes en fonction de la page
if (path.includes('Canada.html')) {
    figure.style.backgroundImage = "url('../ECF-1/asset/img/background-canada.jpg')"; 
} else if (path.includes('mars.html')) {
    figure.style.backgroundImage = "url('../ECF-1/asset/img/background-mars2.jpg')"; 
} else if (path.includes('Maroc.html')) {
    figure.style.backgroundImage = "url('../ECF-1/asset/img/background-maroc.jpg')"; 
} else if (path.includes('Bresil.html')) {
    figure.style.backgroundImage = "url('../ECF-1/asset/img/background-bresil.jpg')"; 
} else if (path.includes('Tunisie.html')) {
    figure.style.backgroundImage = "url('../ECF-1/asset/img/background-tunisie.jpg')"; 
} else if (path.includes('souvenirs.html')) {
    figure.style.backgroundImage = "url('../ECF-1/asset/img/construction.png')"; 
} else {
    figure.style.backgroundImage = "url('../ECF-1/asset/img/background-mars.jpg')"; 
}

console.log(figure.style.backgroundImage);

// Fonction pour rediriger vers la page d'acceuil :

function redirectToHome() {
    window.location.href = 'index.html'; 
}

// Fonction pour changer le texte de la balise h1 au survol de la souris :
let h1Element = document.getElementById('clic-accueil');
let hoverText = "Accueil";
let originalText = "QUAD <br> Aventure";

function changeTextOnHover() {
    h1Element.innerHTML = hoverText;
}

function restoreText() {
    h1Element.innerHTML = originalText;
}

h1Element.addEventListener('mouseover', changeTextOnHover);
h1Element.addEventListener('mouseout', restoreText);

