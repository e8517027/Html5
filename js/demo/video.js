/*****视频播放控制*******/
define(function(require,exports,module){

		var $=require('jquery');//引用Jquery库
		var videoLib=require('video');//引用视频播放库
		var video=new videoLib('#video');//获取video对象
		
		/**************按钮控制事件*****************/
		$(".btn").click(function(){

			switch(this.value)
			{
				case "0"://播放与暂停
					video.playPause();					
					break;
				case "1"://放大
					video.setWidth("1000");
					video.setHeight("600");
					break;
				case "2"://缩小
					video.setWidth("660");
					video.setHeight("500");
					break;
			}
		});
});