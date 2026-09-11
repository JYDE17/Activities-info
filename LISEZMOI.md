# GoPlex — Fiches d'activités (impression QZ Tray)

Application **locale** pour consulter et **imprimer** les infos des activités du
centre (prix, conditions, VIP) sur un reçu thermique 58 mm / 80 mm — même
principe que StoreInfo, hébergée sur **chaque POS**.

Aux couleurs de la marque : **Noir #000000** et **Or #D5A62E**. Léger : un seul
`index.html` + un fichier de données, aucun framework.

## Utilisation quotidienne

1. Ouvre `index.html` (double-clic).
2. Cherche ou clique une activité → l'**aperçu du reçu** s'affiche à droite.
3. Clique **« Imprimer la fiche »** → elle sort sur l'imprimante thermique.
   La connexion à QZ Tray se fait toute seule au premier clic.

Le papier est réglé sur **80 mm** par défaut (bon pour l'Epson TM-T88V).
Change-le en haut si besoin (58 mm). Le bouton « Connecter QZ Tray » sert
seulement à vérifier l'état à l'avance ; ce n'est pas obligatoire.

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
      ["1 partie", "12$"],             // paire = gauche / droite
      ["2 parties", "20$"],
    ]},
    { titre: "Conditions", lignes: [
      "Max 20 personnes en même temps", // texte simple = note pleine largeur
      "-- Sous-titre --",               // "-- ... --" = petit intertitre
    ]},
  ],
}
```

Pour ajouter une activité : copie un bloc, change le contenu. Pour la masquer :
supprime son bloc (ou mets-la en commentaire avec `/* ... */`).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application (à ouvrir dans un navigateur) |
| `activites.js` | **Tes données** : activités, prix, conditions, VIP |
| `logo.js` | Logos GoPlex intégrés (couleur + N&B) — ne pas modifier |
| `logo-color.png` / `logo-print.png` | Sources des logos (référence) |
| `qz-tray.js` | Librairie QZ Tray (fournie) |
| `jsrsasign-all-min.js` | Librairie de signature (fournie) |
| `signing/` | Certificat + clé privée pour l'impression silencieuse |
| `signing.js` | Clé **embarquée** — signe même en ouvrant `index.html` en `file://` |
| `Installer-certificat-QZ.bat` | À lancer **une fois par POS** pour l'impression 100 % silencieuse |

Le dossier `Activities /` contient les notes source (Markdown) qui ont servi à
remplir `activites.js` — c'est une référence, l'app ne les lit pas.

## Disque externe

L'app fonctionne depuis un disque externe, **peu importe la lettre** (D:, E:, F:…) :
tout est en chemins relatifs et la clé de signature est embarquée dans `signing.js`.

Seule chose spécifique à chaque ordinateur : la liste blanche de QZ Tray
(`override.crt`). Lance donc `Installer-certificat-QZ.bat` **une fois sur chaque POS**.

## Première installation (par POS)

1. Installe et démarre **QZ Tray** : https://qz.io/download/
2. Branche le disque, double-clique **`Installer-certificat-QZ.bat`**
   (approuve la demande admin).
   → Les fiches s'impriment sans aucune fenêtre de confirmation.

Ensuite, au quotidien : ouvrir `index.html` et cliquer une activité suffit.

---

## Impression silencieuse (déjà configurée)

Le certificat et la clé privée sont **déjà générés** dans `signing/`. L'app les
utilise automatiquement. Deux façons d'éliminer la fenêtre de confirmation :

**Rapide** — à la fenêtre « Action Required », coche **« Remember this decision »**
puis **« Allow »**. Comme les reçus sont signés, QZ mémorise le choix.

**Définitif (recommandé)** — double-clique **`Installer-certificat-QZ.bat`** :
il copie le certificat dans le dossier de QZ Tray (`override.crt`) et le
redémarre. Plus jamais de fenêtre sur ce POS.

Détails officiels : https://qz.io/wiki/2-1-signing-messages
