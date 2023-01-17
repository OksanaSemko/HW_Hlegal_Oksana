                                                // TABs
$('.title_sect-2').click(function () {
    const currentTurget = $(this)
    const type = currentTurget.data('type')
    $('.hero').removeClass('hero')
    // const tab = $('#${type}')
    const tab = $('#' + type)
    $('.right-box_sect-2').each(function () {
        // $(this).addClass('hide')
        $(this).fadeOut(0)
    });
    tab.fadeIn(500)
    // tab.removeClass('hide')
    currentTurget.addClass('hero')
})

                                            // SLIDER
  $('.slider_sect_4').slick({
    arrows: false,
    dots: true
  });

                                            // BURGER MENU
$(document).ready(function () {
    $('.burger_menu').click(function (event) {
      $('.burger_menu,.bottom-box').toggleClass('active');
    });
});
