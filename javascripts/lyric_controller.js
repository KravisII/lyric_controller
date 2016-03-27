var LyricController = {
	createNew: function () {
		var o = {};
		// properties
		o.name = "LyricController";
		o.audioSource = document.querySelector(".audio-source");
		o.lrcStack = [];
		o.lrcFlags = Array();
		o.maxDuration = 0;
		// o.finded = false;

		// methods
		o.initialize = function () {
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
			this.updateLyrics();
		};

		o.updateLyrics = function () {
			this.lyricText.innerHTML = "";
			var _lrcStr = null;
			this.maxDuration = 0;

			for (var i = 0; i < audio_lrc.length; i++) {
				var _duration = ((parseFloat(audio_lrc[i].endTime) - parseFloat(audio_lrc[i].startTime) + 0.5) / Math.abs(o.audioSource.playbackRate)).toFixed(3);
				this.maxDuration = (this.maxDuration < _duration) ? _duration : this.maxDuration;
				_duration = _duration + "s";
				if (_lrcStr == null) {
					_lrcStr = "<p style='animation-duration: " + _duration + "; -webkit-animation-duration: " + _duration + "'>" + audio_lrc[i].content + "</p>";
				} else {
					_lrcStr += "<p style='animation-duration: " + _duration + "; -webkit-animation-duration: " + _duration + "'>" + audio_lrc[i].content + "</p>";
				}
				this.lrcFlags[i] = false;
			}

			this.maxDuration = this.maxDuration * 1000;
			this.lyricText.innerHTML += _lrcStr;
			this.lyrics = document.querySelectorAll(".lyric-text > p");
		};

		o.addEventListeners = function () {
			this.audioSource.addEventListener("timeupdate", this.onTimeUpdate);
			this.audioSource.addEventListener("ratechange", this.onRateChange);
		};

		o.onTimeUpdate = function () {
			o.findCurrentLrc();
		};

		o.findCurrentLrc = function () {
			for (var i = audio_lrc.length - 1; i >= 0; i--) {
				if (audio_lrc[i].endTime >= o.audioSource.currentTime && audio_lrc[i].startTime <= o.audioSource.currentTime) {
					o.audioSource.removeEventListener("timeupdate", o.onTimeUpdate);
					o.showCurrentLrc(i);
					window.setTimeout( function () {
						o.audioSource.addEventListener("timeupdate", o.onTimeUpdate);
					}, ((audio_lrc[i].endTime - o.audioSource.currentTime) / Math.abs(o.audioSource.playbackRate)) * 1000);

					break;
				}
			}
		};

		o.showCurrentLrc = function (i) {
			o.lyrics[i].className = "currentLrc";
			window.setTimeout(function () {
				o.clearCurrentLrc(i);
			}, o.maxDuration);
		};

		o.clearCurrentLrc = function (i) {
			o.lyrics[i].removeAttribute("class");
			o.lrcFlags[i] = false;
		};

		o.onRateChange = function () {
			o.updateLyrics();
		};

		o.initialize();
		return o;
	}
};

var lc = LyricController.createNew();