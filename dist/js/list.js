"use strict";

$(".total-t>li").mouseenter(function () {
	$(this).children(".nav-list").stop().show();
	$(this).css("background", "#fff");
}).mouseleave(function () {
	$(this).children(".nav-list").stop().hide();
	$(this).css("background", "#f3f3fc");
});