const progress = document.querySelector('.progress');
const progress2 = document.querySelector('.progress_2');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})
progress2.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
  })

    const pictureInnerContainer = document.querySelector('.gallery_images');
    const array = [ `assets/img/gallery/galery1.webp`, `assets/img/gallery/galery2.webp`, 
                  `assets/img/gallery/galery3.webp`, `assets/img/gallery/galery4.webp`,
                  `assets/img/gallery/galery5.webp`, `assets/img/gallery/galery6.webp`,
                  `assets/img/gallery/galery7.webp`, `assets/img/gallery/galery8.webp`,
                  `assets/img/gallery/galery9.webp`, `assets/img/gallery/galery10.webp`, 
                  `assets/img/gallery/galery11.webp`, `assets/img/gallery/galery12.webp`,
                  `assets/img/gallery/galery13.webp`, `assets/img/gallery/galery14.webp`,
                  `assets/img/gallery/galery15.webp` ]

    function shuffle(array) {
      let sorted = array.sort(() => Math.random() - 0.5);
      return sorted
    }
    shuffle(array)
  
    array.forEach(function(src, i) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `galery1`;
      img.classList.add('gallery-img')
      pictureInnerContainer.append(img);
      if(i == 0 || i == 10) {
        img.style.paddingTop = '50' + "px";
        }
      
  });

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

//form

var modal = document.querySelector('.booking_form');
// Переменная кнопки, открывающей модальное окно
var btn = document.querySelector(".amount_tickets__buy");
// Получение элемента <span>, который закрывает модальное окно
var span = document.querySelector('.close');
// Когда пользователь нажимает кнопку, открывается pop-up форма 
btn.onclick = function() {
modal.style.display = 'flex';
}
// Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
span.onclick = function() {
modal.style.display = 'none';
}
// Когда пользователь нажимает в любое место вне формы, закрыть окно формы
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

//menu
const input = document.querySelector('#menu-toggle');
const h2 = document.querySelector('.welcome_block h2');
const p = document.querySelector('.welcome_block p');
const a = document.querySelector('.welcome_block a');
const menubox = document.querySelector('.menubox');

function check(input) {
  if (input.checked) {
    a.style.marginLeft = '-100px';
    h2.style.marginLeft = '-150px';
    p.style.marginLeft = '-150px';
  } else {
    a.style.marginLeft = '0px';
    h2.style.marginLeft = '0px';
    p.style.marginLeft = '0px';
  }
}
menubox.addEventListener('click', function() {
  if (input.checked) {
    input.checked = false;
    a.style.marginLeft = '0px';
    h2.style.marginLeft = '0px';
    p.style.marginLeft = '0px';
  }
})



function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.btn_youtube');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/mqdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();



console.log(`
Score: 150 / 150

Вёрстка соответствует макету. Ширина экрана 1024px +40
Блок header +4
Секция Welcome +4
Секция Visiting +4
Секция Explore +4
Секция Video +4
Секция Gallery +4
Секция Tickets +4
Форма покупки билетов +4
Секция Contacts +4
Блок footer +4

Вёрстка соответствует макету. Ширина экрана 768px +40
Блок header +4
Секция Welcome +4
Секция Visiting +4
Секция Explore +4
Секция Video +4
Секция Gallery +4
Секция Tickets +4
Форма покупки билетов +4
Секция Contacts +4
Блок footer +4

Вёрстка соответствует макету. Ширина экрана 420px +40
Блок header +4
Секция Welcome +4
Секция Visiting +4
Секция Explore +4
Секция Video +4
Секция Gallery +4
Секция Tickets +4
Форма покупки билетов +4
Секция Contacts +4
Блок footer +4

Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +6

Совмещается адаптивная и респонсивная (резиновая) вёрстка +14 При изменении ширины экрана плавно изменяются размеры:
слайдера в секции Welcome +2
слайдера сравнения изображений в секции Explore +2
кастомного видеоплеера в секции Video +2
слайдера в секции Video +2
YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого +2
галереи изображений и изображений в ней +2
карты +2

На ширине экрана 1024рх и меньше реализовано адаптивное меню +12
при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку +2
ссылки в меню работают, обеспечивая плавную прокрутку по якорям +2
при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается +2
вёрстка меню соответствует макету на всех проверяемых разрешениях +6

Оптимизация скорости загрузки страницы (75-85 баллов) +4
`)