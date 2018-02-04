$(document).ready(function(){
	$.extend({
		lunbotu:function(imag,xiabiaof,xiabiao,youjiantou,zuojiantou,shu,im2){
        // imag为图片选择器，xiabiaof为焦点图焦点的父元素，xiabiao为焦点图的元素，youjiantou为下一张图片按钮节点，左箭头为上一张图片按钮节点
        //shu为图片数量,im2是需要动态从左划入的图片的类的元素
        var wei=0;
        var b=shu-1;
        function show1(){
        wei++;
        if(wei>b){
            wei=0;
        }
        $(imag).eq(wei).fadeIn(600).siblings("div[class^=lun]").fadeOut(600);
        $(xiabiaof).children(xiabiao).eq(wei).css("backgroundImage", "url(imag/20.png)").siblings().css("backgroundImage", "url(imag/19.png)");
        ani();
        
        }
        $(youjiantou).click(function(){
            clearInterval(i);

            if (wei == b) {
            wei=-1;
            
            }
            wei++;
            $(xiabiaof).children(xiabiao).eq(wei).css("backgroundImage", "url(imag/20.png)").siblings().css("backgroundImage", "url(imag/19.png)");
            set1();

            
            
            $(imag).eq(wei).fadeIn(600).siblings("div[class^=lun]").fadeOut(600);
            ani();
        })
        $(zuojiantou).click(function(){
            clearInterval(i);
            if (wei == 0) {
            wei=shu;
            }
            
            wei--;
            $(xiabiaof).children(xiabiao).eq(wei).css("backgroundImage", "url(imag/20.png)").siblings().css("backgroundImage", "url(imag/19.png)");
            set1();
            
            $(imag).eq(wei).fadeIn(600).siblings("div[class^=lun]").fadeOut(600);
        })
        $(xiabiaof).children(xiabiao).mouseover(function(){
            clearInterval(i);
            
            
            
            wei=$(this).index();
            $(xiabiaof).children(xiabiao).eq(wei).css("backgroundImage", "url(imag/20.png)").siblings().css("backgroundImage", "url(imag/19.png)");
            $(imag).eq(wei).fadeIn(600).siblings("div[class^=lun]").fadeOut(600);
            set1();ani();
        })
        
        
        function set1(){
            i=setInterval(show1,4000);
        }
        function ani(){
        	
        	for(var i=0;i<shu;i++){
        		
        		if(imag.eq(i).css("display")=="block"){
    			$(im2).css("left","-1200px");
                $(im2).eq(i).delay(400).animate({"left":"0"},500);
        		
        			
        		}
        		
        	}
        	
        }
        show1();
        set1();
    }
	})
})