const header = document.querySelector('#header');

header.animate(
  {
    translate: ['0 -100px', 0],
    opacity: [0, 1]
  }
  ,2000
);

const mainvisual = document.querySelector('.image');
const passege = document.querySelector('.passege');

mainvisual.animate(
  {
    opacity: [0,0.7]
  },
  {
    fill:'forwards',
    easing: 'ease',
    duration: 3000  
  }
);

passege.animate(
  {
    opacity: [0,0.8]
  },
  {
    fill: 'forwards',
    easing: 'ease' ,
    duration: 3500,
  }
);

const menu = document.querySelector('.flex-about');
const show = (entries) => {
  const key = {
    opacity: [0,1],
    translate: ['0 100px' ,0]
  };

  entries[0].target.animate(key, 1000);
};

const aboutObserver = new IntersectionObserver(show);
aboutObserver.observe(menu);




const fuchisou = document.querySelector('.fuchisou');
const diy = document.querySelector('.diy');

const shows = (entries) => {
  const keyframe = {
    opacity :[0,1],
    translate: ['0 200px', 0]
  };
  entries[0].target.animate(keyframe, 2000);
};

const higuchiObserver = new IntersectionObserver(shows);
higuchiObserver.observe(fuchisou);

const kobayashiObserver = new IntersectionObserver(shows);
kobayashiObserver.observe(diy);