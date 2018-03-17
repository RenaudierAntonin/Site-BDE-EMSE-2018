<?php session_start();

	if (isset($_GET['deconnexion']) AND $_GET['deconnexion']){

		session_destroy();
		header("Location: index.php");

	} ?>


<div class="logo-container">

	<a href="index.php"><img class="logo" src="img/logo_minesperium.png"></a>

	<script src="https://unpkg.com/axios/dist/axios.min.js"></script> 
	<script src = "https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.min.js"></script>

	<?php if(isset($_POST['login'])){

		$_SESSION['login'] = $_POST['login'];

	}
	echo "<script type=\"text/javascript\"> login = '' </script>";
	if (isset($_SESSION['login']) ){

		echo "<script type=\"text/javascript\"> login = '".$_SESSION['login']."' </script>"

	?>
	<div id = "infoConnect">
		<span class='hello'> Bonjour {{pseudo}} </span> <br>
		<span class="hello"> Votre rang : {{rang}}</span>
	</div>

	<a href="index.php?deconnexion=true"><button>Deconnexion</button></a>

	<?php

	}	
		else if (!isset($inscrire) OR !$inscrire){ ?>

			<div class="connection-container" id="connexion">

			<form class="connection" action = "index.php" method = "post">
				<span v-if="login.displayMessage">{{login.message}}</span> 
				<input placeholder="Pseudo ou email" type="text" name="login" v-model="login.entree" v-on:input="autentification(); verification();" v-on:blur="autentification()" >
				<span v-if="mdp.displayMessage">{{mdp.message}}</span> 
				<input placeholder="Mot de passe" type="password" name="mdp" v-model="mdp.entree" v-on:input="verification()" v-on:blur="verification()">

				<input type="submit" value = "connexion" v-if="mdp.valide">

			</form>

			<a href = "inscription.php">S'inscrire</a>

			</div>

	<?php } ?>

</div>

<?php echo "<script src = \"VueJS/connexion_Vue.js?".time()."\"></script>" ?>

<div class="menu-container">

	<ul class="menu">

		<li><a href="membres.php">Membres</a></li>

		<li><a href="allos.php">Allo ?</a></li>

		<li><a href="planning.php">Planning</a></li>

		<li><a href="jeux_classements.php">Jeux et classements</a></li>

		<?php if (isset($_SESSION['login']) && (($_SESSION['login'] == "Sim's") || ($_SESSION['login'] == "Ramos"))){

			echo "<li><a href='ajout_point.php'>Ajout Points</a></li>";
		}?>

		<!--<li><a href="medias.php">Photos/Vidéos</a></li>-->

	</ul>

</div>