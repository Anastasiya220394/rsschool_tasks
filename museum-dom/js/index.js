const progress = document.querySelector('.progress');
const progress2 = document.querySelector('.progress_2');
  
/*progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})*/
progress2.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})


// галерея
const pictureInnerContainer = document.querySelector('.gallery_images');
const array = [ `assets/img/gallery/galery1.webp`, `assets/img/gallery/galery2.webp`, 
                `assets/img/gallery/galery3.webp`, `assets/img/gallery/galery4.webp`,
                `assets/img/gallery/galery5.webp`, `assets/img/gallery/galery6.webp`,
                `assets/img/gallery/galery7.webp`, `assets/img/gallery/galery8.webp`,
                `assets/img/gallery/galery9.webp`, `assets/img/gallery/galery10.webp`, 
                `assets/img/gallery/galery11.webp`, `assets/img/gallery/galery12.webp`,
                `assets/img/gallery/galery13.webp`, `assets/img/gallery/galery14.webp`,
                `assets/img/gallery/galery15.webp` ];

function shuffle(array) {
  let sorted = array.sort(() => Math.random() - 0.5);
  return sorted
};
shuffle(array);
  
array.forEach(function(src, i) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = `galery1`;
  img.classList.add('gallery-img')
  img.classList.add('hide')
  pictureInnerContainer.append(img);
  if(i == 0 || i == 10) {
    img.style.paddingTop = '50' + "px";
  }    
});

const gallery_images = document.querySelectorAll('.gallery-img')

let img_observer = new IntersectionObserver(function (entries, obs) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
    } 
  });
});

gallery_images.forEach(function (elem) {img_observer.observe(elem)})



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
};

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
};

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
};

menubox.addEventListener('click', function() {
  if (input.checked) {
    input.checked = false;
    a.style.marginLeft = '0px';
    h2.style.marginLeft = '0px';
    p.style.marginLeft = '0px';
  }
});


//видео с ютуба
function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }
};

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
};

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
};

findVideos();


//слайдер в секции велком
const one = document.querySelector('.page');
var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  one.innerHTML = '0' + slideIndex;
}

function currentDiv(n) {
  showDivs(slideIndex = n);
  one.innerHTML = '0' + slideIndex;
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("active_slide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_slide--active", "");
  }
  x[slideIndex-1].style.display = "inline-block";  
  dots[slideIndex-1].className += " active_slide--active";
};




//карта
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5vbmltLTIyIiwiYSI6ImNrcnU0cGxpcDA2bW0ycHM1Ym90MDNpN3QifQ.nDw4385dIfL75tEJvEYOYQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [2.3364, 48.86091],
zoom: 15.75,
});

map.addControl(new mapboxgl.NavigationControl());

const marker1 = new mapboxgl.Marker({
  color: "rgb(15, 15, 15)"
}).setLngLat([2.3364, 48.86091])
  .addTo(map);
const marker2 = new mapboxgl.Marker({
  color: "rgb(104, 102, 102)"
}).setLngLat([2.3333, 48.8602])
  .addTo(map);
const marker3 = new mapboxgl.Marker({
  color: "rgb(104, 102, 102)"
}).setLngLat([2.3397, 48.8607])
  .addTo(map);
const marker4 = new mapboxgl.Marker({
  color: "rgb(104, 102, 102)"
}).setLngLat([2.3330, 48.8619])
  .addTo(map);
const marker5 = new mapboxgl.Marker({
  color: "rgb(104, 102, 102)"
}).setLngLat([2.3365, 48.8625])
  .addTo(map);





  //скролл наверх
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



//секция тикетс

const btnMinusBasic = document.querySelector('.btn_minus_basic');
const btnPlusBasic = document.querySelector('.btn_plus_basic');
const btnMinusSenior = document.querySelector('.btn_minus_senior');
const btnPlusSenior = document.querySelector('.btn_plus_senior');
const countTicket = document.querySelector('#count_tickets');
const ticketType = document.getElementsByName('radio');
const totalPrice = document.querySelector('.amount_tickets__total');
const countTicket2 = document.querySelector('#count_tickets2');
const allTicketType = document.querySelector('#ticket_type');



