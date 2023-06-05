<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be7747364244869ff41b9c96b0f7fb7735be963b

<<<<<<< HEAD
=======
=======

>>>>>>> be7747364244869ff41b9c96b0f7fb7735be963b



/************
 * NAV *
 ************/
const menuBtn = document.querySelector('.navbar .menuIcon');
const closeBtn = document.querySelector('.navLinks .closeIcon')
const navLinks = document.querySelector('.navLinks')

menuBtn.addEventListener('click',() =>{
    navLinks.style.left = '0';

});
closeBtn.addEventListener('click',() => {
    navLinks.style.left = '-100%';
})

const submenuIcon = document.querySelector('.arrowIcon');
submenuIcon.addEventListener('click', () =>{
    navLinks.classList.toggle('show1');
})






/************
 * CAROUSEL *
 ************/
const slideWrapper = document.querySelector('.carouselItems');
const slides = Array.from(slideWrapper.children);
const nextBtn = document.querySelector('.carouselRightBtn');
const prevBtn = document.querySelector('.carouselLeftBtn');
const dotsNav = document.querySelector('.carouselNav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (currentSlide, targetSlide) => {
  slideWrapper.style.transform =  'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('currentSlide');
  targetSlide.classList.add('currentSlide');
}

const updateDots = (targetDot) => {
  const currentDot = dotsNav.querySelector('.currentSlide');
  currentDot.classList.remove('currentSlide');
  targetDot.classList.add('currentSlide');
}

const hideShowArrows = (targetIndex) => {
  prevBtn.classList.remove('isHidden');
  nextBtn.classList.remove('isHidden');
  
  if(targetIndex === 0 ) {
    prevBtn.classList.add('isHidden');
  }
  else if (targetIndex === slides.length - 1) {
    nextBtn.classList.add('isHidden');
  }
}

var carouselIdle;
var carouselIndex = 1;
function rotateSlide() {
  const currentSlide = slideWrapper.querySelector('.currentSlide');
  if(currentSlide === slides[slides.length-1]){
    moveToSlide(currentSlide, slides[0]);
    updateDots(dots[0]);
    hideShowArrows(0);
  }
  else {
    moveToSlide(currentSlide, slides[carouselIndex]);
    updateDots(dots[carouselIndex]);
    hideShowArrows(carouselIndex);
   }
  carouselIndex = (carouselIndex + 1) % slides.length;
}

function startCarousel() {
  carouselIdle = setInterval(rotateSlide, 5000); 
}
startCarousel();

const pauseCarousel = _ => {
  if(carouselIdle){
    clearInterval(carouselIdle);
    setTimeout(startCarousel, 10000);
    carouselIdle = 0;
  }
  carouselIndex = slides.findIndex(slide => slide.classList.contains('currentSlide')) + 1;
}

const changeSlide = (changedSlide, changedDot, currentSlide) => {
  moveToSlide(currentSlide, changedSlide);
  updateDots(changedDot);
  hideShowArrows(slides.findIndex(slide => slide === changedSlide));
  pauseCarousel();
}

nextBtn.addEventListener('click', _ => {
  const currentSlide = slideWrapper.querySelector('.currentSlide');
  const nextSlide = currentSlide.nextElementSibling;
  const nextDot = dotsNav.querySelector('.currentSlide').nextElementSibling;
  changeSlide(nextSlide, nextDot, currentSlide);
})

prevBtn.addEventListener('click', _ => {
  const currentSlide = slideWrapper.querySelector('.currentSlide');
  const prevSlide = currentSlide.previousElementSibling;
  const prevDot = dotsNav.querySelector('.currentSlide').previousElementSibling;
  changeSlide(prevSlide, prevDot, currentSlide);
})

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  
  if(!targetDot) return;
  
  const currentSlide = slideWrapper.querySelector('.currentSlide');
  
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  
  moveToSlide(currentSlide, targetSlide);
  updateDots(targetDot);
  hideShowArrows(targetIndex);
  pauseCarousel();
<<<<<<< HEAD
})
>>>>>>> upstream/main
=======
})
>>>>>>> be7747364244869ff41b9c96b0f7fb7735be963b
