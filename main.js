const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight/animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint)&& pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll()
}
function changeKettleImage(color) {
    let kettleImage = document.getElementById('kettleImage');
    let kettleImage2 = document.getElementById('kettleImage2');
    var button = event.target;
    button.classList.add('clicked');
    
    if (color === 'pink') {
        kettleImage.src = './img/pink-kettle.png';
    } else if (color === 'blue') {
        kettleImage.src = './img/blue-kettle.png';
    }else if (color === 'green') {
        kettleImage.src = './img/green-kettle.png';
    }else if (color === 'white') {
        kettleImage.src = './img/white-kettle.png';
    }else if (color === 'black') {
        kettleImage.src = './img/black-kettle.png';
    }
    if (color === 'pink') {
        kettleImage2.src = './img/pink-kettle.png';
    } else if (color === 'blue') {
        kettleImage2.src = './img/blue-kettle.png';
    }else if (color === 'green') {
        kettleImage2.src = './img/green-kettle.png';
    }else if (color === 'white') {
        kettleImage2.src = './img/white-kettle.png';
    }else if (color === 'black') {
        kettleImage2.src = './img/black-kettle.png';
    }
  }
