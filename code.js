function sum(a, b) {				//Note: This is the AND gate;
	return a ^ b;					//Verified that this works.
}


function carry(a, b) {				//Note: This is the XOR gate as described by Petzold. (CODE, Ch. 12, Pg. 136)
	return (a || b) ^ (a ^ b);		//Verified that it works.
}


function halfAdd(a, b) {
	var x = sum(a, b);
	var y = carry(a, b);
	console.log("In halfAdd, The sum is " + x + " and the carry is " + y);
}



function fullAdd(a, b, carryIn) {
	//First, the initial sum that goes into the first Half Adder
	var x = sum(a, b);
	var y = carry(a, b);
	//Second, the second Half Adder recieves the carryIn and x variables
		var sumOut = sum(carryIn, x);
		console.log("The Sum Out is " + sumOut);
	//Third, the carryOut is defined as an OR gate between the first Half Adder's Carry Out and the second Half Adder's Carry Out
			var carryOut = (carry(carryIn, x) || y);
			console.log("The Carry Out is " + carryOut); //Verified that it works.		
			//I cannot directly call halfAdd because it comes back undefined
}

function twoBitAdd(a, b){
	var x = sum(a, b);
	var y = carry(a, b);
	carryIn = 0;
		var sumOut = sum(carryIn, x);
		var carryOut = (carry(carryIn, x) || y);
			var total = [];
			total.push(sumOut);
				var secondSumOut = sum(sumOut, carryOut);
				var secondCarryOut = carry(sumOut, carryOut);
				total.unshift(secondSumOut);
					
					var finalSum = total.toString();
					var totalSum = finalSum.replace(",", "");
					console.log(totalSum);
					
			

}
