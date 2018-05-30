
small.onmousemove = e => {
				var [x, y] = [e.clientX - box.offsetLeft, e.clientY - box.offsetTop];
				x -= glass.offsetWidth / 2;
				y -= glass.offsetHeight / 2;
				console.log(x, y);
				if(x < 0) x = 0;
				if(y < 0) y = 0;
				var maxX = small.offsetWidth - glass.offsetWidth - 2;
				if(x > maxX) x = maxX;
				var maxY = small.offsetHeight - glass.offsetHeight - 2;
				if(y > maxY) y = maxY;
				[glass.style.left, glass.style.top] = [x + "px", y + "px"];
				imgbig.style.left = -4 * x + "px";
				imgbig.style.top = -4 * y + "px";

				imgsmall2.style.left = -1 * x + "px";
				imgsmall2.style.top = -1 * y + "px";

			}
			small.onmouseover = () => {
				glass.style.display = "block";
				glass.style.opacity = 0;
				startMove(glass, {
					"opacity": 100
				});

				big.style.display = "block";
				big.style.opacity = 0;
				startMove(big, {
					"opacity": 100
				});
			}
			small.onmouseout = () => {
				startMove(glass, {
					"opacity": 0
				}, () => {
					glass.style.display = "none";
				});
				startMove(big, {
					"opacity": 0
				}, () => {
					big.style.display = "none";
				});
			}

			//小图移动
			
			var timer;
			div1.onmouseover=()=>{
				timer=setInterval(()=>{
					var n=div2.scrollLeft;
					n++;
					div2.scrollLeft=n;
				},1);				
			}
			div1.onmouseout=()=>{
				clearInterval(timer);
			}
			div3.onmouseover=()=>{
				timer=setInterval(()=>{
					var n=div2.scrollLeft;
					n--;
					div2.scrollLeft=n;
				},1);				
			}
			div3.onmouseout=()=>{
				clearInterval(timer);
			}
			div2.onmouseover=e=>{
				var el=e.target;
				if(el.nodeName=="IMG"){
					imgsmall.src=imgsmall.src=imgbig.src=el.src;
				}
			}
			img1.onmouseover=()=>{
				img1.style.border="2px solid red";
			}
			img1.onmouseout=()=>{
				img1.style.border="none";
			}
			img2.onmouseover=()=>{
				img2.style.border="2px solid red";
			}
			img2.onmouseout=()=>{
				img2.style.border="none";
			}
			img3.onmouseover=()=>{
				img3.style.border="2px solid red";
			}
			img3.onmouseout=()=>{
				img3.style.border="none";
			}
			img4.onmouseover=()=>{
				img4.style.border="2px solid red";
			}
			img4.onmouseout=()=>{
				img4.style.border="none";
			}
			img5.onmouseover=()=>{
				img5.style.border="2px solid red";
			}
			img5.onmouseout=()=>{
				img5.style.border="none";
			}