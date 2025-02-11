//navbar
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__ul');

    burger.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

// slider
function initSlider() {
    var images = document.querySelectorAll('.slider__image');
    var navButtons = document.querySelectorAll('.slider__nav-button');
    var background = document.querySelector('.slider__background');
    var backgroundImages = [
        'url(img/unsplash1.jpg)',
        'url(img/unsplash2.jpg)',
        'url(img/unsplash3.jpg)',
        'url(img/unsplash4.jpg)',
        'url(img/unsplash5.jpg)'
    ];
    var currentIndex = 0;

    function changeSlide(index) {
        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove('slider__image_active');
            navButtons[i].classList.remove('slider__nav-button_active');
        }

        images[index].classList.add('slider__image_active');
        navButtons[index].classList.add('slider__nav-button_active');


        background.style.backgroundImage = backgroundImages[index];

        background.classList.remove('slider__background_active');
        setTimeout(function () {
            background.classList.add('slider__background_active');
        }, 50);

        currentIndex = index;
    }

    function autoChangeSlide() {
        var nextIndex = (currentIndex + 1) % images.length;
        changeSlide(nextIndex);
    }

    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener('click', function () {
            var index = parseInt(this.getAttribute('data-index'));
            changeSlide(index);
        });
    }

    setInterval(autoChangeSlide, 5000);
}

document.addEventListener('DOMContentLoaded', initSlider);

//slider__page__text
function typingEffect() {
    const texts = ['Audemars Piguet', 'Patek Philippe', 'Richard Mille', 'Franck Muller', 'Vacheron Constantin', 'Jacob & Co', 'Rolex'];
    const typedtext = document.querySelector('.hero__typedtext');
    let removing = false;
    let idx = 0;
    let char = 0;
    let waitAfterTyping = false;

    setInterval(() => {
        if (!removing && char < texts[idx].length) {
            typedtext.textContent += texts[idx][char];
            char++;
        } else if (removing && char > 0) {
            typedtext.textContent = typedtext.textContent.slice(0, -1);
            char--;
        }

        if (char === texts[idx].length && !removing && !waitAfterTyping) {
            waitAfterTyping = true;
            setTimeout(() => {
                removing = true;
                waitAfterTyping = false;
            }, 1500);
        } else if (removing && char === 0) {
            removing = false;
            idx = (idx + 1) % texts.length;
        }
    }, 150);
}

typingEffect();

//stat cards
let valueDisplays = document.querySelectorAll(".stat-cards__num");
let interval = 4000;

valueDisplays.forEach(function (valueDisplay) {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

//faq
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('faq__item--active');
    });
});

//infinity slider
const sliderImages = [
    'img/infinityslider1.png',
    'img/infinityslider2.png',
    'img/infinityslider3.png',
    'img/infinityslider4.png',
    'img/infinityslider5.png',
    'img/infinityslider6.png',
    'img/infinityslider7.png',
    'img/infinityslider8.png',
    'img/infinityslider9.png',
    'img/infinityslider10.png',
    'img/infinityslider11.png',
    'img/infinityslider12.png',
    'img/infinityslider13.png',
    'img/infinityslider14.png',
    'img/infinityslider15.png',
    'img/infinityslider16.png',
    'img/infinityslider17.png',
    'img/infinityslider18.png',
    'img/infinityslider19.png',
    'img/infinityslider20.png',
    'img/infinityslider21.png',
    'img/infinityslider22.png',
    'img/infinityslider23.png',
    'img/infinityslider24.png',
    'img/infinityslider25.png'
];

const infiniteBelt = document.getElementById('infiniteBelt');

sliderImages.forEach(function (imgSrc) {
    const sliderItem = document.createElement('div');
    sliderItem.className = 'infinite-slider-item';

    const sliderImage = document.createElement('img');
    sliderImage.src = imgSrc;

    sliderItem.appendChild(sliderImage);
    infiniteBelt.appendChild(sliderItem);
});

sliderImages.forEach(function (imgSrc) {
    const sliderItem = document.createElement('div');
    sliderItem.className = 'infinite-slider-item';

    const sliderImage = document.createElement('img');
    sliderImage.src = imgSrc;

    sliderItem.appendChild(sliderImage);
    infiniteBelt.appendChild(sliderItem);
});
