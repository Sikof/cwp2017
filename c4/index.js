// var niza = [1, 3, 3, 5, 7, 8, 15];

// function Shark(trident){

// for(var i = 0; i < trident.length; i++){
// 	if (trident[i] % 3 == 0){
// 		}console.log("Fizz");
// 		 if  (trident[i] % 5 == 0){
// 		}console.log("Buzz");
// 			if (){

// 			}console.log("FizzBuzz");
		
// 		}	
	
// 	}




var math = {
	a: null,
	b: null,
	add: function(){
		return this.a + this.b;
	},
	sub: function(){
		return this.a - this.b;
	},
	div: function(){
		return this.a / this.b;
	},
	mul: function(){
		return this.a * this.b;
	},	
};

math.a = 4;
math.b = 9;

console.log(math.add());
console.log(math.sub());
console.log(math.div());
console.log(math.mul());