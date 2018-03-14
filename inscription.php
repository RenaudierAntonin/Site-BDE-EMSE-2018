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

	include("menu.php");?>

	
	<?php if (!isset($_POST['mail']) OR !isset($_POST['mdp1'])){ ?>

	
		<form class="inscription" action = "inscription.php" method = "post" id = "inscription1">
			<p><span v-if = 'mail.displayMessage' class = "rouge">{{mail.message}}</span></p>
			<input placeholder="E-mail" type="email" v-model="mail.entree" name="mail" v-on:input="mail_Verif">
			<p > <span v-if = 'number.displayMessage' class = "rouge"> {{number.message}}</span> </p>
			<p>Attention ! Les mots de passe ne sont pas encore cryptés, n'utilisez pas celui de vos comptes perso</p>
			<p ><span v-if = 'mdp1.displayMessage' class  = "rouge">{{mdp1.message}}</span></p>
			<input placeholder="Mot de passe" type="password" v-model="mdp1.entree" v-on:input="mdp1_Verif" name = "mdp1">
			<p ><span v-if = 'mdp2.displayMessage' class= "rouge">{{mdp2.message}}</span></p>
			<input placeholder="Confirmation du mot de passe" type="password" v-model="mdp2.entree" v-on:input="mdp2_Verif" name = "mdp2">
			<p > <span v-if = 'number.displayMessage' class = "rouge"> {{number.message}}</span> </p>
			<p>Entrez votre numero de tel pour recevoir les news par sms</p>
			<input placeholder="Numéro de téléphone" type="tel" v-model="number.entree" name = "number"> 
			<p v-if = "(mail.valide && mdp1.valide && mdp2.valide && number.valide)"><input type="submit" value="s'incrire"></p>
		</form>
		<script src = "VueJS/inscription1_Vue.js"></script>

		<script> axios.get('https://minesperium.herokuapp.com/api/users').then(function(reponse){console.log(reponse)})</script> 

	<?php } else {

				echo "<script type=\"text/javascript\">var mail='".$_POST["mail"]."'</script>";
				echo "<script type=\"text/javascript\">var mdp='".$_POST["mdp1"]."'</script>";

				if (isset($_POST['number'])){

					echo "<script type=\"text/javascript\">var number='".$_POST["number"]."'</script>";
					echo "<script type=\"text/javascript\">var numberEntre = true</script>";
	
				}else {
					echo "<script type=\"text/javascript\">var number= null </script>";
					echo "<script type=\"text/javascript\">var numberEntre = false</script>";
				}

				 ?>
 
				<!--<script> //axios.post('https://minesperium.herokuapp.com/api/users',{email : mail, mot_de_passe : mdp, numero : numero_mobile}).then(function(reponse){console.log(reponse)})</script> -->

	

		<div id = "inscription2" class="inscription">
			<div v-if = "!envoi">
				<p>Inscription validée, choisissez maintenant votre camps !</p> 
				<p><span v-if = 'pseudo.displayMessage'>{{pseudo.message}}</span></p>
				<input placeholder="Pseudo" type="text" v-model="pseudo.entree" v-on:input="pseudo_Verif()" name="pseudo"> <br>

				<select v-model="civilisation" name="civilisation" placeholder="Choisissez votre civilisation" >
					<option disabled value="">Choisissez votre civilisation</option>
					<option v-for="option in civilisations">
						{{ option.name }}
					</option>
            	</select>
            	<p v-if = "pseudo.valide && civilisation"><button v-on:click = "envoiDonnees()">Envoyer</button></p>
			</div>

				<div v-if = "envoi"> 
					<p> Felicitations ! Vous êtes maintenant inscrit aux campagnes Mines'perium, que la bataille commence ! </p>
				</div>

			</div>

			<script src = "VueJS/inscription2_Vue.js"></script>

    <?php } ?>		

	<?php include("reseaux_sociaux.php"); ?>
	<?php include("partenaires.php"); ?>

</body>
<footer>
	<p class="credits">Liste BDE Mines Saint-Etienne 2K18 - Mines'perium - Copyright BDE's Nerds</p>
</footer>


</html>