function load() {
  ticketType.checked = localStorage.getItem("ticket type");
  countTicket2.value = localStorage.getItem("countTicket2");
  countTicket.value = localStorage.getItem("countTicket");
  totalPrice.innerHTML = localStorage.getItem("total");
  if (totalPrice.innerHTML == '') {
    totalPrice.innerHTML = 'Total 0€';
  } else {
    totalPrice.innerHTML = localStorage.getItem("total");
  }
  if (countTicket.value == '') {
    countTicket.value = 0
  }
  if (countTicket2.value == '') {
    countTicket2.value = 0
  }
}

load();

function calculate() {
  let ff = calc1() + calc2();
  totalPrice.innerHTML  = 'Total' + ' ' + ff + '€';
  localStorage.setItem("total", totalPrice.innerHTML);
}

function calc1() {
  let price = 0;
  for (var i = 0, length = ticketType.length; i < length; i++) {
    if (ticketType[i].checked) {
      // do whatever you want with the checked radio
      price += Number(ticketType[i].value);
      price = Number(countTicket.value) * price;
      // only one radio can be logically checked, don't check the rest
      break
    }
  }
  return price
}

function calc2() {
  let price = 0;
  for (var i = 0, length = ticketType.length; i < length; i++) {
    if (ticketType[i].checked) {
      // do whatever you want with the checked radio
      price += Number(ticketType[i].value);
      price = Number(countTicket2.value) * price / 2;
      // only one radio can be logically checked, don't check the rest
      break
    }
  }
  return price
}



btnMinusBasic.addEventListener('click', function() {
  this.nextElementSibling.stepDown();
  calculate();
  localStorage.setItem("countTicket", countTicket.value);
});

btnPlusBasic.addEventListener('click', function() {
  this.previousElementSibling.stepUp();
  calculate();
  localStorage.setItem("countTicket", countTicket.value);
});

btnMinusSenior.addEventListener('click', function() {
  this.nextElementSibling.stepDown();
  calculate();
  localStorage.setItem("countTicket2", countTicket2.value);
});

btnPlusSenior.addEventListener('click', function() {
  this.previousElementSibling.stepUp()
  calculate();
  localStorage.setItem("countTicket2", countTicket2.value);
});

(function(){
  for (var z = 0, checkid; checkid = allTicketType[z]; z++) {
    if (localStorage[checkid.id] !== undefined) {
      checkid.checked = localStorage[checkid.id];
    }
    checkid.onchange = function() {
      localStorage[this.id] = this.checked;
      localStorage.setItem("ticket type", ticketType);
    }
  }
})()




