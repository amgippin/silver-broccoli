var myApp = angular.module('myApp',[]);

myApp.controller('pokemonEvalCpTable', ['$scope', 'data', 'util', function($scope, data, util) {
	$scope.pokemonList = data.pokemonList;
	$scope.pokemon = $scope.pokemonList[0];
	
	//--------------------------------------------------------------------
	// Detailed Screen
	//--------------------------------------------------------------------
	$scope.calcCandy = function(pokemon) {
		pokemon.evol.forEach(function(evol){
			if(evol.candy < pokemon.candyCount){
				evol.candyCount = 0;
			} else {
				evol.candyCount = evol.candy - pokemon.candyCount;
			}
		});
	};
	
	$scope.pokemonSelected = function(pokemon) {
		$scope.pokemon = angular.copy(pokemon);
		
		/*if ($scope.pokemon.evol) {
			$scope.pokemon.evol.forEach(function(item){
				if(!item.evol) return;
				item.evol.forEach(function(test){
						item.evol = util.getPokemonByNumber(test.number);
				});
				
			});
		}*/
	};
	
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

myApp.controller('pokemonEvalCpTableRowFormat', ['$scope', 'util', function($scope, util) {
	init();
	
	function init() {
		if($scope.pokemon.evol) {
			for (var j=0; j < $scope.pokemon.evol.length; j++) {
				var evol = util.getPokemonByNumber($scope.pokemon.evol[j].number);
				
				if (!evol) return;
				$scope.pokemon.evol[j] = angular.copy(evol);
			}
		}
	}
}]);

myApp.factory('util', ['data', function(data) {
	self = {};
	
	self.getPokemonByNumber = function(number) {
		for (var i=0; i < data.pokemonList.length; i++){
			if(data.pokemonList[i].number === number) return angular.copy(data.pokemonList[i]);
		}
	};
	
	return self;
}]);

myApp.factory('data', [function() {
	self = {};
	
	self.pokemonList = [
		{	number:1,
			name:'Bulbasaur',
			candyDis:3,
			topCp:1071,
			evol: [{number:2}, {number:3}],
			cp: 100
		},
		{	number:2,
			name:'Ivysaur',
			candyDis:3,
			topCp:1632,
			candy:25,
			minMulti:1.53,
			maxMulti:1.58,
			evol: [{ number:3 }]
		},
		{	number:3,
			name:'Venusaur',
			candyDis:3,
			topCp:2580,
			candy:100,
			minMulti:1.20,
			maxMulti:1.61
		},
		{	number:4,
			name:'Charmander',
			candyDis:3,
			topCp:955,
			candy:25,
			evol: [{ number:5 }, { number:6 }]
		},
		{	number:5,
			name:'Charmeleon',
			candyDis:3,
			topCp:1557,
			candy:100,
			minMulti:1.64,
			maxMulti:1.70,			
			evol: [{ number:6 }]
		},
		{	number:6,
			name:'Charizard',
			candyDis:3,
			topCp:2602,
			minMulti:1.71,
			maxMulti:1.73,
		},	
		{	number:7,
			name:'Squirtle',
			candyDis:3,
			topCp:1008,
			candy:25,
			evol: [{ number:8 }, { number:9 }]
		},	
		{	number:8,
			name:'Wartortle',
			candyDis:3,
			topCp:1582,
			candy:100,
			minMulti:1.63,
			maxMulti:1.4,
			evol: [{ number:9 }]
		},	
		{	number:9,
			name:'Blastoise',
			candyDis:3,
			topCp:2542,
			minMulti:1.4,
			maxMulti:1.65
		},	
		{	number:10,
			name:'Caterpie',
			candyDis:1,
			topCp:443,
			candy:12,
			evol: [{ number:11 }, { number:12 }]
		},	
		{	number:11,
			name:'Metapod',
			candyDis:1,
			topCp:477,
			candy:25,
			minMulti:1.04,
			maxMulti:1.08,
			evol: [{ number:12 }]
		},	
		{	number:12,
			name:'Butterfree',
			candyDis:1,
			topCp:1454,
			minMulti:3.52,
			maxMulti:3.79
		},	
		{	number:13,
			name:'Weedle',
			candyDis:1,
			topCp:449,
			candy:12,
			evol: [{ number:14 }, { number:15 }]
		},	
		{	number:14,
			name:'Kakuna',
			candyDis:1,
			topCp:485,
			candy:25,
			minMulti:1.06,
			maxMulti:1.1,
			evol: [{ number:15 }]
		},	
		{	number:15,
			name:'Beedrill',
			candyDis:1,
			topCp:1439,
			minMulti:3.3,
			maxMulti:3.42,
		},			
		{	number:16,
			name:'Pidgey',
			candyDis:1,
			topCp:679,
			candy:12,
			evol: [{ number:17 }, { number:18 }]
		},
		{	number:17,
			name:'Pidgeotto',
			candyDis:1,
			topCp:1223,
			candy:25,
			minMulti:1.82,
			maxMulti:1.95,
			evol: [{ number:18 }]
		},	
		{	number:18,
			name:'Pidgeot',
			candyDis:1,
			topCp:2091,
			minMulti:1.73,
			maxMulti:1.78
		},	
		{	number:19,
			name:'Rattata',
			candyDis:1,
			topCp:581,
			candy:25,
			evol: [{ number:20 }]
		},	
		{	number:20,
			name:'Raticate',
			candyDis:1,
			topCp:1444,
			minMulti:1.61,
			maxMulti:1.73
		},	
		{	number:21,
			name:'Spearow',
			candyDis:1,
			topCp:686,
			candy:25,
			evol: [{ number:22 }]
		},		
		{	number:22,
			name:'Fearow',
			candyDis:1,
			topCp:1746,
			minMulti:2.58,
			maxMulti:2.81
		},	
		{	number:23,
			name:'Ekans',
			candyDis:3,
			topCp:824,
			candy:25,
			evol: [{ number:24 }]
		},		
		{	number:24,
			name:'Arbok',
			candyDis:3,
			topCp:1767,
			minMulti:2.2,
			maxMulti:2.33
		},
		{	number:25,
			name:'Pikachu',
			candyDis:1,
			topCp:887,
			candy:25,
			evol: [{ number:26 }]
		},		
		{	number:26,
			name:'Raichu',
			candyDis:1,
			topCp:2028,
			minMulti:2.33,
			maxMulti:2.38
		},
		{	number:27,
			name:'Sandshrew',
			candyDis:3,
			topCp:798,
			candy:25,
			evol: [{ number:28 }]
		},		
		{	number:28,
			name:'Sandslash',
			candyDis:3,
			topCp:1810,
			minMulti:2.35,
			maxMulti:2.76
		},	
		{	number:29,
			name:'Nidoran F',
			candyDis:3,
			topCp:876,
			candy:25,
			evol: [{ number:30 }, { number:31 }]
		},		
		{	number:30,
			name:'Nidorina',
			candyDis:3,
			topCp:1404,
			minMulti:1.62,
			maxMulti:1.66,
			candy:100,
			evol: [{ number:31 }]
		},
		{	number:31,
			name:'Nidoqueen',
			candyDis:3,
			topCp:2485,
			minMulti:1.8,
			maxMulti:2.04
		},		
		{	number:32,
			name:'Nidoran M',
			candyDis:3,
			topCp:843,
			candy:25,
			evol: [{ number:33 }, { number:34 }]
		},
		{	number:33,
			name:'Nidorino',
			candyDis:3,
			topCp:1372,
			candy:100,
			minMulti:1.65,
			maxMulti:1.7,
			evol: [{ number:34 }]
		},		
		{	number:34,
			name:'Nidoking',
			candyDis:3,
			topCp:2475,
			minMulti:1.64,
			maxMulti:1.86
		},	
		{	number:35,
			name:'Clefairy',
			candyDis:1,
			topCp:1200,
			candy:50,
			evol: [{ number:36 }]
		},		
		{	number:36,
			name:'Clefable',
			candyDis:1,
			topCp:2397,
			minMulti:2.02,
			maxMulti:2.2
		},
		{	number:37,
			name:'Vulpix',
			candyDis:3,
			topCp:381,
			candy:50,
			evol: [{ number:38 }]
		},		
		{	number:38,
			name:'Ninetales',
			candyDis:3,
			topCp:2188,
			minMulti:2.68,
			maxMulti:2.74
		},
		{	number:39,
			name:'Jigglypuff',
			candyDis:1,
			topCp:917,
			candy:50,
			evol: [{ number:40 }]
		},		
		{	number:40,
			name:'Wigglytuff',
			candyDis:1,
			topCp:2177,
			minMulti:2.41,
			maxMulti:2.47
		},	
		{	number:41,
			name:'Zubat',
			candyDis:1,
			topCp:642,
			candy:50,
			evol: [{ number:42 }]
		},		
		{	number:42,
			name:'Golbat',
			candyDis:1,
			topCp:1921,
			minMulti:2.9,
			maxMulti:3.33
		},
		{	number:43,
			name:'Oddish',
			candyDis:3,
			topCp:1148,
			candy:25,
			evol: [{ number:44 }, { number:45 }]
		},		
		{	number:44,
			name:'Gloom',
			candyDis:3,
			topCp:1689,
			candy:100,
			minMulti:1.48,
			maxMulti:1.51,
			evol: [{ number:45 }]
		},
		{	number:45,
			name:'Vilplume',
			candyDis:3,
			topCp:2492,
			minMulti:1.48,
			maxMulti:1.42
		},		
		{	number:46,
			name:'Paras',
			candyDis:3,
			topCp:916,
			candy:50,
			evol: [{ number:47 }]
		},	
		{	number:47,
			name:'Parasect',
			candyDis:3,
			topCp:1747,
			minMulti:1.92,
			maxMulti:2.02,
		},		
		{	number:48,
			name:'Venonat',
			candyDis:3,
			topCp:1029,
			candy:50,
			evol: [{ number:49 }]
		},
		{	number:49,
			name:'Venonmoth',
			candyDis:3,
			topCp:1890,
			minMulti:1.85,
			maxMulti:1.9
		},		
		{	number:50,
			name:'Diglett',
			candyDis:3,
			topCp:456,
			candy:50,
			evol: [{ number:51 }]
		},
		{	number:51,
			name:'Dugltrio',
			candyDis:3,
			topCp:1168,
			minMulti:2.68,
			maxMulti:2.77
		},		
		{	number:52,
			name:'Meowth',
			candyDis:3,
			topCp:756,
			candy:50,
			evol: [{ number:53 }]
		},	
		{	number:53,
			name:'Persian',
			candyDis:3,
			topCp:1631,
			minMulti:1.98,
			maxMulti:2.24
		},		
		{	number:54,
			name:'Psyduck',
			candyDis:3,
			topCp:1109,
			candy:50,
			evol: [{ number:55 }]
		},
		{	number:55,
			name:'Golduck',
			candyDis:3,
			topCp:2386,
			minMulti:2.22,
			maxMulti:2.29
		},		
		{	number:56,
			name:'Mankey',
			candyDis:3,
			topCp:878,
			candy:50,
			evol: [{ number:57 }]
		},
		{	number:57,
			name:'Primeape',
			candyDis:3,
			topCp:1864,
			minMulti:2.15,
			maxMulti:2.28
		},		
		{	number:58,
			name:'Growlithe',
			candyDis:3,
			topCp:1335,
			candy:50,
			evol: [{ number:59 }],
		},	
		{	number:59,
			name:'Arcanine',
			candyDis:3,
			topCp:2983,
			minMulti:2.25,
			maxMulti:2.36
		},	
		{	number:60,
			name:'Poliwag',
			candyDis:3,
			topCp:795,
			candy:25,
			evol: [{ number:61 }, { number:62 }]
		},
		{	number:61,
			name:'Poliwhirl',
			candyDis:3,
			topCp:1340,
			candy:100,
			minMulti:1.72,
			maxMulti:1.89,
			evol: [{ number:62 }]
		},		
		{	number:62,
			name:'Poliwrath',
			candyDis:3,
			topCp:2505,
			minMulti:1.9,
			maxMulti:1.96
		},
		{	number:63,
			name:'Abra',
			candyDis:3,
			topCp:600,
			candy:25,
			evol: [{ number:64 }, { number:65 }]
		},		
		{	number:64,
			name:'Kadabra',
			candyDis:3,
			topCp:1131,
			candy:100,
			minMulti:1.36,
			maxMulti:2,
			evol: [{ number:65 }]
		},	
		{	number:65,
			name:'Alakazam',
			candyDis:3,
			topCp:1813,
			minMulti:1.41,
			maxMulti:1.65
		},		
		{	number:66,
			name:'Machop',
			candyDis:3,
			topCp:1089,
			candy:25,
			evol: [{ number:67 }, { number:68 }]
		},
		{	number:67,
			name:'Machoke',
			candyDis:3,
			topCp:1760,
			candy:100,
			minMulti:1.62,
			maxMulti:1.67,
			evol: [{ number:68 }]
		},		
		{	number:68,
			name:'Machamp',
			candyDis:3,
			topCp:2594,
			minMulti:1.48,
			maxMulti:1.7
		},
		{	number:69,
			name:'Bellsprout',
			candyDis:3,
			topCp:1117,
			candy:25,
			evol: [{ number:70 }, { number:71 }]
		},		
		{	number:70,
			name:'Weepinbell',
			candyDis:3,
			topCp:1723,
			candy:100,
			minMulti:1.54,
			maxMulti:1.6,
			evol: [{ number:71 }]
		},	
		{	number:71,
			name:'Victreebel',
			candyDis:3,
			topCp:2530,
			minMulti:1.47,
			maxMulti:1.52
		},		
		{	number:72,
			name:'Tentacool',
			candyDis:3,
			topCp:905,
			candy:50,
			evol: [{ number:73 }]
		},
		{	number:73,
			name:'Tentacruel',
			candyDis:3,
			topCp:2220,
			minMulti:2.47,
			maxMulti:2.6
		},		
		{	number:74,
			name:'Geodude',
			candyDis:1,
			topCp:849,
			candy:25,
			evol: [{ number:75 }, { number:76 }]
		},
		{	number:75,
			name:'Graveler',
			candyDis:1,
			topCp:1433,
			candy:100,
			minMulti:1.71,
			maxMulti:1.76,
			evol: [{ number:76 }]
		},		
		{	number:76,
			name:'Golem',
			candyDis:1,
			topCp:2303,
			minMulti:1.63,
			maxMulti:1.72
		},	
		{	number:77,
			name:'Ponyta',
			candyDis:3,
			topCp:1516,
			candy:50,
			evol: [{ number:78 }]
		},		
		{	number:78,
			name:'Rapidash',
			candyDis:3,
			topCp:2199,
			minMulti:1.47,
			maxMulti:1.6
		},
		{	number:79,
			name:'Slowpoke',
			candyDis:3,
			topCp:1218,
			candy:50,
			evol: [{ number:80 }]
		},	
		{	number:80,
			name:'Slowbro',
			candyDis:3,
			topCp:2597,
			minMulti:2.19,
			maxMulti:2.21
		},
		{	number:81,
			name:'Magnemite',
			candyDis:3,
			topCp:890,
			candy:50,
			evol: [{ number:82 }]
		},		
		{	number:82,
			name:'Magneton',
			candyDis:3,
			topCp:1879,
			minMulti:2.16,
			maxMulti:2.2
		},	
		{	number:83,
			name:'Farfetch\'d',
			candyDis:3,
			topCp:1263
		},		
		{	number:84,
			name:'Doduo',
			candyDis:3,
			topCp:855,
			candy:50,
			evol: [{ number:85 }]
		},
		{	number:85,
			name:'Dodrio',
			candyDis:3,
			topCp:1836,
			minMulti:2.11,
			maxMulti:2.24
		},		
		{	number:86,
			name:'Seel',
			candyDis:3,
			topCp:1107,
			candy:50,
			evol: [{ number:87 }]
		},
		{	number:87,
			name:'Dewgong',
			candyDis:3,
			topCp:2145,
			minMulti:1.96,
			maxMulti:2.03
		},		
		{	number:88,
			name:'Grimer',
			candyDis:3,
			topCp:1284,
			candy:50,
			evol: [{ number:89 }]
		},	
		{	number:89,
			name:'Muk',
			candyDis:3,
			topCp:2602,
			minMulti:2.03,
			maxMulti:2.17
		},
		{	number:90,
			name:'Shellder',
			candyDis:3,
			topCp:822,
			candy:50,
			evol: [{ number:91 }]
		},
		{	number:91,
			name:'Cloyster',
			candyDis:3,
			topCp:2052,
			minMulti:2.62,
			maxMulti:2.65
		},		
		{	number:92,
			name:'Gastly',
			candyDis:3,
			topCp:804,
			candy:25,
			evol: [{ number:93 }, { number:94 }]
		},
		{	number:93,
			name:'Haunter',
			candyDis:3,
			topCp:1380,
			candy:100,
			minMulti:1.75,
			maxMulti:1.83,
			evol: [{ number:94 }]
		},		
		{	number:94,
			name:'Gengar',
			candyDis:3,
			topCp:2078,
			minMulti:1.53,
			maxMulti:1.8
		},	
		{	number:95,
			name:'Onix',
			candyDis:5,
			topCp:857,
		},		
		{	number:96,
			name:'Drowzee',
			candyDis:3,
			topCp:1075,
			candy:50,
			evol: [{ number:97 }]
		},
		{	number:97,
			name:'Hypno',
			candyDis:3,
			topCp:2184,
			minMulti:2.05,
			maxMulti:2.11,
		},		
		{	number:98,
			name:'Krabby',
			candyDis:3,
			topCp:792,
			candy:50,
			evol: [{ number:99 }]
		},
		{	number:99,
			name:'Kingler',
			candyDis:3,
			topCp:1823,
			minMulti:2.35,
			maxMulti:2.4
		},		
		{	number:100,
			name:'Voltorb',
			candyDis:3,
			topCp:839,
			candy:50,
			evol: [{ number:101 }]
		},	
		{	number:101,
			name:'Electrode',
			candyDis:3,
			topCp:1646,
			minMulti:2.01,
			maxMulti:2.03
		},		
		{	number:102,
			name:'Exeggcute',
			candyDis:3,
			topCp:1099,
			candy:50,
			evol: [{ number:103 }]
		},
		{	number:103,
			name:'Exeggutor',
			candyDis:3,
			topCp:2955,
			minMulti:2.7,
			maxMulti:3.18
		},		
		{	number:104,
			name:'Cubone',
			candyDis:3,
			topCp:1006,
			candy:50,
			evol: [{ number:105 }]
		},
		{	number:105,
			name:'Marowak',
			candyDis:3,
			topCp:1656,
			minMulti:1.65,
			maxMulti:1.67
		},		
		{	number:106,
			name:'Hitmonlee',
			candyDis:5,
			topCp:1492
		},	
		{	number:107,
			name:'Hitmonchan',
			candyDis:5,
			topCp:1516
		},		
		{	number:108,
			name:'Lickitung',
			candyDis:3,
			topCp:1626
		},
		{	number:109,
			name:'Koffing',
			candyDis:3,
			topCp:1151,
			candy:50,
			evol: [{ number:110 }]
		},		
		{	number:110,
			name:'Weezing',
			candyDis:3,
			topCp:2250,
			minMulti:1.95,
			maxMulti:2.1
		},
		{	number:111,
			name:'Rhyhorn',
			candyDis:3,
			topCp:1182,
			candy:50,
			evol: [{ number:112 }]
		},		
		{	number:112,
			name:'Rhydon',
			candyDis:3,
			topCp:2243,
			minMulti:1.9,
			maxMulti:1.91
		},	
		{	number:113,
			name:'Chansey',
			candyDis:5,
			topCp:675
		},		
		{	number:114,
			name:'Tangela',
			candyDis:3,
			topCp:1739
		},
		{	number:115,
			name:'Kangaskhan',
			candyDis:3,
			topCp:2043
		},		
		{	number:116,
			name:'Horsea',
			candyDis:3,
			topCp:794,
			candy:50,
			evol: [{ number:117 }]
		},
		{	number:117,
			name:'Seadra',
			candyDis:3,
			topCp:1713,
			minMulti:2.19,
			maxMulti:2.23
		},		
		{	number:118,
			name:'Goldeen',
			candyDis:3,
			topCp:965,
			candy:50,
			evol: [{ number:119 }]
		},	
		{	number:119,
			name:'Seaking',
			candyDis:3,
			topCp:2043,
			minMulti:2.14,
			maxMulti:2.24
		},		
		{	number:120,
			name:'Staryu',
			candyDis:3,
			topCp:937,
			candy:50,
			evol: [{ number:121 }]
		},
		{	number:121,
			name:'Starmie',
			candyDis:3,
			topCp:2182,
			minMulti:2.35,
			maxMulti:2.44
		},		
		{	number:122,
			name:'Mr. Mime',
			candyDis:5,
			topCp:1494
		},
		{	number:123,
			name:'Scyther',
			candyDis:5,
			topCp:2073
		},		
		{	number:124,
			name:'Jynx',
			candyDis:5,
			topCp:1716
		},	
		{	number:125,
			name:'Electabuzz',
			candyDis:5,
			topCp:2119
		},		
		{	number:126,
			name:'Magmar',
			candyDis:5,
			topCp:2265
		},
		{	number:127,
			name:'Pinsir',
			candyDis:5,
			topCp:2121
		},		
		{	number:128,
			name:'Tauros',
			candyDis:3,
			topCp:1844
		},
		{	number:129,
			name:'Magikarp',
			candyDis:1,
			topCp:262,
			candy:400,
			evol: [{ number:130 }]
		},	
		{	number:130,
			name:'Gyarados',
			candyDis:1,
			topCp:2688,
			minMulti:10.1,
			maxMulti:11.96
		},	
		{	number:131,
			name:'Lapras',
			candyDis:5,
			topCp:2980
		},		
		{	number:132,
			name:'Ditto',
			candyDis:3,
			topCp:919
		},
		{	number:133,
			name:'Eevee',
			candyDis:5,
			topCp:1077,
			candy:25,
			evol: [{ number:134 }]
		},		
		{	number:134,
			name:'Vaporeon',
			candyDis:5,
			topCp:2816,
			minMulti:2.62,
			maxMulti:2.67
		},
		{	number:133,
			name:'Eevee',
			candyDis:5,
			topCp:1077,
			candy:25,
			evol: [{ number:135 }]
		},		
		{	number:135,
			name:'Jolteon',
			candyDis:5,
			topCp:2140,
			minMulti:2.01,
			maxMulti:2.09
		},	
		{	number:133,
			name:'Eevee',
			candyDis:5,
			topCp:1077,
			candy:25,
			evol: [{ number:136 }]
		},		
		{	number:136,
			name:'Flareon',
			candyDis:5,
			topCp:2643,
			minMulti:2.46,
			maxMulti:2.64
		},	
		{	number:137,
			name:'Porygon',
			candyDis:3,
			topCp:1691
		},		
		{	number:138,
			name:'Omanyte',
			candyDis:5,
			topCp:1119,
			candy:50,
			evol: [{ number:139 }]
		},
		{	number:139,
			name:'Omastar',
			candyDis:5,
			topCp:2233,
			minMulti:1.99,
			maxMulti:2.12
		},		
		{	number:140,
			name:'Kabuto',
			candyDis:5,
			topCp:1104,
			candy:50,
			evol: [{ number:141 }]
		},
		{	number:141,
			name:'Kabutops',
			candyDis:5,
			topCp:2130,
			minMulti:1.97,
			maxMulti:2.37
		},		
		{	number:142,
			name:'Aerodactyl',
			candyDis:5,
			topCp:2165
		},	
		{	number:143,
			name:'Snorlax',
			candyDis:5,
			topCp:3112
		},		
		{	number:144,
			name:'Articuno',
			candyDis:5,
			topCp:2978
		},
		{	number:145,
			name:'Zapdos',
			candyDis:5,
			topCp:3114			
		},		
		{	number:146,
			name:'Moltres',
			candyDis:5,
			topCp:3240
		},
		{	number:147,
			name:'Dratini',
			candyDis:5,
			topCp:983,
			candy:25,
			evol: [{ number:148 }, { number:149 }]
		},		
		{	number:148,
			name:'Dragonair',
			candyDis:5,
			topCp:2,
			candy:100,
			minMulti:1.8,
			maxMulti:1.85,
			evol: [{ number:149 }]
		},	
		{	number:149,
			name:'Dragonite',
			candyDis:5,
			topCp:3500,
			minMulti:2.03,
			maxMulti:2.08,
		},		
		{	number:150,
			name:'Mewtwo',
			candyDis:5,
			topCp:4144
		},
		{	number:151,
			name:'Mew',
			candyDis:5,
			topCp:3299
		}
	];
	
	return self;
}]);