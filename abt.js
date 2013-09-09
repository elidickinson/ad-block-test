function ad_block_test(callback, testad_id) {
	var version = "0.1";
	var testad_id = testad_id ? testad_id : "sponsored-ad";
	var testad = document.createElement("DIV");
	testad.id = testad_id;
	testad.style.position = "absolute";
	testad.style.left = "-999px";
	testad.appendChild(document.createTextNode("&nbsp;"))
	document.body.appendChild(testad); // add test ad to body

	// wait a bit and then check its height
	setTimeout(function() {
		if (testad) {
			callback(testad && (testad.clientHeight == 0), version);
			document.body.removeChild(testad);
			// Should testad disappearing entirely count as an ad block?
			// Currently it does not fire callback at all in this case
		}
	}, 100);
}

// will automatically run and call the callback if its defined.
// Otherwise gotta call it and pass a callback function that receives a bool yourself.
if (typeof ad_block_test_callback == "function") {
	ad_block_test(ad_block_test_callback);
}
