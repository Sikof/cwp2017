var names = ["pero", "peko", "kristina", "kristijan", "dimitar", "adreja", "aleksandar", "angelina", "mario", "dejan", "bojan"];
for(var i = 0; i < names.length ; i++){
	if(names[i].length == 5){
	console.log(names[i]);
}

}

function countLetters(letters,char){
	var count = 0;
	for (var i = 0; i < letters.length; i++){
		if(letters.charAt(i) == char){
			count++;
		}
	}
	console.log(count);
	return count;
}


countLetters("LSDKSIDJSHFSLFHXCLSHDSDHCLSHFHSC", "C");




for (var i = 0; i <= 50; i+=5){
console.log(i);
}



// for (var i = 100; i >=0; i--){
// 	console.log(i);
// }


for (var i = 0; i <= 10; i++){
	console.log(i * 9);
}





var grade = "A";
switch(grade){
	case "A":
	console.log("expected");
	break;
	case "B":
	console.log("Ur not Bsian");
	break;
	case "C":
	console.log("no dinner");
	break;
	case "D":
	console.log("up for adpotion");
	break;

	default: console.log("Unknown grade!");

};