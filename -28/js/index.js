$(function(){
	//banner轮播图
	var 
		order=0,
		oTimer=null;
	autoPlay();
	function autoPlay(){
		oTimer=setInterval(function(){
			order++;
			if(order==$(".focusBox > li").length){
				order=0;
			}
			show(order);
		},6000);
	}
	function show(order){
		$(".focusBox > li").stop(true).fadeOut(600);
		$(".num > span").removeClass("active");
		$(".num > span").eq(order).addClass("active");
		$(".focusBox > li").eq(order).stop(true).fadeIn(600);
	}
	$(".num > span").on("mouseenter",function(){
		show($(this).index());
		order=$(this).index();
	});
	$(".focusBox > li").hover(
		function(){
			clearInterval(oTimer);
		},
		function(){
			autoPlay();
		}
	);
	//banner轮播图 end

	//顶部广告图
	$(".focusPic_close").on("click",function(){
		$("#focusPic img").attr("src","img/adtop.jpg");
		$("#focusPic").animate({"height":270});
		$(".focusPic_close").text("收起");
		$(".focusPic_close").on("click",function(){
			$("#focusPic img").attr("src","img/indextop.jpg");
			$("#focusPic").animate({"height":80});
			$(".focusPic_close").text("展开");
		});
	});
	//顶部广告图 end
	//底部动画
	$(".floor6pic img").hover(
		function(){
			$(this).stop(true).animate({"right":0});
		},
		function(){
			$(this).stop(true).animate({"left":0});
		}
	);
	//底部动画 end
	//main 轮播图
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 5000//可选选项，自动滑动
    });

});