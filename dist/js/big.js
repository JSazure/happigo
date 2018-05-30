"use strict";

small.onmousemove = function (e) {
	var x = e.clientX - box.offsetLeft,
	    y = e.clientY - box.offsetTop;

	x -= glass.offsetWidth / 2;
	y -= glass.offsetHeight / 2;
	console.log(x, y);
	if (x < 0) x = 0;
	if (y < 0) y = 0;
	var maxX = small.offsetWidth - glass.offsetWidth - 2;
	if (x > maxX) x = maxX;
	var maxY = small.offsetHeight - glass.offsetHeight - 2;
	if (y > maxY) y = maxY;
	var _ref = [x + "px", y + "px"];
	glass.style.left = _ref[0];
	glass.style.top = _ref[1];

	imgbig.style.left = -4 * x + "px";
	imgbig.style.top = -4 * y + "px";

	imgsmall2.style.left = -1 * x + "px";
	imgsmall2.style.top = -1 * y + "px";
};
small.onmouseover = function () {
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
};
small.onmouseout = function () {
	startMove(glass, {
		"opacity": 0
	}, function () {
		glass.style.display = "none";
	});
	startMove(big, {
		"opacity": 0
	}, function () {
		big.style.display = "none";
	});
};

//小图移动

var timer;
div1.onmouseover = function () {
	timer = setInterval(function () {
		var n = div2.scrollLeft;
		n++;
		div2.scrollLeft = n;
	}, 1);
};
div1.onmouseout = function () {
	clearInterval(timer);
};
div3.onmouseover = function () {
	timer = setInterval(function () {
		var n = div2.scrollLeft;
		n--;
		div2.scrollLeft = n;
	}, 1);
};
div3.onmouseout = function () {
	clearInterval(timer);
};
div2.onclick = function (e) {
	var el = e.target;
	if (el.nodeName == "IMG") {
		imgsmall.src = imgsmall2.src = imgbig.src = el.src;
	}
};
img1.onmouseover = function () {
	img1.style.border = "2px solid red";
};
img1.onmouseout = function () {
	img1.style.border = "none";
};
img2.onmouseover = function () {
	img2.style.border = "2px solid red";
};
img2.onmouseout = function () {
	img2.style.border = "none";
};
img3.onmouseover = function () {
	img3.style.border = "2px solid red";
};
img3.onmouseout = function () {
	img3.style.border = "none";
};
img4.onmouseover = function () {
	img4.style.border = "2px solid red";
};
img4.onmouseout = function () {
	img4.style.border = "none";
};
img5.onmouseover = function () {
	img5.style.border = "2px solid red";
};
img5.onmouseout = function () {
	img5.style.border = "none";
};