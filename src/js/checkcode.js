var box;

function createCode() {
	box = '';
	var boxLength = 4;
	var boxV = document.getElementById('box');
	var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','i','s','t','u','v','w','x','y','z');
	for(var i = 0; i < boxLength; i++) {
		var index = Math.floor(Math.random() * 52);
		box += random[index];
	}
	boxV.value = box;
}

//function validate() {
//	var oValue = document.getElementById('input').value.toUpperCase();
//	if(oValue == 0) {
//		alert('请输入验证码');
//	} else if(oValue != code) {
//		alert('验证码不正确，请重新输入');
//		oValue = ' ';
//		createCode();
//	} else {
//		alert("..h.hhhh")
//	}
//}

window.onload = function() {

	createCode();
}
