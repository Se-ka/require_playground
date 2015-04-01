define (function (require) {

	var m3 = require("js/module3"),
		m6 = require("js/module6");

	return {
		run: function() {
			console.log("module1 is working");
			m3.run();
			m6.run();
		}
	}
});
