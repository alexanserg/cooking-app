var convert = function (liters) {
	return liters * 3.7854;
};

var liters = parseInt(prompt("How many liters?"));

alert(convert(liters))
