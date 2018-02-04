$(document).ready(function(){
 $.extend({
    cedaohang:function(hx,pachi){
        // hx为h系列标签为单击的元素
        // pachi为hx父亲的孩子的元素即要隐藏显示的元素
             
        $(hx).click(function(){
            if($(this).parent().children(pachi).css("display")=="block"){
            $(this).parent().children(pachi).css("display","none");  
            }
            else{
            $(this).parent().siblings().andSelf().children(pachi).css("display","none");
            $(this).parent().children(pachi).css("display","block");    
            }
            
        })
    
    },
    huarutupianfangda:function(imag,wid,hei,wwid,hhei,tim){
    // imga为图片选择器，wid，hei为图片原本宽高，wwid，hhei为图片放大宽高，tim为时间
        for(var i=0;i<4;i++){
            $(imag).eq(i).mouseover(function(){
                $(this).animate({"width":+wwid+"px","height":+hhei+"px","top":"-="+(hhei-hei)/2+"px","left":"-="+(wwid-wid)/2+"px"},tim)
                $(this).css({"z-index":"2","opacity":"1"}).siblings().css({"z-index":"0","opacity":"0.5"});
            })
             $(imag).eq(i).mouseout(function(){
                $(this).animate({"width":+wid+"px","height":+hei+"px","top":"+="+(hhei-hei)/2+"px","left":"+="+(wwid-wid)/2+"px"},tim);
               
            })
        }
    },
    lunbotu:function(imag,xiabiaof,xiabiao,youjiantou,zuojiantou,shu){
        // imag为图片选择器，xiabiaof为焦点图焦点的父元素，xiabiao为焦点图的元素，youjiantou为下一张图片按钮节点，左箭头为上一张图片按钮节点
        var wei=0;
        function show1(){
        wei++;
        var b=shu-1;
        if(wei>b){
            wei=0;
        }
        $(imag).eq(wei).fadeIn(600).siblings().fadeOut(600);
        $(xiabiaof).children(xiabiao).eq(wei).css("background","#f00").siblings().css("background","#05e9e2");
        
        
        }
        $(youjiantou).click(function(){
            clearInterval(i);

            if (wei == b) {
            wei=-1;
            
            }
            wei++;
            $(xiabiaof).children(xiabiao).eq(wei).css("background","#f00").siblings().css("background","#05e9e2");
            set1();

            
            
            $(imag).eq(wei).fadeIn(600).siblings().fadeOut(600);

        })
        $(zuojiantou).click(function(){
            clearInterval(i);
            if (wei == 0) {
            wei=shu;
            }
            
            wei--;
            $(xiabiaof).children(xiabiao).eq(wei).css("background","#f00").siblings().css("background","#05e9e2");
            set1();
            
            $(imag).eq(wei).fadeIn(600).siblings().fadeOut(600);
        })
        $(xiabiaof).children(xiabiao).mouseover(function(){
            clearInterval(i);
            
            $(this).css("background","#f00").siblings().css("background","#05e9e2");
            
            wei=$(this).index();
            
            $(imag).eq(wei).fadeIn(600).siblings().fadeOut(600);
            set1();
        })
        
        
        function set1(){
            i=setInterval(show1,4000);
        }
        
        show1();
        set1();
    }


})   
})
