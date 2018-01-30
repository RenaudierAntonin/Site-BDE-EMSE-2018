// mettre le context, et la taille du canvas en var globale et l'utiliser dans le window


function Tourelle(frequence, vitesse, force, terrain, emplacement, aire){

	this.frequence = frequence; // frequence de tir
	this.vitesse  = vitesse; // vitesse absolue des balles
	this.force = force;
	this.cible = false; // le monstre cible
	this.emplacement = emplacement; // c'est sa case
	this.niveau = 1;
	this.xp = 0;
	this.aireDetection = aire; // aire de détéction de la tourelle, elle ne peut rien viser au dela

	this.cibler = function(){

		var distance = Infinity;

		for (var i = 0; i<this.terrain.monstres.length; i++){ // on parcour tout les monstres et on cible le plus proche si il est dans la zone de détéction

			var monstre = monstres[i]
			var d = Norme(this.emplacement.coordonnees, this.monstre.coordonnees);		

			if (d < distance && d < this.aireDetection){

				this.cible = monstre;
				distance = d;
			}
		}
	}

	this.tirer = function(){

		var d = Norme(this.emplacement.coordonnees, this.cible.coordonnees); // c'est simplement la distance entre la tourelle et la cible
		var Vx = (vitesse*parseFloat(dx))/d; // calcul des coordonnées de vitesse pour la balle en fonction de la position du monstre 
		var Vy = (vitesse*parseFloat(dy))/d;
		var vitesseProjectile = new Coordonnees(Vx,Vy);
		this.terrain.projectiles.push(new Projectile(vitesseProjectile, this.force, this.emplacement.coordonnees));
	} 

	this.dessiner = function(context){

		context.beginPath();
		context.arc(this.coordonnees.x, this.coordonnees.y, 5, 0, Math.PI*2, false);
		context.fillStyle  = "#0F0";
		context.fill();

	}
	this.setXP = function(xp){

		this.xp += xp;
		
		if (this.xp > this.niveau.xp){ //lorsqu'on dépasse la valeur seuil du passage de niveau de la tourelle
			this.niveau.next();
			this.evoluer(this.niveau.force, this.niveau.vitesse, this.niveau.frequence);
		}
	}
	this.evoluer = function(forceGagnee, vitesseGagnee, frequenceGagnee){ // fait évoluer la tourelle lorsqu'elle a assez de xp pour le niveau suivant

		this.niveau++;
		this.xp = 0;
		this.force += forceGagnee;
		this.vitesse += vitesseGagnee;
		this.frequence += frequenceGagnee;
		
	}
};

function Projectile(vitesse, degat, coordonnes, tourelle){

	this.vitesse = vitesse; // ce sont des Coordonnees
	this.coordonnees = coordonnees;
	this.degat = degat;
	this.tourelle = tourelle

	this.avancer = function(){
		this.coordonnees.x += vitesse.x; // on ajoute directement les coordonnées de vitesse
		this.coordonnees.y += vitesse.y; // il faut imaginer que c'est en fait Vx*t commen en physique, mais on à pas de temps ici, ce sera des boucles d'execution donc dans notre monde dt est un entier vala
	
	// il faut l'effacer lorsqu'il touche un monstre ou sort du canvas, et blesser le monstre
	}

	this.dessiner = function(context){

		context.beginPath();
		context.arc(this.coordonnees.x, this.coordonnees.y, 5, 0, Math.PI*2, false);
		context.fillStyle  = "#F00";
		context.fill();
	}
};

