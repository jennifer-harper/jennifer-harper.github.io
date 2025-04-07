document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)
  function educapps() {
    var tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
    })
    tl.from('.ear', { svgOrigin: '46 73', rotate: -45, ease: 'power1.inOut', duration: 1 }, 0)
      .to('.noise', { scale: 1.5, ease: 'power1.inOut', duration: 1 }, 0)
      .to('.noise', { scale: 1, ease: 'power1.inOut', duration: 1 }, 1)
      .from('.head', { rotate: -5, transformOrigin: '-20% 100%', ease: 'power1.inOut', duration: 1 }, 1)
      .to('.ear', { svgOrigin: '46 73', rotate: -45, ease: 'power1.inOut', duration: 1 }, 1)
  }

  function zoom() {
    gsap.set('.zoom', { scale: 2, transformOrigin: '50% 50%' }, 0)
    const section = document.querySelectorAll('.zoom')

    section.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=200',
          toggleActions: 'play none none none',
        },
      })

      tl.to(section, 2, { scale: 1, ease: Power1.easeInOut })

      ScrollTrigger.create({
        trigger: section,
        id: index + 1,
        start: 'top center',
        toggleActions: 'play none none reverse',
        animation: tl,
      })
    })
  }
  educapps()
  zoom()
})
