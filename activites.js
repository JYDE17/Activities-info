/* =========================================================================
   ACTIVITÉS DU CENTRE — Modifie UNIQUEMENT ce fichier pour tes infos.
   Tu peux tout changer ici (prix, conditions, VIP…) sans toucher au reste.

   Format d'une activité :
     {
       nom:       "Nom affiché",
       categorie: "Karting" | "Activités" | "Événements & salles" | ...,
       resume:    "petit texte sous le nom (facultatif)",
       sections:  [ { titre:"Prix", lignes:[ ... ] }, ... ]
     }

   Une ligne dans "lignes" peut être :
     • une paire  ["Libellé", "Valeur"]   → imprimée gauche / droite
     • un texte   "Une note sur toute la largeur"
     • un titre   "-- Sous-titre --"      → petit intertitre centré
   ========================================================================= */

window.PIED_DE_PAGE = "Prix + taxes • Sous réserve de disponibilité";

window.ACTIVITES = [

  /* ===================== KARTING ===================== */
  {
    nom: "Karting — Courses",
    categorie: "Karting",
    resume: "Courses à la carte et forfaits",
    sections: [
      { titre: "Prix (par personne)", lignes: [
        ["1 course",  "33$"],
        ["2 courses", "60$"],
        ["3 courses", "77$"],
        "-- Forfaits (non transférables) --",
        ["6 courses",  "145$"],
        ["10 courses", "225$"],
      ]},
      { titre: "Le circuit", lignes: [
        "Karts électriques haute performance",
        "Épingles, chicanes et longue ligne droite",
        "Chaque course dure 8 minutes",
      ]},
      { titre: "Conditions", lignes: [
        "142 cm min (4'8\")",
        "Moins de 12 ans : Junior ou qualifié standard",
        "Décharge obligatoire à signer",
        "Pas de back-to-back",
        "Cagoule ou casque avec visière obligatoire",
        "Chaussure fermée obligatoire",
        "300 lb max",
        "Forfaits 6 & 10 sur le web : section carte-cadeau",
      ]},
      { titre: "3 vitesses", lignes: [
        ["Junior",   "25 km/h"],
        ["Standard", "40 km/h"],
        ["Elite",    "50 km/h"],
      ]},
      { titre: "Qualification", lignes: [
        "Junior → Standard : 1 tour sous 38 sec",
        "Standard → Elite : 1 tour sous 27 sec",
      ]},
    ],
  },
  {
    nom: "Karting — Événements",
    categorie: "Karting",
    resume: "Challenge & Grand-Prix (groupes)",
    sections: [
      { titre: "Challenge", lignes: [
        "Semaine (lun-jeu) : 85$/pers — min 8 pers",
        "-- Weekend (ven-dim), prix fixe --",
        ["12 personnes", "750$"],
        ["24 personnes", "1500$"],
        ["36 personnes", "2250$"],
      ]},
      { titre: "Grand-Prix", lignes: [
        "Semaine (lun-jeu) : 85$/pers — min 8 pers",
        "-- Weekend (ven-dim), prix fixe --",
        ["12 personnes", "950$"],
        ["24 personnes", "1900$"],
        ["36 personnes", "2850$"],
      ]},
    ],
  },

  /* ===================== ACTIVITÉS ===================== */
  {
    nom: "LaserPlex",
    categorie: "Activités",
    resume: "Laser tag",
    sections: [
      { titre: "À savoir", lignes: [
        "Arène thématique façon ville",
        "Stratégie, esprit d'équipe et réflexes",
      ]},
      { titre: "Prix", lignes: [
        ["1 partie",  "12$"],
        ["2 parties", "20$"],
        ["3 parties", "26$"],
      ]},
      { titre: "Conditions", lignes: [
        "Max 20 personnes en même temps",
        "Recommandé 6 ans et +",
        "Taille min 106 cm (42 po) — essayer la veste",
        "Décharge obligatoire à signer",
        "Chaussure fermée obligatoire",
        "15 min / partie — 20 pers max / partie",
      ]},
      { titre: "VIP", lignes: [
        "LaserPlex VIP 700$ (40 participants max)",
      ]},
    ],
  },
  {
    nom: "Lancer de hache (Axes)",
    categorie: "Activités",
    resume: "1h par personne",
    sections: [
      { titre: "À savoir", lignes: [
        "4 allées de lancer",
        "Habileté, précision et compétition amicale",
      ]},
      { titre: "Prix", lignes: [
        ["1 heure / personne", "30$"],
      ]},
      { titre: "Conditions", lignes: [
        "16 ans et +",
        "Décharge à signer / arriver 15 min avant",
        "Chaussure fermée obligatoire",
        "Min 2 pers – Max 6 / allée",
        "Non recommandé aux personnes en situation de handicap",
        "Coupon d'activité obligatoire à l'étage",
      ]},
      { titre: "VIP", lignes: [
        "Lancer de hache VIP 600$/h",
        "24 participants max — 6 pers / écran",
      ]},
    ],
  },
  {
    nom: "Fléchettes (Darts)",
    categorie: "Activités",
    resume: "Minimum 1h",
    sections: [
      { titre: "À savoir", lignes: [
        "4 allées interactives",
        "Jeux numériques + vraies fléchettes",
      ]},
      { titre: "Prix", lignes: [
        ["Par personne", "15$"],
        "Minimum 1 heure",
      ]},
      { titre: "Conditions", lignes: [
        "12 ans et +",
        "2 à 6 joueurs / allée",
        "30 min ou 1h / partie",
        "Décharge à signer / arriver 15 min avant",
        "Walk-in = vendre au calendrier",
        "Coupon d'activité obligatoire",
      ]},
      { titre: "VIP", lignes: [
        "Fléchettes VIP 300$/heure",
        "24 pers max — 6 pers / écran",
      ]},
    ],
  },
  {
    nom: "Simulateur de Golf",
    categorie: "Activités",
    resume: "Par simulateur / heure",
    sections: [
      { titre: "À savoir", lignes: [
        "5 simulateurs intérieurs",
        "Parcours célèbres du monde entier",
        "Suivi précis de chaque swing",
      ]},
      { titre: "Prix", lignes: [
        ["1 simulateur / heure", "35$"],
        "Max 4 pers par écran — 1h minimum",
        ["Location de bâtons (adultes)", "20$"],
      ]},
      { titre: "Conditions", lignes: [
        "Tous âges",
        "Walk-in = vendre au calendrier",
        "Coupon d'activité obligatoire",
        "Carte Golfin = noter dans RF notes",
      ]},
      { titre: "VIP", lignes: [
        "Golf & multisport VIP (2h min)",
        "2 écrans multisports + 3 écrans golf",
        "Sim VIP 400$/heure — 50 pers max",
        "Multisport offert en VIP seulement",
      ]},
    ],
  },
  {
    nom: "Arcade",
    categorie: "Activités",
    resume: "Forfaits de crédits",
    sections: [
      { titre: "Forfaits de cartes", lignes: [
        ["15$",  "60 crédits"],
        ["30$",  "200 crédits"],
        ["50$",  "350 crédits"],
        ["75$",  "560 crédits"],
        ["99$",  "800 crédits"],
        ["169$", "1450 crédits"],
      ]},
      { titre: "Conditions", lignes: [
        "Aucun remboursement",
        "Tous âges",
        "2$ d'activation par carte",
        "Tickets gagnés conservés sur la carte",
      ]},
    ],
  },

  /* ===================== ÉVÉNEMENTS & SALLES ===================== */
  {
    nom: "Événement — LaserPlex exclusif",
    categorie: "Événements & salles",
    resume: "Privatisation laser tag",
    sections: [
      { titre: "Prix", lignes: [
        "2 parties — 40$/pers (min 10 pers)",
        "Moins de 10 pers : payer pour 10 personnes",
      ]},
    ],
  },
  {
    nom: "Fête d'enfant — LaserPlex Kids",
    categorie: "Événements & salles",
    resume: "Forfait anniversaire",
    sections: [
      { titre: "Prix", lignes: [
        "35$/pers (min 8 pers) — minimum 280$",
      ]},
      { titre: "Inclus", lignes: [
        "1 pointe de pizza + frites + boisson gazeuse",
        "2 parties de laser tag",
        "Espace réservé",
      ]},
      { titre: "Pizza", lignes: [
        "Noter la sorte de pizza à la réservation",
        "1 pizza = 8 pers / 2 pizzas = 9 à 16 pers",
        ["Pizza extra", "+60$"],
      ]},
    ],
  },
  {
    nom: "Salle 1",
    categorie: "Événements & salles",
    resume: "Salle privée (10 à 16 pers)",
    sections: [
      { titre: "Prix", lignes: [
        ["Sans activité / heure", "150$"],
        ["Avec activité / heure", "100$"],
      ]},
      { titre: "Conditions", lignes: [
        "Pas de nourriture ni breuvage en bas",
        "(exception : Salle 1)",
      ]},
    ],
  },
  {
    nom: "Resto (privatisation)",
    categorie: "Événements & salles",
    resume: "Chicane Resto·Bar",
    sections: [
      { titre: "À savoir", lignes: [
        "Bar sportif et restaurant du centre",
        "Jusqu'à 120 places",
      ]},
      { titre: "Prix", lignes: [
        ["Par heure", "250$"],
      ]},
      { titre: "Conditions", lignes: [
        "120 personnes max",
        "2 heures minimum",
      ]},
    ],
  },

];
