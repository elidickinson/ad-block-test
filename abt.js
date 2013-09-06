function ad_block_test(callback) {
	var $ = jQuery || $;
	$("body").append('<div class="ad-sponsor" id="sponsored-ad" style="position:absolute;left:-999px;font-size:2px">&nbsp;</div>');
	$(document).ready(function(){
		setTimeout(function(){
			var testad = $("#sponsored-ad");
			console.log(testad, testad.height());
			var ads_blocked = (testad.height() == 0);
			// should testad missing altogether count as ad blocked? Could
			// also just mean  something went wrong.
			if (testad.length == 1) {
				testad.remove();
				callback(ads_blocked);
			}
		}, 50);
	});
}

// will automatically run and call the callback if its defined.
// Otherwise gotta call it and pass a callback function that receives a bool yourself.
if (typeof ad_block_test_callback == "function") {
	ad_block_test(ad_block_test_callback);
}
