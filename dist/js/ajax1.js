function ajax(url,fnWin,fnFaild){

	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

	xhr.open("GET",url,true);

	xhr.send();

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				if(typeof fnWin == 'function'){
					fnWin(xhr.responseText);
				}
			}else{
				if(typeof fnFaild === 'function'){
					fnFaild();
				}
			}
		}
	}
}