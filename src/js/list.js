$(".total-t>li").mouseenter(function(){
				$(this).children(".nav-list").stop().show();	
				$(this).css("background","#fff");
				$(this).children("a").css("color","#EB2D58")
//				$("a").children("i").css("display","none");
//				$("a").children("b").css("display","block");
				
			}).mouseleave(function(){
				$(this).children(".nav-list").stop().hide();		
				$(this).css("background","");
//				$(this).find("i").css("display","block");
//				$(this).find("b").css("display","none");
			});
		