<!DOCTYPE html>
<html>
<head>
	<title>Mines'perium</title>
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<link rel="stylesheet" type="text/css" href="style/style_inscription.css">
	<meta charset="utf-8">
</head>

<body>
	
	<?php include("menu.php"); ?>

	<div class="texte">
		Love sur toi mon Sim's d'amour
	
	<div id = "ajout_Jeu" class="inscription">
		<p v-if="jeuAjoute">Le jeu a été ajouté</p>
		<button v-if= "!ajout" v-on:click="ajout = true;"> Ajouter un jeu </button>
		<div v-if= "ajout">
			<p v-if="jeu.displayMessage">{{jeu.message}}</p>
			<input type="text" v-model="jeu.entree" v-on:input="jeu_Verif()" placeholder="Ajouter un jeu">
			<button v-if="jeu.valide" v-on:click="envoiJeu()">Ajouter</button>
		</div>
	</div>


	<div id = "score" class="inscription">
		<button v-if="!ajout" v-on:click="ajout = true;">Ajouter un score</button>
		<div v-if="ajout">
			<p v-if="scoreAjoute">Le score a été ajouté</p>
			<p v-if="pseudo.displayMessage">{{pseudo.message}}</p>
			<input type="text" v-model="pseudo.entree" placeholder="pseudo" v-on:input="pseudo_Verif()"> <br>
			<p v-if="jeu.displayMessage">{{jeu.message}}</p>
			<input type="text" v-model="jeu.entree" placeholder="jeu" v-on:input="jeu_Verif()"> <br>
			<p v-if="score.displayMessage">{{score.message}}</p>
			<input type="text" v-model="score.entree" placeholder="score" v-on:input="score_Verif()">  
			<button v-if="jeu.valide && score.valide && pseudo.valide" v-on:click="envoiDonnees()"> Envoyer </button>
		</div>
	</div>
	<script src="VueJS/ajout_score_Vue.js"></script>
	
	</div>

	<?php include("reseaux_sociaux.php"); ?>
	<?php include("partenaires.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
</html>