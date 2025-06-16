//menu.js


$(document).ready(function () {

    //초기설정 - 슬라이드 배치 설정
    //이전 버튼 클릭을 대비하여 마지막 li를 첫번째로 이동

    $('.latte-box-slider .latte-box:last').prependTo('.latte-box-slider');

    //li 한 칸의 크기 구하기 = 슬라이드 하나의 크기 구하기!
    var liW = $('.latte-box-slider .latte-box').width();
    console.log('li하나의 너비:' + liW);

    $('.latte-box-slider').css('margin-left', -liW);

    //다음 버튼을 클릭했을 때!
    $('.next a').click(function (e) {

        e.preventDefault();
        $('.latte-box-slider').animate({
            marginLeft: '-=' + liW //클릭했을 때 마진 -1800이 되어야함 
        }, 800, function () {
            //다음(두번째 클릭)을 위한 준비!
            //1)첫번째 li(슬라이드)를 맨 뒤로 보내기 >> append()
            //2)슬라이드 순서 변경에 따른 ul의 위치 조절하기 >> margin
            $('.latte-box-slider .latte-box').first().appendTo('.latte-box-slider')
            $('.latte-box-slider').css('margin-left', -liW);
        });

    });

    //이전 버튼을 클릭했을 때
    $('.prev a').click(function(e){
        e.preventDefault();
        $('.latte-box-slider').animate({
            marginLeft : '+=' + liW //클릭했을 때 마진 0이 되어야함 
        },800, function(){
            //다음을 위한 준비!!
            $('.latte-box-slider .latte-box:last').prependTo('.latte-box-slider');
            $('.latte-box-slider').css('margin-left', -liW);
        }); 
    });
});