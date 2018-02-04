
$(document).ready(function(){
	var o;
	var t;
	var z;
	var clienth;
//	=window.innerHeight;
	var clientw;
//	=window.innerWidth;
    var ww1=1920;
    var hh1=885;
    var deg1=0;
    var deg2=0;
	function huowh(){
		var clienth1=window.innerHeight;
		var clientw1=window.innerWidth;
//		alert(clienth1+"<br>"+clientw1);
		var h1=clienth1/hh1;
		
		var w1=clientw1/ww1;
		
		if(h1>1){
			h1=1;
		}
		if(w1>1){
			w1=1;
		};
		
		$(".div6").css("transform",'scale('+w1+','+h1+')');
		$(".div15").css("transform",'scale('+w1+','+h1+')');
		$(".div2").css("transform",'scale('+w1+','+h1+')');
//		alert($(".div6").css("transform"));
		//Y轴响应改变
		if(clienth!=clienth1){
			$(".divv").children("div").css("height",clienth1);
//			$(".div3").css({"height":clienth1*0.53,"top":clienth1*0.53*0.39});//1部分Y响应改变
//			$(".div6").css({"height":clienth1,"top":clienth1*0.1});
			clienth=clienth1;
			
		}
		
		//X轴响应改变
		if(clientw!=clientw1){
			
			$(".divv").children("div").css("width",clientw1);
//			console.log(clientw1);
//			console.log((-clientw1)/2);
//			$(".div3").css({"width":clientw1*0.53,"margin-left":(-clientw1*0.43)/2});//1部分X响应改变
//			$(".div6").css({"width":clientw1*0.65,"margin-left":(-clientw1*0.43)/2});
			clientw=clientw1;
			
		}
		
	}
	huowh();
	$(window).resize(huowh);
	//轮播效果
	var wei=0;
	$(".li4").eq(0).css("background","url(image/24.png) 0px -14px");
	$("body").mousewheel(function(e,delta,deltaX,deltaY){
		 
		    
			if(delta<0){
				if(wei==4){
					wei=4;
				}
				else{
				wei+=1;	
				}
				
//				$(document).scrollTop(wei*clienth);
                $(".divv").animate({"top":-wei*clienth},1000);
				console.log(wei);
				$(".li4").eq(wei).css("background","url(image/24.png) 0px -14px").siblings().css("background","url(image/24.png)")
			
			}
		    else{
		    	if(wei==0){
		    		wei=0;
		    	}
		    	else{
		    	wei-=1;	
		    	}
		    	
//		    	$(document).scrollTop(wei*clienth);
                $(".divv").animate({"top":-wei*clienth},1000);
		    	$(".li4").eq(wei).css("background","url(image/24.png) 0px -14px").siblings().css("background","url(image/24.png)")
		    }
		    
		    switch(parseInt(wei)){
		    	
		    	case 0:guiling();setTimeout(tu0,1000);break;
		    	case 1:tu1();break;
		    	case 2:tu2();break;
		    	case 3:tu3();break;
		    	case 4:tu4();
		    }
		    
	});
	tu0();
	for(var i=0;i<5;i++){
	$(".li4").eq(i).click(function(e){
		wei=$(e.target).index();
//		$(document).scrollTop(wei*clienth);
        $(".divv").animate({"top":-wei*clienth},1000);
		$(".li4").eq(wei).css("background","url(image/24.png) 0px -14px").siblings().css("background","url(image/24.png)")
	    switch(parseInt(wei)){
		    	
		    	case 0:guiling();setTimeout(tu0,1000);break;
		    	case 1:tu1();break;
		    	case 2:tu2();break;
		    	case 3:tu3();break;
		    	case 4:tu4();
		    }
	
	
	
	
	})
	}
	function guiling(){
		clearInterval(i);
		$(".im1").css({"left":"-30%","opacity":"0"});
		$(".im3").css({"top":"100%","opacity":"0"});
		$(".div7").css("opacity","0");
		clearInterval(o);
		clearInterval(t);
		$(".div16").css("opacity","0");
		clearInterval(z);
		$(".div29").css({"opacity":"0","left":"900px"});
		$(".im4").css({"opacity":"0","left":"-100px","top":"400px"});
	}
	function tu0(){
		
		$(".im1").animate({"left":"32%","opacity":"1"},1000);
		$(".im3").animate({"top":"40%","opacity":"1"},1000);
		tu00();
		function tu00(){
		$(".im2").animate({"top":"290"},600).animate({"top":"250"},600);	
		}
		i=setInterval(tu00,1200);
		
	}
	function tu1(){
		guiling();
		var p=0;

		var clq1;
		var clq2;
		var zongji;
		$(".div7").animate({"opacity":"1"},2000);
		
		
		o=setInterval(clq,100);
		function clq(){
		clq1=Math.floor(Math.random()*40000);
		clq2=Math.floor(Math.random()*40000);
		zongji=(clq1+clq2)*2;
		$(".span7").html(clq1);	
		$(".span5").html(clq2);	
		$(".span6").html(zongji);
		p++;
		if(p>40){
			clearInterval(o);
			p=0;
		}
		}
	}
    function tu2(){
    	guiling();
    	deg1=10;
    	$(".im5").css("transform","rotate("+deg1+"deg)");
    	$(".div7").delay(1000).animate({"opacity":"1"},2000);
    	setTimeout(function(){
    	t=setInterval(xuan,50);	
    	},1500);
    	
    	function xuan(){
    		if(deg1==360){
    		deg1=0;
    	}
    	else{
    		deg1+=5;
    	}
    	$(".im5").css("transform","rotate("+deg1+"deg)");
    	}
    	$(".div33").delay(4500).animate({"opacity":"1"},100);
    	$(".div17").delay(2000).animate({"opacity":"1"},100);
    	$(".div18").delay(2500).animate({"opacity":"1"},100);
    	$(".div19").delay(3000).animate({"opacity":"1"},100);
    	$(".div20").delay(3500).animate({"opacity":"1"},100);
    	$(".div21").delay(4000).animate({"opacity":"1"},100);
    	
    }
    function tu3(){
    	guiling();
    	deg2=10;
    	$(".div28").css("transform","rotate("+deg2+"deg)");
    	$(".div7").delay(1000).animate({"opacity":"1"},2000);
    	$(".div29").delay(1000).animate({"opacity":"1","left":"500"},1000).animate({"left":"600"},350).animate({"left":"500"},350);
    	setTimeout(function(){
    		z=setInterval(xuan1,50)
    	},1500);
    	function xuan1(){
    		if(deg2==360){
    		deg2=0;
    	}
    	else{
    		deg2+=5;
    	}
    	$(".div28").css("transform","rotate("+deg2+"deg)");
    	}
    }
    function tu4(){
    	guiling();
    	$(".div7").delay(1000).animate({"opacity":"1"},2000);
    	$(".im4").delay(1000).animate({"left":"100","top":"100","opacity":"1"},1500)
    	
    }
})

