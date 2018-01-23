// mettre le context, et la taille du canvas en var globale et l'utiliser dans le window


function Tourelle(frequence, vitesse, force, terrain, emplacement){

	this.frequence = frequence; // frequence de tir
	this.vitesse  = vitesse; // vitesse absolue des balles
	this.force = force;
	this.cible; // le monstre cile
	this.emplacement = emplacement; // c'est sa case
	this.niveau = 1;
	this.xp = 0;

	this.cibler = function(){

	}

	this.tirer = function(){

		dx = this.emplacement.coordonnees.x - this.cible.coordonnees.x;
		dy = this.emplacement.coordonnees.y - this.cible.coordonnees.y;
		var d = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2)); // c'est simplement la distance entre la tourelle et la cible
		var Vx = (vitesse*parseFloat(dx))/d; // calcul des coordonnées de vitesse pour la balle en fonction de la position du monstre 
		var Vy = (vitesse*parseFloat(dy))/d;
		var vitesseProjectile = new Coordonnees(Vx,Vy);
		this.terrain.projectiles.push(new Projectile(vitesseProjectile, this.force, this.emplacement.coordonnees));
	} 
	this.dessiner = function(context){

	}

	this.evoluer = function(){
		this.niveau++;
		this.xp = 0;
		
	}
};

function Projectile(vitesse, degat, coordonness){

	this.vitesse = vitesse; // ce sont des Coordonnees
	this.coordonnees = coordonnees;
	this.degat = degat;

	this.avancer = function(){
		this.coordonnees.x += vitesse.x; // on ajoute directement les coordonnées de vitesse
		this.coordonnees.y += vitesse.y; // il faut imaginer que c'est en fait Vx*t commen en physique, mais on à pas de temps ici, ce sera des boucles d'execution donc dans notre monde dt est un entier vala
	}

	this.dessiner = function(context){

	}
};

function Monstre(vitesse, force, type){

	this.vitesse = 0;
	this.force = force;
	this.coordonnees;
	this.type = type;

	this.avancer = fucntion(){

	}
	this.dessiner = function(context){

	}
};

function Chemin(début, construction){ 

	this.parselles = []; // on va essayer de contruire un chemin assez simplement avec une suite d'instructions : va à droite en au en bas...

	this.dessiner = function(context){

		var caseActuelle = debut;

		for(var i = 0; i<parselles.length; i++){

			switch(parselles[i]){

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
	}
};

function Terrain(context){ // l'objet qui contient tous les autres, le plan quoi

	this.tourelles = []; // tableau listant tous les objets tourelles
	this.monstres = []; // etc...
	this.chemins = [];
	this.cases = [[]];
	this.projectiles = [];

	this.dessiner = function(context){ // on dessine chaque élément, l'ordre est important ! on ne va pas dessiner le chemin par dessu le monstre par exemple

		for(var i = 0; i<this.cases.length; i++){

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

};

function Case(terrain, coordonnees, disponible, type){ // on découpe le plan en carré de taille egale sur lequel on peut placer nos objets

	this.coordonnees = coordonnees;
	this.disponible = disponible; //booléen qui indique si on peut y placer une tourelle ou non
	this.type = type; // pour le dessin de la case, herbe, roche, eau ...

	this.dessiner = function(context){
		
	}
};


function Coordonnees(x,y){ // cet objet simple permet simplifier le code

	this.x = x;
	this.y = y;
};