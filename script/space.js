//space.js 

// $(document).ready(function(){

//     var box = $('.box1:eq(0) , .box1:eq(1)');  
//     // 선택자를 변수에 담는 이유: 반복되거나 여러군데에서 쓰일때

//     box.find('.img-box1').animate({
//         width : '50%' 
//     }, 800, function(){
//         box.find('.txt-box1').fadeIn(600)
//         $('.txt-box2-1').fadeIn(600)
//     });
// });


$(window).scroll(function(){

    var scTop = $(this).scrollTop();
    console.log(scTop);

    var winHeight = $(this).height();
    console.log('브라우저 화면의 높잇값: ' + winHeight);
    
    var gap = Math.ceil(winHeight * 0.9);
    console.log('gap: ' + gap);


    //1번 박스 등장

    var box1pos = $('.box1').eq(0).offset().top - gap; 
    console.log('3번째 박스 등장 스크롤 기준값: ' + box3pos);

    if (scTop > box1pos) {
        $('.box1').eq(0).find('.img-box1').animate({
            width: '50%'
        },800 , function(){
            $(this).next().fadeIn(600);
            $('.txt-box1').fadeIn(600)
            $('.txt-box2-1').fadeIn(600)
        });
    }

    //2번 박스 등장

    var box2pos = $('.box2').eq(0).offset().top - gap; 
    console.log('3번째 박스 등장 스크롤 기준값: ' + box3pos);

    if (scTop > box2pos) {
        $('.box2').eq(0).find('.img-box2').animate({
            width: '50%'
        },800 , function(){
            $(this).next().fadeIn(600);
            $('.txt-box2').fadeIn(600)
            $('.txt-box2-2').fadeIn(600)
        });
    }

    //3번 박스 등장

    var box3pos = $('.box3').eq(0).offset().top - gap; 
    console.log('3번째 박스 등장 스크롤 기준값: ' + box3pos);

    if (scTop > box3pos) {
        $('.box3').eq(0).find('.img-box3').animate({
            width: '50%'
        },800 , function(){
            $(this).next().fadeIn(600);
            $('.txt-box3').fadeIn(600)
            $('.txt-box2-3').fadeIn(600)
        });
    }

    //4번 박스 등장
    var box4pos = $('.box4').eq(0).offset().top - gap;

    if(scTop > box4pos) {
        $('.box4').eq(0).find('.img-box4').animate({
            width: '50%'
        },800, function(){
            $(this).prev().fadeIn(600);
            $('.txt-box4').fadeIn(600)
            $('.txt-box2-4').fadeIn(600)
        });
    }

});