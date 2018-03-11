<?php session_start();

	if (isset($_GET['deconnexion']) AND $_GET['deconnexion']){

		session_destroy();

	} ?>


<div class="logo-container">

	<a href="index.php"><img class="logo" src="img/logo_minesperium.png"></a>

	<script src="https://unpkg.com/axios/dist/axios.min.js"></script> 
	<script src = "https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.min.js"></script>

	<?php if(isset($_POST['login'])){

		$_SESSION['login'] = $_POST['login'];

	}

	if (isset($_SESSION['login']) ){

		echo "Hello " . $_SESSION['login'];

	?>

	<a href="index.php?deconnexion=true"><button>Deconnexion</button></a>

	<?php

	}	
		else if (!isset($inscrire) OR !$inscrire){ ?>

			<div class="connection-container" id="connexion">

			<form class="connection" action = "index.php" method = "post">

				<input placeholder="Pseudo" type="text" name="login" v-model="login.entree" v-on:input="autentification" >

				<input placeholder="Mot de passe" type="password" name="mdp" v-model="mdp.entree" v-on:input="verification">

				<input type="submit" value = "connexion" v-if="mdp.valide">

			</form>

			<a href = "inscription.php">S'inscrire</a>

			</div>

	<?php } ?>

</div>

<script src = "VueJS/connexion_Vue.js"></script>

<div class="menu-container">

	<ul class="menu">

		<li><a href="membres.php">Membres</a></li>

		<li><a href="allos.php">Allo ?</a></li>

		<li><a href="planning.php">Planning</a></li>

		<li><a href="jeux_classements.php">Jeux et classements</a></li>

		<li><a href="medias.php">Photos/Vidéos</a></li>

	</ul>

</div>