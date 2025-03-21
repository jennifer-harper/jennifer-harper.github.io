console.clear;
gsap.registerPlugin(ScrollTrigger);


var isTouch = !!("undefined" != typeof document.documentElement.ontouchstart);
if(!isTouch) {
    console.log('non mobile')
} else {
    console.log('touch and mobile')
}



ScrollTrigger.matchMedia({
  "(max-width: 1023px)": function() {
    bcards()
    function bcards(){
      ///////////////business cards coming down///////////////////
      const animationTrigger = document.querySelector('.card-down-trig');
      const section = document.querySelectorAll('.card-down img');
      gsap.set(section, {yPercent:'0', autoAlpha:1})

      gsap.to(section, {
        yPercent:0, stagger:0.3,autoAlpha:1,
        scrollTrigger: {
          trigger: animationTrigger,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        }  
      })
    }
  },
  
  "(min-width: 1024px)": function() {
    bcards()
    function bcards(){
      ///////////////business cards coming down///////////////////
      const animationTrigger = document.querySelector('.card-down-trig');
      const section = document.querySelectorAll('.card-down img');
      gsap.set(section, {yPercent:'-300', autoAlpha:0})

      gsap.to(section, {
        yPercent:0, stagger:0.3,autoAlpha:1,
        scrollTrigger: {
          trigger: animationTrigger,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        }  
      })
    }
  },


"(max-width: 1367px)": function() {
  hero();
  function hero(){  
  const sectionTrigger = document.querySelector('.hero');
  const section = document.querySelector('.hero .media-box img');

  let tl = gsap.timeline({
  scrollTrigger: {
  trigger: sectionTrigger,      
  start: 'top top',
  toggleActions: "play none none reverse",
  }
  }); 

  tl.to(section,6,{ objectPosition:'0% 0%', ease:'none' });
  }
},

"(min-width: 1367px)": function() {  
  hero();
  function hero(){
    const sectionTrigger = document.querySelector('.hero');
    const section = document.querySelector('.hero .media-box img');

    let tl = gsap.timeline({
    scrollTrigger: {
    trigger: sectionTrigger,      
    start: 'top top',
    scrub:1,
    pin: true,
    toggleActions: "play none none reverse",
    }
    }); 

    tl.to(section,6,{ objectPosition:'100% 100%', ease:'none' });
  }

},

"all": function(){  
     ////Single animtion, no repeat use - first card//
     brandCardOne();
     function brandCardOne(){
      const animationTrigger = document.querySelector('.wixbuilders .branding.one');
      const sectionOne = document.querySelector('.wixbuilders .branding.one figure.one');
      const sectionTwo = document.querySelector('.wixbuilders .branding.one figure.two');
      const sectionTitle = document.querySelector('.wixbuilders .branding.one .title');
      const sectionThree = document.querySelector('.wixbuilders .branding.one .wrap div img');


      // gsap.defaults({
      //   ease: "Sine.easeOut", 
      // });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationTrigger,
          start: 'top bottom-=200',
          toggleActions: 'play none none reverse',  
        }
      }); 
  
      tl
        .from(sectionOne, {scale:3, ease: Sine.easeOut},0)
        .from(sectionTwo, { yPercent:'-50', ease: Sine.easeOut},0) 
        .from(sectionTitle,1, {yPercent:20, autoAlpha:0,ease: Sine.easeOut},0)
        .from(sectionThree,1, {yPercent:20, autoAlpha:0,ease: Sine.easeOut},0)
     }

     brandCardTwo();
     function brandCardTwo(){
      const animationTrigger = document.querySelector('.wixbuilders .branding.two');
      const section = document.querySelector('.wixbuilders .branding.two img');
      const sectionTwo = document.querySelector('.wixbuilders .branding.two figure.three');
      const sectionTitle = document.querySelector('.wixbuilders .branding.two .title');
  
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationTrigger,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse', 
        }
      }); 
  
      tl
      .from(sectionTitle, 0.5,{yPercent:100, autoAlpha:0})

      ////////////////////////////////////
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: animationTrigger,
          start: 'top center',
          toggleActions: 'play none none reverse', 
        }
      }); 

      tl2
      .from(section, 0.5,{borderTopLeftRadius:0},0.2)
      .from(section, 0.5,{borderBottomRightRadius:0},0.5)
      .from(sectionTwo, 0.5,{scale:0.5},0.5)
     }

     brandCardThree();
     function brandCardThree(){
      const animationTrigger = document.querySelector('.wixbuilders .branding.three');
      const section = document.querySelector('.wixbuilders .branding.three figure.three');
      const sectionTwo = document.querySelector('.wixbuilders .branding.three figure.three g');
      const sectionThree = document.querySelector('.wixbuilders .branding.three .wrap div img');
      const sectionTitle = document.querySelector('.wixbuilders .branding.three .title');
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationTrigger,
          start: 'top bottom-=200',
          toggleActions: 'play none none reverse',  
        }
      }); 
  
      tl
        .from(section, {scale:1.2, autoAlpha:0, duration:1, ease: Sine.easeOut},0)
        .from(sectionTwo, {rotate:180, ease: Sine.easeOut},'<-=0.1')
        .from(sectionThree,1, {yPercent:20, autoAlpha:0,ease: Sine.easeOut},0)
        .from(sectionTitle,1, {yPercent:20, autoAlpha:0,ease: Sine.easeOut},0)
     }

    ////can repeat section and animation within section, but no stagger
    buttons()
    function buttons(){
      const section = document.querySelectorAll('.btn');

       section.forEach((section, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=100',
            toggleActions: 'play none none none',
          }
        });

        tl
        .from(section, 0.5,{scale:0.95},0)
        .from(section, 0.5,{borderTopLeftRadius:0},0.2)
        .from(section, 0.5,{borderBottomRightRadius:0},0.5)


        ScrollTrigger.create({
          trigger: section,
          id: index+1,
          start: 'top center',
          toggleActions: 'play none none none',
          animation:tl,
        })    
      })
    }

    ////can't repeat section, this is because of stagger


    bannerOne()
    function bannerOne(){
      const animationTrigger = document.querySelectorAll(".border-banner-one");

      animationTrigger.forEach(section => {
      const tl = gsap.timeline();	
      
        tl
        .from(section.querySelector(".blue"), {scale:0.5, rotate:360, ease: Sine.easeOut, duration:1},0)
        .from(section.querySelector(".st0"), {scale:1.3, ease: Sine.easeOut, duration:0.5},0)
        .from(section.querySelector(".orange"), {scale:0.5, rotate:-360, ease: Sine.easeOut, transformOrigin: '50% 50%', duration:0.75},'>-0.2')
        .from(section.querySelectorAll(".st5"), {scale:1.5, yPercent:-100, ease: Sine.easeOut, duration:1},'>-0.75')
      
          ScrollTrigger.create({
          animation:tl,
          trigger: section,
          start: "top center",
          toggleActions: 'play none none reverse',
          scrub:1.5
        });
      });  

    }

    brandSlider();
    function brandSlider(){
        var section = $('.brand-imgs img'), 
        duration = 0.5, 
        tl = new TimelineMax({repeat:-1}); 
        gsap.set(section, {visibility:'hidden'});
        tl
        .staggerTo(section, 0, {visibility:"visible", immediateRender:false,}, duration)
        .staggerTo(section, 0, {visibility:"hidden", immediateRender:false}, duration, duration)
    }

    slider();
    function slider(){
      var slideDelay = 1.5;
      var slideDuration = .5;
      var snapX;

      var slides = document.querySelectorAll(".slide");
      var progressWrap = gsap.utils.wrap(0, 1);
      var numSlides = slides.length;

      gsap.set(slides, {
        xPercent: i => i * 100
      });

      var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
      var timer = gsap.delayedCall(slideDelay, autoPlay);

      var animation = gsap.to(slides, {
        xPercent: "+=" + (numSlides * 100),
        duration: 1,
        ease: "none",
        paused: true,
        repeat: -1,
        modifiers: {
          xPercent: wrap
        }
      });

      var proxy = document.createElement("div");
      var slideAnimation = gsap.to({}, {});
      var slideWidth = 0;
      var wrapWidth = 0;


      resize();
      window.addEventListener("resize", resize);

      function animateSlides(direction) {    
        timer.restart(true);
        slideAnimation.kill();  
        var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);  
        slideAnimation = gsap.to(proxy, {
          x: x,
          duration: slideDuration,
          onUpdate: updateProgress
        });  
      }

      function autoPlay() { 
        animateSlides(-1);
      }

      function updateProgress() { 
        animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
      }

      function resize() {  
        var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;  
        slideWidth = slides[0].offsetWidth;
        wrapWidth = slideWidth * numSlides;
        snapX = gsap.utils.snap(slideWidth);  
        gsap.set(proxy, {
          x: norm * wrapWidth
        });  
        animateSlides(0);
        slideAnimation.progress(1);
      }
    }
}
});














