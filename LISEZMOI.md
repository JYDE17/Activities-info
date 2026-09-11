# GoPlex — Fiches d'activités

Petite application **locale** de consultation : quand le personnel veut plus
d'infos sur une activité, il clique dessus et voit tout (prix, conditions, VIP).
Une instance hébergée sur **chaque POS**, comme StoreInfo.

Aux couleurs de la marque : **Noir #000000** et **Or #D5A62E**. Ultra-léger :
un seul `index.html` + un fichier de données, aucun framework, aucune
installation, aucun internet requis.

## Utilisation

1. Ouvre `index.html` (double-clic).
2. Cherche ou clique une activité.
3. La fiche complète s'affiche à droite : prix, conditions, VIP.

C'est tout — pas d'impression, pas de connexion.

## Modifier les activités, prix et conditions

Ouvre **`activites.js`**, modifie, sauvegarde, recharge la page. **Aucun autre
fichier à toucher.** Chaque activité suit ce format :

```js
{
  nom:       "LaserPlex",
  categorie: "Activités",              // regroupe les cartes
  resume:    "Laser tag",              // petit texte sous le nom (facultatif)
  sections: [
    { titre: "Prix", lignes: [
      ["1 partie", "12$"],             // paire = libellé à gauche, valeur à droite
      ["2 parties", "20$"],
    ]},
    { titre: "Conditions", lignes: [
      "Max 20 personnes en même temps", // texte simple = puce
      "-- Sous-titre --",               // "-- ... --" = petit intertitre
    ]},
  ],
}
```

- **Ajouter** une activité : copie un bloc `{ ... }`, change le contenu.
- **Masquer** une activité : supprime son bloc (ou mets-le en commentaire avec `/* ... */`).
- **Nouvelle catégorie** : mets simplement un `categorie:` différent ; les cartes
  se regroupent toutes seules.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application (à ouvrir dans un navigateur) |
| `activites.js` | **Tes données** : activités, prix, conditions, VIP |
| `logo.js` | Logo GoPlex intégré — ne pas modifier |
| `logo-color.png` | Source du logo (référence) |

Le dossier `Activities /` contient les notes source (Markdown) qui ont servi à
remplir `activites.js` — c'est une référence, l'app ne les lit pas.

## Disque externe / plusieurs POS

Tout est en chemins relatifs : l'app fonctionne depuis un disque externe peu
importe la lettre (D:, E:, F:…), ou copiée localement sur chaque POS. Rien à
installer.
