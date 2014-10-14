$(document).on('click', '.video', function () {
    var src = "//www.youtube.com/embed/" + this.id + "?html5=1";
    var $videoModal = $('#video-modal');

    $videoModal.find('iframe').attr('src', src);
    $videoModal.modal('show');
});

$(document).on('click', 'a.list-group-item', function (e) {
    var $this = $(this),
        id = $this.data('id');
    e.preventDefault();
    $this.parent('.list-group').find('.active').removeClass('active');
    $this.addClass('active');
    $('#master-fader-images').find('.active').removeClass('active').addClass('invisible');
    $('#'+id).removeClass('invisible').addClass('active');
});
