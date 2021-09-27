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
    const array = [ `assets/img/gallery/galery1.jpg`, `assets/img/gallery/galery2.jpg`, 
                  `assets/img/gallery/galery3.jpg`, `assets/img/gallery/galery4.jpg`,
                  `assets/img/gallery/galery5.jpg`, `assets/img/gallery/galery6.jpg`,
                  `assets/img/gallery/galery7.jpg`, `assets/img/gallery/galery8.jpg`,
                  `assets/img/gallery/galery9.jpg`, `assets/img/gallery/galery10.jpg`, 
                  `assets/img/gallery/galery11.jpg`, `assets/img/gallery/galery12.jpg`,
                  `assets/img/gallery/galery13.jpg`, `assets/img/gallery/galery14.jpg`,
                  `assets/img/gallery/galery15.jpg` ]

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
      if(i == 0 || i == 11) {
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
modal.style.display = 'block';
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


console.log(`Score: 150 / 150
Вёрстка валидная +10
Вёрстка семантическая. В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше) +24
Вёрстка соответствует макету +45
Форма покупки билетов +18
В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей +1
форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay +2
при вёрстке формы используются следующие элементы: form, input type="text", input type="email", input type="tel", input type="number" +5
вёрстка формы соответствует макету + 10
Требования к css + 17
добавлен favicon +2
для построения сетки используются флексы или гриды +2
при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
фоновый цвет каждого блока и секции тянется на всю ширину страницы +2
иконки добавлены в формате .svg. +2
расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing +2
переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка +2
в блоке Contacts правильно указаны ссылки на почту mailto и на телефон tel +2
в футере добавлены ссылки на соцсети. +1
Интерактивность, реализуемая через css +25
плавная прокрутка по якорям +5
параллакс +5
при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe +5
изменение стиля интерактивных элементов при наведении и клике +10
интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты – изменение цвета фона или шрифта, появление подчёркивания и т.д. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +4
обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +2
интерактивность при наведении карточек в секции Visiting предусматривает плавное растягивание подчёркивания заголовка карточки на всю ширину карточки +2
интерактивность при наведении иконок социальных сетей в футере предусматривает изменение цвета иконки и круглой границы вокруг иконки на золотистый +2
Интерактивность, реализуемая через js +14
можно передвигать ползунки громкости и прогресс-бар видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету +2
кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20 +2
при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке + 10
Итого: 153 балла.`)