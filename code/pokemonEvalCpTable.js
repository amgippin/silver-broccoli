var myApp = angular.module('myApp',[]);

myApp.controller('pokemonEvalCpTable', ['$scope', function($scope) {	
	$scope.pokemonList = [
		{	number:1,
			name:'Bulbasaur',
			topCp:1071,
			evol: [{number:2}, {number:3}],
			cp: 100
		},
		{	number:2,
			name: 'Ivysaur',
			minMulti:1.53,
			maxMulti:1.58,
			topCp:1632,
			evol: [{ number:3 }],
			pre_evol: [{number:1}]
		},
		{	number:3,
			name: 'Venusaur',
			minMulti:1.20,
			maxMulti:1.61,
			topCp:2580,
			pre_evol: [ {number:1}, {number:2}]
		},
		{	number:4,
			name: 'Charmander',
			topCp:955,
			evol: [{ number:5 }, { number:6 }]
		},
		{	number:5,
			name: 'Charmeleon',
			minMulti:1.64,
			maxMulti:1.70,
			topCp:1557,
			evol: [{ number:6 }]
		},
		{	number:6,
			name: 'Charizard',
			minMulti:1.71,
			maxMulti:1.73,
			topCp:2602
		},	
		{	number:7,
			name: 'Squirtle',
			topCp:1008,
			evol: [{ number:8 }, { number:9 }]
		},	
		{	number:8,
			name: 'Wartortle',
			minMulti:1.63,
			maxMulti:1.4,
			topCp:1582,
			evol: [{ number:9 }]
		},	
		{	number:9,
			name: 'Blastoise',
			minMulti:1.4,
			maxMulti:1.65,
			topCp:2542
		},	
		{	number:10,
			name: 'Caterpie',
			topCp:443,
			evol: [{ number:11 }, { number:12 }]
		},	
		{	number:11,
			name: 'Metapod',
			minMulti:1.04,
			maxMulti:1.08,
			topCp:477,
			evol: [{ number:12 }]
		},	
		{	number:12,
			name: 'Butterfree',
			minMulti:3.52,
			maxMulti:3.79,
			topCp:1454
		},	
		{	number:13,
			name: 'Weedle',
			topCp:449,
			evol: [{ number:14 }, { number:15 }]
		},	
		{	number:14,
			name: 'Kakuna',
			minMulti:1.06,
			maxMulti:1.1,
			topCp:485,
			evol: [{ number:15 }]
		},	
		{	number:15,
			name: 'Beedrill',
			minMulti:3.3,
			maxMulti:3.42,
			topCp:1439
		},			
		{	number:16,
			name: 'Pidgey',
			topCp:679,
			evol: [{ number:17 }, { number:18 }]
		},
		{	number:17,
			name: 'Pidgeotto',
			minMulti:1.82,
			maxMulti:1.95,
			topCp:1223,
			evol: [{ number:18 }]
		},	
		{	number:18,
			name: 'Pidgeot',
			minMulti:1.73,
			maxMulti:1.78,
			topCp:2091
		},	
		{	number:19,
			name: 'Rattata',
			topCp:581,
			evol: [{ number:20 }]
		},	
		{	number:20,
			name: 'Raticate',
			minMulti:1.61,
			maxMulti:1.73,
			topCp:1444
		},	
		{	number:21,
			name: 'Spearow',
			topCp:686,
			evol: [{ number:22 }]
		},		
		{	number:22,
			name: 'Fearow',
			minMulti:2.58,
			maxMulti:2.81,
			topCp:1746
		},	
		{	number:23,
			name: 'Ekans',
			topCp:824,
			evol: [{ number:24 }]
		},		
		{	number:24,
			name: 'Arbok',
			minMulti:2.2,
			maxMulti:2.33,
			topCp:1767
		},
		{	number:25,
			name: 'Pikachu',
			topCp:887,
			evol: [{ number:26 }]
		},		
		{	number:26,
			name: 'Raichu',
			minMulti:2.33,
			maxMulti:2.38,
			topCp:2028,
		},
		{	number:27,
			name: 'Sandshrew',
			topCp:798,
			evol: [{ number:28 }]
		},		
		{	number:28,
			name: 'Sandslash',
			minMulti:2.35,
			maxMulti:2.76,
			topCp:1810,
		},	
		{	number:29,
			name: 'Nidoran F',
			topCp:876,
			evol: [{ number:30 }, { number:31 }]
		},		
		{	number:30,
			name: 'Nidorina',
			minMulti:1.62,
			maxMulti:1.66,
			topCp:1404,
			evol: [{ number:31 }]
		},
		{	number:31,
			name: 'Nidoqueen',
			minMulti:1.8,
			maxMulti:2.04,
			topCp:2485
		},		
		{	number:32,
			name: 'Nidoran M',
			topCp:843,
			evol: [{ number:33 }, { number:34 }]
		},
		{	number:33,
			name: 'Nidorino',
			minMulti:1.65,
			maxMulti:1.7,
			topCp:1372,
			evol: [{ number:34 }]
		},		
		{	number:34,
			name: 'Nidoking',
			minMulti:1.64,
			maxMulti:1.86,
			topCp:2475
		},	
		{	number:35,
			name: 'Clefairy',
			topCp:1200,
			evol: [{ number:36 }]
		},		
		{	number:36,
			name: 'Clefable',
			minMulti:2.02,
			maxMulti:2.2,
			topCp:2397
		},
		{	number:37,
			name: 'Vulpix',
			topCp:381,
			evol: [{ number:38 }]
		},		
		{	number:38,
			name: 'Ninetales',
			minMulti:2.68,
			maxMulti:2.74,
			topCp:2188
		},
		{	number:39,
			name: 'Jigglypuff',
			topCp:917,
			evol: [{ number:40 }]
		},		
		{	number:40,
			name: 'Wigglytuff',
			minMulti:2.41,
			maxMulti:2.47,
			topCp:2177
		},	
		{	number:41,
			name: 'Zubat',
			topCp:642,
			evol: [{ number:42 }]
		},		
		{	number:42,
			name: 'Golbat',
			minMulti:2.9,
			maxMulti:3.33,
			topCp:1921
		},
		{	number:43,
			name: 'Oddish',
			topCp:1148,
			evol: [{ number:44 }, { number:45 }]
		},		
		{	number:44,
			name: 'Gloom',
			minMulti:1.48,
			maxMulti:1.51,
			topCp:1689,
			evol: [{ number:45 }]
		},
		{	number:45,
			name: 'Vilplume',
			minMulti:1.48,
			maxMulti:1.42,
			topCp:2492
		},		
		{	number:46,
			name: 'Paras',
			topCp:916,
			evol: [{ number:47 }]
		},	
		{	number:47,
			name: 'Parasect',
			minMulti:1.92,
			maxMulti:2.02,
			topCp:1747
		},		
		{	number:48,
			name: 'Venonat',
			topCp:1029,
			evol: [{ number:49 }]
		},
		{	number:49,
			name: 'Venonmoth',
			minMulti:1.85,
			maxMulti:1.9,
			topCp:1890
		},		
		{	number:50,
			name: 'Diglett',
			topCp:456,
			evol: [{ number:51 }]
		},
		{	number:51,
			name: 'Dugltrio',
			minMulti:2.68,
			maxMulti:2.77,
			topCp:1168
		},		
		{	number:52,
			name: 'Meowth',
			topCp:756,
			evol: [{ number:53 }]
		},	
		{	number:53,
			name: 'Persian',
			minMulti:1.98,
			maxMulti:2.24,
			topCp:1631
		},		
		{	number:54,
			name: 'Psyduck',
			topCp:1109,
			evol: [{ number:55 }]
		},
		{	number:55,
			name: 'Golduck',
			minMulti:2.22,
			maxMulti:2.29,
			topCp:2386
		},		
		{	number:56,
			name: 'Mankey',
			topCp:878,
			evol: [{ number:57 }]
		},
		{	number:57,
			name: 'Primeape',
			minMulti:2.15,
			maxMulti:2.28,
			topCp:1864
		},		
		{	number:58,
			name: 'Growlithe',
			topCp:1335,
			evol: [{ number:59 }],
		},	
		{	number:59,
			name: 'Arcanine',
			minMulti:2.25,
			maxMulti:2.36,
			topCp:2983
		},	
		{	number:60,
			name: 'Poliwag',
			topCp:795,
			evol: [{ number:61 }, { number:62 }]
		},
		{	number:61,
			name: 'Poliwhirl',
			minMulti:1.72,
			maxMulti:1.89,
			topCp:1340,
			evol: [{ number:62 }]
		},		
		{	number:62,
			name: 'Poliwrath',
			minMulti:1.9,
			maxMulti:1.96,
			topCp:2505
		},
		{	number:63,
			name: 'Abra',
			topCp:600,
			evol: [{ number:64 }, { number:65 }]
		},		
		{	number:64,
			name: 'Kadabra',
			minMulti:1.36,
			maxMulti:2,
			topCp:1131,
			evol: [{ number:65 }]
		},	
		{	number:65,
			name: 'Alakazam',
			minMulti:1.41,
			maxMulti:1.65,
			topCp:1813
		},		
		{	number:66,
			name: 'Machop',
			topCp:1089,
			evol: [{ number:67 }, { number:68 }]
		},
		{	number:67,
			name: 'Machoke',
			minMulti:1.62,
			maxMulti:1.67,
			topCp:1760,
			evol: [{ number:68 }]
		},		
		{	number:68,
			name: 'Machamp',
			minMulti:1.48,
			maxMulti:1.7,
			topCp:2594
		},
		{	number:69,
			name: 'Bellsprout',
			topCp:1117,
			evol: [{ number:70 }, { number:71 }]
		},		
		{	number:70,
			name: 'Weepinbell',
			minMulti:1.54,
			maxMulti:1.6,
			topCp:1723,
			evol: [{ number:71 }]
		},	
		{	number:71,
			name: 'Victreebel',
			minMulti:1.47,
			maxMulti:1.52,
			topCp:2530
		},		
		{	number:72,
			name: 'Tentacool',
			topCp:905,
			evol: [{ number:73 }]
		},
		{	number:73,
			name: 'Tentacruel',
			minMulti:2.47,
			maxMulti:2.6,
			topCp:2220
		},		
		{	number:74,
			name: 'Geodude',
			topCp:849,
			evol: [{ number:75 }, { number:76 }]
		},
		{	number:75,
			name: 'Graveler',
			minMulti:1.71,
			maxMulti:1.76,
			topCp:1433,
			evol: [{ number:76 }]
		},		
		{	number:76,
			name: 'Golem',
			minMulti:1.63,
			maxMulti:1.72,
			topCp:2303
		},	
		{	number:77,
			name: 'Ponyta',
			topCp:1516,
			evol: [{ number:78 }]
		},		
		{	number:78,
			name: 'Rapidash',
			minMulti:1.47,
			maxMulti:1.6,
			topCp:2199
		},
		{	number:79,
			name: 'Slowpoke',
			topCp:1218,
			evol: [{ number:80 }]
		},	
		{	number:80,
			name: 'Slowbro',
			minMulti:2.19,
			maxMulti:2.21,
			topCp:2597
		},
		{	number:81,
			name: 'Magnemite',
			topCp:890,
			evol: [{ number:82 }]
		},		
		{	number:82,
			name: 'Magneton',
			minMulti:2.16,
			maxMulti:2.2,
			topCp:1879
		},	
		{	number:83,
			name: 'Farfetch\'d',
			topCp:1263
		},		
		{	number:84,
			name: 'Doduo',
			topCp:855,
			evol: [{ number:85 }]
		},
		{	number:85,
			name: 'Dodrio',
			minMulti:2.11,
			maxMulti:2.24,
			topCp:1836
		},		
		{	number:86,
			name: 'Seel',
			topCp:1107,
			evol: [{ number:87 }]
		},
		{	number:87,
			name: 'Dewgong',
			minMulti:1.96,
			maxMulti:2.03,
			topCp:2145
		},		
		{	number:88,
			name: 'Grimer',
			topCp:1284,
			evol: [{ number:89 }]
		},	
		{	number:89,
			name: 'Muk',
			minMulti:2.03,
			maxMulti:2.17,
			topCp:2602
		},
		{	number:90,
			name: 'Shellder',
			topCp:822,
			evol: [{ number:91 }]
		},
		{	number:91,
			name: 'Cloyster',
			minMulti:2.62,
			maxMulti:2.65,
			topCp:2052
		},		
		{	number:92,
			name: 'Gastly',
			topCp:804,
			evol: [{ number:93 }, { number:94 }]
		},
		{	number:93,
			name: 'Haunter',
			minMulti:1.75,
			maxMulti:1.83,
			topCp:1380,
			evol: [{ number:94 }]
		},		
		{	number:94,
			name: 'Gengar',
			minMulti:1.53,
			maxMulti:1.8,
			topCp:2078
		},	
		{	number:95,
			name: 'Onix',
			topCp:857
		},		
		{	number:96,
			name: 'Drowzee',
			topCp:1075,
			evol: [{ number:97 }]
		},
		{	number:97,
			name: 'Hypno',
			minMulti:2.05,
			maxMulti:2.11,
			topCp:2184
		},		
		{	number:98,
			name: 'Krabby',
			topCp:792,
			evol: [{ number:99 }]
		},
		{	number:99,
			name: 'Kingler',
			minMulti:2.35,
			maxMulti:2.4,
			topCp:1823
		},		
		{	number:100,
			name: 'Voltorb',
			topCp:839,
			evol: [{ number:101 }]
		},	
		{	number:101,
			name: 'Electrode',
			minMulti:2.01,
			maxMulti:2.03,
			topCp:1646
		},		
		{	number:102,
			name: 'Exeggcute',
			topCp:1099,
			evol: [{ number:103 }]
		},
		{	number:103,
			name: 'Exeggutor',
			minMulti:2.7,
			maxMulti:3.18,
			topCp:2955
		},		
		{	number:104,
			name: 'Cubone',
			topCp:1006,
			evol: [{ number:105 }]
		},
		{	number:105,
			name: 'Marowak',
			minMulti:1.65,
			maxMulti:1.67,
			topCp:1656
		},		
		{	number:106,
			name: 'Hitmonlee',
			topCp:1492
		},	
		{	number:107,
			name: 'Hitmonchan',
			topCp:1516
		},		
		{	number:108,
			name: 'Lickitung',
			topCp:1626
		},
		{	number:109,
			name: 'Koffing',
			topCp:1151,
			evol: [{ number:110 }]
		},		
		{	number:110,
			name: 'Weezing',
			minMulti:1.95,
			maxMulti:2.1,
			topCp:2250
		},
		{	number:111,
			name: 'Rhyhorn',
			topCp:1182,
			evol: [{ number:112 }]
		},		
		{	number:112,
			name: 'Rhydon',
			minMulti:1.9,
			maxMulti:1.91,
			topCp:2243
		},	
		{	number:113,
			name: 'Chansey',
			topCp:675
		},		
		{	number:114,
			name: 'Tangela',
			topCp:1739
		},
		{	number:115,
			name: 'Kangaskhan',
			topCp:2043
		},		
		{	number:116,
			name: 'Horsea',
			topCp:794,
			evol: [{ number:117 }]
		},
		{	number:117,
			name: 'Seadra',
			minMulti:2.19,
			maxMulti:2.23,
			topCp:1713
		},		
		{	number:118,
			name: 'Goldeen',
			topCp:965,
			evol: [{ number:119 }]
		},	
		{	number:119,
			name: 'Seaking',
			minMulti:2.14,
			maxMulti:2.24,
			topCp:2043
		},		
		{	number:120,
			name: 'Staryu',
			topCp:937,
			evol: [{ number:121 }]
		},
		{	number:121,
			name: 'Starmie',
			minMulti:2.35,
			maxMulti:2.44,
			topCp:2182
		},		
		{	number:122,
			name: 'Mr. Mime',
			topCp:1494
		},
		{	number:123,
			name: 'Scyther',
			topCp:2073
		},		
		{	number:124,
			name: 'Jynx',
			topCp:1716
		},	
		{	number:125,
			name: 'Electabuzz',
			topCp:2119
		},		
		{	number:126,
			name: 'Magmar',
			topCp:2265
		},
		{	number:127,
			name: 'Pinsir',
			topCp:2121
		},		
		{	number:128,
			name: 'Tauros',
			topCp:1844
		},
		{	number:129,
			name: 'Magikarp',
			topCp:262,
			evol: [{ number:130 }]
		},	
		{	number:130,
			name: 'Gyarados',
			minMulti:10.1,
			maxMulti:11.96,
			topCp:2688
		},	
		{	number:131,
			name: 'Lapras',
			topCp:2980
		},		
		{	number:132,
			name: 'Ditto',
			topCp:919
		},
		{	number:133,
			name: 'Eevee',
			topCp:1077,
			evol: [{ number:134 }]
		},		
		{	number:134,
			name: 'Vaporeon',
			minMulti:2.62,
			maxMulti:2.67,
			topCp:2816
		},
		{	number:133,
			name: 'Eevee',
			topCp:1077,
			evol: [{ number:135 }]
		},		
		{	number:135,
			name: 'Jolteon',
			minMulti:2.01,
			maxMulti:2.09,
			topCp:2140
		},	
		{	number:133,
			name: 'Eevee',
			topCp:1077,
			evol: [{ number:136 }]
		},		
		{	number:136,
			name: 'Flareon',
			minMulti:2.46,
			maxMulti:2.64,
			topCp:2643
		},	
		{	number:137,
			name: 'Porygon',
			topCp:1691
		},		
		{	number:138,
			name: 'Omanyte',
			topCp:1119,
			evol: [{ number:139 }]
		},
		{	number:139,
			name: 'Omastar',
			minMulti:1.99,
			maxMulti:2.12,
			topCp:2233
		},		
		{	number:140,
			name: 'Kabuto',
			topCp:1104,
			evol: [{ number:141 }]
		},
		{	number:141,
			name: 'Kabutops',
			minMulti:1.97,
			maxMulti:2.37,
			topCp:2130
		},		
		{	number:142,
			name: 'Aerodactyl',
			topCp:2165
		},	
		{	number:143,
			name: 'Snorlax',
			topCp:3112
		},		
		{	number:144,
			name: 'Articuno',
			topCp:2978
		},
		{	number:145,
			name: 'Zapdos',
			topCp:3114
		},		
		{	number:146,
			name: 'Moltres',
			topCp:3240
		},
		{	number:147,
			name: 'Dratini',
			topCp:983,
			evol: [{ number:148 }, { number:149 }]
		},		
		{	number:148,
			name: 'Dragonair',
			minMulti:1.8,
			maxMulti:1.85,
			topCp:2,
			evol: [{ number:149 }]
		},	
		{	number:149,
			name: 'Dragonite',
			minMulti:2.03,
			maxMulti:2.08,
			topCp:3500
		},		
		{	number:150,
			name: 'Mewtwo',
			topCp:4144
		},
		{	number:151,
			name: 'Mew',
			topCp:3299
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
	
	//--------------------------------------------------------------------
	// Detailed Screen
	//--------------------------------------------------------------------
	$scope.pokemonSelected = function(pokemon) {
		$scope.pokemon = angular.copy(pokemon);
		
		
	}

	//--------------------------------------------------------------------
	// Quick Math
	//--------------------------------------------------------------------
	$scope.cpCalc = function(pokemon) {
		if (!pokemon.evol || pokemon.evol.length === 0) return;
		if (pokemon.cp > pokemon.topCp) {
			
			pokemon.cp = pokemon.topCp;
		}
		
		var minCp = pokemon.cp;
		var maxCp = pokemon.cp;
		
		pokemon.evol.forEach(function(evol) {
			evol.minCp = Math.round(minCp * evol.minMulti);
			evol.maxCp = Math.round(maxCp * evol.maxMulti);
			minCp = evol.minCp;
			maxCp = evol.maxCp;
		});
	};

	//--------------------------------------------------------------------
	// Both Toggle Screens
	//--------------------------------------------------------------------
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
			}
		}
	}
	
	function getPokemonByNumber(number) {
		for (var i=0; i < $scope.pokemonList.length; i++){
			if($scope.pokemonList[i].number === number) return $scope.pokemonList[i];
		}
	}
}]);