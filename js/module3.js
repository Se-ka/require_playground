define (function (require) {

	var m2 = require("js/module2"),
		m4 = require("js/module4");

	return {
		run: function() {
			console.log("module3 is working");
			m2.run();
			m4.run();
		}
	}
});
