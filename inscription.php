<!DOCTYPE html>
<html>
<head>
	<title>Mines'perium</title>
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<link rel="stylesheet" type="text/css" href="style/style_inscription.css">
	<meta charset="utf-8">
</head>

<body>
	
	
	<?php $inscrire = true;

	include("menu.php");


	if (!isset($_POST['mail']) OR (isset($_POST['mdp1']) AND isset($_POST['mdp2']) AND ($_POST['mdp1'] !== $_POST['mdp2']))){  // a enlever dès qu'on sait faire dynamiquement avec vuejs
		
		if (isset($_POST['mail'])){

			echo "<p>Le mot de passe et la confirmation ne correspondent pas</p>"; 
		} ?>

		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
		<script type="text/javascript"> axios.get('https://minesperium.herokuapp.com/api/users').then(function(reponse){ console.log(reponse.data) }).catch(function(error){console.log(error)}) ; </script>

		
		<form class="inscription" action = "inscription.php" method = "post" id = "inscription">

			<p id = "mail" ></p><input placeholder="E-mail" type="email" v-model="mail.entree">
			<p ><span v-if = 'mdp1.displayMessage'>{{mdp1.message}}</span></p><input placeholder="Mot de passe" type="password" v-model="mdp1.entree" v-on:blur="mdp1_Verif()">
			<p id = "mdp2" ><span v-if = 'mdp2.displayMessage'>{{mdp2.message}}</span></p><input placeholder="Confirmation du mot de passe" type="password" v-model="mdp2.entree" v-on:blur="mdp2_Verif()">
			<p id = "number"> <span v-if = 'number.displayMessage'> {{number.message}}</span> </p><input placeholder="Numéro de téléphone" type="tel" v-model="number.entree"> 
			<p id = "envoi" v-if = "true"><input type="submit" ></p>

		</form>

	

	<?php } else{

				echo "<script type=\"text/javascript\">var mail=".$_POST["mail"]."</script>";
				echo "<script type=\"text/javascript\">var mdp=".$_POST["mdp1"]."</script>";
				echo "<script type=\"text/javascript\">var numero_mobile=".$_POST["numero_mobile"]."</script>";

				 ?>
 
				<script>axios.post('https://minesperium.herokuapp.com/api/users',{email : mail, mot_de_passe : mdp, numero : numero_mobile}).then(function(reponse){console.log(reponse)})</script>

				<p>Votre inscription a bien été prise en compte nous vous tiendrons informé dans les plus brefs délais</p> 
	
	<?php } include("reseaux_sociaux.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
<script src = "https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.min.js"></script>
<script src = "inscription1_Vue.js"></script>
</html>