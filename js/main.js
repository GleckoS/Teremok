const carouselPrev = document.querySelector('.carousel__prev');
  const carouselNext = document.querySelector('.carousel__next');
  const carouselNav = document.querySelector('.carousel__nav');


var slider = tns({
  container: '.my-slider',
  items: 1,
  mode: "carousel",
  controlsContainer: carouselNav,
  prevButton: carouselPrev,
  nextButton: carouselNext,
  nav: false,
  responsive: {
    640: {}
  }
});

const animItems = document.querySelectorAll(`._anim-items`)
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffSet = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!(animItem.classList.contains(`_anim-no-hide`))) {
                    animItem.classList.remove(`_active`)
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}


let buttons = Array.from(document.querySelectorAll('.entertainment-item__nav-button'))
let contents = Array.from(document.querySelectorAll('.entertainment-item__content'))

const clearClasses = (elements) => {
    elements.forEach(node => {
        node.classList.remove('active')
    })
}

const TabChange = (e) => {
    clearClasses(buttons)
    clearClasses(contents)
    e.classList.add('active')

    document.getElementById(e.id + '__content').classList.add('active')
}