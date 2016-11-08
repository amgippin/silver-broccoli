var myApp = angular.module('myApp',[]);

myApp.controller('pokemonEvalCpTable', ['$scope', function($scope) {	
	$scope.pokemonList = [
		{	
			number:1,
			name:'Bulbasaur',
			evol: [{number:2}, {number:3}],
			cp: 100
		},
		{	
			number:2,
			name: 'Ivysaur',
			minMulti:1.53,
			maxMulti:1.58,
			evol: [{ number:3 }],
			pre_evol: [{number:1}]
		},
		{	
			number: 3,
			name: 'Venusaur',
			minMulti:1.20,
			maxMulti:1.61,
			pre_evol: [ {number:1}, {number:2}]
		},
		{	
			number: 4,
			name: 'Charmander',
			evol: [{ number:5 }, { number:6 }]
		},
		{	
			number: 5,
			name: 'Charmeleon',
			minMulti:1.64,
			maxMulti:1.70,
			evol: [{ number:6 }]
		},
		{	
			number: 6,
			name: 'Charizard',
			minMulti:1.71,
			maxMulti:1.73
		},	
		{	
			number: 7,
			name: 'Squirtle',
			evol: [{ number:8 }, { number:9 }]
		},	
		{	
			number: 8,
			name: 'Wartortle',
			minMulti:1.63,
			maxMulti:1.4,
			evol: [{ number:9 }]
		},	
		{	
			number: 9,
			name: 'Blastoise',
			minMulti:1.4,
			maxMulti:1.65,
		},	
		{	
			number: 10,
			name: 'Caterpie',
			evol: [{ number:11 }, { number:12 }]
		},	
		{	
			number: 11,
			name: 'Metapod',
			minMulti:1.04,
			maxMulti:1.08,
			evol: [{ number:12 }]
		},	
		{	
			number: 12,
			name: 'Butterfree',
			minMulti:3.52,
			maxMulti:3.79
		},	
		{	
			number: 13,
			name: 'Weedle',
			evol: [{ number:14 }, { number:15 }]
		},	
		{	
			number: 14,
			name: 'Kakuna',
			minMulti:1.06,
			maxMulti:1.1,
			evol: [{ number:15 }]
		},	
		{	
			number: 15,
			name: 'Beedrill',
			minMulti:3.3,
			maxMulti:3.42
		},			
		{	
			number: 16,
			name: 'Pidgey',
			evol: [{ number:17 }, { number:18 }]
		},
		{	
			number: 17,
			name: 'Pidgeotto',
			minMulti:1.82,
			maxMulti:1.95,
			evol: [{ number:18 }]
		},	
		{	
			number: 18,
			name: 'Pidgeot',
			minMulti:1.73,
			maxMulti:1.78
		},	
		{	
			number: 19,
			name: 'Rattata',
			evol: [{ number:20 }]
		},	
		{	
			number: 20,
			name: 'Raticate',
			minMulti:1.61,
			maxMulti:1.73,
		},	
		{	
			number: 21,
			name: 'Spearow',
			evol: [{ number:22 }]
		},		
		{	
			number: 22,
			name: 'Fearow',
			minMulti:2.58,
			maxMulti:2.81
		},	
		{	
			number:23,
			name: 'Ekans',
			evol: [{ number:24 }]
		},		
		{	
			number: '24',
			name: 'Arbok',
			minMulti:2.2,
			maxMulti:2.33
		},
		{	
			number:25,
			name: 'Pikachu',
			evol: [{ number:26 }]
		},		
		{	
			number:26,
			name: 'Raichu',
			minMulti:2.33,
			maxMulti:2.38
		},
		{	
			number:27,
			name: 'Sandshrew',
			evol: [{ number:28 }]
		},		
		{	
			number:28,
			name: 'Sandslash',
			minMulti:2.35,
			maxMulti:2.76
		},	
		{	
			number:29,
			name: 'Nidoran F',
			evol: [{ number:30 }, { number:31 }]
		},		
		{	
			number:30,
			name: 'Nidorina',
			minMulti:1.62,
			maxMulti:1.66,
			evol: [{ number:31 }]
		},
		{	
			number:31,
			name: 'Nidoqueen',
			minMulti:1.8,
			maxMulti:2.04,
		},		
		{	
			number:32,
			name: 'Nidoran M',
			evol: [{ number:33 }, { number:34 }]
		},
		{	
			number:33,
			name: 'Nidorino',
			minMulti:1.65,
			maxMulti:1.7,
			evol: [{ number:34 }]
		},		
		{	
			number:34,
			name: 'Nidoking',
			minMulti:1.64,
			maxMulti:1.86
		},	
		{	
			number:35,
			name: 'Clefairy',
			evol: [{ number:36 }]
		},		
		{	
			number:36,
			name: 'Clefable',
			minMulti:2.02,
			maxMulti:2.2
		},
		{	
			number:37,
			name: 'Vulpix',
			evol: [{ number:38 }]
		},		
		{	
			number:38,
			name: 'Ninetales',
			minMulti:2.68,
			maxMulti:2.74
		},
		{	
			number:39,
			name: 'Jigglypuff',
			evol: [{ number:40 }]
		},		
		{	
			number:40,
			name: 'Wigglytuff',
			minMulti:2.41,
			maxMulti:2.47
		},	
		{	
			number:41,
			name: 'Zubat',
			evol: [{ number:42 }]
		},		
		{	
			number:42,
			name: 'Golbat',
			minMulti:2.9,
			maxMulti:3.33,
		},
		{	
			number:43,
			name: 'Oddish',
			evol: [{ number:44 }, { number:45 }]
		},		
		{	
			number:44,
			name: 'Gloom',
			minMulti:1.48,
			maxMulti:1.51,
			evol: [{ number:45 }]
		},
		{	
			number:45,
			name: 'Vilplume',
			minMulti:1.48,
			maxMulti:1.42
		},		
		{	
			number:46,
			name: 'Paras',
			evol: [{ number:47 }]
		},	
		{	
			number:47,
			name: 'Parasect',
			minMulti:1.92,
			maxMulti:2.02
		},		
		{	
			number:48,
			name: 'Venonat',
			evol: [{ number:49 }]
		},
		{	
			number:49,
			name: 'Venonmoth',
			minMulti:1.85,
			maxMulti:1.9
		},		
		{	
			number:50,
			name: 'Diglett',
			evol: [{ number:51 }]
		},
		{	
			number:51,
			name: 'Dugltrio',
			minMulti:2.68,
			maxMulti:2.77
		},		
		{	
			number:52,
			name: 'Meowth',
			evol: [{ number:53 }]
		},	
		{	
			number:53,
			name: 'Persian',
			minMulti:1.98,
			maxMulti:2.24
		},		
		{	
			number:54,
			name: 'Psyduck',
			evol: [{ number:55 }]
		},
		{	
			number:55,
			name: 'Golduck',
			minMulti:2.22,
			maxMulti:2.29
		},		
		{	
			number:56,
			name: 'Mankey',
			evol: [{ number:57 }]
		},
		{	
			number:57,
			name: 'Primeape',
			minMulti:2.15,
			maxMulti:2.28
		},		
		{	
			number:58,
			name: 'Growlithe',
			evol: [{ number:59 }],
		},	
		{	
			number:59,
			name: 'Arcanine',
			minMulti:2.25,
			maxMulti:2.36
		},	
		{	
			number:60,
			name: 'Poliwag',
			evol: [{ number:61 }, { number:62 }]
		},
		{	
			number:61,
			name: 'Poliwhirl',
			minMulti:1.72,
			maxMulti:1.89,
			evol: [{ number:62 }]
		},		
		{	
			number:62,
			name: 'Poliwrath',
			minMulti:1.9,
			maxMulti:1.96
		},
		{	
			number:63,
			name: 'Abra',
			evol: [{ number:64 }, { number:65 }]
		},		
		{	
			number:64,
			name: 'Kadabra',
			minMulti:1.36,
			maxMulti:2,
			evol: [{ number:65 }]
		},	
		{	
			number:65,
			name: 'Alakazam',
			minMulti:1.41,
			maxMulti:1.65
		},		
		{	
			number:66,
			name: 'Machop',
			evol: [{ number:67 }, { number:68 }]
		},
		{	
			number:67,
			name: 'Machoke',
			minMulti:1.62,
			maxMulti:1.67,
			evol: [{ number:68 }]
		},		
		{	
			number:68,
			name: 'Machamp',
			minMulti:1.48,
			maxMulti:1.7
		},
		{	
			number:69,
			name: 'Bellsprout',
			minMulti:1.54,
			maxMulti:1.6,
			evol: [{ number:70 }, { number:71 }]
		},		
		{	
			number:70,
			name: 'Weepinbell',
			minMulti:1.47,
			maxMulti:1.52,
			evol: [{ number:71 }]
		},	
		{	
			number:71,
			name: 'Victreebel'
		},		
		{	
			number:72,
			name: 'Tentacool',
			minMulti:2.47,
			maxMulti:2.6,
			evol: [{ number:73 }]
		},
		{	
			number:73,
			name: 'Tentacruel'
		},		
		{	
			number:74,
			name: 'Geodude',
			minMulti:1.71,
			maxMulti:1.76,
			evol: [{ number:75 }, { number:76 }]
		},
		{	
			number:75,
			name: 'Graveler',
			minMulti:1.63,
			maxMulti:1.72,
			evol: [{ number:76 }]
		},		
		{	
			number:76,
			name: 'Golem'
		},	
		{	
			number:77,
			name: 'Ponyta',
			minMulti:1.47,
			maxMulti:1.6,
			evol: [{ number:78 }]
		},		
		{	
			number:78,
			name: 'Rapidash'
		},
		{	
			number:79,
			name: 'Slowpoke',
			minMulti:2.19,
			maxMulti:2.21,
			evol: [{ number:80 }]
		},	
		{	
			number:80,
			name: 'Slowbro'
		},
		{	
			number:81,
			name: 'Magnemite',
			minMulti:2.16,
			maxMulti:2.2,
			evol: [{ number:82 }]
		},		
		{	
			number:82,
			name: 'Magneton'
		},	
		{	
			number:83,
			name: ''
		},		
		{	
			number:84,
			name: 'Doduo',
			minMulti:2.11,
			maxMulti:2.24,
			evol: [{ number:85 }]
		},
		{	
			number:85,
			name: 'Dodrio'
		},		
		{	
			number:86,
			name: 'Seel',
			minMulti:1.96,
			maxMulti:2.03,
			evol: [{ number:87 }]
		},
		{	
			number:87,
			name: 'Dewgong'
		},		
		{	
			number:88,
			name: 'Grimer',
			minMulti:2.03,
			maxMulti:2.17,
			evol: [{ number:89 }]
		},	
		{	
			number:89,
			name: 'Muk'
		},
		{	
			number:90,
			name: 'Shellder',
			minMulti:2.62,
			maxMulti:2.65,
			evol: [{ number:91 }]
		},
		{	
			number:91,
			name: 'Cloyster'
		},		
		{	
			number:92,
			name: 'Gastly',
			minMulti:1.75,
			maxMulti:1.83,
			evol: [{ number:93 }, { number:94 }]
		},
		{	
			number:93,
			name: 'Haunter',
			minMulti:1.53,
			maxMulti:1.8,
			evol: [{ number:94 }]
		},		
		{	
			number:94,
			name: 'Gengar'
		},	
		{	
			number:95,
			name: ''
		},		
		{	
			number:96,
			name: 'Drowzee',
			minMulti:2.05,
			maxMulti:2.11,
			evol: [{ number:97 }]
		},
		{	
			number:97,
			name: 'Hypno'
		},		
		{	
			number:98,
			name: 'Krabby',
			minMulti:2.35,
			maxMulti:2.4,
			evol: [{ number:99 }]
		},
		{	
			number:99,
			name: 'Kingler'
		},		
		{	
			number:100,
			name: 'Voltorb',
			minMulti:2.01,
			maxMulti:2.03,
			evol: [{ number:101 }]
		},	
		{	
			number:101,
			name: 'Electrode'
		},		
		{	
			number:102,
			name: 'Exeggcute',
			minMulti:2.7,
			maxMulti:3.18,
			evol: [{ number:103 }]
		},
		{	
			number:103,
			name: 'Exeggutor'
		},		
		{	
			number:104,
			name: 'Cubone',
			minMulti:1.65,
			maxMulti:1.67,
			evol: [{ number:105 }]
		},
		{	
			number:105,
			name: 'Marowak'
		},		
		{	
			number:106,
			name: ''
		},	
		{	
			number:107,
			name: ''
		},		
		{	
			number:108,
			name: ''
		},
		{	
			number:109,
			name: 'Koffing',
			minMulti:1.95,
			maxMulti:2.1,
			evol: [{ number:110 }]
		},		
		{	
			number:110,
			name: 'Weezing'
		},
		{	
			number:111,
			name: 'Rhyhorn',
			minMulti:1.9,
			maxMulti:1.91,
			evol: [{ number:112 }]
		},		
		{	
			number:112,
			name: 'Rhydon'
		},	
		{	
			number:113,
			name: ''
		},		
		{	
			number:114,
			name: ''
		},
		{	
			number:115,
			name: ''
		},		
		{	
			number:116,
			name: 'Horsea',
			minMulti:2.19,
			maxMulti:2.23,
			evol: [{ number:117 }]
		},
		{	
			number:117,
			name: 'Seadra'
		},		
		{	
			number:118,
			name: 'Goldeen',
			minMulti:2.14,
			maxMulti:2.24,
			evol: [{ number:119 }]
		},	
		{	
			number:119,
			name: 'Seaking'
		},		
		{	
			number:120,
			name: 'Staryu',
			minMulti:2.35,
			maxMulti:2.44,
			evol: [{ number:121 }]
		},
		{	
			number:121,
			name: 'Starmie'
		},		
		{	
			number:122,
			name: ''
		},
		{	
			number:123,
			name: ''
		},		
		{	
			number:124,
			name: ''
		},	
		{	
			number:125,
			name: ''
		},		
		{	
			number:126,
			name: ''
		},
		{	
			number:127,
			name: ''
		},		
		{	
			number:128,
			name: ''
		},
		{	
			number:129,
			name: 'Magikarp',
			minMulti:10.1,
			maxMulti:11.96,
			evol: [{ number:130 }]
		},		
		{	
			number:130,
			name: 'Gyarados'
		},	
		{	
			number:131,
			name: ''
		},		
		{	
			number:132,
			name: ''
		},
		{	
			number:133,
			name: 'Eevee',
			minMulti:2.62,
			maxMulti:2.67,
			evol: [{ number:134 }]
		},		
		{	
			number:134,
			name: 'Vaporeon',
		},
		{	
			number:133,
			name: 'Eevee',
			minMulti:2.01,
			maxMulti:2.09,
			evol: [{ number:135 }]
		},		
		{	
			number:135,
			name: 'Jolteon',
		},	
		{	
			number:133,
			name: 'Eevee',
			minMulti:2.46,
			maxMulti:2.64,
			evol: [{ number:136 }]
		},		
		{	
			number:136,
			name: 'Flareon'
		},	
		{	
			number:137,
			name: ''
		},		
		{	
			number:138,
			name: 'Omanyte',
			minMulti:1.99,
			maxMulti:2.12,
			evol: [{ number:139 }]
		},
		{	
			number:139,
			name: 'Omastar'
		},		
		{	
			number:140,
			name: 'Kabuto',
			minMulti:1.97,
			maxMulti:2.37,
			evol: [{ number:141 }]
		},
		{	
			number:141,
			name: 'Kabutops'
		},		
		{	
			number:142,
			name: ''
		},	
		{	
			number:143,
			name: ''
		},		
		{	
			number:144,
			name: ''
		},
		{	
			number:145,
			name: ''
		},		
		{	
			number:146,
			name: ''
		},
		{	
			number:147,
			name: 'Dratini',
			minMulti:1.8,
			maxMulti:1.85,
			evol: [{ number:148 }, { number:149 }]
		},		
		{	
			number:148,
			name: 'Dragonair',
			minMulti:2.03,
			maxMulti:2.08,
			evol: [{ number:149 }]
		},	
		{	
			number:149,
			name: 'Dragonite'
		},		
		{	
			number:150,
			name: ''
		},
		{	
			number:151,
			name: ''
		}
	];
	$scope.pokemonList2 = [
		{	
			number:1,
			name:'Bulbasaur',
			evol: [{ number:2 }, { number: 3 }],
			cp: 100
		},
		{
			number:2,
			name: 'Ivysaur',
			minMulti:1.53,
			maxMulti:1.58,
			evol: [{ number: 3 }]
		}, 
		{
			number: 3,
			name: 'Venusaur',
			minMulti:1.20,
			maxMulti:1.61
		},
		{	
			number: 4,
			name: 'Charmander',
			evol: [{ number: 5 }, { number: 6 }]
		},
		{ 
			number: 5,
			name: 'Charmeleon',
			minMulti:1.64,
			maxMulti:1.70,
			evol: [{ number: 6 }]
		}, 
		{ 
			number: 6,
			name: 'Charizard',
			minMulti:1.71,
			maxMulti:1.73
		}		
	];
	$scope.pokemon = $scope.pokemonList[0];
	
	$scope.cpCalc = function(pokemon, cp) {	
		if (!pokemon) return;
		
		if (cp) {		
			pokemon.minCp = Math.round(cp * pokemon.minMulti);
			pokemon.maxCp = Math.round(cp * pokemon.maxMulti);
		} else {
			var minCp = pokemon.cp;
			var maxCp = pokemon.cp;
			
			if(!pokemon.evol) {
				item.minCp = Math.round(cp * pokemon.minMulti);
				item.maxCp = Math.round(cp * pokemon.maxMulti);
			} else {
				pokemon.evol.forEach(function(item) {
					item.minCp = Math.round(minCp * item.minMulti);
					item.maxCp = Math.round(maxCp * item.maxMulti);
					minCp = item.minCp;
					maxCp = item.maxCp;
				});
			}
		}
		
		/*if (cp) {
			pokemon.minCp = Math.round(cp * pokemon.minMulti);
			pokemon.maxCp = Math.round(cp * pokemon.maxMulti);
		} else {
			pokemon.minCp = Math.round(pokemon.cp * pokemon.evol[0].minMulti);
			pokemon.maxCp = Math.round(pokemon.cp * pokemon.evol[0].maxMulti);
		}*/
	}
	
	$scope.cpCalcSelf = function(pokemon) {
		var minCp = pokemon.cp;
		var maxCp = pokemon.cp;
		
		pokemon.evol.forEach(function(item) {
			item.minCp = Math.round(minCp * item.minMulti);
			item.maxCp = Math.round(maxCp * item.maxMulti);
			minCp = item.minCp;
			maxCp = item.maxCp;
		});
	}
	$scope.cpCalcEvol = function(pokemon) {
		pokemon.minCp = Math.round(pokemon.cp * pokemon.minMulti);
		pokemon.maxCp = Math.round(pokemon.cp * pokemon.maxMulti);
	}
	
	function highlightRow(pokemon) {
		if(!pokemon) return;
		
		//pokemon.rowClass
		if (pokemon.minCp >= pokemon.evol_1.cp) {
			pokemon.rowClass = 'red';
		}
		else{
			pokemon.rowClass = 'blue';
		}
	}
	
	$scope.rowUpdated = function(pokemon) {
		$scope.cpCalc(pokemon);
	}
	
	$scope.pokemonSelected = function(pokemon) {
		
	}

	$scope.one = function(pokemon) {
		$scope.updatedPokemon = pokemon;
		if (!pokemon.evol || pokemon.evol.length === 0) return;
		
		var minCp = pokemon.cp;
		var maxCp = pokemon.cp;
		
		pokemon.evol.forEach(function(evol){
			evol.minCp = Math.round(minCp * evol.minMulti);
			evol.maxCp = Math.round(maxCp * evol.maxMulti);
			minCp = evol.minCp;
			maxCp = evol.maxCp;
		})
	};
}]);

