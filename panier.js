// Lire le panier depuis la mémoire du navigateur
function getPanier() {
    var data = localStorage.getItem('viclothes_panier');
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

// Sauvegarder le panier dans la mémoire du navigateur
function savePanier(panier) {
    localStorage.setItem('viclothes_panier', JSON.stringify(panier));
}

// Ajouter un article
function ajouterAuPanier(nom, prix, image, taille) {
    var panier = getPanier();
    panier.push({ nom: nom, prix: prix, image: image, taille: taille });
    savePanier(panier);
    alert(nom + ' ajouté au panier !');
    afficherCompteur();
}

// Afficher le nombre d'articles dans la navbar
function afficherCompteur() {
    var compteur = document.getElementById('panier-compteur');
    var nb = getPanier().length;
    if (compteur && nb > 0) {
        compteur.textContent = '(' + nb + ')';
    }
}

// Lancer le compteur au chargement de la page
afficherCompteur();
