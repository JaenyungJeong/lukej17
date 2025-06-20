//gallery.js

var autocall; //인터벌을 담을 변수!

$(document).ready(function(){

    autocall = setInterval(flow, 20);  // 흘러가는 속도 조절 -> 자동실행 시간으로 조절!

    //마우스 오버 시 멈춤, 아웃시 다시 실행

     $('.flow li').hover(function(){
        //mouseenter
        // 1) 자동실행 멈춤 - 인터벌 지우기
        // 2) .caption 등장!

        clearInterval(autocall);

        $(this).find('.caption').animate({
            top: '105%',
            opacity: 1
        }, 500);

    }, function(){
        //mouseleave
        //1) 자동실행 - 인터벌 재실행
        //2) .caption 숨기기

        autocall = setInterval(flow, 20);

        $(this).find('.caption').hide(0, function(){
            $(this).css({  // display: none 상태인 것을 보이게 조절
                top: '50%',
                opacity: 0,
                display: 'block'
            });
        });
    }); 

});


/*////////////////////////////////////////////////////////////
함수명 : flow
기능 : 컨텐츠를 왼쪽으로 흐르게 하는 함수!
///////////////////////////////////////////////////////////*/

var moveNum = 0; // 이동하는 left 값을 담을 변수!

function flow (){

    moveNum++; //left 이동값을 1씩 증가


    //(무한반복을 위해) 다음을 위한 준비!
    // li 하나의 너비보다 이동한 left값(moveNum)이 커졌을 때

    var boxWidth = $('.flow li').first().outerWidth();  // outerWidhth 는 마진 너비까지 

    //if else 문
    if(moveNum > boxWidth) {
        // 이동한 픽셀수가 li 하나의 너비보다 커졌을 때! >> 다음을 위한 준비!
        // (왼쪽으로 흘러가서) 사라진 첫번째 li를 .flow 의 맨 뒤로 이동 >> append
        // .flow 의 li 순서가 변경되었으므로 left값 초기화!
        // 동시에 이동값 초기화 (moveNum)

        $('.flow').append('.flow li').first().css({
            left : 0
        });

        moveNum = 0;  //위치 0으로 초기화후 이미지의 이동값도 0으로 초기화


    } else {
        $('.flow').css({
            left : -moveNum
        });
    }

    
}