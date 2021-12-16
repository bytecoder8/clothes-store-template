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

  var nav = document.querySelector('.navigation')
  var navWrapper = document.querySelector('.navigation-wrapper')
  var navToggler = document.querySelector('.navbar-toggler')
  var cartWrapper = document.querySelector('.cart-wrapper')
  navToggler.addEventListener('click', function (event) {
    event.preventDefault()
    if (nav.classList.toggle('navigation--vertical')) {
      navWrapper.classList.remove('d-none')
      cartWrapper.classList.add('d-none')
    } else {
      navWrapper.classList.add('d-none')
      cartWrapper.classList.remove('d-none')
    }
  })
})()