console.log(` 
Score: 141 / 160

Не выполненные/не засчитанные пункты:

1) есть возможность перелистывания слайдов влево и вправо свайпами (движениями) мышки

2) слайды перелистываются плавно с анимацией смещения вправо или влево

3) если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов или клик по буллету останавливает проигрывание видео

4) когда пользователь выбирает дату в форме слева, она отображается в билете справа

5) когда пользователь выбирает время в форме слева, оно отображается в билете справа

6) можно изменить тип билета в поле Ticket type слева при этом меняется тип билета, цена билета и общая стоимость билетов справа

7) можно изменить количество билетов каждого типа в поле слева при этом меняется количество билетов и общая стоимость билетов справа

Частично выполненные пункты:

1) если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно

Выполненные пункты:

1) есть возможность перелистывания слайдов влево и вправо кликами по стрелкам

2) есть возможность перелистывания слайдов кликами по буллетам (квадратики внизу слайдера)

3) перелистывание слайдов бесконечное (зацикленное)

4) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем)

5) при перелистывании слайдов кликами или свайпами меняется номер активного слайда

6) даже при частых кликах или свайпах нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда

7) при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео с YouTube. Никакие изменения с основным видео при этом не происходят

8) есть возможность перелистывания слайдов с видео влево и вправо кликами по стрелкам. Слайды перелистываются по одному, при этом также меняется основное видео

9) есть возможность перелистывания слайдов кликами по буллетам (кружочки внизу слайдера), при этом также меняется основное видео

10) слайды перелистываются плавно с анимацией смещения вправо или влево (для смены основного видео анимация смещения не требуется и не проверяется)

11) перелистывание слайдов бесконечное (зацикленное)

12) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем)

13) если основное видео проигрывалось при перелистывании слайдера, проигрывание видео останавливается, прогресс бар сдвигается к началу, иконки "Play" на панели управления и по центру видео меняются на первоначальные

14) даже при частых кликах по стрелкам нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда

15) при клике по кнопке "Play" слева внизу на панели видео начинается проигрывание видео, иконка кнопки при этом меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Повторный клик на кнопку останавливает проигрывание видео, иконка меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается

16) при клике по большой кнопке "Play" по центру видео, или при клике по самому видео, начинается проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Клик на видео, которое проигрывается, останавливает проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается

17) прогресс-бар отображает прогресс проигрывания видео

18) перетягивание ползунка прогресс-бара позволяет изменить время с которого проигрывается видео

19) если прогресс-бар перетянуть до конца, видео останавливается, соответственно, меняется внешний вид кнопок "Play"

20) при клике на иконку динамика происходит toggle звука и самой иконки (звук включается или выключается, соответственно изменяется иконка)

21) при перемещении ползунка громкости звука изменяется громкость видео

22) если ползунок громкости звука перетянуть до 0, звук выключается, иконка динамика становится зачеркнутой

23) если при выключенном динамике перетянуть ползунок громкости звука от 0, звук включается, иконка громкости перестаёт быть зачёркнутой

24) при нажатии на кнопку fullscreen видео переходит в полноэкранный режим, при этом видео и панель управления разворачиваются во весь экран. При нажатии на кнопку fullscreen повторно видео выходит из полноэкранного режима. Нажатие на клавишу для выхода из полноэкранного режима Esc не проверяем и не оцениваем

25) панель управления в полноэкранном режиме визуально выглядит так же, как на макете - кнопки равномерно распределены по всей ширине страницы, относительные размеры между кнопками и ползунками, а также относительные размеры самих кнопок остались прежними

26) клавиша Пробел — пауза, при повторном нажатии - play

27) Клавиша M (англ) — отключение/включение звука

28) Клавиша F — включение/выключение полноэкранного режима

29) Клавиши SHIFT+, (англ) — ускорение воспроизведения ролика

30) Клавиши SHIFT+. (англ) — замедление воспроизведения ролика

31) ползунок можно перетягивать мышкой по горизонтали

32) ползунок никогда не выходит за границы картины

33) при перемещении ползунка справа налево плавно появляется нижняя картина

34) при перемещении ползунка слева направо плавно появляется верхняя картина

35) при обновлении страницы ползунок возвращается в исходное положение

36) при прокрутке страницы вниз появление картин секции Galery сопровождается анимацией: изображения плавно поднимаются снизу вверх, увеличиваясь и создавая эффект выплывания. В качестве образца анимации используйте анимацию на сайте Лувра https://www.louvre.fr/

37) если прокрутить страницу вверх и затем снова прокручивать вниз, анимация появления картин повторяется

38) при обновлении страницы, если она к тому моменту была прокручена до секции Galery, анимация картин повторяется

39) при изменении количества билетов Basic и Senior пересчитывается общая цена за них

40) у каждого типа билетов своя цена (20 €, 25 €, 40 € для Basic и половина этой стоимости для Senior). При изменении типа билета пересчитывается общая цена за них

41) при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них

42) когда при клике по кнопке Buy now открывается форма, она уже содержит данные, указанные на странице сайта - количество билетов, их тип, общая цена за них

43) нельзя выбрать дату в прошлом

44) время можно выбирать с 9:00 до 18:00 с интервалом в 30 минут

45) валидация имени пользователя. Имя пользователя должно содержать от 3 до 15 символов, в качестве символов могут быть использованы буквы английского или русского алфавита в нижнем или верхнем регистре и пробелы

46) валидация e-mail должна пропукать только адреса вида username@example.com, где: username - имя пользователя, должно содержать от 3 до 15 символов (буквы, цифры, знак подчёркивания, дефис), не должно содержать пробелов; @ - символ собачки; example - домен первого уровня состоит минимум из 4 латинских букв; com - домен верхнего уровня, отделяется от домена первого уровня точкой и состоит минимум из 2 латинских букв

47) валидация номера телефона: номер содержит только цифры; без разделения или с разделением на две или три цифры; разделение цифр может быть через дефис или пробел; с ограничением по количеству цифр не больше 10 цифр

48) при попытке ввода в форму невалидного значения выводится предупреждение, например, "номер телефона может содержать только цифры"

49) в секции Contacts добавлена интерактивная карта

50) на карте отображаются маркеры, расположение и внешний вид маркеров соответствует макету

51) стиль карты соответствует макету

52) Любой собственный дополнительный функционал, улучшающий качество проекта. (кнопка прокрутки наверх страницы)`)