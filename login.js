window.loginWin = function(type, jsAction){
    var mask = document.createElement('div'),
        tipView = document.createElement('div'),
        view = document.getElementsByTagName("BODY")[0],
		doc = document.getElementsByTagName("HTML")[0];
        doc.style.height = "100%";
		doc.style.overflow = "hidden";
        mask.id = 'loginWinMask';
        tipView.id = 'loginWin';
		mask.style.cssText = "position: fixed;top: 0px;left: 0px;z-index: 100000000;width: 100%;height: 100%;background-color: #000;filter: alpha(opacity=50); opacity: .5;"
		tipView.style.cssText = "position: fixed;top: 50%;left: 50%;z-index: 100000001;width: 400px;height: 472px;margin-top: -236px;margin-left: -200px;font-family: 'microsoft yahei';";
        if(type == 'login'){
            src = 'http://neibulogin.kongfz.com/Pc/Login/iframe?returnUrl=' + location.href+ '?jsAction=' + jsAction;
        }else{
            src = 'http://neibulogin.kongfz.com/Pc/Register/iframe?returnUrl=' + location.href+ '?jsAction=' + jsAction;
        }
        tipViewHtml = "<div class='closeBtn' style='position: absolute;z-index: 1;right: 0;top: 10px;width: 34px;height: 35px;'><a id='loginWinCloseBtn' href='javascript:;' style='display: block;cursor: pointer;width: 18px;height: 18px;background: url(/img/login_ico.png) no-repeat 0 -418px;' title='关闭'></a></div><iframe src='"+ src +"' width='400px' height='472px' frameborder='0' scrolling='no'></iframe>";
        tipView.innerHTML = tipViewHtml;
        view.appendChild(mask);
        view.appendChild(tipView);
        var closeBtin = document.getElementById('loginWinCloseBtn');
        closeBtin.onclick = function(){
            mask.remove();
            tipView.remove();
        }
}
$(function(){
　　var i, paramsArr = window.location.search.substr(1).split('&'), params = {}, aParam;
    for (i = 0; i<paramsArr.length; i++){
        aParamArr = paramsArr[i].split('=');
        if (aParamArr[0].length) {
            params[aParamArr[0]] = decodeURI(aParamArr[1]);
        }
    }
    if(params.jsAction){
        typeof window[params.jsAction] == 'function' && window[params.jsAction]();
    }
});
