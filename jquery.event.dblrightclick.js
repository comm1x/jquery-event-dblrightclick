$.event.special.dblrightclick = {
	// On subscribe
	setup : function(data, namespaces) {
		var e = $(this);
		
		// Configure basic data-fields
		e.bind("contextmenu", $.event.special.dblrightclick.handler);
		e.data("x", null);
		e.data("y", null);
		e.data("time", null);
		e.data("limit", data || 400);
	},

	// On unsubscribe
	teardown : function(namespaces) {
		$(this).unbind("contextmenu", $.event.special.dblrightclick.handler);
	},

	// Event handler logic
	handler : function (event) {
		event.preventDefault();
		var e = $(this);

		if (e.data("x") == event.screenX && e.data("y") == event.screenY
			&& (event.timeStamp - e.data("time")) < e.data("limit")) {
			e.data("x", null);
			e.data("y", null);
			e.data("time", null);
			event.type = "dblrightclick";
			
			// Trigger event
			$.event.dispatch.apply(this, arguments);
		} else {
			e.data("x", event.screenX);
			e.data("y", event.screenY);
			e.data("time", event.timeStamp);
		}
	}
};
