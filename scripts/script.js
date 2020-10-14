//MENU SLIDE
let postHeader = document.querySelector('.postheader');
postHeader.style.opacity = '0';

window.addEventListener('scroll',menuSlide);

function menuSlide(){
    var y = window.scrollY;
    if(y >= 300){
        postHeader.style.opacity = '1';
        postHeader.style.transform = 'translateY(0px)';
        postHeader.style.transition = '.5s ease-in-out';
    }else{
        postHeader.style.opacity = '0';
        postHeader.style.transform = 'translateY(-50px)';
    }
}

//MENU MOBILE
let hamburger = document.querySelector('#hamburger');
let x = document.querySelector('#x');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuAnchor = mobileMenu.querySelectorAll('li a');

hamburger.style.display = 'block';
x.style.display = 'none';

//switch
let moved = false;

hamburger.addEventListener('click',function(){
    if(moved == false){
        mobileMenu.classList.remove('hide');
        mobileMenu.classList.add('show');
        hamburger.style.display = 'none';
        x.style.display = 'block';
        moved = true; 
    }
});

x.addEventListener('click',function(){
    if(moved == true){
        mobileMenu.classList.remove('show');
        mobileMenu.classList.add('hide');
        x.style.display = 'none';
        hamburger.style.display = 'block';
        moved = false;
    }
});

mobileMenuAnchor.forEach(anchor => {
    anchor.addEventListener('click',function(){
        mobileMenu.classList.remove('show');
        mobileMenu.classList.add('hide');
        x.style.display = 'none';
        hamburger.style.display = 'block';
        moved = false;
    });
});


//COUNTING
let numbers = document.querySelectorAll('.countnum');
let started = false;

let num1 = numbers[0].innerHTML;
let num2 = numbers[1].innerHTML;
let num3 = numbers[2].innerHTML;
let num4 = numbers[3].innerHTML;

window.addEventListener('scroll',function(){
    let scrollY = window.scrollY;
    if(started == false){
        if(scrollY >= 650){
            timer(num1,numbers[0],658);
            timer(num2,numbers[1],224);
            timer(num3,numbers[2],24);
            timer(num4,numbers[3],30);
            started = true;
        }
    }else{
        return;
    }

});

function timer(num,numbers,limit){
    let timer = setInterval(function(){
        num++;
        numbers.innerHTML = num;

        if(num >= limit){
            clearInterval(timer);
        }
    },50);
}

//CONSULTATION
let consultant = document.querySelector('.consultation');
let consultationSlide = false;

window.addEventListener('scroll',function(){
    let scrollY = window.scrollY;
    if(consultationSlide == false){
        if(scrollY >= 1400){
            consultant.style.transform = 'translateY(0px)';
            consultant.style.transition = '1s ease-in-out';
            consultationSlide = true;
        }else{
            consultant.style.transform = 'translateY(150px)';
        }
    }else{
        return;
    }
});

//GALLERY
let menuLinks = document.querySelectorAll('.work-menu li a');
let gallerySets = document.querySelectorAll('.gallery-set');

gallerySets.forEach(set => {
    set.classList.add('displayNone');
});

function showGallery(id){
    gallerySets.forEach(set => {
        if(set.id == id){
            set.classList.remove('displayNone');
            set.style.opacity = '1';
        }else{
            set.classList.add('displayNone');
            set.style.opacity = '0';
        }
    });

    menuLinks.forEach(link => {
        if(link.id == id){
            link.classList.add('selected');
        }else{
            link.classList.remove('selected');
        }
    });
}

menuLinks.forEach(item => {
    item.addEventListener('click',function(e){
        e.preventDefault();
        showGallery(item.id);
    });
});

showGallery('healthcare');

//LIGHTBOX
let images = document.querySelectorAll('.gallery-set img');
let lightbox = document.querySelector('#lightbox');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let closeLightbox = document.querySelector('#close_lightbox');

    //open
images.forEach(image => {
    image.addEventListener('click',function(){
        lightbox.style.display = 'block';
        showSlides(image.id);
    });
});

    //close
window.addEventListener('keyup',function(e){
    if(e.which == '27'){
        lightbox.style.display = 'none';
    }
});

closeLightbox.addEventListener('click',function(){
    lightbox.style.display = 'none';
});

    //function
function showSlides(id){
    id = Number(id);

    let slides = document.querySelectorAll('.slides');
    slides.forEach(slide =>{
        slide.style.display = 'none';
    });

    slides[id-1].style.display = 'block';

    //next
    next.addEventListener('click',function(){
        slides.forEach(slide=>{
            slide.style.display = 'none';
        });

        id+=1;

        if(id > slides.length){
            id = 1;
        }

        slides[id-1].style.display = 'block';
    });

    //prev
    prev.addEventListener('click',function(){
        slides.forEach(slide =>{
            slide.style.display = 'none';
        });

        id -= 1;

        if(id < 1){
            id = slides.length;
        }

        slides[id-1].style.display = 'block';
    });

    //keycodes
    document.addEventListener('keyup',function(e){
        if(e.which == '27'){
            overlay.classList.remove('overlay');
        }

        if(e.which == '37'){
            slides.forEach(slide =>{
                slide.style.display = 'none';
            });
    
            id -= 1;
    
            if(id < 1){
                id = slides.length;
            }
    
            slides[id-1].style.display = 'block';
        }

        if(e.which == '39'){
            slides.forEach(slide => {
                slide.style.display = 'none';
            });

            id += 1;

            if(id > slides.length){
                id=1;
            }

            slides[id-1].style.display = 'block';
        }
    });
}


//PARTNERS
let partnersH2 = document.querySelector('.partnersfade');
let faded = false;

window.addEventListener('scroll',function(){
    let scrollY = window.scrollY;
    if(faded == false){
        if(scrollY > 2520){
        partnersH2.style.opacity = '1';
        partnersH2.style.transition = '.5s ease-in-out';
        faded = true;
    }else{
        partnersH2.style.opacity = '0';
        } 
    }
});