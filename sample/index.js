jQuery(function($){
    $('.sample11').click(function(){
        $(this).toggleClass('jq_trans');
    });
    $('.sample12').click(function(){
        $('.sample12, .sample12_inner').toggleClass('jq_trans')
    });
    $('.sample14').click(function(e){
        $('.sample14_circle').css({
            left: e.pageX - $(this).offset().left - 15 + 'px',
            top: e.pageY - $(this).offset().top - 15 + 'px',
        });
        return false;
    })
});
