$(document).ready(function(){
    
    
    //햄버거메뉴
    $(".panel").click(function() {
        $("#header").removeClass("fixed")
    })
    
    // 햄버거 메뉴 열기
    $(".panel").click(function() {
        $(".mGnb").addClass("mGnbActive")
        return false
    })
    
    // 햄버거 메뉴 닫기
    $(".closeIcon").click(function() {
        $(".mGnb").removeClass("mGnbActive")
        return false
    }) 
     
    //앱다운로드 클릭 시 햄버거 메뉴 닫기
    $(".appDown").click(function() {
        $(".mGnb").removeClass("mGnbActive")
    }) 
    
    //햄버거 메뉴 스크롤 막기
    $(".panel").click(function() {
        $(".wrap02").addClass("scroll")
    })
    
    //
    $(".appDown").click(function() {
        $(".wrap02").removeClass("scroll")
    })
    
    $(".closeIcon").click(function() {
        $(".wrap02").removeClass("scroll")
    })
    
    
    
    // sub.html - 시작
    // 판매 메뉴 열기
    $(".sellingBtn").click(function() {
        $(".sellingMenuList").addClass("activeSubMenuList")
        $(".serviceMenuList").removeClass("activeSubMenuList")
        $(".deliveryMenuList").removeClass("activeSubMenuList")
    })
    $(".serviceBtn").click(function() {
        $(".serviceMenuList").addClass("activeSubMenuList")
        $(".sellingMenuList").removeClass("activeSubMenuList")
        $(".deliveryMenuList").removeClass("activeSubMenuList")
    })
    $(".deliveryBtn").click(function() {
        $(".deliveryMenuList").addClass("activeSubMenuList")
        $(".sellingMenuList").removeClass("activeSubMenuList")
        $(".serviceMenuList").removeClass("activeSubMenuList")
    })
    
    
    //btn색상 변경
    $(".sellingBtn").click(function() {
        $(".sellingBtn").addClass("btnBg")
        $(".serviceBtn").removeClass("btnBg")
        $(".deliveryBtn").removeClass("btnBg")
        $(".sellingBtn").addClass("a")
        $(".serviceBtn").removeClass("a")
        $(".deliveryBtn").removeClass("a")
    })
    
    $(".serviceBtn").click(function() {
        $(".serviceBtn").addClass("btnBg")
        $(".sellingBtn").removeClass("btnBg")
        $(".deliveryBtn").removeClass("btnBg")
        $(".serviceBtn").addClass("a")
        $(".sellingBtn").removeClass("a")
        $(".deliveryBtn").removeClass("a")
    })
    
    $(".deliveryBtn").click(function() {
        $(".deliveryBtn").addClass("btnBg")
        $(".sellingBtn").removeClass("btnBg")
        $(".serviceBtn").removeClass("btnBg")
        $(".deliveryBtn").addClass("a")
        $(".sellingBtn").removeClass("a")
        $(".serviceBtn").removeClass("a")
    })
    
     $(".grey").click(function() {
        $(".grey").removeClass("grey")
    })
    
    
    
    
    
    // 판매 lnb 열고 닫기
    $(".sellingMenuList01 a").click(function() {
        $(".sellingMenuList01 .lnb").addClass("lnbActive")
        $(".sellingMenuList02 .lnb").removeClass("lnbActive")
        $(".sellingMenuList03 .lnb").removeClass("lnbActive")
        $(".sellingMenuList04 .lnb").removeClass("lnbActive")
    })
    
    $(".sellingMenuList02 a").click(function() {
        $(".sellingMenuList02 .lnb").addClass("lnbActive")
        $(".sellingMenuList01 .lnb").removeClass("lnbActive")
        $(".sellingMenuList03 .lnb").removeClass("lnbActive")
        $(".sellingMenuList04 .lnb").removeClass("lnbActive")
    })
    
    $(".sellingMenuList03 a").click(function() {
        $(".sellingMenuList03 .lnb").addClass("lnbActive")
        $(".sellingMenuList01 .lnb").removeClass("lnbActive")
        $(".sellingMenuList02 .lnb").removeClass("lnbActive")
        $(".sellingMenuList04 .lnb").removeClass("lnbActive")
    })
    
    $(".sellingMenuList04 a").click(function() {
        $(".sellingMenuList04 .lnb").addClass("lnbActive")
        $(".sellingMenuList01 .lnb").removeClass("lnbActive")
        $(".sellingMenuList02 .lnb").removeClass("lnbActive")
        $(".sellingMenuList03 .lnb").removeClass("lnbActive")
    })
    
    
    // 서비스 lnb 열고 닫기
    $(".serviceMenuList01 a").click(function() {
        $(".serviceMenuList01 .lnb").addClass("lnbActive")
        $(".serviceMenuList02 .lnb").removeClass("lnbActive")
        $(".serviceMenuList03 .lnb").removeClass("lnbActive")
        $(".serviceMenuList04 .lnb").removeClass("lnbActive")
    })
    
    $(".serviceMenuList02 a").click(function() {
        $(".serviceMenuList02 .lnb").addClass("lnbActive")
        $(".serviceMenuList01 .lnb").removeClass("lnbActive")
        $(".serviceMenuList03 .lnb").removeClass("lnbActive")
        $(".serviceMenuList04 .lnb").removeClass("lnbActive")
    })
    
    $(".serviceMenuList03 a").click(function() {
        $(".serviceMenuList03 .lnb").addClass("lnbActive")
        $(".serviceMenuList01 .lnb").removeClass("lnbActive")
        $(".serviceMenuList02 .lnb").removeClass("lnbActive")
        $(".serviceMenuList04 .lnb").removeClass("lnbActive")
    })
    
    $(".serviceMenuList04 a").click(function() {
        $(".serviceMenuList04 .lnb").addClass("lnbActive")
        $(".serviceMenuList01 .lnb").removeClass("lnbActive")
        $(".serviceMenuList02 .lnb").removeClass("lnbActive")
        $(".serviceMenuList03 .lnb").removeClass("lnbActive")
    })
    
    
    
    // 배달 lnb 열고 닫기
    $(".deliveryMenuList01 a").click(function() {
        $(".deliveryMenuList01 .lnb").addClass("lnbActive")
        $(".deliveryMenuList02 .lnb").removeClass("lnbActive")
        $(".deliveryMenuList03 .lnb").removeClass("lnbActive")
        $(".deliveryMenuList04 .lnb").removeClass("lnbActive")
    })
    
    $(".deliveryMenuList02 a").click(function() {
        $(".deliveryMenuList02 .lnb").addClass("lnbActive")
        $(".deliveryMenuList01 .lnb").removeClass("lnbActive")
        $(".deliveryMenuList03 .lnb").removeClass("lnbActive")
        $(".deliveryMenuList04 .lnb").removeClass("lnbActive")
    })
    
    $(".deliveryMenuList03 a").click(function() {
        $(".deliveryMenuList03 .lnb").addClass("lnbActive")
        $(".deliveryMenuList01 .lnb").removeClass("lnbActive")
        $(".deliveryMenuList02 .lnb").removeClass("lnbActive")
        $(".deliveryMenuList04 .lnb").removeClass("lnbActive")
    })
    
    $(".deliveryMenuList04 a").click(function() {
        $(".deliveryMenuList04 .lnb").addClass("lnbActive")
        $(".deliveryMenuList01 .lnb").removeClass("lnbActive")
        $(".deliveryMenuList02 .lnb").removeClass("lnbActive")
        $(".deliveryMenuList03 .lnb").removeClass("lnbActive")
    })
    
    
    
    //앱 이용가이드 슬라이더 시작
    $('.slideWrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="../common/images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="../common/images/common/nextBtn.png"></div>'
	});

    
    $('.iphoneList').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="../common/images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="../common/images/common/nextBtn.png"></div>'
	});
    
    
    //모바일 컨텐츠 04 리스트 
    $('.mCon05List').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        autoplay: true,
        dots: true,
        prevArrow:'<div class="slideBtn slidePrev"><img src="../common/images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="../common/images/common/nextBtn.png"></div>'
	});
    
    
    //앱 이용가이드 슬라이드 이동
    $('a[data-selling-slider]').click(function(e) {
        e.preventDefault();
        var slideNumber = $(this).data('selling-slider'); // 1
        console.log('slick go to', slideNumber)
        $('.slideWrap').slick('slickGoTo', slideNumber - 1);
    })
    
    $('a[data-service-slider]').click(function(e) {
        e.preventDefault();
        var slideNumber = $(this).data('service-slider'); // 1
        console.log('slick go to', slideNumber)
        $('.slideWrap').slick('slickGoTo', slideNumber - 1);
    })
    
    
    
    
    


})

window.addEventListener('load', function(event){
    AOS.init()
});


