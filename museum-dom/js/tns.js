let slider = tns({
    container: '.slider_video',
    items: 3,
    gutter: 10,
    swipeAngle: false,
    speed: 400,
    autoplay: false,
    controlsContainer: '.pagination_video_ul',
    prevButton: '.prev_video',
    nextButton: '.next_video',
  });
  
  var videoIndex = 1;
  
  showVideos(videoIndex);
  
  function plusVideos(n) {
  showVideos(videoIndex += n);
  }
  
  function showVideos(n) {
  var i;
  var x = document.getElementsByClassName("viewer");
  var dots = document.getElementsByClassName("circle");
  if (n > x.length) {videoIndex = 1}    
  if (n < 1) {videoIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" circle--active", "");
  }
  x[videoIndex-1].style.display = "block";  
  dots[videoIndex-1].className += " circle--active";
  }
  
  
  document.querySelector('#one').onclick = function () {
  slider.goTo(0);
  showVideos(videoIndex = 1);
  };
  document.querySelector('#two').onclick = function () {
    slider.goTo(1);
    showVideos(videoIndex = 2);
  };
  document.querySelector('#three').onclick = function () {
    slider.goTo(2);
    showVideos(videoIndex = 3);
  };
  document.querySelector('#four').onclick = function () {
    slider.goTo(3);
    showVideos(videoIndex = 4);
  };
  document.querySelector('#five').onclick = function () {
    slider.goTo(4);
    showVideos(videoIndex = 5);
  };