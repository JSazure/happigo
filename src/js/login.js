window.onload = function() {
	var oTel = document.getElementById("tel");
	var oPwd = document.getElementById("pwd");
	var oLogin = document.getElementById("login");
	oLogin.onclick = function() {
		var utel = oTel.value;
		var upwd = oPwd.value;
		var uTel = getCookie("registerTel") ? getCookie("registerTel") : "";

		uTel = convertStrToObj(uTel);

		if(uTel[utel] == upwd) {
			setCookie("loginedTel", utel, 7);
			console.log("登录成功!");
			//location.href = "index.html";
		} else {
			alert("手机号和密码不匹配，请确认后重试！");
		}
	};

};
function convertStrToObj(str) {
	if(!str) { 
		return {}; 
	}
	var uTel = str.split(":");
	var obj = {};
	for(var i = 0; i < uTel.length; i++) {
		var utelData = uTel[i].split(",");
		obj[utelData[0]] = utelData[1];
	}
	return obj;
}


function convertObjToStr(obj) {
	var str = "";
	for(var utel in obj) {
		var upwd = obj[utel];
		if(str) {
			str += ":";
		}
		str += utel + ',' + upwd;
	}
	return str;
}