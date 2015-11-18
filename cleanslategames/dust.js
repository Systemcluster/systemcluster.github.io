
function scroll(elements, x, y) {
	for (var i = elements.length - 1; i >= 0; --i) {
		elements[i].style.backgroundPosition = ""+x+"px "+y+"px";
	}
}

var anim = 0;

function dust() {

	var dust_near = document.getElementsByClassName("img-dust-near");
	var dust_far = document.getElementsByClassName("img-dust-far");

	document.addEventListener("scroll", function(e) {

		window.cancelAnimationFrame(anim);
		anim = window.requestAnimationFrame(function(){

			var scrolls = document.body.scrollTop || document.documentElement.scrollTop;

			scroll(dust_near, Math.round(scrolls / -100), Math.round(scrolls / -20.0));
			scroll(dust_far, Math.round(scrolls / 100), Math.round(scrolls / -30.0));
		});
	});
}

document.addEventListener("DOMContentLoaded", dust);
