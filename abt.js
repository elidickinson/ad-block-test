function abt(callback, testad_id) {
	if (typeof document.body == 'undefined') {
		return;
	}
	var version = "0.1.2-dev";
	var testad_id = testad_id ? testad_id : "sponsored-ad";
	var testad = document.createElement("DIV");
	testad.id = testad_id;
	testad.style.position = "absolute";
	testad.style.left = "-999px";
	testad.appendChild(document.createTextNode("&nbsp;"));
	document.body.appendChild(testad);
	setTimeout(function () {
		if (testad) {
			var blocked = (testad.clientHeight == 0);
			try {}
			catch (err) {
				if (console && console.log) {
					console.log("ad-block-test error", err);
				}
			}
			callback(blocked, version);
			if (document.body !== null) {
				document.body.removeChild(testad);
			}
		}
	}, 175);
}
