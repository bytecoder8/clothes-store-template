(function() {
  new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    }
  })

  var buttonUp = document.querySelector('.footer__button-up')
  buttonUp.addEventListener('click', function (event) {
    event.preventDefault()
    window.scrollTo(0, 0)
  })
})()
