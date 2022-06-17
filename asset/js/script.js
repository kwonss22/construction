window.onload=function() {

    next_bg_on()

    //버튼 클릭했을 때 왼쪽이동
    $('.e_next').on('click', function(){
        $('.eng_c').css('left', '-1440px')
        $('.e_prev svg path').css('fill', '#000')
        $('.e_prev').removeClass('button_bg')
        next_bg_on()
    })
    $('.e_prev').on('click', function(){
        $('.eng_c').css('left', '0')
        $('.e_next svg path').css('fill', '#000')
        $('.e_next').removeClass('button_bg')
        prev_bg_on()
    })

    function next_bg_on() {
        $('.e_next').addClass('button_bg')
        $('.e_next svg path').css('fill', '#fff')
    }

    function prev_bg_on() {
        $('.e_prev').addClass('button_bg')
        $('.e_prev svg path').css('fill', '#fff')
    }

}