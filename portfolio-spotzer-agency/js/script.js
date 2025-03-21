console.clear;
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//////////////////////////////////////////



//////////////////////////////////////////


ScrollTrigger.matchMedia({ 
  "(max-width: 768px)": function() {
    
    const moveText = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      
      gsap.utils.toArray('.scroll-text').forEach((section, index) => {
        const w = section.querySelector('.scroll-text div');
        const [x, xEnd] = (index % 2) ? ['10%', (w.scrollWidth - section.offsetWidth) * -0.1] : [w.scrollWidth * -0.1, 0];
        gsap.fromTo(w, {  x  }, {
          x: xEnd,
          scrollTrigger: { 
            trigger: section, 
            scrub: 0.5 
          }
        });
      });
    }
    moveText();
  },
  
  "(min-width: 768px)": function() {
    const moveText = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      
      gsap.utils.toArray('.scroll-text').forEach((section, index) => {
        const w = section.querySelector('.scroll-text div');
        const [x, xEnd] = (index % 2) ? ['10%', (w.scrollWidth - section.offsetWidth) * -0.5] : [w.scrollWidth * -0.5, 0];
        gsap.fromTo(w, {  x  }, {
          x: xEnd,
          scrollTrigger: { 
            trigger: section, 
            scrub: 0.5 
          }
        });
      });
    }
    moveText();
  },
  
  "all": function() {

    const mirror = () => {
      const animation = document.querySelectorAll(".mirror-animation");
      
      animation.forEach(section => {
      const tl = gsap.timeline();	
        tl.from(section.querySelector(".mirror"), {
          height:0
        },0);
      
          ScrollTrigger.create({
          animation:tl,
          trigger: section,
          start: "top center",
          scrub:1.5,
          toggleActions: 'play none none reverse',
        });
      });
      }
      mirror();




      const feature = () => {
        gsap.defaults({
          ease: "Sine.easeOut", 
        });

        const trigger = document.querySelector(".feature");
        const section = document.querySelector(".feature rect");
        const sectionTwo = document.querySelector(".feature .iconOne");
        const sectionThree = document.querySelector(".feature .iconTwo");
        const sectionFour = document.querySelectorAll(".feature .st6");


        const tl = gsap.timeline({
          scrollTrigger:{
            trigger:trigger,
            start: "top bottom-=200",
            end: "bottom bottom",
            toggleActions: 'play none none reverse',
            // markers:true,
            scrub:true
          }
        });
        
        tl
        .from(sectionFour,{scale:0.1},0)
        .from(section,{yPercent:100},0)
        .to(sectionTwo,{xPercent:300, scale:1.5},0)
        .to(sectionThree,{yPercent:200},0)
      }
      feature();

      
      const cta = () => {
        gsap.defaults({
          ease: "Sine.easeOut", 
        });

        const trigger = document.querySelector(".cta");
        const section = document.querySelector(".cta .spotzer figure");
        const sectionTwo = document.querySelector(".cta .agency figure");

        const tl = gsap.timeline({
          scrollTrigger:{
            trigger:trigger,
            start: "top bottom-=200",
            toggleActions: 'play none none reverse',
          }
        });

        tl
        .from(section,{yPercent:100},0)
        .from(sectionTwo,{yPercent:-100},0)
      }
      cta();


    } // all end
  });

