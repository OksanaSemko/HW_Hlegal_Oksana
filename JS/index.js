$('.title_sect-2').click(function () {
    const currentTurget = $(this)
    const type = currentTurget.data('type')
    $('.hero').removeClass('hero')
    // const tab = $('#${type}')
    const tab = $('#' + type)
    $('.right-box_sect-2').each(function () {
        $(this).addClass('hide')
    });
    tab.removeClass('hide')
    currentTurget.addClass('hero')
})