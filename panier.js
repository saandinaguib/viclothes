// ===== PANIER VI CLOTHES =====
// Stockage des articles dans le localStorage du navigateur

// Récupérer le panier depuis le localStorage (ou tableau vide si rien)
function getPanier() {
    var panier = localStorage.getItem('viclothes_panier');
    if (panier) {
        return JSON.parse(panier);
    }
    return [];
}

// Sauvegarder le panier dans le localStorage
function savePanier(panier) {
    localStorage.setItem('viclothes_panier', JSON.stringify(panier));
}

// Ajouter un article au panier
function ajouterAuPanier(nom, prix, image, taille) {
    var panier = getPanier();
    panier.push({
        nom: nom,
        prix: prix,
        image: image,
        taille: taille
    });
    savePanier(panier);
    alert(nom + ' ajouté au panier !');
    mettreAjourCompteur();
}

// Compter le nombre d'articles dans le panier
function compterArticles() {
    return getPanier().length;
}

// Mettre à jour le compteur affiché dans la navbar
function mettreAjourCompteur() {
    var compteur = document.getElementById('panier-compteur');
    if (compteur) {
        var nb = compterArticles();
        compteur.textContent = nb > 0 ? '(' + nb + ')' : '';
    }
}

// Lancer la mise à jour du compteur au chargement de la page
window.onload = function() {
    mettreAjourCompteur();
};
