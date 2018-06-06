window.onload = function() {
	var oTe = document.getElementById("tel1");
	var oTel = document.getElementById("tel2");
	var oPwd = document.getElementById("pwd");
	var oLogin = document.getElementById("login2");
	var olo=document.getElementById("login1");	
	var yzm1=document.getElementById("yzm1");
	var yzm2=document.getElementById("yzm2");	
	var box1=document.getElementById("box1");
	var box2=document.getElementById("box2");
	olo.onclick=function(){
		var utel=oTe.value;
		var y1=yzm1.value;
		var b1=box1.innerHTML;
		var uTel = getCookie("registerTel") ? getCookie("registerTel") : "";
		uTel = convertStrToObj(uTel);
		if((uTel[utel])&&(y1==b1)){
			setCookie("loginedTel", utel, 7);
			location.href = "index1.html";			
		}else{
			alert("手机号码未注册或验证码不正确，请确认后重试");
			return;
		}
	}
	
	
	oLogin.onclick = function() {
		var utel2 = oTel.value;
		var upwd = oPwd.value;
		var y2=yzm2.value;
		var b2=box2.innerHTML;
		var uTel = getCookie("registerTel") ? getCookie("registerTel") : "";
		uTel = convertStrToObj(uTel);
		if((uTel[utel2] == upwd)&& (y2==b2)) {
			setCookie("loginedTel", utel2, 7); 
			location.href = "index1.html";
		} else {
			alert("手机号和密码不匹配或验证码不正确，请确认后重试！");
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