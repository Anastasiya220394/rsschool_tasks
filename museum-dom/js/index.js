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