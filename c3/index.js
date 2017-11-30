var niza = ['a', 'b' ,'c', 'd', 'e'];

console.log(niza);

console.log(niza[2]);

niza.push('z');

console.log(niza[20]);

console.log(niza.length);



var niza2 = ['bojan', 223305, true, 'test'];
console.log(niza2);

console.log(niza2 [1]);

var niza3 = [
[1, 2, 3, 4, 5],
[6, 7, 8, 9, 0],
['a', 'b', 'c',' d', 'e']
];

console.log(niza3);
console.log(niza3 [1][2]);





var o1 = {
	ime: 'Bojan',
	prezime: 'Gavrovski',
	oceni: [6, 6, 5, 5, 7, 6],
	profeesori: 
		[
				{
					ime:'Pero',
					prezime:'perovski',
				},
				{
					ime:'Janko',
					prezime:'Jankovski'
				}


		]
};


console.log(o1);
console.log(o1 ['ime']);
console.log(o1 ['prezime']);


console.log(o1.ime);
console.log(o1.prezime);
console.log(o1.oceni[3]);
console.log(o1.profeesori[1].prezime);




for(var i = 0; i < 10; i = i + 1) { //start,end,step
	console.log('Hello!');
	console.log(i);

}

var niza4 = [2, 2, 3, 5, 4, 5, 4, 6, 7, 8, 9];

// console.log(niza4[0]);
// console.log(niza4[1]);
// console.log(niza4[2]);
// console.log(niza4[3]);
// console.log(niza4[4]);

for(var i = 0; i < niza.length; i++){
	if(niza4[i] % 2 ==0){
	console.log(niza4[i]);
}

}

		
