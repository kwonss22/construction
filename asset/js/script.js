window.onload=function() {

    //버튼 클릭했을 때 왼쪽이동
    $('.e_next').on('click', function(){
        $('.eng_c').css('left', '-1440px')
        
    })
    $('.e_prev').on('click', function(){
        $('.eng_c').css('left', '0')
    })

    $('.e_next').focus()
}