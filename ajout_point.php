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
	

	<form id = "score" class="inscription">
		<p v-if="pseudo.displayMessage">{{pseudo.message}}</p>
		<input type="text" v-model="pseudo.entree" placeholder="pseudo" v-on:input="pseudo_Verif()"> <br>
		<p v-if="jeu.displayMessage">{{jeu.message}}</p>
		<input type="text" v-model="jeu.entree" placeholder="jeu" v-on:input="jeu_Verif()"> <br>
		<p v-if="score.displayMessage">{{score.message}}</p>
		<input type="text" v-model="score.entree" placeholder="score" v-on:input="score_Verif()">  
		<button v-if="jeu.valide && score.valide && pseudo.valide" v-on:click="envoiDonnees()"> Envoyer </button>
	</form>
	<script src="VueJS/ajout_score_Vue.js"></script>
	
	</div>

	<?php include("reseaux_sociaux.php"); ?>
	<?php include("partenaires.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
</html>