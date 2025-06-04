$(function () {
  //アニメーション
  function showOnScroll() {
    $('.scroll-show').each(function () {
      const elemTop = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll + windowHeight > elemTop + 50) {
        $(this).addClass('visible');
      }
    });
  }

  showOnScroll();
  $(window).on('scroll', showOnScroll);

  // モーダル表示処理
  $('.open-modal').on('click', function () {
    const imgSrc = $(this).data('img');
    const videoSrc = $(this).data('video');
    const desc = $(this).data('desc');

    $('#modal-img').addClass('hidden').attr('src', '');
    $('#modal-video').addClass('hidden').attr('src', '').hide();

    if (videoSrc) {
      $('#modal-video').attr('src', videoSrc).removeClass('hidden').show();
    } else if (imgSrc) {
      $('#modal-img').attr('src', imgSrc).removeClass('hidden');
    }

    $('#modal-desc').text(desc);
    $('#modal').removeClass('hidden');
  });

  $('.close-button').on('click', closeModal);
  $(window).on('click', function (e) {
    if ($(e.target).is('#modal')) {
      closeModal();
    }
  });

  function closeModal() {
    $('#modal').addClass('hidden');
    $('#modal-img').attr('src', '').addClass('hidden');
    $('#modal-video').attr('src', '').addClass('hidden').hide();

    const video = $('#modal-video').get(0);
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
});
