function ad_block_test(callback, ad_id) {
	var testad_id = ad_id ? ad_id : "sponsored-ad";
	var testad = document.createElement("DIV");
	testad.id = testad_id;
	testad.style.position = "absolute";
	testad.style.left = "-999px";
	testad.appendChild(document.createTextNode("&nbsp;"))
	document.body.appendChild(testad); // add test ad to body

	// wait a bit and then check it's height
	setTimeout(function() {
		callback(testad.clientHeight == 0);
		document.body.removeChild(testad);
	}, 100);
}

// will automatically run and call the callback if its defined.
// Otherwise gotta call it and pass a callback function that receives a bool yourself.
if (typeof ad_block_test_callback == "function") {
	ad_block_test(ad_block_test_callback);
}
