/*应用程序启动*/
define(function(require,exports,module){

		var $=require('jquery');//引用Jquery库
		var navigationHelper=require('nav');//引用导航类
		var navObj=new navigationHelper('./','demo','');//实例化导航类

		/*绑定按钮事件*/
		$('.btn').click(function(){
			navObj.pageName=this.id+'.html';//获取按钮ID生成PageName
			navObj.NavigationWindow('800','600','0','0');//导航跳转
		});	
			
});