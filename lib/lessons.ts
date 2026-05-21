export interface LessonExercise {
  instruction: string;
  starterCode: string;
  expectedOutput: string;
  hints?: [string, string, string];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface LessonQuiz {
  questions: QuizQuestion[];
}

export interface Lesson {
  title: string;
  description: string;
  code: string;
  exercise?: LessonExercise;
  quiz?: LessonQuiz;
}

export interface LevelData {
  id: number;
  emoji: string;
  name: string;
  color: string;
  lessons: Lesson[];
}

export const LEVELS_DATA: Record<string, LevelData> = {
  "0": {
    id: 0,
    emoji: "🌟",
    name: "Premiers pas",
    color: "from-green-400 to-emerald-500",
    lessons: [
      {
        title: "Dis bonjour à l'ordinateur !",
        description: "L'ordinateur fait tout ce que tu lui dis !\nIl suffit de lui écrire des instructions en Python.\nTon premier ordre : lui dire d'afficher un message.\n🟢 Clique sur ▶ Exécuter pour voir la magie !",
        code: '# Le dièse # sert à écrire une note pour toi.\n# L\'ordinateur ne lit pas ces lignes.\n\n# Ton premier programme !\nprint("Bonjour le monde ! 🌍")\nprint("Je suis en train de coder ! 🎉")',
        exercise: {
          instruction: "À toi ! Écris un programme qui affiche exactement :\nJe code avec Python ! 🐍",
          starterCode: "# Affiche le message !\n",
          expectedOutput: "Je code avec Python ! 🐍",
          hints: [
            "Le mot magique en Python pour afficher du texte est print().",
            "Écris print() et mets ton texte entre guillemets à l'intérieur.",
            'Essaie : print("Je code avec Python ! 🐍")',
          ],
        },
        quiz: {
          questions: [
            {
              question: "À quoi sert print() en Python ?",
              options: ["Calculer un résultat", "Afficher du texte à l'écran", "Créer une variable", "Faire une boucle"],
              correct: 1,
              explanation: "print() est la fonction magique pour afficher du texte à l'écran.",
            },
            {
              question: "Quel code affiche le mot Bonjour ?",
              options: ['print("Bonjour")', 'display("Bonjour")', 'echo Bonjour', 'show("Bonjour")'],
              correct: 0,
              explanation: "En Python, on utilise toujours print() pour afficher.",
            },
          ],
        },
      },
      {
        title: "Fais parler les animaux !",
        description: "print() est le mot magique de Python !\nTu écris print( ) et entre les ( ) tu mets ton texte entre \" \".\nChaque print() affiche une nouvelle ligne.\n✏️ Change le texte et clique sur ▶ pour voir !",
        code: 'print("🐶 Le chien dit : Ouaf !")\nprint("🐱 Le chat dit : Miaou !")\nprint("🐸 La grenouille dit : Coâ !")\nprint("🦁 Le lion dit : Roaaaar !")\nprint("🐍 Le serpent dit : Ssssss... je suis Python !")',
        exercise: {
          instruction: "Fais parler exactement ces 3 animaux :\n🐧 Le pingouin dit : Coin coin !\n🦊 Le renard dit : Glapissement !\n🐝 L'abeille dit : Bzzzz !",
          starterCode: "# Fais parler les 3 animaux !\n",
          expectedOutput: "🐧 Le pingouin dit : Coin coin !\n🦊 Le renard dit : Glapissement !\n🐝 L'abeille dit : Bzzzz !",
        },
      },
      {
        title: "Dessine avec Python !",
        description: "On peut dessiner avec Python !\nIl suffit d'utiliser plusieurs print() à la suite.\nChaque ligne de code = une ligne du dessin.\n✏️ Exécute le code, puis change les * pour créer ton propre dessin !",
        code: '# Un sapin 🎄\nprint("    *")\nprint("   ***")\nprint("  *****")\nprint(" *******")\nprint("   | |")\n\nprint("")\n\n# Un soleil ☀️\nprint("  \\\\  |  /")\nprint("   \\ | /")\nprint("----***----")\nprint("   / | \\")\nprint("  /  |  \\")\n\nprint("")\nprint("À toi de dessiner quelque chose !")',
        exercise: {
          instruction: "Dessine cette flèche exactement avec print() :\n-->\n---\n-->",
          starterCode: "# Dessine la flèche !\n",
          expectedOutput: "-->\n---\n-->",
        },
      },
      {
        title: "Mini-projet : La carte de mon animal",
        description: "Crée la carte d'identité de ton animal préféré !\nChange le nom, l'animal et ce qu'il mange.\nUtilise print() pour tout afficher.\n🎨 Sois créatif et amuse-toi !",
        code: '# 🐾 MINI-PROJET : Carte de mon animal préféré !\n# Change les infos pour mettre TON animal !\n\nprint("==============================")\nprint("  🐾 CARTE DE MON ANIMAL 🐾")\nprint("==============================")\nprint("Nom           : Filou")\nprint("Animal        : Chien 🐶")\nprint("Couleur       : Marron et blanc")\nprint("Nourriture    : Croquettes et caresses")\nprint("Super-pouvoir : Faire des câlins")\nprint("Cri           : OUAF OUAF !")\nprint("==============================")\nprint("Bravo, tu sais coder ! 🎉")',
      },
    ],
  },
  "1": {
    id: 1,
    emoji: "⭐",
    name: "Débutant",
    color: "from-yellow-400 to-orange-400",
    lessons: [
      {
        title: "Les variables",
        description: "Une variable, c'est comme une boîte avec une étiquette !\nTu crées une boîte appelée 'prenom' et tu mets 'Alice' dedans.\nPlus tard, quand tu écris prenom, Python sait que c'est 'Alice' !\nEssaie de changer 'Alice' par ton propre prénom !",
        code: 'prenom = "Alice"\nage = 12\nprefere_python = True\n\nprint(f"Je m\'appelle {prenom}")\nprint(f"J\'ai {age} ans")\nprint(f"J\'aime Python : {prefere_python}")',
        exercise: {
          instruction: "Utilise les variables pour afficher exactement :\nLe joueur Max a 100 points !",
          starterCode: 'nom = "Max"\npoints = 100\n# Affiche le message avec les variables\n',
          expectedOutput: "Le joueur Max a 100 points !",
          hints: [
            "Tu dois combiner les variables nom et points dans un print().",
            "Utilise une f-string : print(f\"...{variable}...\")",
            'Écris : print(f"Le joueur {nom} a {points} points !")',
          ],
        },
        quiz: {
          questions: [
            {
              question: "Qu'est-ce qu'une variable en Python ?",
              options: ["Une erreur dans le code", "Une boîte qui stocke une valeur", "Un type de boucle", "Une fonction spéciale"],
              correct: 1,
              explanation: "Une variable est comme une boîte avec une étiquette : elle stocke une valeur qu'on peut réutiliser.",
            },
            {
              question: "Comment afficher la valeur d'une variable prenom dans un texte ?",
              options: ['print("prenom")', 'print(f"Bonjour {prenom}")', 'echo(prenom)', 'display prenom'],
              correct: 1,
              explanation: "Les f-strings permettent d'insérer une variable directement dans un texte avec {variable}.",
            },
          ],
        },
      },
      {
        title: "Les types de données",
        description: "Il existe différents types de valeurs en Python.\nUn texte s'écrit entre guillemets : \"Bonjour\".\nUn nombre entier s'écrit sans guillemets : 42.\nUn nombre à virgule aussi : 3.14.\nEn Python, OUI s'écrit True et NON s'écrit False — avec une majuscule obligatoire !",
        code: '# Un texte s\'écrit entre guillemets\npersonnage = "Mario"\n\n# Un nombre entier s\'écrit sans guillemets\nvies = 3\nscore = 4200\n\n# Un nombre à virgule aussi\nvitesse = 8.5\n\n# True = OUI, False = NON (avec une majuscule !)\nest_invincible = False\n\nprint(f"Personnage : {personnage}")\nprint(f"Vies restantes : {vies}")\nprint(f"Score : {score} points")\nprint(f"Vitesse : {vitesse} km/h")\nprint(f"Invincible : {est_invincible}")',
        exercise: {
          instruction: "Affiche le type de chaque variable avec type() :\n(le résultat doit être sur 3 lignes séparées)",
          starterCode: "texte = \"Python\"\nnombre = 42\nvrai_faux = True\n# Affiche le type de chaque variable\n",
          expectedOutput: "<class 'str'>\n<class 'int'>\n<class 'bool'>",
        },
      },
      {
        title: "Les conditions if/else",
        description: "Grâce aux conditions, ton programme peut prendre des décisions tout seul !\nC'est comme dans la vraie vie : SI il pleut ALORS je prends mon parapluie SINON je mets des lunettes de soleil.\nEn Python, on écrit ça avec if (si), elif (ou bien si) et else (sinon).\nEssaie de changer l'âge dans le code et vois ce qui s'affiche !",
        code: 'age = 12\n\nif age >= 18:\n    print("Tu es majeur !")\nelif age >= 13:\n    print("Tu es ado !")\nelse:\n    print("Tu es enfant !")\n\nprint(f"Tu as {age} ans.")',
        exercise: {
          instruction: "Écris une condition : si age vaut 10, affiche 'Accès refusé', sinon affiche 'Bienvenue !'",
          starterCode: "age = 10\n# Si age < 13 : affiche 'Accès refusé'\n# Sinon : affiche 'Bienvenue !'\n",
          expectedOutput: "Accès refusé",
        },
      },
      {
        title: "Demander quelque chose à l'utilisateur",
        description: "Jusqu'ici, c'est toujours Python qui parle. Mais comment faire parler l'utilisateur ?\nAvec input(), tu peux poser une question et récupérer ce que la personne tape au clavier !\nCe qu'elle tape est automatiquement rangé dans une variable.\nEssaie d'écrire ton prénom quand le programme te le demande !",
        code: '# input() pose une question et attend que tu tapes quelque chose\nprenom = input("Comment tu t\'appelles ? ")\n\nprint(f"Bonjour {prenom} !")\nprint(f"Bienvenue sur PythonKids, {prenom} 🐍")\n\n# On peut aussi demander un nombre !\nage = input("Tu as quel âge ? ")\nprint(f"Cool, {age} ans c\'est un super âge pour apprendre Python !")',
        exercise: {
          instruction: "Sans input(), crée les variables et affiche exactement :\nBonjour Lucie !\nTu as 9 ans.",
          starterCode: 'prenom = "Lucie"\nage = 9\n# Affiche les 2 messages\n',
          expectedOutput: "Bonjour Lucie !\nTu as 9 ans.",
        },
      },
      {
        title: "Les opérateurs mathématiques",
        description: "Python sait faire des calculs ! Tu as les opérations classiques (+, -, *, /) mais aussi des bonus :\n// divise et arrondit vers le bas (division entière)\n% donne le reste de la division — super utile pour savoir si un nombre est pair !\n** élève à une puissance.\nEssaie de modifier les valeurs !",
        code: 'a = 17\nb = 5\n\nprint(f"{a} + {b} = {a + b}")\nprint(f"{a} - {b} = {a - b}")\nprint(f"{a} * {b} = {a * b}")\nprint(f"{a} / {b} = {a / b:.1f}")\nprint(f"{a} // {b} = {a // b}")\nprint(f"{a} % {b} = {a % b}")\nprint(f"2 ** 8 = {2 ** 8}")\n\nif a % 2 == 0:\n    print(f"{a} est pair")\nelse:\n    print(f"{a} est impair")',
        exercise: {
          instruction: "Calcule et affiche le reste de la division de 23 par 4.",
          starterCode: "# Affiche le reste de 23 ÷ 4\n",
          expectedOutput: "3",
        },
      },
      {
        title: "La boucle while",
        description: "La boucle for répète un nombre fixe de fois. Mais parfois, tu veux répéter tant qu'une condition est vraie — c'est le rôle de while !\nC'est parfait pour des jeux où le joueur continue jusqu'à ce qu'il gagne ou perde.\nAttention : si la condition reste toujours vraie, la boucle tourne à l'infini !",
        code: '# Compte à rebours avec while\ncompteur = 5\n\nwhile compteur > 0:\n    print(f"⏳ {compteur}...")\n    compteur -= 1\n\nprint("🚀 Décollage !")',
        exercise: {
          instruction: "Affiche les nombres de 1 à 5 avec une boucle while (un nombre par ligne).",
          starterCode: "n = 1\n# Affiche 1, 2, 3, 4, 5\n",
          expectedOutput: "1\n2\n3\n4\n5",
        },
      },
      {
        title: "Les chaînes de caractères",
        description: "Une chaîne de caractères (str), c'est du texte entre guillemets.\nPython propose plein d'outils pour les manipuler :\n- len() donne la longueur\n- upper() met tout en majuscules\n- lower() met tout en minuscules\n- replace() remplace des mots\n- in vérifie si un mot est contenu dedans",
        code: 'phrase = "Apprendre Python, c\'est super cool !"\n\nprint(f"Texte original : {phrase}")\nprint(f"Longueur       : {len(phrase)} caractères")\nprint(f"Majuscules     : {phrase.upper()}")\nprint(f"Minuscules     : {phrase.lower()}")\nprint(f"Remplacé       : {phrase.replace(\'super\', \'vraiment\')}")\n\nif "Python" in phrase:\n    print("✅ La phrase contient le mot Python !")\n\nprint(f"Premiers 9 car : {phrase[:9]}")',
        exercise: {
          instruction: "Affiche le mot 'informatique' en majuscules, puis son nombre de lettres.",
          starterCode: 'mot = "informatique"\n# Affiche en majuscules\n# Affiche la longueur\n',
          expectedOutput: "INFORMATIQUE\n12",
        },
      },
      {
        title: "Mini-projet : Quiz",
        description: "Tu sais maintenant utiliser print(), les variables et les conditions — bravo !\nAvec input() tu peux poser une question et vérifier la réponse.\nPour ce mini-projet, le programme pose une question, tu tapes ta réponse, et Python vérifie si c'est juste.\nTu peux changer la question et la bonne réponse pour inventer ton propre quiz !",
        code: '# 🎯 MINI-PROJET : Quiz Python\n\nprint("🧠 QUIZ PYTHON")\nprint("--------------------")\n\nreponse = input("Quel mot utilise-t-on pour afficher du texte en Python ? (en minuscules) ")\n\nif reponse == "print":\n    print("✅ Bravo ! C\'est bien print() !")\nelse:\n    print("❌ Pas tout à fait... La réponse était : print")\n\nprint("Merci d\'avoir joué ! 🎉")',
      },
    ],
  },
  "2": {
    id: 2,
    emoji: "🚀",
    name: "Explorateur",
    color: "from-blue-400 to-cyan-500",
    lessons: [
      {
        title: "Les boucles for",
        description: "Imagine que tu dois écrire 'Je n'oublierai pas mes devoirs' 100 fois... Avec une boucle, Python le fait pour toi en 2 lignes !\nUne boucle for répète des instructions autant de fois que tu veux.\nrange(1, 6) veut dire 'de 1 jusqu'à 5'. À chaque tour, la variable i prend la valeur suivante.",
        code: '# Compter jusqu\'à 5\nfor i in range(1, 6):\n    print(f"Nombre : {i}")\n\nprint("")\n\n# Table de multiplication par 7\nfor i in range(1, 11):\n    print(f"7 x {i} = {7 * i}")',
        quiz: {
          questions: [
            {
              question: "Que fait range(1, 6) dans une boucle for ?",
              options: ["Génère les nombres 1, 2, 3, 4, 5, 6", "Génère les nombres 1, 2, 3, 4, 5", "Répète 6 fois seulement", "Crée une liste vide"],
              correct: 1,
              explanation: "range(1, 6) génère les nombres de 1 à 5 — le dernier chiffre est exclu.",
            },
            {
              question: "Combien de fois s'affiche 'Bravo' avec : for i in range(3): print('Bravo') ?",
              options: ["2 fois", "4 fois", "3 fois", "1 fois"],
              correct: 2,
              explanation: "range(3) génère 0, 1, 2 — donc 3 itérations.",
            },
          ],
        },
      },
      {
        title: "Les listes",
        description: "Une liste, c'est comme un sac à dos dans lequel tu ranges plusieurs choses !\nAu lieu de créer une variable pour chaque fruit, tu les mets tous dans une seule liste entre crochets [ ].\nTu peux demander le premier élément (position 0), le dernier (-1), ou parcourir toute la liste avec for !",
        code: 'fruits = ["pomme", "banane", "cerise", "kiwi"]\n\nprint(f"Nombre de fruits : {len(fruits)}")\nprint(f"Premier fruit : {fruits[0]}")\nprint(f"Dernier fruit : {fruits[-1]}")\n\nfor fruit in fruits:\n    print(f"🍎 {fruit}")',
        exercise: {
          instruction: "Crée une liste animaux avec [\"chat\", \"chien\", \"lapin\"] et affiche chaque animal sur une ligne.",
          starterCode: "animaux = [\"chat\", \"chien\", \"lapin\"]\n# Affiche chaque animal avec une boucle\n",
          expectedOutput: "chat\nchien\nlapin",
          hints: [
            "Utilise une boucle for pour parcourir la liste.",
            "Dans la boucle : for animal in animaux: puis print(animal)",
            "for animal in animaux:\n    print(animal)",
          ],
        },
      },
      {
        title: "Les fonctions",
        description: "Une fonction, c'est comme une recette de cuisine : tu l'écris une fois, et tu peux l'utiliser autant de fois que tu veux !\nTu crées une fonction avec def, tu lui donnes un nom et entre parenthèses tu mets les paramètres dont elle a besoin.\nPlus besoin de réécrire le même code !",
        code: 'def saluer(prenom):\n    print(f"Bonjour {prenom} ! 👋")\n    print(f"Bienvenue sur PythonKids !")\n\ndef calculer(a, b):\n    return a + b\n\nsaluer("Alice")\nsaluer("Bob")\n\nresultat = calculer(10, 5)\nprint(f"10 + 5 = {resultat}")',
        exercise: {
          instruction: "Écris une fonction double(n) qui retourne n × 2. Affiche double(7).",
          starterCode: "# Crée la fonction double\n",
          expectedOutput: "14",
          hints: [
            "Une fonction se crée avec def nom(paramètre): et le corps indenté.",
            "Utilise return pour renvoyer la valeur calculée.",
            "def double(n):\n    return n * 2\nprint(double(7))",
          ],
        },
      },
      {
        title: "Boucle while et logique",
        description: "On combine la boucle while avec les opérateurs logiques and, or, not.\nand : les DEUX conditions doivent être vraies\nor : au moins UNE doit être vraie\nnot : inverse la condition (True devient False)\nCes outils permettent de créer des règles complexes facilement !",
        code: 'age = 14\na_carte_etudiant = True\n\nif age < 18 and a_carte_etudiant:\n    print("✅ Tarif réduit !")\nelse:\n    print("Prix normal")\n\nprefere_pizza = False\nprefere_pates = True\n\nif prefere_pizza or prefere_pates:\n    print("On mange italien ce soir 🍕")\n\nest_ferme = False\nif not est_ferme:\n    print("Le magasin est ouvert 🏪")',
        exercise: {
          instruction: "Affiche 'Accès autorisé' si age >= 12 ET has_code est True, sinon 'Refusé'.",
          starterCode: "age = 14\nhas_code = True\n# Affiche le bon message\n",
          expectedOutput: "Accès autorisé",
          hints: [
            "Utilise une condition if avec l'opérateur and entre les deux conditions.",
            "if age >= 12 and has_code: ...",
            "if age >= 12 and has_code:\n    print(\"Accès autorisé\")\nelse:\n    print(\"Refusé\")",
          ],
        },
      },
      {
        title: "Les tuples",
        description: "Un tuple ressemble à une liste, mais il est immuable : une fois créé, on ne peut plus le modifier !\nOn l'écrit avec des parenthèses ( ) au lieu de crochets [ ].\nLes tuples sont parfaits pour stocker des données fixes, comme des coordonnées ou des couleurs RGB.",
        code: '# Un tuple de coordonnées\npoint = (10, 20)\nprint(f"x = {point[0]}, y = {point[1]}")\n\n# Couleurs RGB\nrouge = (255, 0, 0)\nvert  = (0, 255, 0)\nbleu  = (0, 0, 255)\n\ncouleurs = [("Rouge", rouge), ("Vert", vert), ("Bleu", bleu)]\nfor nom, rgb in couleurs:\n    print(f"{nom} : R={rgb[0]}, G={rgb[1]}, B={rgb[2]}")\n\n# Dépackage de tuple\nx, y = point\nprint(f"Coordonnées : x={x}, y={y}")',
        exercise: {
          instruction: "Crée un tuple position avec (3, 7) et affiche : x=3, y=7",
          starterCode: "# Crée le tuple et affiche les coordonnées\n",
          expectedOutput: "x=3, y=7",
          hints: [
            "Un tuple se crée avec des parenthèses : (valeur1, valeur2)",
            "Accède aux éléments avec position[0] pour x et position[1] pour y.",
            "position = (3, 7)\nprint(f\"x={position[0]}, y={position[1]}\")",
          ],
        },
      },
      {
        title: "Mini-projet : Jeu de devinette",
        description: "Pour ce mini-projet, on crée un vrai jeu !\nL'ordinateur choisit un nombre au hasard (grâce au module random), et le joueur doit deviner.\nPython compare la réponse et dit si c'est trop grand, trop petit, ou exact.\nTu connais maintenant les variables, les conditions et les fonctions — tu es prêt !",
        code: '# 🎯 MINI-PROJET : Jeu de devinette\nimport random\n\nnombre_secret = random.randint(1, 10)\nprint("🎲 J\'ai choisi un nombre entre 1 et 10...")\nprint(f"(Psst : c\'était le {nombre_secret} !)")\n\nessai = int(input("Ton essai : "))\n\nif essai == nombre_secret:\n    print("🎉 Bravo ! Tu as trouvé !")\nelif essai < nombre_secret:\n    print(f"📈 Trop petit ! C\'était {nombre_secret}")\nelse:\n    print(f"📉 Trop grand ! C\'était {nombre_secret}")',
      },
    ],
  },
  "3": {
    id: 3,
    emoji: "🔨",
    name: "Bâtisseur",
    color: "from-purple-500 to-violet-600",
    lessons: [
      {
        title: "Les dictionnaires",
        description: "Un dictionnaire Python, c'est comme la fiche d'un joueur dans un jeu vidéo : chaque information a un nom (la clé) et une valeur.\nPar exemple : 'nom' → 'Alice', 'score' → 1500.\nOn écrit les dictionnaires entre accolades { }.",
        code: 'joueur = {\n    "nom": "Alice",\n    "score": 1500,\n    "niveau": "Bâtisseur",\n    "badges": ["🌱", "⭐", "🚀"]\n}\n\nprint(f"Joueur : {joueur[\'nom\']}")\nprint(f"Score  : {joueur[\'score\']} pts")\nprint(f"Badges : {\' \'.join(joueur[\'badges\'])}")',
        quiz: {
          questions: [
            {
              question: "Avec quoi on écrit un dictionnaire Python ?",
              options: ["Des crochets [ ]", "Des parenthèses ( )", "Des accolades { }", "Des guillemets \" \""],
              correct: 2,
              explanation: "Les dictionnaires s'écrivent entre accolades { } avec des paires clé: valeur.",
            },
            {
              question: "Comment accéder à la valeur 'nom' dans un dict d appelé joueur ?",
              options: ["joueur.nom", "joueur[nom]", 'joueur["nom"]', "joueur->nom"],
              correct: 2,
              explanation: "On accède à une valeur avec la clé entre crochets et guillemets : joueur[\"nom\"].",
            },
          ],
        },
      },
      {
        title: "Gestion des erreurs",
        description: "Tout le monde fait des erreurs en codant — même les pros !\nAvec try/except, ton programme ne plante plus quand quelque chose se passe mal.\ntry veut dire 'essaie ce code'.\nSi ça foire, except attrape l'erreur et affiche un message sympa au lieu de tout crasher.",
        code: 'def diviser(a, b):\n    try:\n        resultat = a / b\n        print(f"{a} ÷ {b} = {resultat}")\n    except ZeroDivisionError:\n        print("❌ Impossible de diviser par zéro !")\n    except TypeError:\n        print("❌ Il faut des nombres !")\n\ndiviser(10, 2)\ndiviser(10, 0)\ndiviser(10, "cinq")',
        exercise: {
          instruction: "Utilise try/except pour afficher 'Erreur : division impossible' si diviseur vaut 0.",
          starterCode: "diviseur = 0\nnombre = 10\n# Protège la division avec try/except\n",
          expectedOutput: "Erreur : division impossible",
          hints: [
            "Utilise try: pour essayer le code qui peut échouer.",
            "Dans except ZeroDivisionError: mets le message d'erreur.",
            "try:\n    print(nombre / diviseur)\nexcept ZeroDivisionError:\n    print(\"Erreur : division impossible\")",
          ],
        },
      },
      {
        title: "Le débogage",
        description: "Déboguer, c'est trouver et corriger les erreurs dans son code. Ce programme contient 3 bugs ! Lis les messages d'erreur et essaie de les corriger un par un.",
        code: '# 🐛 Ce code contient 3 bugs à corriger !\n# Exécute-le, lis l\'erreur, corrige, recommence.\n\ndef calculer_moyenne(notes):\n    total = 0\n    for note in notes:\n        total = total + note\n    moyenne = total / len(notes\n    return moyenne\n\nmes_notes = [15, 18, 12, 16, 14\nresultat = calculer_moyenne(mes_note)\nprint(f"Ma moyenne : {resultat}/20")',
        exercise: {
          instruction: "Calcule et affiche la moyenne de [12, 14, 16] avec sum() et len().",
          starterCode: "notes = [12, 14, 16]\n# Calcule et affiche la moyenne\n",
          expectedOutput: "14.0",
          hints: [
            "La moyenne = somme / nombre de valeurs.",
            "sum(notes) donne la somme, len(notes) le nombre d'éléments.",
            "print(sum(notes) / len(notes))",
          ],
        },
      },
      {
        title: "Compréhensions de listes",
        description: "Une compréhension de liste, c'est une façon magique de créer une liste en une seule ligne !\nAu lieu d'écrire une boucle for sur 3 lignes pour remplir une liste, tu l'écris en une ligne entre crochets.\nC'est l'une des fonctionnalités les plus aimées de Python !",
        code: '# Sans compréhension : 4 lignes\ncarres_long = []\nfor i in range(1, 6):\n    carres_long.append(i ** 2)\nprint(f"Ancienne méthode : {carres_long}")\n\n# Avec compréhension : 1 ligne ✨\ncarres = [i ** 2 for i in range(1, 6)]\nprint(f"Compréhension    : {carres}")\n\n# Avec condition : seulement les pairs\npairs = [i for i in range(1, 21) if i % 2 == 0]\nprint(f"Nombres pairs    : {pairs}")',
        exercise: {
          instruction: "Crée une liste des cubes de 1 à 5 avec une compréhension de liste.",
          starterCode: "# Crée la liste des cubes de 1 à 5\n",
          expectedOutput: "[1, 8, 27, 64, 125]",
          hints: [
            "Une compréhension de liste s'écrit : [expression for i in range(...)]",
            "Pour les cubes, l'expression est i ** 3.",
            "cubes = [i ** 3 for i in range(1, 6)]\nprint(cubes)",
          ],
        },
      },
      {
        title: "Les ensembles (sets)",
        description: "Un ensemble (set) est une collection sans doublons et sans ordre particulier.\nIl est parfait pour éliminer les doublons d'une liste, vérifier rapidement si un élément existe, ou faire des opérations mathématiques comme l'union ou l'intersection.",
        code: '# Créer un set\ncouleurs = {"rouge", "bleu", "vert", "rouge"}\nprint(f"Set (sans doublons) : {couleurs}")\nprint(f"Taille : {len(couleurs)}")\n\n# Éliminer les doublons d\'une liste\nnotes = [15, 18, 12, 15, 16, 18, 12]\nuniques = list(set(notes))\nprint(f"Notes sans doublons : {sorted(uniques)}")\n\n# Union et intersection\nclub_foot = {"Alice", "Bob", "Charlie"}\nclub_info = {"Bob", "Diana", "Charlie"}\nprint(f"Dans les deux clubs : {club_foot & club_info}")',
        exercise: {
          instruction: "Supprime les doublons de [3, 1, 4, 1, 5, 9, 2, 6, 5, 3] et affiche-les triés.",
          starterCode: "nombres = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]\n# Supprime les doublons et affiche en ordre\n",
          expectedOutput: "[1, 2, 3, 4, 5, 6, 9]",
          hints: [
            "Convertis la liste en set pour supprimer automatiquement les doublons.",
            "Utilise list(set(...)) pour reconvertir en liste, puis sorted() pour trier.",
            "print(sorted(list(set(nombres))))",
          ],
        },
      },
      {
        title: "Mini-projet : Gestionnaire de scores",
        description: "On combine tout ce qu'on a appris : les dictionnaires pour stocker les scores, les fonctions pour organiser le code, et le tri pour afficher le classement !\nC'est exactement comme ça que fonctionne un vrai leaderboard de jeu vidéo.",
        code: '# 🎯 MINI-PROJET : Gestionnaire de scores\n\nscores = {}\n\ndef ajouter_score(nom, points):\n    if nom in scores:\n        scores[nom] += points\n    else:\n        scores[nom] = points\n    print(f"✅ {nom} : {scores[nom]} points")\n\ndef afficher_classement():\n    print("\\n🏆 CLASSEMENT")\n    print("-" * 20)\n    tri = sorted(scores.items(), key=lambda x: x[1], reverse=True)\n    for i, (nom, pts) in enumerate(tri, 1):\n        print(f"{i}. {nom} : {pts} pts")\n\najouter_score("Alice", 500)\najouter_score("Bob", 300)\najouter_score("Alice", 200)\najouter_score("Charlie", 700)\nafficher_classement()',
      },
    ],
  },
  "4": {
    id: 4,
    emoji: "🏆",
    name: "Expert",
    color: "from-pink-500 to-rose-600",
    lessons: [
      {
        title: "La programmation orientée objet",
        description: "Imagine que tu crées un jeu vidéo avec des personnages.\nChaque personnage a un nom, des points de vie, et peut attaquer.\nEn Python, on peut créer un 'moule' pour ces personnages — on appelle ça une classe !\nEnsuite on fabrique autant de personnages qu'on veut à partir de ce moule.",
        code: 'class Personnage:\n    def __init__(self, nom, vie):\n        self.nom = nom\n        self.vie = vie\n        self.niveau = 1\n    \n    def attaquer(self, ennemi, degats):\n        ennemi.vie -= degats\n        print(f"⚔️ {self.nom} attaque {ennemi.nom} : -{degats} PV")\n    \n    def __str__(self):\n        return f"{self.nom} (Niv.{self.niveau}) — ❤️ {self.vie} PV"\n\nheros = Personnage("Arthur", 100)\nvillain = Personnage("Dragon", 200)\n\nprint(heros)\nprint(villain)\nheros.attaquer(villain, 35)\nprint(villain)',
        quiz: {
          questions: [
            {
              question: "En POO, qu'est-ce qu'une classe ?",
              options: ["Un type d'erreur Python", "Un moule pour créer des objets", "Une boucle spéciale", "Un module importable"],
              correct: 1,
              explanation: "Une classe est comme un moule ou un plan : elle décrit la structure et les actions des objets.",
            },
            {
              question: "À quoi sert __init__ dans une classe ?",
              options: ["Supprimer l'objet", "Afficher l'objet", "Initialiser l'objet à sa création", "Comparer deux objets"],
              correct: 2,
              explanation: "__init__ est le constructeur : il s'exécute automatiquement quand on crée un nouvel objet.",
            },
          ],
        },
      },
      {
        title: "Les modules Python",
        description: "Python est livré avec des boîtes à outils toutes prêtes qu'on appelle des modules !\nTu veux tirer au sort ? Utilise random.\nTu veux faire des maths compliquées ? Utilise math.\nTu veux connaître la date ? Utilise datetime.\nIl suffit d'écrire import au début pour déballer la boîte !",
        code: 'import random\nimport math\nfrom datetime import datetime\n\n# random\nprint("🎲 Nombres aléatoires :")\nfor _ in range(3):\n    print(f"  {random.randint(1, 100)}")\n\n# math\nprint(f"\\n📐 Racine de 144 : {math.sqrt(144)}")\nprint(f"📐 Pi : {math.pi:.4f}")\n\n# datetime\nmaintenant = datetime.now()\nprint(f"\\n📅 Aujourd\'hui : {maintenant.strftime(\'%d/%m/%Y\')}")',
        exercise: {
          instruction: "Importe math et affiche la racine carrée de 225.",
          starterCode: "import math\n# Calcule et affiche la racine carrée de 225\n",
          expectedOutput: "15.0",
          hints: [
            "Le module math contient la fonction sqrt() pour la racine carrée.",
            "Utilise math.sqrt(valeur).",
            "print(math.sqrt(225))",
          ],
        },
      },
      {
        title: "Algorithmes de tri",
        description: "Un algorithme, c'est une suite d'étapes pour résoudre un problème — comme une recette de cuisine, mais pour l'ordinateur !\nLe tri, c'est un grand classique : comment ranger une liste de nombres dans l'ordre ?\nOn va voir le 'tri à bulles' : on compare deux nombres voisins et on les échange si besoin.",
        code: 'def tri_bulles(liste):\n    n = len(liste)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if liste[j] > liste[j + 1]:\n                liste[j], liste[j + 1] = liste[j + 1], liste[j]\n    return liste\n\nnombres = [64, 34, 25, 12, 22, 11, 90]\nprint(f"Avant : {nombres}")\ntrie = tri_bulles(nombres.copy())\nprint(f"Après : {trie}")\n\nprint(f"sorted(): {sorted([64, 34, 25, 12, 22, 11, 90])}")',
        exercise: {
          instruction: "Trie [5, 2, 8, 1, 9, 3] dans l'ordre décroissant avec sorted() et affiche-le.",
          starterCode: "nombres = [5, 2, 8, 1, 9, 3]\n# Trie dans l'ordre décroissant\n",
          expectedOutput: "[9, 8, 5, 3, 2, 1]",
          hints: [
            "sorted() accepte un paramètre reverse=True pour l'ordre décroissant.",
            "sorted(liste, reverse=True) trie du plus grand au plus petit.",
            "print(sorted(nombres, reverse=True))",
          ],
        },
      },
      {
        title: "Lambda, map et filter",
        description: "Python permet d'écrire des fonctions ultra-courtes appelées fonctions lambda.\nmap() applique une fonction à chaque élément d'une liste.\nfilter() garde uniquement les éléments qui vérifient une condition.\nCombinées aux lambdas, ces fonctions permettent d'écrire du code très élégant en une ligne !",
        code: '# Lambda : mini-fonction anonyme\ndouble = lambda x: x * 2\nprint(f"Double de 7 : {double(7)}")\n\n# map : appliquer à chaque élément\nnombres = [1, 2, 3, 4, 5]\ncarres = list(map(lambda x: x ** 2, nombres))\nprint(f"Carrés : {carres}")\n\n# filter : garder seulement certains éléments\npairs = list(filter(lambda x: x % 2 == 0, nombres))\nprint(f"Pairs : {pairs}")',
        exercise: {
          instruction: "Utilise map et une lambda pour tripler chaque nombre de [1, 2, 3, 4, 5].",
          starterCode: "nombres = [1, 2, 3, 4, 5]\n# Utilise map et lambda pour tripler\n",
          expectedOutput: "[3, 6, 9, 12, 15]",
          hints: [
            "map(fonction, liste) applique la fonction à chaque élément.",
            "Utilise une lambda : lambda x: x * 3",
            "print(list(map(lambda x: x * 3, nombres)))",
          ],
        },
      },
      {
        title: "La récursivité",
        description: "Une fonction récursive est une fonction qui s'appelle elle-même !\nC'est un concept puissant pour résoudre des problèmes qui se répètent.\nIl faut toujours prévoir un cas de base (condition d'arrêt) pour éviter que ça tourne à l'infini.\nExemple classique : la factorielle. 5! = 5 × 4! = 5 × 4 × 3! = ...",
        code: 'def factorielle(n):\n    if n <= 1:\n        return 1\n    return n * factorielle(n - 1)\n\nfor i in range(1, 8):\n    print(f"{i}! = {factorielle(i)}")\n\n# Fibonacci récursif\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nfib = [fibonacci(i) for i in range(10)]\nprint(f"\\nFibonacci : {fib}")',
        exercise: {
          instruction: "Écris une fonction récursive somme(n) qui calcule 1+2+...+n. Affiche somme(5).",
          starterCode: "# Écris la fonction somme récursive\n",
          expectedOutput: "15",
          hints: [
            "Une fonction récursive s'appelle elle-même avec un cas de base pour s'arrêter.",
            "somme(n) = n + somme(n-1), avec somme(0) = 0 comme cas de base.",
            "def somme(n):\n    if n <= 0:\n        return 0\n    return n + somme(n - 1)\nprint(somme(5))",
          ],
        },
      },
      {
        title: "Mini-projet : Jeu de rôle textuel",
        description: "Le grand final !\nTu vas créer un vrai jeu de combat avec tout ce que tu as appris : des classes pour les personnages, du hasard pour les dégâts, une boucle while pour les tours de combat, et des conditions pour savoir qui gagne.\nExécute plusieurs fois — le résultat change à chaque fois !",
        code: '# 🎯 MINI-PROJET FINAL : Jeu de rôle\nimport random\n\nclass Guerrier:\n    def __init__(self, nom):\n        self.nom = nom\n        self.vie = 100\n        self.attaque = random.randint(15, 25)\n    \n    def est_vivant(self):\n        return self.vie > 0\n    \n    def attaquer(self, cible):\n        degats = random.randint(self.attaque - 5, self.attaque + 5)\n        cible.vie = max(0, cible.vie - degats)\n        return degats\n\nheros = Guerrier("Toi")\ndragon = Guerrier("Dragon Géant")\ndragon.vie = 80\n\nprint("⚔️  COMBAT !")\nprint(f"{heros.nom} (❤️ {heros.vie}) VS {dragon.nom} (❤️ {dragon.vie})\\n")\n\ntour = 1\nwhile heros.est_vivant() and dragon.est_vivant():\n    d = heros.attaquer(dragon)\n    print(f"Tour {tour}: Tu fais {d} dégâts → Dragon : ❤️ {dragon.vie}")\n    if dragon.est_vivant():\n        d = dragon.attaquer(heros)\n        print(f"       Le dragon riposte : {d} dégâts → Toi : ❤️ {heros.vie}")\n    tour += 1\n\nprint("\\n" + ("🎉 VICTOIRE !" if heros.est_vivant() else "💀 DÉFAITE..."))',
      },
    ],
  },
  "5": {
    id: 5,
    emoji: "🌐",
    name: "Maître",
    color: "from-cyan-500 to-blue-600",
    lessons: [
      {
        title: "Le module json",
        description: "JSON (JavaScript Object Notation) est le format universel pour échanger des données sur internet.\nEn Python, le module json permet de convertir un dictionnaire en texte JSON (sérialisation) et inversement (désérialisation).\nQuand tu parles à une API web, elle te répond en JSON !",
        code: 'import json\n\n# Dictionnaire Python → texte JSON\nprofil = {\n    "username": "Alice",\n    "score": 1500,\n    "badges": ["🌱", "⭐", "🚀"],\n    "actif": True\n}\n\ntexte_json = json.dumps(profil, indent=2, ensure_ascii=False)\nprint("Texte JSON :")\nprint(texte_json)\n\n# Texte JSON → dictionnaire Python\njson_recu = \'{"ville": "Paris", "population": 2161000, "capitale": true}\'\ndonnees = json.loads(json_recu)\nprint(f"\\nVille : {donnees[\'ville\']}")\nprint(f"Population : {donnees[\'population\']:,}")',
        quiz: {
          questions: [
            {
              question: "Que signifie JSON ?",
              options: ["Java Standard Object Name", "JavaScript Object Notation", "Python JSON Object", "Just Some Old Notation"],
              correct: 1,
              explanation: "JSON signifie JavaScript Object Notation — c'est le format standard pour échanger des données sur internet.",
            },
            {
              question: "Quelle fonction convertit un dict Python en texte JSON ?",
              options: ["json.parse()", "json.stringify()", "json.dumps()", "json.encode()"],
              correct: 2,
              explanation: "json.dumps() (dump string) sérialise un objet Python en texte JSON.",
            },
          ],
        },
      },
      {
        title: "Le module collections",
        description: "Le module collections contient des structures de données super utiles !\nCounter compte automatiquement les occurrences.\ndefaultdict crée automatiquement une valeur par défaut pour les clés manquantes.\ndeque est une liste optimisée pour ajouter/supprimer des éléments des deux côtés.",
        code: 'from collections import Counter, defaultdict, deque\n\n# Counter : compter automatiquement\ntexte = "abracadabra"\ncompteur = Counter(texte)\nprint(f"Lettres : {dict(compteur)}")\nprint(f"Les 3 plus fréquentes : {compteur.most_common(3)}")\n\n# defaultdict : pas de KeyError !\nscores = defaultdict(int)\nscores["Alice"] += 100\nscores["Bob"] += 200\nscores["Alice"] += 50\nprint(f"\\nScores : {dict(scores)}")\n\n# deque : file d\'attente efficace\nfile = deque(["Alice", "Bob", "Charlie"])\nfile.append("Diana")\nfile.appendleft("Zara")\nprint(f"\\nFile : {list(file)}")',
        exercise: {
          instruction: "Utilise Counter pour compter les lettres de 'banana' et affiche le nombre de 'a'.",
          starterCode: "from collections import Counter\nmot = 'banana'\n# Compte les lettres et affiche le nombre de 'a'\n",
          expectedOutput: "3",
          hints: [
            "Counter(mot) crée un compteur qui compte automatiquement chaque lettre.",
            "Accède à la valeur d'une clé comme un dictionnaire : compteur['a']",
            "compteur = Counter(mot)\nprint(compteur['a'])",
          ],
        },
      },
      {
        title: "Les expressions régulières",
        description: "Les expressions régulières (regex) sont un langage pour décrire des motifs dans du texte.\nTu peux trouver tous les emails, les numéros de téléphone, les mots qui commencent par une majuscule, etc.\n. = n'importe quel caractère / \\d = un chiffre / \\w = une lettre ou chiffre / + = un ou plusieurs",
        code: 'import re\n\ntexte = "Contact: alice@python.fr, bob@code.com ou au 06-12-34-56-78"\n\n# Trouver tous les emails\nemails = re.findall(r\'\\w+@\\w+\\.\\w+\', texte)\nprint(f"Emails trouvés : {emails}")\n\n# Trouver le numéro de téléphone\ntel = re.search(r\'\\d{2}-\\d{2}-\\d{2}-\\d{2}-\\d{2}\', texte)\nif tel:\n    print(f"Téléphone : {tel.group()}")\n\n# Remplacer des mots\nphrase = "Python est super et Python est puissant"\nnouvelle = re.sub(r\'Python\', \'🐍 Python\', phrase)\nprint(f"\\nAvec emojis : {nouvelle}")',
        exercise: {
          instruction: "Utilise re.findall pour trouver tous les nombres dans la phrase.",
          starterCode: "import re\ntexte = \'J\'ai 42 pommes, 100 bananes et 7 kiwis\'\n# Trouve tous les nombres\n",
          expectedOutput: "[\'42\', \'100\', \'7\']",
          hints: [
            "re.findall(pattern, texte) retourne une liste de toutes les correspondances.",
            "Le pattern \\\\d+ correspond à un ou plusieurs chiffres.",
            "print(re.findall(r\'\\\\d+\', texte))",
          ],
        },
      },
      {
        title: "Manipulation avancée des données",
        description: "Quand tu travailles avec des données, Python offre des outils puissants :\n- sorted() avec une clé de tri personnalisée\n- zip() pour combiner deux listes\n- enumerate() pour avoir l'index en même temps\nCes outils sont le quotidien des développeurs Python !",
        code: '# Données : liste de joueurs\njoueurs = [\n    {"nom": "Alice",   "niveau": "Expert",    "score": 1500},\n    {"nom": "Bob",     "niveau": "Débutant",  "score": 300},\n    {"nom": "Charlie", "niveau": "Expert",    "score": 1200},\n    {"nom": "Diana",   "niveau": "Débutant",  "score": 450},\n]\n\n# Trier par score décroissant\ntri = sorted(joueurs, key=lambda j: j["score"], reverse=True)\nprint("Classement :")\nfor i, j in enumerate(tri, 1):\n    print(f"  {i}. {j[\'nom\']} — {j[\'score\']} pts")\n\n# Combiner deux listes avec zip\nprenoms = ["Alice", "Bob", "Charlie"]\nscores  = [1500, 300, 1200]\nfor prenom, score in zip(prenoms, scores):\n    print(f"  {prenom} : {score} pts")',
        exercise: {
          instruction: "Trie les élèves par score croissant et affiche uniquement leurs noms.",
          starterCode: "eleves = [\n    {\"nom\": \"Alice\", \"score\": 85},\n    {\"nom\": \"Bob\",   \"score\": 72},\n    {\"nom\": \"Charlie\", \"score\": 95},\n]\n# Trie par score et affiche les noms\n",
          expectedOutput: "Bob\nAlice\nCharlie",
          hints: [
            "Utilise sorted() avec key= pour préciser le critère de tri.",
            "key=lambda e: e['score'] trie par la valeur du champ score.",
            "for e in sorted(eleves, key=lambda e: e['score']):\n    print(e['nom'])",
          ],
        },
      },
      {
        title: "Mini-projet : Analyseur de texte",
        description: "On combine json, Counter, et re pour créer un vrai outil d'analyse de texte !\nLe programme analyse un texte et produit des statistiques complètes : nombre de mots, lettres les plus fréquentes...\nC'est le genre d'outil que les linguistes et les data scientists utilisent vraiment !",
        code: 'import re\nfrom collections import Counter\n\ntexte = """\nPython est un langage de programmation puissant et polyvalent.\nIl est utilisé dans le développement web, la science des données,\nl\'intelligence artificielle et bien plus encore.\nPython est simple à apprendre mais très puissant !\n"""\n\nmots = texte.lower().split()\nprint(f"📊 ANALYSE DU TEXTE")\nprint("=" * 30)\nprint(f"Nombre de mots     : {len(mots)}")\nprint(f"Nombre de phrases  : {texte.count(\'.\') + texte.count(\'!\')}")\n\nstopwords = {"est", "un", "de", "et", "le", "la", "les", "il", "en"}\nmots_filtres = [m.strip(".,!\\n") for m in mots if m not in stopwords and len(m) > 2]\ncompteur = Counter(mots_filtres)\n\nprint(f"\\n🔤 Top 5 des mots :")\nfor mot, count in compteur.most_common(5):\n    print(f"  \'{mot}\' apparaît {count} fois")',
      },
      {
        title: "Mini-projet : Générateur de mots de passe",
        description: "Un générateur de mots de passe sécurisé — un outil vraiment utile !\nOn utilise le module secrets (plus sécurisé que random pour la cryptographie), string pour les caractères disponibles, et on vérifie que le mot de passe respecte les règles de sécurité.",
        code: 'import secrets\nimport string\n\ndef generer_mdp(longueur=12, majuscules=True, chiffres=True, symboles=True):\n    alphabet = string.ascii_lowercase\n    if majuscules: alphabet += string.ascii_uppercase\n    if chiffres:   alphabet += string.digits\n    if symboles:   alphabet += "!@#$%&*"\n    \n    while True:\n        mdp = \'\'.join(secrets.choice(alphabet) for _ in range(longueur))\n        ok = True\n        if majuscules and not any(c.isupper() for c in mdp): ok = False\n        if chiffres and not any(c.isdigit() for c in mdp): ok = False\n        if symboles and not any(c in "!@#$%&*" for c in mdp): ok = False\n        if ok:\n            return mdp\n\nprint("🔐 GÉNÉRATEUR DE MOTS DE PASSE")\nprint("=" * 35)\nfor longueur in [8, 12, 16]:\n    mdp = generer_mdp(longueur)\n    print(f"  {longueur} caractères : {mdp}")',
      },
    ],
  },
  "6": {
    id: 6,
    emoji: "🏗️",
    name: "Architecte",
    color: "from-violet-500 to-purple-700",
    lessons: [
      {
        title: "Héritage et polymorphisme",
        description: "L'héritage permet à une classe d'utiliser les attributs et méthodes d'une autre classe !\nTu crées une classe \"mère\" générale, et des classes \"filles\" spécialisées.\nLe mot-clé super() appelle le constructeur de la classe mère.\nLe polymorphisme : chaque classe peut avoir sa propre version d'une méthode.",
        code: 'class Vehicule:\n    def __init__(self, marque, couleur):\n        self.marque = marque\n        self.couleur = couleur\n    \n    def description(self):\n        return f"{self.couleur} {self.marque}"\n    \n    def klaxonner(self):\n        return "Beep !"\n\nclass Voiture(Vehicule):\n    def __init__(self, marque, couleur, portes):\n        super().__init__(marque, couleur)\n        self.portes = portes\n    \n    def description(self):\n        return f"Voiture {self.couleur} {self.marque} ({self.portes} portes)"\n    \n    def klaxonner(self):\n        return "Pouet Pouet !"\n\nclass Moto(Vehicule):\n    def klaxonner(self):\n        return "Vroooom !"\n\nvehicules = [\n    Voiture("Renault", "Rouge", 4),\n    Moto("Yamaha", "Noire"),\n    Voiture("Peugeot", "Bleue", 5),\n]\n\nfor v in vehicules:\n    print(f"{v.description()} → {v.klaxonner()}")',
        exercise: {
          instruction: "Crée une classe Oiseau qui hérite d'Animal et surcharge parler() pour retourner 'Cui cui !'.\nAffiche le nom puis le cri d'un Oiseau('Tweety').",
          starterCode: "class Animal:\n    def __init__(self, nom):\n        self.nom = nom\n    def parler(self):\n        return '...'\n\n# Crée Oiseau ici\n",
          expectedOutput: "Tweety\nCui cui !",
          hints: [
            "Une classe hérite avec la syntaxe : class Oiseau(Animal):",
            "Redéfinis parler() dans Oiseau pour retourner 'Cui cui !'",
            "class Oiseau(Animal):\n    def parler(self):\n        return 'Cui cui !'\no = Oiseau('Tweety')\nprint(o.nom)\nprint(o.parler())",
          ],
        },
        quiz: {
          questions: [
            {
              question: "Comment une classe Python hérite-t-elle d'une autre ?",
              options: ["class Enfant inherits Parent:", "class Enfant(Parent):", "class Enfant extends Parent:", "Enfant = class(Parent)"],
              correct: 1,
              explanation: "La syntaxe est class NomEnfant(NomParent): — les parenthèses indiquent l'héritage.",
            },
            {
              question: "À quoi sert super().__init__() dans une classe enfant ?",
              options: ["Supprimer la classe parent", "Appeler le constructeur de la classe parent", "Créer un nouvel objet", "Copier toutes les méthodes"],
              correct: 1,
              explanation: "super().__init__() appelle le constructeur de la classe parente pour initialiser les attributs hérités.",
            },
          ],
        },
      },
      {
        title: "Les décorateurs",
        description: "Un décorateur est une fonction qui enveloppe une autre fonction pour lui ajouter des comportements !\nTu l'appliques avec @nom_decorateur juste avant la définition de la fonction.\nC'est comme ajouter un emballage cadeau à une fonction existante.\nLes frameworks web comme Django et Flask utilisent des décorateurs partout !",
        code: 'def majuscule(fonction):\n    def wrapper(*args, **kwargs):\n        resultat = fonction(*args, **kwargs)\n        return resultat.upper() if isinstance(resultat, str) else resultat\n    return wrapper\n\ndef encadrer(caractere):\n    def decorateur(fonction):\n        def wrapper(*args, **kwargs):\n            resultat = fonction(*args, **kwargs)\n            bordure = caractere * (len(str(resultat)) + 4)\n            return f"{bordure}\\n{caractere} {resultat} {caractere}\\n{bordure}"\n        return wrapper\n    return decorateur\n\n@majuscule\ndef saluer(prenom):\n    return f"bonjour {prenom} !"\n\n@encadrer("*")\ndef titre():\n    return "Python est super"\n\nprint(saluer("alice"))\nprint()\nprint(titre())',
        exercise: {
          instruction: "Écris un décorateur double qui retourne le résultat de la fonction répété deux fois.\nApplique-le à message() qui retourne 'ping'.\nAffiche message().",
          starterCode: "def double(fonction):\n    def wrapper(*args, **kwargs):\n        # Appelle la fonction et retourne le résultat × 2\n        pass\n    return wrapper\n\n@double\ndef message():\n    return 'ping'\n\nprint(message())",
          expectedOutput: "pingping",
          hints: [
            "Appelle la fonction avec fonction(*args, **kwargs) pour obtenir le résultat.",
            "Retourne le résultat concaténé avec lui-même : resultat + resultat",
            "def double(fonction):\n    def wrapper(*args, **kwargs):\n        r = fonction(*args, **kwargs)\n        return r + r\n    return wrapper",
          ],
        },
      },
      {
        title: "Générateurs et yield",
        description: "Un générateur est une fonction qui produit des valeurs une par une avec yield.\nAu lieu de tout calculer et stocker en mémoire, il génère la valeur suivante à la demande.\nC'est parfait pour traiter de grandes quantités de données sans saturer la mémoire !\nyield met la fonction en pause et reprend au même endroit à l'appel suivant.",
        code: 'def fibonacci_gen():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\ndef multiples_de(n, limite):\n    valeur = n\n    while valeur <= limite:\n        yield valeur\n        valeur += n\n\nfrom itertools import islice\n\n# Fibonacci : prendre seulement les 10 premiers\nfibs = list(islice(fibonacci_gen(), 10))\nprint(f"Fibonacci : {fibs}")\n\n# Multiples de 4 jusqu\'à 30\nmult = list(multiples_de(4, 30))\nprint(f"Multiples de 4 : {mult}")\n\n# Expression génératrice : comme une list comprehension mais lazy\npairs_carres = sum(x**2 for x in range(1, 11) if x % 2 == 0)\nprint(f"Somme carrés pairs (1-10) : {pairs_carres}")',
        exercise: {
          instruction: "Écris un générateur compter(debut, fin) qui produit les entiers de debut à fin inclus.\nAffiche chaque valeur générée par compter(1, 5) sur une ligne.",
          starterCode: "def compter(debut, fin):\n    # Utilise yield pour produire chaque valeur\n    pass\n\nfor n in compter(1, 5):\n    print(n)",
          expectedOutput: "1\n2\n3\n4\n5",
          hints: [
            "Utilise une boucle while et yield pour produire chaque valeur.",
            "Commence avec n = debut, yield n, puis n += 1 jusqu'à fin.",
            "def compter(debut, fin):\n    n = debut\n    while n <= fin:\n        yield n\n        n += 1",
          ],
        },
      },
      {
        title: "Les dataclasses",
        description: "Une dataclass est un raccourci Python pour créer des classes qui stockent des données.\nAvec @dataclass, Python génère automatiquement __init__, __repr__ et __eq__ !\nTu décris juste les champs et leurs types — Python fait le reste.\nTrès utilisé pour les données structurées : utilisateurs, produits, points, etc.",
        code: 'from dataclasses import dataclass, field\n\n@dataclass\nclass Joueur:\n    nom: str\n    niveau: int = 1\n    score: int = 0\n    badges: list = field(default_factory=list)\n    \n    def gagner_badge(self, badge):\n        self.badges.append(badge)\n    \n    @property\n    def rang(self):\n        if self.score >= 2000: return "Legend"\n        if self.score >= 1000: return "Expert"\n        return "Novice"\n\n@dataclass(order=True)\nclass Point:\n    x: float = 0.0\n    y: float = 0.0\n    \n    def distance_origine(self):\n        return (self.x**2 + self.y**2) ** 0.5\n\nalice = Joueur("Alice", niveau=3, score=1500)\nalice.gagner_badge("⭐")\nalice.gagner_badge("🚀")\nprint(alice)\nprint(f"Rang : {alice.rang}")\n\np = Point(3.0, 4.0)\nprint(f"\\n{p} → distance = {p.distance_origine()}")',
        exercise: {
          instruction: "Crée une dataclass Livre avec les champs titre (str), auteur (str) et pages (int = 0).\nAffiche Livre(titre='Python', auteur='Guido', pages=300).",
          starterCode: "from dataclasses import dataclass\n\n# Crée la dataclass Livre\n\nprint(Livre(titre='Python', auteur='Guido', pages=300))",
          expectedOutput: "Livre(titre='Python', auteur='Guido', pages=300)",
          hints: [
            "Utilise @dataclass avant la définition de la classe.",
            "Déclare les champs avec leur type : titre: str, auteur: str, pages: int = 0",
            "@dataclass\nclass Livre:\n    titre: str\n    auteur: str\n    pages: int = 0",
          ],
        },
      },
      {
        title: "Les protocoles Python",
        description: "Les méthodes spéciales (dunder methods) permettent à tes classes de se comporter comme des types Python natifs !\n__len__ : ton objet répond à len()\n__contains__ : ton objet répond à l'opérateur in\n__iter__ : ton objet peut être parcouru avec for\n__str__ : définit ce que print() affiche\nC'est le secret derrière list, dict, str...",
        code: 'class Bibliotheque:\n    def __init__(self, nom):\n        self.nom = nom\n        self.livres = []\n    \n    def ajouter(self, titre, auteur):\n        self.livres.append({"titre": titre, "auteur": auteur})\n    \n    def __len__(self):\n        return len(self.livres)\n    \n    def __contains__(self, titre):\n        return any(l["titre"] == titre for l in self.livres)\n    \n    def __iter__(self):\n        return iter(self.livres)\n    \n    def __str__(self):\n        lignes = [f"  📚 {l[\'titre\']} — {l[\'auteur\']}" for l in self.livres]\n        return f"🏠 {self.nom} ({len(self)} livres):\\n" + "\\n".join(lignes)\n\nbib = Bibliotheque("Ma bibliothèque")\nbib.ajouter("Python pour tous", "Guido")\nbib.ajouter("Algorithmes", "Knuth")\nbib.ajouter("Clean Code", "Martin")\n\nprint(bib)\nprint(f"\\nNombre de livres : {len(bib)}")\nprint(f"A \'Algorithmes\' : {\'Algorithmes\' in bib}")\nprint(f"A \'Java\' : {\'Java\' in bib}")',
        exercise: {
          instruction: "Crée une classe Classe avec __len__ qui retourne le nombre d'élèves.\nCrée une classe avec 3 élèves et affiche len(ma_classe).",
          starterCode: "class Classe:\n    def __init__(self):\n        self.eleves = []\n    \n    def ajouter(self, nom):\n        self.eleves.append(nom)\n    \n    # Implémente __len__\n\nma_classe = Classe()\nma_classe.ajouter('Alice')\nma_classe.ajouter('Bob')\nma_classe.ajouter('Charlie')\nprint(len(ma_classe))",
          expectedOutput: "3",
          hints: [
            "Ajoute def __len__(self): dans la classe.",
            "Retourne le nombre d'éléments dans self.eleves avec len().",
            "def __len__(self):\n    return len(self.eleves)",
          ],
        },
      },
      {
        title: "Mini-projet : Système de réservation",
        description: "On combine les dataclasses, l'héritage et les méthodes spéciales pour créer un vrai système de réservation !\nLa propriété @property calcule une valeur dynamiquement sans mémoriser.\nOn utilise des type hints (list[Billet]) pour rendre le code lisible.\nC'est la façon dont fonctionnent les sites de billetterie !",
        code: 'from dataclasses import dataclass, field\n\n@dataclass\nclass Billet:\n    spectateur: str\n    places: int\n    \n    def __str__(self):\n        s = "s" if self.places > 1 else ""\n        return f"{self.spectateur} ({self.places} place{s})"\n\nclass Salle:\n    def __init__(self, nom, capacite):\n        self.nom = nom\n        self.capacite = capacite\n        self.billets: list = []\n    \n    @property\n    def places_prises(self):\n        return sum(b.places for b in self.billets)\n    \n    @property\n    def places_libres(self):\n        return self.capacite - self.places_prises\n    \n    def reserver(self, spectateur, places):\n        if places > self.places_libres:\n            print(f"❌ Plus assez de places ! ({self.places_libres} restantes)")\n            return\n        self.billets.append(Billet(spectateur, places))\n        print(f"✅ Réservé pour {spectateur} : {places} place(s)")\n    \n    def bilan(self):\n        print(f"\\n🎥 {self.nom} — {self.places_libres}/{self.capacite} places libres")\n        for b in self.billets:\n            print(f"  • {b}")\n\nsalle = Salle("Grand Rex", 20)\nsalle.reserver("Alice", 2)\nsalle.reserver("Classe 6B", 15)\nsalle.reserver("Bob", 5)\nsalle.reserver("Bob", 3)\nsalle.bilan()',
      },
    ],
  },
  "7": {
    id: 7,
    emoji: "🔬",
    name: "Chercheur",
    color: "from-teal-500 to-cyan-600",
    lessons: [
      {
        title: "Le module statistics",
        description: "Python a un module statistics qui calcule tout ce dont tu as besoin pour analyser des données !\nmean() = la moyenne (somme / nombre)\nmedian() = la valeur du milieu (insensible aux extrêmes)\nstdev() = l'écart-type (mesure la dispersion)\nmode() = la valeur la plus fréquente\nCes outils sont utilisés par les data scientists chaque jour !",
        code: 'import statistics\n\ntemperatures = [15.2, 18.5, 22.1, 19.8, 16.4, 20.3, 23.7, 17.9, 21.2, 18.8,\n                14.5, 19.1, 22.8, 20.5, 17.3]\n\nprint("🌡️ ANALYSE DES TEMPÉRATURES")\nprint("=" * 35)\nprint(f"Nombre de mesures : {len(temperatures)}")\nprint(f"T° min           : {min(temperatures):.1f}°C")\nprint(f"T° max           : {max(temperatures):.1f}°C")\nprint(f"Moyenne          : {statistics.mean(temperatures):.2f}°C")\nprint(f"Médiane          : {statistics.median(temperatures):.1f}°C")\nprint(f"Écart-type       : {statistics.stdev(temperatures):.2f}°C")\n\ntranches = [0, 0, 0, 0]\nfor t in temperatures:\n    if t < 16:   tranches[0] += 1\n    elif t < 18: tranches[1] += 1\n    elif t < 21: tranches[2] += 1\n    else:        tranches[3] += 1\n\nlabels = ["<16°", "16-18°", "18-21°", ">21°"]\nprint("\\nDistribution :")\nfor label, count in zip(labels, tranches):\n    bar = "█" * count\n    print(f"  {label:7} {bar} ({count})")',
        exercise: {
          instruction: "Utilise statistics pour calculer la moyenne et la médiane de [10, 20, 30, 40, 50].\nAffiche la moyenne sur une ligne, la médiane sur la suivante.",
          starterCode: "import statistics\nnombres = [10, 20, 30, 40, 50]\n# Affiche la moyenne puis la médiane\n",
          expectedOutput: "30.0\n30",
          hints: [
            "statistics.mean(liste) calcule la moyenne.",
            "statistics.median(liste) calcule la médiane.",
            "print(statistics.mean(nombres))\nprint(statistics.median(nombres))",
          ],
        },
        quiz: {
          questions: [
            {
              question: "Quelle est la différence entre moyenne et médiane ?",
              options: [
                "Il n'y a aucune différence",
                "La médiane est toujours plus grande",
                "La moyenne est influencée par les extrêmes, la médiane non",
                "La moyenne est toujours entière",
              ],
              correct: 2,
              explanation: "La médiane est la valeur centrale — elle n'est pas affectée par les valeurs extrêmes.",
            },
            {
              question: "Que mesure l'écart-type ?",
              options: ["La valeur maximale", "La valeur centrale", "La dispersion des données autour de la moyenne", "Le nombre de données"],
              correct: 2,
              explanation: "Un écart-type faible = données proches de la moyenne. Un grand écart-type = données très dispersées.",
            },
          ],
        },
      },
      {
        title: "Le module itertools",
        description: "itertools est une boîte à outils pour travailler avec des itérables de façon élégante et efficace !\ncombinations() : toutes les combinaisons possibles\npermutations() : toutes les permutations\nchain() : fusionner plusieurs listes\ncycle() : répéter indéfiniment\naccumulate() : valeurs cumulées\nCes outils sont au cœur de l'algorithmique Python !",
        code: 'import itertools\n\n# combinations : toutes les paires d\'une équipe\nequipe = ["Alice", "Bob", "Charlie", "Diana"]\nduos = list(itertools.combinations(equipe, 2))\nprint(f"Duos possibles ({len(duos)}) :")\nfor a, b in duos:\n    print(f"  {a} & {b}")\n\n# chain : fusionner plusieurs listes\nlistes = [[1, 2, 3], ["a", "b", "c"]]\nfusion = list(itertools.chain(*listes))\nprint(f"\\nFusionnés : {fusion}")\n\n# accumulate : sommes cumulées\nfrom itertools import accumulate\nscores = [10, 15, 8, 20, 5]\ncumul = list(accumulate(scores))\nprint(f"\\nScores : {scores}")\nprint(f"Cumul  : {cumul}")',
        exercise: {
          instruction: "Utilise itertools.combinations sur ['A', 'B', 'C'] avec r=2.\nAffiche la liste des combinaisons.",
          starterCode: "import itertools\nlettres = ['A', 'B', 'C']\n# Affiche toutes les combinaisons de 2\n",
          expectedOutput: "[('A', 'B'), ('A', 'C'), ('B', 'C')]",
          hints: [
            "itertools.combinations(iterable, r) retourne un itérateur de combinaisons.",
            "Utilise list() pour convertir le résultat en liste affichable.",
            "print(list(itertools.combinations(lettres, 2)))",
          ],
        },
      },
      {
        title: "Le module functools",
        description: "functools offre des outils pour travailler avec les fonctions de façon avancée !\nreduce() : réduire une liste à une seule valeur\npartial() : fixer certains arguments d'une fonction pour en créer une nouvelle\nlru_cache() : mémoriser les résultats d'une fonction (memoïsation)\nCes outils rendent le code plus expressif et souvent bien plus rapide !",
        code: 'from functools import reduce, partial, lru_cache\n\n# reduce : calculer en parcourant une liste\nnombres = [1, 2, 3, 4, 5]\nproduit = reduce(lambda a, b: a * b, nombres)\nprint(f"Produit de {nombres} = {produit}")\n\n# partial : spécialiser une fonction\ndef multiplier(a, b):\n    return a * b\n\ndoubler = partial(multiplier, 2)\ntripler = partial(multiplier, 3)\n\nprint(f"\\nDoubler : {[doubler(i) for i in range(1, 6)]}")\nprint(f"Tripler : {[tripler(i) for i in range(1, 6)]}")\n\n# lru_cache : mémoïsation — chaque résultat est mis en cache\n@lru_cache(maxsize=128)\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\n\nprint(f"\\nfib(35) = {fib(35)}")\ninfos = fib.cache_info()\nprint(f"Cache : {infos.hits} hits, {infos.misses} misses")',
        exercise: {
          instruction: "Utilise partial pour créer fois_cinq à partir d'une fonction multiplier(a, b).\nAffiche list(map(fois_cinq, [1, 2, 3])).",
          starterCode: "from functools import partial\n\ndef multiplier(a, b):\n    return a * b\n\n# Crée fois_cinq avec partial\n\nprint(list(map(fois_cinq, [1, 2, 3])))",
          expectedOutput: "[5, 10, 15]",
          hints: [
            "partial(fonction, valeur_fixée) crée une nouvelle fonction avec un argument déjà rempli.",
            "partial(multiplier, 5) fixe a=5, il ne reste qu'à fournir b.",
            "fois_cinq = partial(multiplier, 5)",
          ],
        },
      },
      {
        title: "Traitement de données (CSV)",
        description: "Le format CSV (valeurs séparées par des virgules) est universel pour les données structurées !\nPython lit les CSV avec csv.DictReader qui retourne des dictionnaires.\nio.StringIO permet de traiter une chaîne comme si c'était un fichier.\nEn combinant CSV + defaultdict, tu peux faire de l'analyse de données comme un vrai data analyst !",
        code: 'import csv, io\nfrom collections import defaultdict\n\ndonnees = """nom,matiere,note\nAlice,Maths,16\nBob,Maths,12\nAlice,Science,14\nCharlie,Maths,18\nBob,Science,15\nCharlie,Science,11\nAlice,Histoire,17\nBob,Histoire,13\nCharlie,Histoire,16\n"""\n\nlecteur = csv.DictReader(io.StringIO(donnees))\nlignes = list(lecteur)\n\nnotes_eleve = defaultdict(list)\nfor ligne in lignes:\n    notes_eleve[ligne["nom"]].append(int(ligne["note"]))\n\nprint("📊 MOYENNES PAR ÉLÈVE")\nprint("-" * 22)\nfor nom in sorted(notes_eleve):\n    notes = notes_eleve[nom]\n    moy = sum(notes) / len(notes)\n    print(f"  {nom:<10} : {moy:.1f}/20")\n\nmeilleures = defaultdict(lambda: ("", 0))\nfor ligne in lignes:\n    nom, mat, note = ligne["nom"], ligne["matiere"], int(ligne["note"])\n    if note > meilleures[mat][1]:\n        meilleures[mat] = (nom, note)\n\nprint("\\n🏆 MEILLEURE NOTE PAR MATIÈRE")\nprint("-" * 28)\nfor mat, (nom, note) in sorted(meilleures.items()):\n    print(f"  {mat:<12}: {nom} ({note}/20)")',
        exercise: {
          instruction: "Lis les données CSV et affiche le nom de l'élève avec le score le plus élevé.",
          starterCode: "import csv, io\n\ndonnees = \"\"\"nom,score\nAlice,85\nBob,72\nCharlie,91\nDiana,78\n\"\"\"\n\nlecteur = csv.DictReader(io.StringIO(donnees))\neleves = list(lecteur)\n# Trouve et affiche le nom de l'élève avec le meilleur score\n",
          expectedOutput: "Charlie",
          hints: [
            "Utilise max() avec une key= pour trouver l'élève avec le score max.",
            "Les scores sont des chaînes — utilise int() pour les comparer numériquement.",
            "meilleur = max(eleves, key=lambda e: int(e['score']))\nprint(meilleur['nom'])",
          ],
        },
      },
      {
        title: "Algorithmes de recherche",
        description: "Deux façons de chercher un élément dans une liste :\nRecherche linéaire : on parcourt tout depuis le début — O(n)\nRecherche binaire : on coupe en deux à chaque fois — O(log n)\nSur 1 000 000 d'éléments, la recherche binaire prend ~20 comparaisons là où la linéaire en fait 500 000 en moyenne !\nMais la recherche binaire nécessite une liste triée.",
        code: 'def recherche_lineaire(liste, cible):\n    for i, val in enumerate(liste):\n        if val == cible:\n            return i, i + 1\n    return -1, len(liste)\n\ndef recherche_binaire(liste, cible):\n    g, d, etapes = 0, len(liste) - 1, 0\n    while g <= d:\n        etapes += 1\n        m = (g + d) // 2\n        if liste[m] == cible:\n            return m, etapes\n        elif liste[m] < cible:\n            g = m + 1\n        else:\n            d = m - 1\n    return -1, etapes\n\nnombres = list(range(0, 100, 2))  # 50 nombres pairs : 0, 2, 4, ..., 98\ncible = 76\n\nidx_lin, comp_lin = recherche_lineaire(nombres, cible)\nidx_bin, comp_bin = recherche_binaire(nombres, cible)\n\nprint(f"Recherche de {cible} dans {len(nombres)} éléments")\nprint(f"Linéaire : {comp_lin} comparaisons → index {idx_lin}")\nprint(f"Binaire  : {comp_bin} comparaisons → index {idx_bin}")\nprint(f"Gain : {comp_lin // comp_bin}× plus rapide")',
        exercise: {
          instruction: "Implémente la recherche binaire sur [10, 20, 30, 40, 50] pour trouver 30.\nAffiche son index.",
          starterCode: "def recherche_binaire(liste, cible):\n    g, d = 0, len(liste) - 1\n    while g <= d:\n        m = (g + d) // 2\n        if liste[m] == cible:\n            return m\n        elif liste[m] < cible:\n            g = m + 1\n        else:\n            d = m - 1\n    return -1\n\nnombres = [10, 20, 30, 40, 50]\nprint(recherche_binaire(nombres, 30))",
          expectedOutput: "2",
          hints: [
            "La recherche binaire compare la valeur du milieu (m = (g+d)//2) avec la cible.",
            "Si liste[m] < cible, cherche à droite : g = m + 1. Sinon cherche à gauche : d = m - 1.",
            "Le code est déjà là — exécute-le pour voir le résultat !",
          ],
        },
      },
      {
        title: "Mini-projet : Analyseur de données scientifiques",
        description: "On combine statistics, itertools et CSV pour créer un vrai analyseur de données !\nOn analyse deux groupes expérimentaux, on compare leurs statistiques, et on produit un rapport.\nLe coefficient de variation (CV = écart-type / moyenne × 100) mesure la stabilité relative.\nC'est ce que font les scientifiques pour comparer des expériences !",
        code: 'import statistics\nfrom itertools import groupby\n\nexperiences = [\n    ("Groupe A", [14.2, 15.1, 13.8, 15.5, 14.7, 15.0, 14.3, 15.2, 14.9, 15.1]),\n    ("Groupe B", [12.1, 18.5, 13.2, 17.8, 14.5, 16.2, 13.8, 17.1, 14.1, 16.9]),\n]\n\ndef analyser(nom, donnees):\n    moy = statistics.mean(donnees)\n    med = statistics.median(donnees)\n    std = statistics.stdev(donnees)\n    cv  = std / moy * 100\n    stable = "✅ stable" if cv < 5 else "⚠️ variable"\n    print(f"📊 {nom} ({len(donnees)} mesures)")\n    print(f"   Plage       : {min(donnees):.1f} – {max(donnees):.1f}")\n    print(f"   Moyenne     : {moy:.2f} | Médiane : {med:.2f}")\n    print(f"   Écart-type  : {std:.3f} | CV : {cv:.1f}% — {stable}")\n\nfor nom, donnees in experiences:\n    analyser(nom, donnees)\n    print()\n\nnoms = [nom for nom, _ in experiences]\nstds = [statistics.stdev(d) for _, d in experiences]\nmeilleur = noms[stds.index(min(stds))]\nprint(f"🔬 {meilleur} est le groupe le plus stable")',
      },
    ],
  },
};