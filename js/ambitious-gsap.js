document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger, CustomEase, ScrollSmoother)

  let smoother
  let navHeight = 0

  function updateNavHeight() {
    let nav = $('#logo').innerHeight()
    navHeight = nav + 40
    console.log('navHeight:', navHeight)
  }

  function createSmoother() {
    if (smoother) smoother.kill()
    smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      normalizeScroll: true,
      effects: true,
      preventDefault: true,
    })
  }

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
      },
    })
    gsap.set('#ambitious-pin img', { yPercent: 0 })
    tl.to('#ambitious-pin img', { yPercent: -48 })
  }

  function secondSection() {
    let tl = gsap.timeline({
      defaults: { duration: 1, ease: 'none' },
      scrollTrigger: {
        trigger: '#gentle-pin',
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        start: 'top top+=' + navHeight,
        end: 'bottom top',
        invalidateOnRefresh: true,
      },
    })
    gsap.set('#gentle-pin .animated', { position: 'absolute', top: 0, left: 0 })
    tl.to('#gentle-pin .animated', { bottom: 0, top: 'unset' })
  }

  function setupAnimations() {
    let mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      updateNavHeight()
      createSmoother()
      firstSection()
      secondSection()
    })

    mm.add('(max-width: 1023px)', () => {
      updateNavHeight()
      if (smoother) smoother.kill()
      gsap.set('#ambitious-pin img', { yPercent: 0 })
      gsap.set('#gentle-pin .animated', { position: 'relative', top: '0', bottom: 'unset' })
      ScrollTrigger.getAll().forEach((t) => t.kill())
    })
  }

  // Setup
  setupAnimations()

  // Ensure everything refreshes fully on load even if no scrolling happened
  requestAnimationFrame(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  })

  // Optional: Refresh on resize / viewport change
  window.addEventListener('resize', () => {
    clearTimeout(window._resizeTimeout)
    window._resizeTimeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 250)
  })
})
