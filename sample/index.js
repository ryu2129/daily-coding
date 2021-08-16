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

    $('.sample15').click(function(){
        $(this).toggleClass('rotate720')
    })

    $('.sample16').click(function(){
        $(this).toggleClass('rotate720')
    })

    $('.sample17').click(function(){
        $(this).toggleClass('rotateY720')
    })

    $('.sample18').click(function(){
        $(this).toggleClass('rotateY720')
    })

    $('.sample22').click(function(){
        $(this).toggleClass('mix')
    })

    $('.menu_button').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })

    $('.menu_button2').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })

    $('.animation_03').on({
        "click":function() {
            $(this).addClass("start_anime01");
        },
        "animationed":function(){
            $(this).removeClass("start_anime01")
        }
    });

    $(window).scroll(function() {
        var windowH = $(window).height(),
        scrollY = $(window).scrollTop();
        $('.animation_04').each(function() {
            var elPosition = $(this).offset().top;
            if (scrollY > elPosition - windowH) {
                $(this).addClass("start_anime02");
            }else{
                $(this).removeClass("start_anime02")
            }
        });
    });

    $('.animation_06').hover(function() {
        $(this).addClass("start_anime04");
    },
    function() {
        $(this).removeClass("start_anime04")
    });

    $('.animate04').on('click', function() {
        $(this).addClass('animated shake').one('webkitAnimationEnd animationend',
        function() {
            $(this).removeClass('animated shake')
        });
    });

    $('.animate05').hover(function() {
        $(this).addClass('animated rubberBand')
    },
    function() {
        $(this).removeClass('animated rubberBand')
    });

    var animationEnd = "webkitAnimationEnd animationend";    
    $('.animate06').on({
        "mouseover":function() {
            $(this).addClass("animated rubberBand").one(animationEnd,
                function() {
                    $(this).removeClass('animated rubberBand')
                });
        }
    });

    $(window).scroll(function() {
        var windowH = $(window).height(),
        scrollY = $(window).scrollTop();
        $('.animate07').each(function() {
            var elPosition = $(this).offset().top;
            if (scrollY > elPosition - windowH) {
                $(this).addClass("animated bounceInLeft");
            }
        })
    })

});
