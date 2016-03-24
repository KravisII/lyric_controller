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
			// this.addEventListeners();
		};

		// o.deviceDetection = function () {};
		// o.interfaceControl = function () {};
		// o.playRateControl = function () {};
		// o.autoLoadControl = function () {};

		o.setNodeReferences = function () {
			// lyric-controller: 
			this.lyricContainer = document.querySelector(".lyric-container");
			this.lyricText = document.querySelector(".lyric-text");
		};

		o.dataInitialize = function () {
			this.addLyrics();
		};

		o.addLyrics = function () {
			var _lrcStr = "<p>" + audio_lrc[0].content + "</p>";

			for (var i = 1; i < audio_lrc.length; i++) {
				_lrcStr += "<p>" + audio_lrc[i].content + "</p>";
			}
			// console.log(_lrcStr);
			this.lyricText.innerHTML += _lrcStr;
		};

		// o.addEventListeners = function () {};

		o.initialize();
		return o;
	}
};

var lc = LyricController.createNew();