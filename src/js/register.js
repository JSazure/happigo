window.onload = function() {
		var oTel = document.getElementById("tel");
		var oPwd = document.getElementById("pwd");
		var oIpwd = document.getElementById("ipwd");
		var oRegist = document.getElementById("regist");
		oRegist.onclick = function() {
			var utel = oTel.value;
			var upwd = oPwd.value;
			var con = oIpwd.value;
			if(!utel) {
				alert("手机号不能为空！");
				return;
			}
			if(upwd !== con) {
				alert("两次输入的密码不相同，请重试!");
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
				//alert("注册成功！");
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