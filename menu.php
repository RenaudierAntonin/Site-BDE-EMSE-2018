<div class="logo-container">
	<div>
		<a href="index.php"><img class="logo" src="img/logo_minesperium.png"></a>
	</div>
	
	<?php if (isset($_SESSION['login']) AND $_SESSION['login']){

		echo $_SESSION['prenom']. " " . $_SESSION['nom'];
	}
		else if (!isset($_GET['inscrire']) OR !$_GET['inscrire']){ ?>

	<div class="connection-container">
	<form class="connection" action = "connexion.php" method = "post">
		<input placeholder="Identifiant" type="text" name="login">
		<input placeholder="Mot de passe" type="password" name="mdp">
		<input type="submit">
	</form>
	
	<a href = "inscription.php?inscrire=true">S'inscrire</a>
	</div>
	<?php }  ?>
</div>



<div class="menu-container">
	<ul class="menu">
		<li><a href="">Membres</a></li>
		<li><a href="allos.php">Allo ?</a></li>
		<li><a href="">Planning</a></li>
		<li><a href="jeux_classements.php">Jeux et classements</a></li>
		<li><a href="">Photos/Vidéos</a></li>
	</ul>
</div>