$.event.special.dblrightclick = {
	// On subscribe
	setup : function(data, namespaces) {
		var e = $(this);
		e.bind("contextmenu", $.event.special.dblrightclick.handler);
		e.data($.extend({
			x : null,
			y : null,
			time : null,
			offsetX : 10, // Available X offset (pixels)
			offsetY : 10, // Available Y offset (pixels)
			offsetT : 300 // Available time difference (milliseconds)
		}, data || {}));
	},

	// On unsubscribe
	teardown : function(namespaces) {
		$(this).unbind("contextmenu", $.event.special.dblrightclick.handler);
	},

	// Logic triggering events
	handler : function (event) {
		event.preventDefault();
		var e = $(this);
		var data = e.data();

		var diffX = Math.abs(data.x - event.screenX);
		var diffY = Math.abs(data.y - event.screenY);
		var diffT = Math.abs(event.timeStamp - data.time);

		if (diffX < data.offsetX && diffY < data.offsetY && diffT < data.offsetT) {
			e.data({
				x : null,
				y : null,
				time : null
			});
			event.type = "dblrightclick";
			$.event.dispatch.apply(this, arguments);
		} else {
			e.data({
				x : event.screenX,
				y : event.screenY,
				time : event.timeStamp
			});
		}
	}
};
