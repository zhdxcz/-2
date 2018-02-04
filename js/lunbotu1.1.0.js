$(document).ready(function(){
    $.fn.lunbo1=function(){
            var aa=$(this);
            // alert($(this).css("width"));
            function lb(obj){
            if($(obj).children("div").position().left<=-600){
              $(obj).children("div").animate({"left":"0"},1)  
            }
            $(obj).children("div").animate({"left":"-=300px"},1000)}
            function _ll(oo){
                return function(){
                    lb(oo)
                }
            }
            setInterval(_ll(aa),1000);

            // setInterval(lb(aa),1000);
            //这种方法只能执行一次
    }
})