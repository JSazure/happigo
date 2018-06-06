$(function(){
				loadCart();

				$("#buy").click(function(){
					location.href = "car.html";
				})

				$(".btn2").click(function(e){
					
					//获取商品的名称
					var goodName = $(".g-g").html();
					//获取商品的价格
					var goodPrice = parseFloat($(".price b").html());
					//获取商品的图片src
					var goodSrc = $("#imgsmall").attr("src");

					
					var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					//将字符串转成对象
					var cartObj = convertCartStrToObj(cartStr);
					//判断该商品是否已经在购物车中存在
//					if(goodId in cartObj){
//						//如果已存在，那么该商品的数量加1
//						cartObj[goodId].num += 1;
//					}else{
//						//如果不存在，那么将新商品的信息存入
//						cartObj[goodId] = {
//							name : goodName,
//							price : goodPrice,
//							num : 1,
//							src : goodSrc
//						};
//					}
					
					//将新的购物车信息存回cookie
					//将对象转为字符串
					cartStr = convertObjToCartStr(cartObj);
					//存入cookie
					//document.cookie = "key=value"
					$.cookie("cart",cartStr,{expires : 7,path:"/"});
					
					
					
					//做一个飞入购物车的效果
					var cloneImg=document.getElementById("clone")
					cloneImg.fly({
						start : {
							top : e.clientY,
							left : e.clientX
						},
						end :{
							top : $("#buy").offset().top,
							left : $("#buy").offset().left,
							width:0,
							height:0
						},
						autoPlay : true,
						onEnd : function(){
							$("#number").html(function(n) {
								var num=/(\d+)/;
								return num+1;
								
							});
//							$("#buy").val(function(index,v){
//						//"购物车（0）"
//						var pattern = /(\d+)/;
//						var num = parseInt(v.match(pattern)[1]);
//						return "购物车(" + (num + 1) + ")";
//					});
					cloneImg.remove();
						}
					})
				})
			});
			
			
			function convertCartStrToObj(cartStr){
				
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!cartStr){
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i ++){
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name : data[1],
						price : parseFloat(data[2]),
						num : parseInt(data[3]),
						src : data[4]
					}
				}
				return obj;
			}
			function convertObjToCartStr(obj){
					
					var cartStr = "";
					//遍历对象
					for(var id in obj){
						if(cartStr){
							cartStr += ":";
						}
						//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
						cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
					}
					return cartStr;
			}
			
			//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
			function loadCart(){
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					var cartObj = convertCartStrToObj(cartStr);
					//获取到购物车中所有商品的数量
					var total = 0;
					for(var id in cartObj){
						total += cartObj[id].num;
					}
					$("#buy").val("购物车(" + total + ")");
			}