myApp.controller('pokemonEvalCpTableRowFormat', ['$scope', function($scope) {
	init();
	
	function init() {
		if($scope.pokemon.evol) {
			for (var j=0; j < $scope.pokemon.evol.length; j++) {
				var evol = getPokemonByNumber($scope.pokemon.evol[j].number);
				
				if (!evol) return;
				$scope.pokemon.evol[j] = angular.copy(evol);
				$scope.pokemon.evol[j].evol = null;
				//$scope.pokemon.evol[j].name = evol.name;
				//$scope.pokemon.evol[j].minMulti = evol.minMulti;
				//$scope.pokemon.evol[j].maxMulti = evol.maxMulti;
			}
		}
	}
	
	function getPokemonByNumber(number) {
		for (var i=0; i < $scope.pokemonList.length; i++){
			if($scope.pokemonList[i].number === number) return $scope.pokemonList[i];
		}
	}
	
}]);
/*myApp.controller('pokemonEvalCpTableRowFormat', ['$scope', function($scope) {
	init();
	
	function init() {
		if ($scope.pokemon.pre_evol) {
			for (var i=0; i < $scope.pokemon.pre_evol.length; i++) {
				var pre_evol = getPokemonByNumber($scope.pokemon.pre_evol[i].number);
				
				if (!pre_evol) return;
				$scope.pokemon.pre_evol[i].name = pre_evol.name;
				$scope.pokemon.pre_evol[i].minMulti = pre_evol.minMulti;
				$scope.pokemon.pre_evol[i].maxMulti = pre_evol.maxMulti;
			}
		}
		
		if($scope.pokemon.evol) {
			for (var j=0; j < $scope.pokemon.evol.length; j++) {
				var evol = getPokemonByNumber($scope.pokemon.evol[j].number);
				
				if (!evol) return;
				$scope.pokemon.evol[j] = angular.copy(evol);
				
				//$scope.pokemon.evol[j].name = evol.name;
				//$scope.pokemon.evol[j].minMulti = evol.minMulti;
				//$scope.pokemon.evol[j].maxMulti = evol.maxMulti;
			}
		}
	}
	
	function getPokemonByNumber(number) {
		for (var i=0; i < $scope.pokemonList.length; i++){
			if($scope.pokemonList[i].number === number) return $scope.pokemonList[i];
		}
	}
}]);*/