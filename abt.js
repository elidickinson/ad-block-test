function ad_block_test(callback, testad_id) {
	if(typeof document.body == 'undefined') {
		// right now just silently fail if the body element isn't there
		return;
	}
	var version = "0.1";
	var testad_id = testad_id ? testad_id : "sponsored-ad";
	var testad = document.createElement("DIV");
	testad.id = testad_id;
	testad.style.position = "absolute";
	testad.style.left = "-999px";
	testad.appendChild(document.createTextNode("&nbsp;"));
	document.body.appendChild(testad); // add test ad to body

	// wait a bit and then check its height
	setTimeout(function() {
		if (testad) {
			callback((testad.clientHeight == 0), version);
			document.body.removeChild(testad);
			// Should testad disappearing entirely count as an ad block?
			// Currently it does not fire callback at all in this case
		}
	}, 125);
}
