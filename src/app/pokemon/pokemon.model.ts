export class pokemon {
	candyDis: number;
	id: number;
	name: string;
	topCp: number;

	candy?: number;
	candyHave?: number;
	cp?: number;	
	evol1?: any;
	evol2?: any;
	
	gen?: number;
	preEvol?: any;
	extra?: pokemon[];
	masterIndex?: number;
	maxMulti?: number;
	minMulti?: number;
	cpReq?: number;
	
	battleAppraise?: string;
	statAppraise?: any;
	candyNeed?: number;
	selected?: any;
}