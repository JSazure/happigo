let oa2 = document.getElementById("aa2");
new Num2();
oa2.onclick = function() {
	new Num2();
}

function Num2() {
	var newStr2 = "";

	var str2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	for(var i = 0; i < 4; i++) {
		newStr2 += str2.charAt(Math.floor(Math.random() * str2.length));
		box2.innerHTML = newStr2;

	}
}