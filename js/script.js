//Scrolls page up or down
const scrolling = (element, container, direction) => {
    let offsetDistance = 0;
    /* Ternary operator: if the value of 'direction' is 'up' 
    the page will be offset -200px above the element that is 
    being scrolled into view, otherwise the value will be 200px, which 
    offsets the page 200px below the element scrolled into view */
    direction === 'up' ? offsetDistance = -200:200
    Velocity(element, 'scroll', {
      container: container, 
      duration: 500, 
      offset: offsetDistance, 
      easing: 'ease-out'
    }); 
  };
  
  const scrollerContainer = document.querySelector('.scroller');
  const scrollToFirst = document.querySelector('.scroll-to-first');
  const firstSection = document.querySelector('#first');
  
  /*Handlers for Scroll to Last Section and Scroll to First Section links */
  scrollToFirst.addEventListener('click', (e) => {
    e.preventDefault();
    scrolling(firstSection, scrollerContainer, 'up');
  });
  
  