
///////////////////////// loadMore 함수 /////////////////////////////////

$(document).ready(function () {
    //초기설정 처음 4개 이미지만 보이게 조절. 처음에 전부 숨기고 1~4만 나와

    $('.box').hide();
    $('.box').slice(0, 6).show();

    /*  
    1) LoadMore 버튼을 누르면 슬라이드 다운되면서 1~8번째가 보임
    2) 버튼 누름 1~12번째 보임

    */

    //slice(start, end) : 시작 인덱스부터 종료 인덱스 이전까지 선택!
    //slice(0,4) : 인덱스 0번 부터 4번 이전까지! >> 0,1,2,3

    $('#loadMore').on('click', function (evt) {
        evt.preventDefault();

        var hiddenBox = $('.box:hidden').length;
        console.log('숨겨진 box 갯수: ' + hiddenBox); //12개

        //1. 숨겨진 상품이 없을 때, alert 알림창 띄우기
        if (hiddenBox === 0) {
            // alert('마지막 상품입니다!')
            $('.box').hide();
            $('.box').slice(0, 6).show();


            // 스크롤 맨 위로 올림
            $('html, body').animate({
                scrollTop: $('.favorite-box').offset().top
            }, 800);

            return;
            //  더이상 슬라이드 다운 하지않게 중지 
        }

        //숨겨진 박스 등장!
        $('.box:hidden').slice(0, 4).slideDown();

        //2) 숨겨진 상품이 없을 때, loadMore 버튼 숨기기

        hiddenBox = $('.box:hidden').length; //슬라이드 다운되고 난 후 값을 다시 구함 남은 숨겨진 박스의 길이 확인을 위해, 변수 한번 더 쓰면 현재상태의 값을 구하게 됨!!!
        console.log('슬라이드다운 후 남은 박스갯수: ' + hiddenBox);

        /* if(hiddenBox === 0) { 
            $('#loadMore').fadeOut();
        } */



        //스크롤 애니메이션 -> box 가 넘치는 공간이 이동거리 
        var offTop = $(this).offset().top;

        $('html, body').animate({
            scrollTop: offTop
        }, 1500);

        //브라우저의 스크롤을 이동할 때 대상은 무조건 'html, body'선택해 움직임!!

    });

    $('.totop > a').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });





});

//스크롤 이벤트 시작코드블럭 밖에서도 사용가능
$(window).scroll(function () {
    console.log('스크롤 이벤트 발생!');

    //현재 스크롤 위치값 반환!
    var scTop = $(this).scrollTop();
    console.log(scTop);

    if (scTop > 200) {
        $('.totop').fadeIn();
    } else {
        $('.totop').fadeOut();
    }
});


///////////////////////   .fadeSlide 함수   ////////////////////////////////

$(document).ready(function () {
    //함수호출!
    //fadeSlide();
    //1. 클릭할 때 마다 함수 호출
    /* $('.viewer').click(function(){
        fadeSlide();
    }); */

    //2. 3초 간격으로 함수 호출 (자동실행) setInterval은 시작코드블럭 없이 바로 사용가능

    // setInterval(fadeSlide, 3000); 

    //3. 이벤트 연결 
    // 마우스를 올렸을 때 자동실행 멈춤 -> clearInterval()
    //마우스가 벗어나면 자동실행!


    var autoCall; //인터벌을 담는 변수

    autoCall = setInterval(fadeSlide, 5000);

    /* $('.main-content').mouseover(function(){
        //인터벌 제거 - 멈춤
        clearInterval(autoCall);
    }).mouseout(function(){
        //인터벌 재가동
        autoCall = setInterval(fadeSlide, 5000);
    }); */
});

/*////////////////////////////////////

함수명 : fadeSlide
기능 : fade 효과를 적용해 슬라이드 전환

///////////////////////////////////*/

function fadeSlide() {

    //1번 - 현재 보여지는 슬라이드, 첫 번째 슬라이드
    var firstSlide = $('.main-content .main-img-slide').first();
    // console.log('첫번째 슬라이드: ' + firstSlide);
    //2번 - 현재 보여지는 슬라이드의 '다음' 슬라이드

    var nextSlide = firstSlide.next();
    // console.log('다음 슬라이드: ' + nextSlide);

    nextSlide.hide().addClass('active').fadeIn(800, function () {
        //다음을 위한 준비!
        //1번 슬라이드를 맨 뒤로 이동!!
        $('.main-content').append(firstSlide);

        //첫번째 슬라이드의 z-index제거!
        firstSlide.removeClass('active');

    });

    //페이저 변경 함수 호출
    pager();
}

function pager (){
    var idx = $('.main-img-slide').eq(1).attr('data-seq');
    console.log('다음 슬라이드의 data-seq: ' +idx);

    $('.pager li').eq(idx).addClass('active').siblings().removeClass('active');
}




