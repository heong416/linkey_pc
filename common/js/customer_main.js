$(document).ready(function(){
    
    
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
    
    
    
    
    //슬라이더 시작
    $('.con07Slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        dots: true,
        prevArrow:'<div class="slideBtn slidePrev"><img src="../common/images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="../common/images/common/nextBtn.png"></div>'
	});
    
    $('.searchList').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        dots: true,
        autoplay: true,
        prevArrow:'<div class="slideBtn slidePrev"><img src="../common/images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="../common/images/common/nextBtn.png"></div>'
	});
    
     $('.mCon05IphoneList').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        dots: true,
        prevArrow:'<div class="slideBtn slidePrev"><img src="../common/images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="../common/images/common/nextBtn.png"></div>'
	});
    
    
    
    
     $('.slideWrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="../common/images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="../common/images/common/nextBtn.png"></div>'
	});
    
    
    
    //컨텐츠03 FONT-WEIGHT
    $(window).scroll(function() {
        var textBoxOffset = $(".con03Txt").offset()
        var shoppingText = $(".con03Txt01")
        var bookingText = $(".con03Txt02")
        var deliveryText = $(".con03Txt03")
        
        var shoppingImageOffset = $(".con03Img01").offset()
        var bookingImageOffset = $(".con03Img02").offset()
        var deliveryImageOffset = $(".con03Img03").offset()
        
        var textList = [shoppingText, bookingText, deliveryText]
        
        function reset() {
            textList.forEach(function(text) {
                console.log(">>>>", text)
                text.removeClass("bold")
            })
        }

        if (textBoxOffset.top < shoppingImageOffset.top) {
            reset()
        }
        if(textBoxOffset.top > shoppingImageOffset.top){
            reset()
            shoppingText.addClass("bold");
        }
        if (textBoxOffset.top > bookingImageOffset.top) {
            reset()
            bookingText.addClass("bold");
        }
        if (textBoxOffset.top > deliveryImageOffset.top) {
            reset()
            shoppingText.removeClass("bold");
            deliveryText.addClass("bold");
        }
    })

    
    
    
    $(window).scroll(function() {
        var mTextBoxOffset = $(".mCon03Txt").offset()
        var mShoppingText = $(".mCon03Txt01")
        var mBookingText = $(".mCon03Txt02")
        var mDeliveryText = $(".mCon03Txt03")
        
        var mShoppingImageOffset = $(".mCon03Img01").offset()
        var mBookingImageOffset = $(".mCon03Img02").offset()
        var mDeliveryImageOffset = $(".mCon03Img03").offset()
        
        var mTextList = [mShoppingText, mBookingText, mDeliveryText]
        
        function reset() {
            mTextList.forEach(function(text) {
                console.log(">>>>", text)
                text.removeClass("mbold")
            })
        }

        if (mTextBoxOffset.top < mShoppingImageOffset.top) {
            reset()
        }
        if(mTextBoxOffset.top > mShoppingImageOffset.top){
            reset()
            mShoppingText.addClass("mbold");
        }
        if (mTextBoxOffset.top > mBookingImageOffset.top) {
            reset()
            mBookingText.addClass("mbold");
        }
        if (mTextBoxOffset.top > mDeliveryImageOffset.top) {
            reset()
            mShoppingText.removeClass("mbold");
            mDeliveryText.addClass("mbold");
        }
    })


})

window.addEventListener('load', function(event){
    AOS.init()
});
