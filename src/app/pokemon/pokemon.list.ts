import { pokemon } from './pokemon.model';

export const POKEMON: pokemon[] = [
	{	id:1,
		name:'Bulbasaur',
		candyDis:3,
		topCp:981,
		evol: [{id:2}, {id:3}],
		cp:100
	},
	{	id:2,
		name:'Ivysaur',
		candyDis:3,
		topCp:1552,
		candy:25,
		minMulti:1.53,
		maxMulti:1.58,
		evol: [{ id:3 }],
		preEvol: [{id:1}]
	},
	{	id:3,
		name:'Venusaur',
		candyDis:3,
		topCp:2568,
		candy:100,
		minMulti:1.20,
		maxMulti:1.60,
		preEvol: [{id:1}, {id:2}]
	},
	{	id:4,
		name:'Charmander',
		candyDis:3,
		topCp:831,
		candy:25,
		evol: [{ id:5 }, { id:6 }]
	},
	{	id:5,
		name:'Charmeleon',
		candyDis:3,
		topCp:1484,
		candy:100,
		minMulti:1.64,
		maxMulti:1.70,			
		evol: [{ id:6 }],
		preEvol: [{ id:4 }]
	},
	{	id:6,
		name:'Charizard',
		candyDis:3,
		topCp:2686,
		minMulti:1.71,
		maxMulti:1.79,
		preEvol: [{ id:4 }, { id:5 }]
	},	
	{	id:7,
		name:'Squirtle',
		candyDis:3,
		topCp:808,
		candy:25,
		evol: [{ id:8 }, { id:9 }]
	},	
	{	id:8,
		name:'Wartortle',
		candyDis:3,
		topCp:1324,
		candy:100,
		minMulti:1.35,
		maxMulti:2.1,
		evol: [{ id:9 }],
		preEvol: [{ id:7 }]
	},	
	{	id:9,
		name:'Blastoise',
		candyDis:3,
		topCp:2291,
		minMulti:1.4,
		maxMulti:1.68,
		preEvol: [{ id:7 }, { id:8 }]
	},	
	{	id:10,
		name:'Caterpie',
		candyDis:1,
		topCp:393,
		candy:12,
		evol: [{ id:11 }, { id:12 }]
	},	
	{	id:11,
		name:'Metapod',
		candyDis:1,
		topCp:357,
		candy:25,
		minMulti:1.04,
		maxMulti:1.08,
		evol: [{ id:12 }],
		preEvol: [{ id:10 }]
	},	
	{	id:12,
		name:'Butterfree',
		candyDis:1,
		topCp:1701,
		minMulti:3.05,
		maxMulti:3.79,
		preEvol: [{ id:10 }, { id:11 }]
	},	
	{	id:13,
		name:'Weedle',
		candyDis:1,
		topCp:397,
		candy:12,
		evol: [{ id:14 }, { id:15 }]
	},	
	{	id:14,
		name:'Kakuna',
		candyDis:1,
		topCp:392,
		candy:25,
		minMulti:1.06,
		maxMulti:1.12,
		evol: [{ id:15 }],
		preEvol: [{ id:13 }]
	},	
	{	id:15,
		name:'Beedrill',
		candyDis:1,
		topCp:1777,
		minMulti:3.01,
		maxMulti:3.42,
		preEvol: [{ id:13 }, { id:14 }]
	},			
	{	id:16,
		name:'Pidgey',
		candyDis:1,
		topCp:580,
		candy:12,
		evol: [{ id:17 }, { id:18 }]
	},
	{	id:17,
		name:'Pidgeotto',
		candyDis:1,
		topCp:1085,
		candy:25,
		minMulti:1.71,
		maxMulti:1.95,
		evol: [{ id:18 }],
		preEvol: [{ id:16 }]
	},	
	{	id:18,
		name:'Pidgeot',
		candyDis:1,
		topCp:1994,
		minMulti:1.73,
		maxMulti:1.80,
		preEvol: [{ id:16 }, { id:17 }]
	},	
	{	id:19,
		name:'Rattata',
		candyDis:1,
		topCp:588,
		candy:25,
		evol: [{ id:20 }]
	},	
	{	id:20,
		name:'Raticate',
		candyDis:1,
		topCp:1549,
		minMulti:2.52,
		maxMulti:2.73,
		preEvol: [{ id:19 }]
	},	
	{	id:21,
		name:'Spearow',
		candyDis:1,
		topCp:673,
		candy:25,
		evol: [{ id:22 }]
	},		
	{	id:22,
		name:'Fearow',
		candyDis:1,
		topCp:1814,
		minMulti:2.58,
		maxMulti:2.81,
		preEvol: [{ id:21 }]
	},	
	{	id:23,
		name:'Ekans',
		candyDis:3,
		topCp:778,
		candy:25,
		evol: [{ id:24 }]
	},		
	{	id:24,
		name:'Arbok',
		candyDis:3,
		topCp:1737,
		minMulti:2.2,
		maxMulti:2.27,
		preEvol: [{ id:23 }]
	},
	{	id:25,
		name:'Pikachu',
		candyDis:1,
		topCp:787,
		candy:25,
		evol: [{ id:26 }]
	},		
	{	id:26,
		name:'Raichu',
		candyDis:1,
		topCp:2015,
		minMulti:2.33,
		maxMulti:2.38,
		preEvol: [{ id:25 }]
	},
	{	id:27,
		name:'Sandshrew',
		candyDis:3,
		topCp:1194,
		candy:25,
		evol: [{ id:28 }]
	},		
	{	id:28,
		name:'Sandslash',
		candyDis:3,
		topCp:2328,
		minMulti:2.29,
		maxMulti:2.76,
		preEvol: [{ id:27 }]
	},	
	{	id:29,
		name:'Nidoran F',
		candyDis:3,
		topCp:736,
		candy:25,
		evol: [{ id:30 }, { id:31 }]
	},		
	{	id:30,
		name:'Nidorina',
		candyDis:3,
		topCp:1218,
		minMulti:1.62,
		maxMulti:1.66,
		candy:100,
		evol: [{ id:31 }],
		preEvol: [{ id:29 }]
	},
	{	id:31,
		name:'Nidoqueen',
		candyDis:3,
		topCp:2338,
		minMulti:1.77,
		maxMulti:1.83,
		preEvol: [{ id:29 }, { id:30 }]
	},		
	{	id:32,
		name:'Nidoran M',
		candyDis:3,
		topCp:739,
		candy:25,
		evol: [{ id:33 }, { id:34 }]
	},
	{	id:33,
		name:'Nidorino',
		candyDis:3,
		topCp:1252,
		candy:100,
		minMulti:1.64,
		maxMulti:1.7,
		evol: [{ id:34 }],
		preEvol: [{ id:32 }]
	},		
	{	id:34,
		name:'Nidoking',
		candyDis:3,
		topCp:2386,
		minMulti:1.64,
		maxMulti:1.86,
		preEvol: [{ id:32 }, { id:33 }]
	},	
	{	id:35,
		name:'Clefairy',
		candyDis:1,
		topCp:1085,
		candy:50,
		evol: [{ id:36 }]
	},		
	{	id:36,
		name:'Clefable',
		candyDis:1,
		topCp:2353,
		minMulti:2.02,
		maxMulti:2.14,
		preEvol: [{ id:35 }]
	},
	{	id:37,
		name:'Vulpix',
		candyDis:3,
		topCp:774,
		candy:50,
		evol: [{ id:38 }]
	},		
	{	id:38,
		name:'Ninetales',
		candyDis:3,
		topCp:2157,
		minMulti:2.74,
		maxMulti:2.81,
		preEvol: [{ id:37 }]
	},
	{	id:39,
		name:'Jigglypuff',
		candyDis:1,
		topCp:713,
		candy:50,
		evol: [{ id:40 }]
	},		
	{	id:40,
		name:'Wigglytuff',
		candyDis:1,
		topCp:1906,
		minMulti:2.41,
		maxMulti:2.47,
		preEvol: [{ id:39 }]
	},	
	{	id:41,
		name:'Zubat',
		candyDis:1,
		topCp:569,
		candy:50,
		evol: [{ id:42 }]//, { id:169 }]
	},		
	{	id:42,
		name:'Golbat',
		candyDis:1,
		topCp:1830,
		minMulti:2.60,
		maxMulti:3.67,
		//evol:[{ id:169 }],
		preEvol: [{ id:41 }]
	},
	{	id:43,
		name:'Oddish',
		candyDis:3,
		topCp:1069,
		candy:25,
		evol: [{ id:44 }, { id:45 }]
	},		
	{	id:44,
		name:'Gloom',
		candyDis:3,
		topCp:1512,
		candy:100,
		minMulti:1.48,
		maxMulti:1.51,
		evol: [{ id:45 }],
		preEvol: [{ id:43 }]
	},
	{	id:45,
		name:'Vilplume',
		candyDis:3,
		topCp:2367,
		minMulti:1.48,
		maxMulti:1.53,
		preEvol: [{ id:43 }, { id:44 }]
	},		
	{	id:46,
		name:'Paras',
		candyDis:3,
		topCp:836,
		candy:50,
		evol: [{ id:47 }]
	},	
	{	id:47,
		name:'Parasect',
		candyDis:3,
		topCp:1657,
		minMulti:1.92,
		maxMulti:2.02,
		preEvol: [{ id:46 }]
	},		
	{	id:48,
		name:'Venonat',
		candyDis:3,
		topCp:902,
		candy:50,
		evol: [{ id:49 }]
	},
	{	id:49,
		name:'Venonmoth',
		candyDis:3,
		topCp:1937,
		minMulti:1.85,
		maxMulti:1.9,
		preEvol: [{ id:48 }]
	},		
	{	id:50,
		name:'Diglett',
		candyDis:3,
		topCp:465,
		candy:50,
		evol: [{ id:51 }]
	},
	{	id:51,
		name:'Dugltrio',
		candyDis:3,
		topCp:1333,
		minMulti:2.68,
		maxMulti:2.77,
		preEvol: [{ id:50 }]
	},		
	{	id:52,
		name:'Meowth',
		candyDis:3,
		topCp:638,
		candy:50,
		evol: [{ id:53 }]
	},	
	{	id:53,
		name:'Persian',
		candyDis:3,
		topCp:1539,
		minMulti:1.98,
		maxMulti:2.24,
		preEvol: [{ id:52 }]
	},		
	{	id:54,
		name:'Psyduck',
		candyDis:3,
		topCp:966,
		candy:50,
		evol: [{ id:55 }]
	},
	{	id:55,
		name:'Golduck',
		candyDis:3,
		topCp:2270,
		minMulti:2.15,
		maxMulti:2.29,
		preEvol: [{ id:54 }]
	},		
	{	id:56,
		name:'Mankey',
		candyDis:3,
		topCp:1002,
		candy:50,
		evol: [{ id:57 }]
	},
	{	id:57,
		name:'Primeape',
		candyDis:3,
		topCp:2105,
		minMulti:2.17,
		maxMulti:2.27,
		preEvol: [{ id:56 }]
	},		
	{	id:58,
		name:'Growlithe',
		candyDis:3,
		topCp:1110,
		candy:50,
		evol: [{ id:59 }]
	},	
	{	id:59,
		name:'Arcanine',
		candyDis:3,
		topCp:2839,
		minMulti:2.27,
		maxMulti:2.36,
		preEvol: [{ id:58 }]
	},	
	{	id:60,
		name:'Poliwag',
		candyDis:3,
		topCp:695,
		candy:25,
		evol: [{ id:61 }, { id:62 }]
	},
	{	id:61,
		name:'Poliwhirl',
		candyDis:3,
		topCp:1313,
		candy:100,
		minMulti:1.72,
		maxMulti:1.77,
		evol: [{ id:62 }],
		preEvol: [{ id:60 }]
	},		
	{	id:62,
		name:'Poliwrath',
		candyDis:3,
		topCp:2441,
		minMulti:1.9,
		maxMulti:1.96,
		preEvol: [{ id:60 }, { id:61 }]
	},
	{	id:63,
		name:'Abra',
		candyDis:3,
		topCp:1148,
		candy:25,
		evol: [{ id:64 }, { id:65 }]
	},		
	{	id:64,
		name:'Kadabra',
		candyDis:3,
		topCp:1859,
		candy:100,
		minMulti:1.36,
		maxMulti:1.95,
		evol: [{ id:65 }],
		preEvol: [{ id:63 }]
	},	
	{	id:65,
		name:'Alakazam',
		candyDis:3,
		topCp:2887,
		minMulti:1.4,
		maxMulti:1.65,
		preEvol: [{ id:63 }, { id:64 }]
	},		
	{	id:66,
		name:'Machop',
		candyDis:3,
		topCp:1199,
		candy:25,
		evol: [{ id:67 }, { id:68 }]
	},
	{	id:67,
		name:'Machoke',
		candyDis:3,
		topCp:1910,
		candy:100,
		minMulti:1.62,
		maxMulti:1.67,
		evol: [{ id:68 }],
		preEvol: [{ id:66 }]
	},		
	{	id:68,
		name:'Machamp',
		candyDis:3,
		topCp:2889,
		minMulti:1.38,
		maxMulti:1.7,
		preEvol: [{ id:66 }, { id:67 }]
	},
	{	id:69,
		name:'Bellsprout',
		candyDis:3,
		topCp:916,
		candy:25,
		evol: [{ id:70 }, { id:71 }]
	},		
	{	id:70,
		name:'Weepinbell',
		candyDis:3,
		topCp:1475,
		candy:100,
		minMulti:1.54,
		maxMulti:1.6,
		evol: [{ id:71 }],
		preEvol: [{ id:69 }]
	},	
	{	id:71,
		name:'Victreebel',
		candyDis:3,
		topCp:2268,
		minMulti:1.47,
		maxMulti:1.59,
		preEvol: [{ id:69 }, { id:70 }]
	},		
	{	id:72,
		name:'Tentacool',
		candyDis:3,
		topCp:956,
		candy:50,
		evol: [{ id:73 }]
	},
	{	id:73,
		name:'Tentacruel',
		candyDis:3,
		topCp:2374,
		minMulti:2.47,
		maxMulti:2.6,
		preEvol: [{ id:72 }]
	},		
	{	id:74,
		name:'Geodude',
		candyDis:1,
		topCp:1193,
		candy:25,
		evol: [{ id:75 }, { id:76 }]
	},
	{	id:75,
		name:'Graveler',
		candyDis:1,
		topCp:1815,
		candy:100,
		minMulti:1.7,
		maxMulti:1.76,
		evol: [{ id:76 }],
		preEvol: [{ id:74 }]
	},		
	{	id:76,
		name:'Golem',
		candyDis:1,
		topCp:2916,
		minMulti:1.62,
		maxMulti:1.72,
		preEvol: [{ id:74 }, { id:75 }]
	},	
	{	id:77,
		name:'Ponyta',
		candyDis:3,
		topCp:1502,
		candy:50,
		evol: [{ id:78 }]
	},		
	{	id:78,
		name:'Rapidash',
		candyDis:3,
		topCp:2252,
		minMulti:1.46,
		maxMulti:1.5,
		preEvol: [{ id:77 }]
	},
	{	id:79,
		name:'Slowpoke',
		candyDis:3,
		topCp:1204,
		candy:50,
		evol: [{ id:80 }]
	},	
	{	id:80,
		name:'Slowbro',
		candyDis:3,
		topCp:2482,
		minMulti:2.13,
		maxMulti:2.24,
		preEvol: [{ id:79 }]
	},
	{	id:81,
		name:'Magnemite',
		candyDis:3,
		topCp:1083,
		candy:50,
		evol: [{ id:82 }]
	},		
	{	id:82,
		name:'Magneton',
		candyDis:3,
		topCp:2237,
		minMulti:2.14,
		maxMulti:2.18,
		preEvol: [{ id:81 }]
	},	
	{	id:83,
		name:'Farfetch\'d',
		candyDis:3,
		topCp:1092
	},		
	{	id:84,
		name:'Doduo',
		candyDis:3,
		topCp:1011,
		candy:50,
		evol: [{ id:85 }]
	},
	{	id:85,
		name:'Dodrio',
		candyDis:3,
		topCp:2138,
		minMulti:2.19,
		maxMulti:2.29,
		preEvol: [{ id:84 }]
	},		
	{	id:86,
		name:'Seel',
		candyDis:3,
		topCp:899,
		candy:50,
		evol: [{ id:87 }]
	},
	{	id:87,
		name:'Dewgong',
		candyDis:3,
		topCp:1894,
		minMulti:1.04,
		maxMulti:2.02,
		preEvol: [{ id:86 }]
	},		
	{	id:88,
		name:'Grimer',
		candyDis:3,
		topCp:1269,
		candy:50,
		evol: [{ id:89 }]
	},	
	{	id:89,
		name:'Muk',
		candyDis:3,
		topCp:2709,
		minMulti:2.00,
		maxMulti:2.44,
		preEvol: [{ id:88 }]
	},
	{	id:90,
		name:'Shellder',
		candyDis:3,
		topCp:958,
		candy:50,
		evol: [{ id:91 }]
	},
	{	id:91,
		name:'Cloyster',
		candyDis:3,
		topCp:2475,
		minMulti:2.62,
		maxMulti:2.69,
		preEvol: [{ id:90 }]
	},		
	{	id:92,
		name:'Gastly',
		candyDis:3,
		topCp:1002,
		candy:25,
		evol: [{ id:93 }, { id:94 }]
	},
	{	id:93,
		name:'Haunter',
		candyDis:3,
		topCp:1716,
		candy:100,
		minMulti:1.75,
		maxMulti:1.83,
		evol: [{ id:94 }]
	},		
	{	id:94,
		name:'Gengar',
		candyDis:3,
		topCp:2619,
		minMulti:1.51,
		maxMulti:1.8,
		preEvol: [{ id:92 }, { id:93 }]
	},	
	{	id:95,
		name:'Onix',
		candyDis:5,
		topCp:1002,
	},		
	{	id:96,
		name:'Drowzee',
		candyDis:3,
		topCp:992,
		candy:50,
		evol: [{ id:97 }]
	},
	{	id:97,
		name:'Hypno',
		candyDis:3,
		topCp:2048,
		minMulti:2.06,
		maxMulti:2.09,
		preEvol: [{ id:96 }]
	},		
	{	id:98,
		name:'Krabby',
		candyDis:3,
		topCp:1386,
		candy:50,
		evol: [{ id:99 }]
	},
	{	id:99,
		name:'Kingler',
		candyDis:3,
		topCp:2694,
		minMulti:2.31,
		maxMulti:2.41,
		preEvol: [{ id:98 }]
	},		
	{	id:100,
		name:'Voltorb',
		candyDis:3,
		topCp:857,
		candy:50,
		evol: [{ id:101 }]
	},	
	{	id:101,
		name:'Electrode',
		candyDis:3,
		topCp:1900,
		minMulti:1.98,
		maxMulti:2.02,
		preEvol: [{ id:100 }]
	},		
	{	id:102,
		name:'Exeggcute',
		candyDis:3,
		topCp:1102,
		candy:50,
		evol: [{ id:103 }]
	},
	{	id:103,
		name:'Exeggutor',
		candyDis:3,
		topCp:2916,
		minMulti:2.68,
		maxMulti:3.18,
		preEvol: [{ id:102 }]
	},		
	{	id:104,
		name:'Cubone',
		candyDis:3,
		topCp:943,
		candy:50,
		evol: [{ id:105 }]
	},
	{	id:105,
		name:'Marowak',
		candyDis:3,
		topCp:1691,
		minMulti:1.65,
		maxMulti:1.67,
		preEvol: [{ id:104 }]
	},		
	{	id:106,
		name:'Hitmonlee',
		candyDis:5,
		topCp:2406
	},	
	{	id:107,
		name:'Hitmonchan',
		candyDis:5,
		topCp:2098
	},		
	{	id:108,
		name:'Lickitung',
		candyDis:3,
		topCp:1322
	},
	{	id:109,
		name:'Koffing',
		candyDis:3,
		topCp:1091,
		candy:50,
		evol: [{ id:110 }]
	},		
	{	id:110,
		name:'Weezing',
		candyDis:3,
		topCp:2183,
		minMulti:1.95,
		maxMulti:2.2,
		preEvol: [{ id:109 }]
	},
	{	id:111,
		name:'Rhyhorn',
		candyDis:3,
		topCp:1679,
		candy:50,
		evol: [{ id:112 }]
	},		
	{	id:112,
		name:'Rhydon',
		candyDis:3,
		topCp:3300,
		minMulti:1.9,
		maxMulti:1.91,
		preEvol: [{ id:111 }]
	},	
	{	id:113,
		name:'Chansey',
		candyDis:5,
		topCp:1469
	},		
	{	id:114,
		name:'Tangela',
		candyDis:3,
		topCp:2208
	},
	{	id:115,
		name:'Kangaskhan',
		candyDis:3,
		topCp:2463
	},		
	{	id:116,
		name:'Horsea',
		candyDis:3,
		topCp:921,
		candy:50,
		evol: [{ id:117 }]
	},
	{	id:117,
		name:'Seadra',
		candyDis:3,
		topCp:1979,
		minMulti:2.19,
		maxMulti:2.23,
		preEvol: [{ id:116 }]
	},		
	{	id:118,
		name:'Goldeen',
		candyDis:3,
		topCp:1006,
		candy:50,
		evol: [{ id:119 }]
	},	
	{	id:119,
		name:'Seaking',
		candyDis:3,
		topCp:2040,
		minMulti:2.14,
		maxMulti:2.24,
		preEvol: [{ id:118 }]
	},		
	{	id:120,
		name:'Staryu',
		candyDis:3,
		topCp:926,
		candy:50,
		evol: [{ id:121 }]
	},
	{	id:121,
		name:'Starmie',
		candyDis:3,
		topCp:2303,
		minMulti:2.31,
		maxMulti:2.42,
		preEvol: [{ id:120 }]
	},		
	{	id:122,
		name:'Mr. Mime',
		candyDis:5,
		topCp:1984
	},
	{	id:123,
		name:'Scyther',
		candyDis:5,
		topCp:2464
	},		
	{	id:124,
		name:'Jynx',
		candyDis:5,
		topCp:2512
	},	
	{	id:125,
		name:'Electabuzz',
		candyDis:5,
		topCp:2196
	},		
	{	id:126,
		name:'Magmar',
		candyDis:5,
		topCp:2254
	},
	{	id:127,
		name:'Pinsir',
		candyDis:5,
		topCp:2770
	},		
	{	id:128,
		name:'Tauros',
		candyDis:3,
		topCp:2488
	},
	{	id:129,
		name:'Magikarp',
		candyDis:1,
		topCp:220,
		candy:400,
		evol: [{ id:130 }]
	},	
	{	id:130,
		name:'Gyarados',
		candyDis:1,
		topCp:3281,
		minMulti:10.1,
		maxMulti:11.80,
		preEvol: [{ id:129 }]
	},	
	{	id:131,
		name:'Lapras',
		candyDis:5,
		topCp:2980
	},		
	{	id:132,
		name:'Ditto',
		candyDis:3,
		topCp:718
	},
	{	id:133,
		name:'Eevee',
		candyDis:5,
		topCp:969,
		candy:25,
		evol: [{ id:134 }, { id:135 }, { id:136}]
	},		
	{	id:134,
		name:'Vaporeon',
		candyDis:5,
		topCp:3157,
		minMulti:2.63,
		maxMulti:2.73,
		preEvol: [{ id:133 }]
	},		
	{	id:135,
		name:'Jolteon',
		candyDis:5,
		topCp:2730,
		minMulti:2.00,
		maxMulti:2.10,
		preEvol: [{ id:133 }]
	},		
	{	id:136,
		name:'Flareon',
		candyDis:5,
		topCp:2904,
		minMulti:2.46,
		maxMulti:2.64,
		preEvol: [{ id:133 }]
	},	
	{	id:137,
		name:'Porygon',
		candyDis:3,
		topCp:1567
	},		
	{	id:138,
		name:'Omanyte',
		candyDis:5,
		topCp:1345,
		candy:50,
		evol: [{ id:139 }]
	},
	{	id:139,
		name:'Omastar',
		candyDis:5,
		topCp:2685,
		minMulti:1.99,
		maxMulti:2.12,
		preEvol: [{ id:138 }]
	},		
	{	id:140,
		name:'Kabuto',
		candyDis:5,
		topCp:1172,
		candy:50,
		evol: [{ id:141 }]
	},
	{	id:141,
		name:'Kabutops',
		candyDis:5,
		topCp:2517,
		minMulti:1.97,
		maxMulti:2.37,
		preEvol: [{ id:140 }]
	},		
	{	id:142,
		name:'Aerodactyl',
		candyDis:5,
		topCp:2608
	},	
	{	id:143,
		name:'Snorlax',
		candyDis:5,
		topCp:3355
	},		
	{	id:144,
		name:'Articuno',
		candyDis:5,
		topCp:2933
	},
	{	id:145,
		name:'Zapdos',
		candyDis:5,
		topCp:3330			
	},		
	{	id:146,
		name:'Moltres',
		candyDis:5,
		topCp:3272
	},
	{	id:147,
		name:'Dratini',
		candyDis:5,
		topCp:860,
		candy:25,
		evol: [{ id:148 }, { id:149 }]
	},		
	{	id:148,
		name:'Dragonair',
		candyDis:5,
		topCp:1609,
		candy:100,
		minMulti:1.78,
		maxMulti:1.85,
		evol: [{ id:149 }],
		preEvol: [{ id:147 }]
	},	
	{	id:149,
		name:'Dragonite',
		candyDis:5,
		topCp:3581,
		minMulti:2.02,
		maxMulti:2.08,
		preEvol: [{ id:147 }, { id:148 }]
	},		
	{	id:150,
		name:'Mewtwo',
		candyDis:5,
		topCp:4760
	},
	{	id:151,
		name:'Mew',
		candyDis:5,
		topCp:3090
	}/*,
	{	id:152,
		name: 'Chikorita',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:153 }, { id:154 }]
	},
	{	id:153,
		name: 'Bayleef',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:154}],
		preEvol: [{ id:152}]
	},
	{	id:154,
		name: 'Meganium',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		preEvol: [{ id:152 }, { id:153 }]
	},
	{	id:155,
		name: 'Cyndaquil',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:156 }, { id:157 }]
	},
	{	id:156,
		name: 'Quilava',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: 157 }],
		preEvol: [{ id: 155 }]
	},
	{	id:157,
		name: 'Typhlosion',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		preEvol: [{ id:155 }, { id:156 }]
	},
	{	id:158,
		name: 'Totodile',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:159 }, { id:160 }]
	},
	{	id:159,
		name: 'Croconaw',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:160 }],
		preEvol: [{ id:158 }]
	},
	{	id:160,
		name: 'Feraligatr',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		preEvol: [{ id:158 }, { id:159 }]
	},
	{	id:161,
		name: 'Sentret',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:162 }]
	},
	{	id:162,
		name: 'Furret',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		preEvol: [{ id:161 }]
	},
	{	id:163,
		name: 'Hoothoot',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:164 }]
	},
	{	id:164,
		name: 'Noctowl',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		preEvol: [{ id:163 }]
	},
	{	id:165,
		name: 'Ledyba',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:166 }]
	},
	{	id:166,
		name: 'Ledian',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		preEvol: [{ id:165 }]
	},
	{	id:167,
		name: 'Spinarak',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:168 }]
	},
	{	id:168,
		name: 'Ariados',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		preEvol: [{ id:167 }]
	},
	{	id:169,
		name: 'Crobat',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id:41 }, { id:42 }]
	},
	{	id:170,
		name: 'Chinchou',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:171,
		name: 'Lanturn',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:172,
		name: 'Pichu',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:173,
		name: 'Cleffa',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:174,
		name: 'Igglybuff',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:175,
		name: 'Togepi',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:176,
		name: 'Togetic',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:177,
		name: 'Natu',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:178,
		name: 'Xatu',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:179,
		name: 'Mareep',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:180,
		name: 'Flaaffy',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:181,
		name: 'Ampharos',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:182,
		name: 'Bellossom',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:183,
		name: 'Marill',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:184,
		name: 'Azumarill',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:185,
		name: 'Sudowoodo',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:186,
		name: 'Politoed',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:187,
		name: 'Hoppip',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:188,
		name: 'Skiploom',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:189,
		name: 'Jumpluff',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:190,
		name: 'Aipom',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:191,
		name: 'Sunkern',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:192,
		name: 'Sunflora',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:193,
		name: 'Yanma',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:194,
		name: 'Wooper',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:195,
		name: 'Quagsire',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:196,
		name: 'Espeon',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:197,
		name: 'Umbreon',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:198,
		name: 'Murkrow',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:199,
		name: 'Slowking',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:200,
		name: 'Misdreavus',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:201,
		name: 'Unown',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:202,
		name: 'Wobbuffet',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:203,
		name: 'Girafarig',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:204,
		name: 'Pineco',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:205,
		name: 'Forretress',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:206,
		name: 'Dunsparce',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:207,
		name: 'Gligar',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:208,
		name: 'ix',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:209,
		name: 'Snubbull',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:210,
		name: 'Granbull',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:211,
		name: 'Qwilfish',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:212,
		name: 'Scizor',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:213,
		name: 'Shuckle',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:214,
		name: 'Heracross',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:215,
		name: 'Sneasel',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:216,
		name: 'Teddiursa',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:217,
		name: 'Ursaring',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:218,
		name: 'Slugma',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:219,
		name: 'Magcargo',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:220,
		name: 'Swinub',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:221,
		name: 'Piloswine',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:222,
		name: 'Corsola',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:223,
		name: 'Remoraid',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:224,
		name: 'Octillery',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:225,
		name: 'Delibird',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:226,
		name: 'Mantine',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:227,
		name: 'Skarmory',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:228,
		name: 'Houndour',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:229,
		name: 'Houndoom',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:230,
		name: 'Kingdra',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:231,
		name: 'Phanpy',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:232,
		name: 'Donphan',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:233,
		name: 'Porygon2',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:234,
		name: 'Stantler',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:235,
		name: 'Smeargle',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:236,
		name: 'Tyrogue',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:237,
		name: 'Hitmontop',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:238,
		name: 'Smoochum',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:239,
		name: 'Elekid',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:240,
		name: 'Magby',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:241,
		name: 'Miltank',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:242,
		name: 'Blissey',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:243,
		name: 'Raikou',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:244,
		name: 'Entei',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:245,
		name: 'Suicune',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:246,
		name: 'Larvitar',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:247,
		name: 'Pupitar',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:248,
		name: 'Tyranitar',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:249,
		name: 'Lugia',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:250,
		name: 'Ho-Oh',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	},
	{	id:251,
		name: 'Celebi',
		candyDis:1000,
		topCp:1000,
		minMulti:0.00,
		maxMulti:0.00,
		evol: [{ id: }, { id: }]
	}*/
];