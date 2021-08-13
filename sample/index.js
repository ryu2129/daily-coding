jQuery(function($){
    $('.sample11').click(function(){
        $(this).toggleClass('jq_trans');
    });
    $('.sample12').click(function(){
        $('.sample12, .sample12_inner').toggleClass('jq_trans')
    });
});
