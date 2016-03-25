var LyricController = {
	createNew: function () {
		var o = {};
		// properties
		o.name = "LyricController";
		o.audioSource = document.querySelector(".audio-source");
		o.lrcStack = [];

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
			this.lyricText = document.querySelector(".lyric-text");
			this.lyrics = null;
		};

		o.dataInitialize = function () {
			this.addLyrics();
		};

		o.addLyrics = function () {
			var _lrcStr = "<p>" + audio_lrc[0].content + "</p>";

			for (var i = 1; i < audio_lrc.length; i++) {
				_lrcStr += "<p>" + audio_lrc[i].content + "</p>";
			}
			this.lyricText.innerHTML += _lrcStr;

			this.lyrics = document.querySelectorAll(".lyric-text > p");
		};

		o.addEventListeners = function () {
			this.audioSource.addEventListener("timeupdate", this.onTimeUpdate);
		};

		o.onTimeUpdate = function () {
			// console.log(o.audioSource.currentTime);
			for (var i = 0; i < audio_lrc.length; i++) {
				if (o.audioSource.currentTime <=  parseFloat(audio_lrc[i].endTime) &&
					o.audioSource.currentTime >= parseFloat(audio_lrc[i].startTime)) {
					o.showCurrentLrc(i);
				}
			}
		};

		o.showCurrentLrc = function (i) {
			
			ObjClass.addClass(this.lyrics[i], "currentLrc");

			if (this.lrcStack.length == 5) {
				this.clearLrcStack();
			}
			
			if (this.lrcStack[this.lrcStack.length-1] != i) {
				this.lrcStack.push(i);
			}
			
			console.log(this.lrcStack);
		};

		o.clearLrcStack = function () {
			var i = this.lrcStack.shift();
			ObjClass.removeClass(this.lyrics[i], "currentLrc");

		};

		o.initialize();
		return o;
	}
};

var lc = LyricController.createNew();