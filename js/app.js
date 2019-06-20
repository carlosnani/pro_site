const menuItens = document.querySelectorAll('.nav-link'); // a[href^="#"] para selecionar somente links externos

menuItens.forEach((item) => {
    item.addEventListener('click', scrollToIdOnClick)
});

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollToByHref(event.target); 

    scrollToPosiotion(to);
}

function scrollToPosiotion(to){
    // window.scroll({
    //     top: to - 15,
    //     behavior: "smooth",
    // });
    smoothScrollTo(0,to - 15,1000);
}

function getScrollToByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
    
}

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
   
    duration = typeof duration !== 'undefined' ? duration : 400;
   
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
   
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

  function ola() {
    console.log("olá");
  }