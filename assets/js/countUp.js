window.addEventListener("DOMContentLoaded", (event) => {
  const animationDuration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(animationDuration / frameDuration);

  const easeOutQuad = (t) => t * (2 - t);

  const animateCountUp = (el) => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);

    const counter = setInterval(() => {
      frame++;

      const progress = easeOutQuad(frame / totalFrames);

      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  const runAnimations = () => {
    const countupEls = document.querySelectorAll(".countup");
    countupEls.forEach(animateCountUp);
  };

  // get the element to animate
  var element = document.getElementById("metrics");
  var elementHeight = element.clientHeight;

  // listen for scroll event and call animate function
  document.addEventListener("scroll", animate);

  // check if element is in view
  function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition =
      element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
      return true;
    }

    return false;
  }

  // animate element when it is in view
  function animate() {
    // is element in view?
    if (inView()) {
      // element is in view, add class to element
      runAnimations;
    }
  }
});

// Credits to https://jshakespeare.com/simple-count-up-number-animation-javascript-react/
