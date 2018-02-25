<?php session_start();

	if (isset($_GET['deconnexion']) AND $_GET['deconnexion']){

		session_destroy();

	} ?>



<div class="logo-container">

	<a href="index.php"><img class="logo" src="img/logo_minesperium.png"></a>
	

	<?php if(isset($_POST['login']) AND isset($_POST['mdp'])){

		$_SESSION['login'] = $_POST['login'];

		$_SESSION['mdp'] = $_POST['mdp'];

	}

	if (isset($_SESSION['login']) /*AND $_SESSION['login']*/){



		echo $_SESSION['login']. " " . $_SESSION['mdp'];

	?>



	<a href="index.php?deconnexion=true"><button>Deconnexion</button></a>



	<?php

	}

		else if (!isset($_GET['inscrire']) OR !$_GET['inscrire']){ ?>



	<div class="connection-container">

	<form class="connection" action = "index.php" method = "post">

		<input type="text" name="login">

		<input type="password" name="mdp">

		<input type="submit">

	</form>

	

	<a href = "inscription.php?inscrire=true">S'inscrire</a>

	</div>

	<?php } ?>

</div>







<div class="menu-container">

	<ul class="menu">

		<li><a href="membres.php">Membres</a></li>

		<li><a href="allos.php">Allo ?</a></li>

		<li><a href="planning.php">Planning</a></li>

		<li><a href="jeux_classements.php">Jeux et classements</a></li>

		<li><a href="medias.php">Photos/Vidéos</a></li>

	</ul>

</div>