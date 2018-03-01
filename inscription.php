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

		<script type="text/javascript"> axios.get('https://minesperium.herokuapp.com/api/users').then(function(reponse){ console.log(reponse) }).catch(function(error){console.log(error)}) ; </script>

		<form class="inscription" action = "inscription.php" method = "post" id = "inscription">
			<p id = "mail" ></p><input placeholder="E-mail" type="email" v-model="entree">
			<p id = "mdp1" >{{message}}</p><input placeholder="Mot de passe" type="password" v-model="entree">
			<p id = "mdp2" >{{message}}</p><input placeholder="Confirmation du mot de passe" type="password" v-model="entree">
			<p id = "number">{{message}}</p><input placeholder="Numéro de téléphone" type="tel" v-model="entree"> <!-- utiliser un type specifique au numero de tel -->
			<p id = "envoi" v-if = "display"><input type="submit" ></p>
		</form>

	<?php } else{

				echo "<script type=\"text/javascript\">var mail=".$_POST["mail"]."</script>";
				echo "<script type=\"text/javascript\">var mdp=".$_POST["mdp1"]."</script>";
				echo "<script type=\"text/javascript\">var numero_mobile=".$_POST["numero_mobile"]."</script>";

				 ?>

				<script>axios.post('https://minesperium.herokuapp.com/api/users',{email : mail, mot_de_passe : mdp, numero : numero_mobile}).then(function(reponse){})</script>

				<p>Votre inscription a bien été prise en compte nous vous tiendrons informé dans les plus brefs délais</p> 
	
	<?php } include("reseaux_sociaux.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>
<script src = "https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.min.js"></script>
<script src = "inscription_Vue.js"></script>
</html>