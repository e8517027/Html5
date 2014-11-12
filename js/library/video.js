/***************视频播放库****************/
define(function(require,exports,module){

		var $=require('jquery');//引用Jquery库

		/*定义视频控制类*/
		function VideoControl(container){
			this.videoplayer=$(container);//获取视频控制元素
			this.playstatusText="";
			/********************事件处理******************/
			this.videoplayer.bind('play',function(evt){
				/******播放事件*******/
				alert('播放');
			});
			this.videoplayer.bind('pause',function(evt){
				alert('暂停');
			});
		};

		/*****************定义视频控制原型*****************/
		/*****************定义属性变量*********************/
		/*当前视频控件属性*/
		VideoControl.prototype.currentVideoControl=this.videoplayer;


		/*获取可播放类型*/
		VideoControl.prototype.canPlayType=function(){
			return this.videoplayer[0].canPlayType;
		};

		/*播放暂停方法*/
		VideoControl.prototype.playPause=function(){
			if(this.videoplayer[0].paused){ //判断播放器是否为暂停状态
				this.videoplayer[0].play();
				this.playstatusText="播放";
			}
			else {
				this.videoplayer[0].pause();//播放暂停
				this.playstatusText="暂停";
			}
		};

		/*加载播放视频*/
		VideoControl.prototype.load=function(){
			this.videoplayer[0].load();
		};


		/*设置播放器宽度*/
		VideoControl.prototype.setWidth=function(width){
			this.videoplayer[0].width=width;
		};
		/*设置播放器高度*/
		VideoControl.prototype.setHeight=function(height){
			this.videoplayer[0].height=height;
		};
		


		module.exports=VideoControl;//公开视频类
});