function Monstre(vitesse, force, type, vie, terrain, valeurXP){

	this.vitesse = vitesse;
	this.force = force;
	this.coordonnees;
	this.type = type;
	this.vie = vie;
	this.parselle = terrain.parselles[0];
	this.avancement = 0;

	this.avancer = function(){ // le monstre avance sur la parselle sur laqelle il se trouve avec une certaine vitesse, disjonction de cas selon le sens de la parselle
				var i
				switch(this.parselle){

					case 'haut':

					break;

					case 'bas':

					break;

					case 'doite':

					break;

					case 'gauche':

					break;

					default:
						alert('formation chemin impossible');
					break;
			}
	}

	this.blesser = function(projectile){

		this.vie -= projectile.degat;

		if (this.vie <= 0){ // quand le monstre n'a plus de vie

			var i = terrain.monstres.indexOf(this);// on le tue c'est à dire on le supprime du tableau des monstres
			terrain.monstres.splice(i,1);
			projectile.tourelle.setXP(valeurXP); // et on donne ses xp à la tourelle qui l'a tué
			projectile.tourelle.cible = false;
		}
	}

	this.dessiner = function(context){

		context.beginPath();
		context.arc(this.coordonnees.x, this.coordonnees.y, 5, 0, Math.PI*2, false);
		context.fillStyle  = "#00F";
		context.fill();
		// ajouter une fonction qui rajoute la barre de vie
	}
};

function Chemin(debut, construction){ // c'est le chemin sur lequel vont avancer les monstres

	this.parselles = Convertir_chemin(construction); // on va essayer de contruire un chemin assez simplement avec une suite d'instructions : va à droite en au en bas...

	this.dessiner = function(context){

		var caseActuelle = debut;

		for(var i = 0; i<this.parselles.length; i++){


			// on dessine la case actuelle et on calcule la suivante
			
		}
	}
};

function Terrain(context){ // l'objet qui contient tous les autres, le plan quoi

	this.tourelles = []; // tableau listant tous les objets tourelles
	this.monstres = []; // etc...
	this.chemins = [];
	var n = nbCasesLargeur;
	var m = (n * canvas.width) / canvas.height;
	this.cases = initCases(n,m);
	this.projectiles = [];

	this.dessiner = function(context){ // on dessine chaque élément, l'ordre est important ! on ne va pas dessiner le chemin par dessu le monstre par exemple
		
		this.context.clearRect(0, 0, canvas.width, canvas.height); // efface l'image précedente avant de tout redessiner

		for(var i = 0; i<this.cases.length; i++){
			for(var i )

			this.cases[i].dessiner(context);
		}

		for(var i = 0; i<this.chemins.length; i++){

			this.chemins[i].dessiner(context);
		}

		for(var i = 0; i<this.tourelles.length; i++){

			this.tourelles[i].dessiner(context);
		}

		for(var i = 0; i<this.monstres.length; i++){

			this.monstres[i].dessiner(context);
		}

		for(var i = 0; i<this.projectiles.length; i++){

			this.projectiles[i].dessiner(context);
		}
	}

	this.update = function(){ // fait avancer les monstres, les projectiles, tirer ou cibler les tourelles
		
		var tourelle; // evite de la déclarer à chaque passage de boucle

		for(var i = 0; i<this.tourelles.length; i++){

			tourelle = this.tourelles.[i];

			if (tourelle.cible){

				tourelle.tirer() 
			}

			else{ 

				tourelle.cibler() 
			}
		}

		for(var i = 0; i<this.monstres.length; i++){

			this.monstres[i].avancer();
		}

		for(var i = 0; i<this.projectiles.length; i++){

			this.projectiles[i].avancer();
		}

	}
};

function Case(terrain, coordonnees){ // on découpe le plan en carré de taille egale sur lequel on peut placer nos objets

	this.coordonnees = coordonnees;
	this.disponible = true; //booléen qui indique si on peut y placer une tourelle ou non
	this.type; // pour le dessin de la case, herbe, roche, eau, parselle ...

	this.dessiner = function(context){
		
	}
};


function Coordonnees(x,y, terrain){ // cet objet simple permet simplifier le code

	this.x = x;
	this.y = y;
	this.emplacement = this.findCase(); // la case sur laquelle se trouve cette coordonnée

	this.findCase = function(){ // retourne la case correspondant au coordonnées (on peut utiliser la matrice terrain.cases en trouvant d'abord les coordonées dans cette matrice)
		
		var i = this.x / Taille_Cases;
		var j = this.y / Taille_Cases;
		return(terrain.cases[i][j]);
	}

};

function Niveau(){

};