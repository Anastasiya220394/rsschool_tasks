let offset = 0;
const prev = document.querySelector('.prev_video');
const next = document.querySelector('.next_video');
const slider = document.querySelector('.slider_video');

prev.addEventListener('click', function() {
    offset = offset - 452;
    if(offset < 0) {
        offset = 1356;
    }
    slider.style.left = - offset + 'px';
})

next.addEventListener('click', function() {
    offset = offset + 452;
    if(offset > 1356) {
        offset = 0;
    }
    slider.style.left = - offset + 'px';
})