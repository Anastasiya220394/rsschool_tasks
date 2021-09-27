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