var mdp1 = new Vue({

	el: '#mdp1',
	data : {
		message : "Entrez un mot de passe valide",
		display : true,
		entree : '',
		valide : false
	}
})

var mdp2 = new Vue({

	el: '#mdp2',
	data : {
		message : "La confirmation doit correspondre au premier mot de passe",
		display : false,
		entree : ''
	}

})

var number = new Vue({

	el: '#number',
	data : {
		message : "Entrer un numéro de telephone valide",
		display : false,
		entree : '',
		valide : false
	}

})

var envoi = new Vue({

	el : '#envoi',
	data : {
		display : mdp1.data.valide & (mdp2 === mdp1) & number.data.valide
	}
})

/*var inscription = new Vue({

	el : '#inscription',
	data : {

	}
})*/