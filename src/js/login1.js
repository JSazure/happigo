window.onload=function(){
	var oT = document.getElementById("tel_1");
	var oP = document.getElementById("pwd_1");
	var oL=document.getElementById("login");
	var yzmm=document.getElementById("item-1");
	var boxx=document.getElementById("boxx");
	oL.onclick = function() {
		var ut = oT.value;
		var up = oP.value;
		var y=yzmm.value;
		var b=boxx.innerHTML;
		var uTel = getCookie("registerTel") ? getCookie("registerTel") : "";
		uTel = convertStrToObj(uTel);

		if((uTel[ut] == up)&& (y==b)) {
			setCookie("loginedTel", ut, 7); 
			location.href = "index1.html";
		} else {
			alert("手机号和密码不匹配或验证码不正确，请确认后重试！");
			return;
		}
	}
}

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
	for(var ut in obj) {
		var up = obj[ut];
		if(str) {
			str += ":";
		}
		str += ut + ',' + up;
	}
	return str;
}