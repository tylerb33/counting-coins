console.log ("works");


let coinpurse = {
		quarters: 0,
		dimes: 0,
		nickels: 0,
		pennies: 0
}

function coinCounter(dollarValue) {
	// convert dollar amount into cents
	dollarValue = dollarValue * 100;
	// divide the cents into quarters and round down to nearest whole number
	numberOfQuarters = Math.floor(dollarValue / 25);
	// assign that whole number to the quarters property in the coinpurse object
	coinpurse.quarters += numberOfQuarters;
	// use modulus to store the value of the remaining cents to calculate
	let remainingValue = dollarValue % 25;

	// all of the above comments are repeated for dime, nickel, penny below
	numberOfDimes = Math.floor(remainingValue / 10);
	coinpurse.dimes += numberOfDimes;
	remainingValue = remainingValue % 10;

	numberOfNickels = Math.floor(remainingValue / 5);
	coinpurse.nickels += numberOfNickels;
	remainingValue = remainingValue % 5;

	numberOfPennies = Math.floor(remainingValue / 1);
	coinpurse.pennies = coinpurse.pennies + numberOfPennies;

	console.log ("coinpurse quarters:", coinpurse.quarters, "coinpurse dimes:", coinpurse.dimes, "coinpurse nickels:", coinpurse.nickels, "coinpurse pennies:", coinpurse.pennies);

}

coinCounter(10.00);
