/*
 * 抛物线函数
 * 参数：
 * elem：被操作的元素
 * targetX：目标点
 * targetY：目标点
 * a：		a<0时，开口朝下； a>0时，开口朝上
 * fn：		运动执行后，所触发的函数
 */
function parabola(elem, targetX, targetY, a, fn){
	// 起点
	var [originX, originY] = [elem.offsetLeft, elem.offsetTop];
	// 目标点
	// targetX, targetY
	var x = targetX - originX;
	var y = targetY - originY;
	var c = 0;	
	// 抛物线公式
	// y = axx + bx + c;
	// b = (y-axx-c)/x
	var b = (y-a*x*x-c)/x;
	// 已知a、b、c后，随意给一个x，求这个x所对应的y
	x = 0;	
	clearInterval(elem.timer2);
	elem.timer2 = setInterval( ()=>{
		//x += 1;	// 匀速运动
		x += (targetX-elem.offsetLeft)/6;	// 缓冲运动
		x = Math.ceil(x);
		// 根据抛物线公式，已知x，求y
		y = a*x*x + b*x + c;		
		// 更新坐标
		elem.style.left = originX+x+'px';
		elem.style.top = originY+y+'px';
		// 如果到了目标点
		if( originX+x>=targetX ){
			elem.style.left = targetX+'px';
			elem.style.top = targetY+'px';
			clearInterval(elem.timer2);	// 停止定时器
			if(fn){ // 如果设置了回调函数，
				fn(); // 则执行回调函数
			}
		}
	}, 50 );
}