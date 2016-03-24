var LyricController = {
	createNew: function () {
		var o = {};
		// properties
		o.name = "LyricController";
		o.audioSource = document.querySelector(".audio-source");

		// methods
		o.initialize = function () {
			console.log("Start");
			this.setNodeReferences();
			this.dataInitialize();
			this.addEventListeners();
		};

		// o.deviceDetection = function () {};
		// o.interfaceControl = function () {};
		// o.playRateControl = function () {};
		// o.autoLoadControl = function () {};

		o.setNodeReferences = function () {
			// lyric-controller: 
			this.lyricContainer = document.querySelector(".lyric-container");
		};

		o.dataInitialize = function () {

		};

		o.addEventListeners = function () {

		};

		o.initialize();
		return o;
	}
};

var lc = LyricController.createNew();