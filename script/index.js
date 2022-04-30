$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        mouseDrag: false,
        loop: true,
        margin: 2,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $('.owl-prev').click(function () {
        $active = $('.owl-item .item.show');
        $('.item.show').removeClass('show');
        $('.item').removeClass('next');
        $('.item').removeClass('prev');
        $active.addClass('next');
        if ($active.is('.first')) {
            $('.last').addClass('show');
            $('.first').addClass('next');
            $('.last').parent().prev().children('.item').addClass('prev');
        } else {
            $active.parent().prev().children('.item').addClass('show');
            if ($active.parent().prev().children('.item').is('.first')) {
                $('.last').addClass('prev');
            } else {
                $('.show').parent().prev().children('.item').addClass('prev');
            }
        }
    });

    $('.owl-next').click(function () {
        $active = $('.item.show');
        $('.item.show').removeClass('show');
        $('.item').removeClass('next');
        $('.item').removeClass('prev');
        $active.addClass('prev');
        if ($active.is('.last')) {
            $('.first').addClass('show');
            $('.first').parent().next().children('.item').addClass('prev');
        } else {
            $active.parent().next().children('.item').addClass('show');
            if ($active.parent().next().children('.item').is('.last')) {
                $('.first').addClass('next');
            } else {
                $('.show').parent().next().children('.item').addClass('next');
            }
        }
    });

// Repeat
$('.owl-prev').click(function () {
    $active = $('.item.show1');
    $('.item1.show1').removeClass('show1');
    $('.item1').removeClass('next1');
    $('.item1').removeClass('prev1');
    $active.addClass('next1');
    if ($active.is('.first1')) {
        $('.last1').addClass('show1');
        $('.first1').addClass('next1');
        $('.last1').parent().prev().children('.item1').addClass('prev1');
    } else {
        $active.parent().prev().children('.item1').addClass('show1');
        if ($active.parent().prev().children('.item1').is('.first1')) {
            $('.last1').addClass('prev1');
        } else {
            $('.show1').parent().prev().children('.item1').addClass('prev1');
        }
    }
});

$('.owl-next').click(function () {
    $active = $('.item1.show1');
    $('.item1.show1').removeClass('show1');
    $('.item1').removeClass('next1');
    $('.item1').removeClass('prev1');
    $active.addClass('prev1');
    if ($active.is('.last1')) {
        $('.first1').addClass('show1');
        $('.first1').parent().next().children('.item1').addClass('prev1');
    } else {
        $active.parent().next().children('.item1').addClass('show1');
        if ($active.parent().next().children('.item1').is('.last1')) {
            $('.first1').addClass('next1');
        } else {
            $('.show1').parent().next().children('.item1').addClass('next1');
        }
    }
});

});
