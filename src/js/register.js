window.onload = function() {
		var oTel = document.getElementById("tel");
		var oPwd = document.getElementById("pwd");
		var oIpwd = document.getElementById("ipwd");
		var oRegist = document.getElementById("regist");
		var box=document.getElementById("box");
		var yzm=document.getElementById("yzm");
		oRegist.onclick = function() {
			var utel = oTel.value;
			var upwd = oPwd.value;
			var len=upwd.length;
			var con = oIpwd.value;
			var oB=box.innerHTML;
			var oY=yzm.value;
			if(!(/^1[3-9]\d{9}$/.test(utel))) {
				ptel.innerHTML = "您输入手机号码有误";
					ptel.style.color = "red";
					oTel.style.border = "1px solid red";
					return;
			}
			if(len != 6) {
					ppwd.innerHTML = "密码不合法";
					ppwd.style.color = "red";
					oPwd.style.border = "1px solid red";
					return;
			} 			
			if(upwd !== con) {
				pPwd.innerHTML = "密码不一致,请重试";
					pPwd.style.color = "red";
					oIpwd.style.border = "1px solid red";
					return;
			}
			if(oY!=oB){
				py.innerHTML="验证码不正确";
				py.style.color = "red";
				return;
			}
			
			var uTel = getCookie("registerTel") ? getCookie("registerTel") : "";
			uTel = convertStrToObj(uTel);
			if(utel in uTel) {
				alert("手机号已经被注册");
				return;
			} else {
				uTel[utel] = upwd;
				utelStr = convertObjToStr(uTel);
				setCookie("registerTel", utelStr, 7);
				console.log(decodeURIComponent(document.cookie))				
				location.href="login.html";
			}
			
		}
		
	}

		
		function convertStrToObj(str){
			if(!str){
				return {};
			}	
			var uTel = str.split(":"); 
			var obj = {};
			for(var i = 0; i < uTel.length; i ++){		
				var utelData = uTel[i].split(",");
				obj[utelData[0]] = utelData[1];		
			}
			return obj;
		}
		
		function convertObjToStr(obj){
			var str = "";
			for(var utel in obj){
				var upwd = obj[utel];
				if(str){			
					str += ":";
				}
				str += utel + ',' + upwd;
			}
			return str;
		}