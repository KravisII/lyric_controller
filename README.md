# lyric_controller - 1.3
[This is demo](http://www.kravis.me/lyric_controller)

### Version 1 基本的歌词显示界面
- [x] #### Mar 24, 2016 Version 1.0
	完成歌词显示界面的基本 CSS 布局。

- [x] #### Mar 25, 2016 Version 1.1
	显示当前歌词。

- [x] #### Mar 28, 2016 Version 1.2
	各项优化。

- [x] #### Mar 28, 2016 Version 1.3
	增加 CSS prefix。

### 待优化
- [x] `audioSource.playbackRate == 8` 时可能会漏掉部分歌词；
- [x] 未精确计算每句歌词的动画时间；
- [x] 优化歌词定位算法及 CSS 动画。
	CSS Animation 中对的 `button` 属性的修改导致 DOM 重布局，使动画帧率下降严重，修改 button 属性为 `transform: translateY(-60vh)` 后正常。