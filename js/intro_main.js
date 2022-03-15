$(document).ready(function(){
    
    //헤더 고정
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        if(sct>0){
            $("header").addClass("fixed");
    }else if(sct==0){
        $("header").removeClass("fixed");
        }
    })
    
    
    //햄버거메뉴
    $(".panel").click(function() {
        $("#header").removeClass("fixed")
    })
    
    // 햄버거 메뉴 열기
    $(".panel").click(function() {
        $(".mGnb").addClass("mGnbActive")
    })
    
    // 햄버거 메뉴 닫기
    $(".closeIcon").click(function() {
        $(".mGnb").removeClass("mGnbActive")
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
    


})

window.addEventListener('load', function(event){
    AOS.init()
});


