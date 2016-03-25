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
			this.lyricText.innerHTML += _lrcStr;
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
			// var selectorStr = ".lyric-text p:nth-child(" + i + ")";
			// var lrc = document.querySelector(selectorStr);
			// lrc.style.opacity = 1;
			console.log(i + ":	" + audio_lrc[i].content);
		};

		o.initialize();
		return o;
	}
};

var lc = LyricController.createNew();