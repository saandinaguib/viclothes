// Ajouter un article au panier
function ajouterAuPanier(nom, prix, image, taille) {
    var panier = localStorage.getItem('panier');
    if (panier == null) {
        panier = [];
    } else {
        panier = JSON.parse(panier);
    }
    var article = { nom: nom, prix: prix, image: image, taille: taille };
    panier[panier.length] = article;
    localStorage.setItem('panier', JSON.stringify(panier));
    alert(nom + ' a été ajouté au panier !');
}

// Récupérer le panier
function getPanier() {
    var panier = localStorage.getItem('panier');
    if (panier == null) {
        return [];
    }
    return JSON.parse(panier);
}

// Supprimer le panier
function viderPanier() {
    localStorage.removeItem('panier');
}
