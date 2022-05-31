$(document).ready(function () {
    $("#myCarousel").carousel({
        interval: 1000
    });
    $('[data-toggle="tooltip"]').tooltip()
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    //Login modal
    $("#loginButton").click(function () {
        $("#loginModal").modal('show');
    });

    // Reserve Table Modal
    $('#reservationButton').click(function () {
        $('#reservationModal').modal('show');
    })
});