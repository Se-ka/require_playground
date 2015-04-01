define (function (require) {

	var m5 = require("js/module5");

	return {
		run: function() {
			console.log("module6 is working");
			m5.run();
		}
	}
});
