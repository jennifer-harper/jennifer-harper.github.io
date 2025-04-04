document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger, CustomEase, ScrollSmoother)
  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    normalizeScroll: true,
    effects: true,
    preventDefault: true,
  })

  // Function to recalculate navHeight on window resize
  function updateNavHeight() {
    let nav = $('#logo').innerHeight()
    navHeight = nav + 40
    console.log(navHeight)
    ScrollTrigger.refresh()
  }
  updateNavHeight()

  window.addEventListener('resize', updateNavHeight)

  //   GSAP animations
  let mm = gsap.matchMedia()
  var marker = { startColor: 'green', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20, zIndex: 2000 }

  function firstSection() {
    let tl = gsap.timeline({
      defaults: { duration: 1, ease: 'none' },
      scrollTrigger: {
        trigger: '#ambitious-pin',
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        start: 'top top+=' + navHeight,
        end: 'bottom top',
        invalidateOnRefresh: true,
        markers: marker,
      },
    })
    gsap.set('#ambitious-pin img', { yPercent: 0 })
    tl.to('#ambitious-pin img', { yPercent: -48 })
  }

  mm.add('(min-width: 1024px)', () => {
    firstSection()
  })
  mm.add('(max-width: 1023px)', () => {
    gsap.set('#ambitious-pin img', { yPercent: 0 })
  })
})
