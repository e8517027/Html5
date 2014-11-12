/***************导航跳转模块****************/
define(function(require,exports,module){
	/*定义导航类*/
	/*_rootPath:模块路径 _moduleName:模块名称 _pageName:导航页面名称*/
	function NavigationHelper(_rootPath,_moduleName,_pageName){
		this.rootPath=_rootPath;
		this.moduleName=_moduleName;
		this.pageName=_pageName;
	}

	/*导航原型方法-直接导航*/
	NavigationHelper.prototype.Navigation=function(){
		window.location.href=this.rootPath+this.moduleName+'/'+this.pageName;
	};

	/*导航原型方法-打开窗口导航*/
	NavigationHelper.prototype.NavigationWindow=function(width,height,left,top){
		window.open(this.rootPath+this.moduleName+'/'+this.pageName,'','width='+width+',height='+height+',top='+top+',left='+left);
	};

	module.exports=NavigationHelper;//对外公开接口
});