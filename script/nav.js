// 새로고침 시 맨위 로딩
window.onload = function() {
    window.scrollTo(0, 0);
};
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY === 0) {
        navbar.style.borderBottom = 'none'; 
        navbar.style.backgroundColor = '';
    } else {
        navbar.style.borderBottom = '1px solid rgb(230, 228, 228)';
        navbar.style.backgroundColor = 'white';  
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const downBtn = document.querySelector('.downbtn');
    const tossInfo = document.querySelector('.toss-info');

    downBtn.addEventListener('click', function() {
        const currentScrollY = window.scrollY; 
        const tossInfoTop = tossInfo.getBoundingClientRect().top; 

        window.scrollTo({
            top: tossInfoTop + currentScrollY, 
            behavior: 'smooth' 
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const section2 = document.querySelector('.section2');
    const title1 = document.querySelector('.section2-title-h1');
    const title2 = document.querySelector('.section2-title-h2');
    const img1 = document.querySelector('.section2-img1');
    const img2 = document.querySelector('.section2-img2');
    const paragraph = document.querySelector('.section2-p');
    let section2Visible = false;

    window.addEventListener('scroll', () => {
        const section2Top = section2.getBoundingClientRect().top * 2;
        const scrollPosition = window.scrollY 

        if (scrollPosition >= section2Top && !section2Visible) { 
            section2Visible = true;
            title1.classList.add('opacity-visible');
            title2.classList.add('opacity-visible');
            setTimeout(() => {
                img2.classList.add('opacity-visible');
            }, 500);
            setTimeout(() => {
                img1.classList.add('opacity-visible');
            }, 700);
            setTimeout(() => {
                paragraph.classList.add('opacity-visible');
            }, 1200);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const title1 = document.querySelector('.section3-1-h1');
    const title2 = document.querySelector('.section3-1-h2');
    const pElements = document.querySelectorAll('.section3 .section3-2 .section3-2-left p, .section3 .section3-3 .section3-3-right p, .section3 .section3-4 .section3-4-left p');
    const imgElements = document.querySelectorAll('.section3 .section3-2 .section3-2-right img, .section3 .section3-3 .section3-3-left img, .section3 .section3-4 .section3-4-right img');
    
    let section3Visible = false;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= 2800 && !section3Visible) {
            section3Visible = true;

            setTimeout(() => {
                title1.classList.add('opacity-visible');
                title2.classList.add('opacity-visible');
            }, 200);

            setTimeout(() => {
                pElements.forEach((p) => {
                    p.classList.add('opacity-visible');
                });
            }, 1200);

            setTimeout(() => {
                imgElements.forEach((img) => {
                    img.classList.add('opacity-visible');
                });
            }, 1500);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('.section4-left-h1');
    const h2 = document.querySelector('.section4-left-h2');
    const span1 = document.querySelector('.section4-left-span1');
    const span2 = document.querySelectorAll('.section4-left-span2,.section4-left-span2-2');
    const span3 = document.querySelectorAll('.section4-left-span3,.section4-left-span3-3');
    const pcontent = document.querySelector('.section4-left-p');
    const phone = document.querySelector('.section4-phone');
    const images = document.querySelectorAll('.section4-right-1,.section4-right-2,.section4-right-3');

    let section4Visible = false;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= 5000 && !section4Visible) {
            section4Visible = true;
        
            setTimeout(() => {
                h1.classList.add('opacity-visible');
                h2.classList.add('opacity-visible');
            }, 200);
            setTimeout(() => {
                phone.classList.add('opacity-visible');
            }, 600);
            setTimeout(()=>{
                images[0].style.animation = 'showImage1 7s infinite';
                images[1].style.animation = 'showImage2 7s infinite';
                images[2].style.animation = 'showImage3 7s infinite';
                setTimeout(() => {
                    images[0].classList.add('show-image');
                }, 500);
                setTimeout(() => {
                    images[1].classList.add('show-image');
                }, 2000);
                setTimeout(() => {
                    images[2].classList.add('show-image');
                }, 3500);
            },800);
            setTimeout(() => {
                pcontent.classList.add('opacity-visible');
            }, 1200);

            setTimeout(() => {
                span1.classList.add('opacity-visible');
            }, 2000);

            setTimeout(() => {
                span2.forEach((s2) => {
                    s2.classList.add('opacity-visible');
                });
            }, 2700);
            setTimeout(() => {
                span3.forEach((s3) => {
                    s3.classList.add('opacity-visible');
                });
            }, 3400);
            
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('.section5-h1');
    const h2 = document.querySelector('.section5-h2');
    const bottomDivs = document.querySelectorAll('.section5-bottom > div');

    let section5Visible = false;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= 6300 && !section5Visible) {
            section5Visible = true;
        
            setTimeout(() => {
                h1.classList.add('opacity-visible');
                h2.classList.add('opacity-visible');
            }, 400);

            setTimeout(() => {
                bottomDivs.forEach((div) => {
                    div.classList.add('opacity-visible');
                });
            }, 900);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const pbottom = document.querySelector('.section6-bottom');
    const section6p1 = document.querySelector('.section6-p1');
    const section6p2 = document.querySelector('.section6-p2');

    let section6Visible = false;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= 8200 && !section6Visible) {
            section6Visible = true;
        
            setTimeout(() => {
                section6p1.classList.add('opacity-visible');
            }, 500);

            setTimeout(() => {
                section6p2.classList.add('opacity-visible');
            }, 1300);

            setTimeout(() => {
                pbottom.classList.add('opacity-visible');
            }, 2100);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sec6img1 = document.querySelector('.section6-1');
    const sec6img2 = document.querySelector('.section6-2');
    const sec6img3 = document.querySelector('.section6-3');
    const sec6img5 = document.querySelector('.section6-5');
    const sec6img6 = document.querySelector('.section6-6');
    const sec6img7 = document.querySelector('.section6-7');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if(scrollPosition < 8600){
            sec6img3.classList.remove('opacity-visible');
            sec6img5.classList.remove('opacity-visible');
            
        }
        if (scrollPosition >= 8600 ) {
            sec6img3.classList.add('opacity-visible');
            sec6img5.classList.add('opacity-visible');
        }
        if(scrollPosition <8700){
            sec6img2.classList.remove('opacity-visible');
            sec6img6.classList.remove('opacity-visible');
        }
        if(scrollPosition >= 8700){
            sec6img2.classList.add('opacity-visible');
            sec6img6.classList.add('opacity-visible');
        }
        if(scrollPosition <8800){
            sec6img1.classList.remove('opacity-visible');
            sec6img7.classList.remove('opacity-visible');
        }
        if(scrollPosition >= 8800){
            sec6img1.classList.add('opacity-visible');
            sec6img7.classList.add('opacity-visible');
        }
        
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const section7Left = document.querySelector('.section7-left');
    const section7Right = document.querySelector('.section7-right');

    const relativeScrollPosition = Math.max(0, scrollPosition - 9000); 
    const translateValue = (relativeScrollPosition / window.innerHeight) * 100;
    
    section7Left.style.transform = `translate3d(-${translateValue}%, 0px, 0px)`;
    section7Right.style.transform = `translate3d(${translateValue}%, 0px, 0px)`;
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger');
    const svgIcon1 = document.querySelector('.nav-svgIcon1');
    const svgIcon2 = document.querySelector('.nav-svgIcon2');
    const category = document.querySelector('.category');

    // hamburgerButton을 클릭했을 때 
    hamburgerButton.addEventListener('click', function() {
        //버튼이 클릭되었을 때 실행될 코드
        if(svgIcon1.style.opacity == '0'){
            svgIcon1.style.opacity = '1';
            svgIcon2.style.opacity = '0';
            category.classList.remove('opacity-visible');
            setTimeout(() => {
                category.style.display = 'none';
            }, 200);
        }else{
            svgIcon1.style.opacity = '0';
            svgIcon2.style.opacity = '1';
            category.style.display = 'flex';
            setTimeout(() => {
                category.classList.add('opacity-visible');
            }, 100);
        }
    });
});