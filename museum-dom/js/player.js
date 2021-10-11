const player = document.querySelector('.wrapper_player');
const video = player.querySelectorAll('.viewer');
const controls = document.querySelector('.rectangle');
const btnPlayLarge = document.querySelector('.play_large');
const btnPlay = document.querySelector('.play');
const progressBar = document.querySelector('.progress');
const progressBar2 = document.querySelector('.progress_2');
const imgPlay = document.querySelector('.play_img');
const muteButton = document.querySelector('.btn_sound');
const fullSizeBtn = document.querySelector('.fullscreen_btn');
const v = player.querySelector('.viewer');
const prevBtn = document.querySelector('.prev_video');
const nextBtn = document.querySelector('.next_video');
const wrapPlayer = document.querySelector('.video_player');

function togglePlay() {
    video.forEach((item) => {
        if(this == item) {
            const method = item.paused ? 'play' : 'pause';
            item[method]();
        } else {
            item.pause()
        }
    })
}

function updateButton() {
    video.forEach((item) => {
        if(this == item) {
        const icon = item.paused ? '►' : '❚❚';
        btnPlay.textContent = icon;
        item.paused ? btnPlayLarge.style.display = 'block' : btnPlayLarge.style.display = 'none';
        }
    })
}

function videoProgress() { //Отображаем время воспроизведения
    var progress = (Math.floor(video[videoIndex - 1].currentTime) / (Math.floor(video[videoIndex - 1].duration) / 100));
    progressBar.value = progress;
}

function videoChangeTime() { //Перематываем
    video[videoIndex - 1].currentTime = progressBar.value / 100 * video[videoIndex - 1].duration;
}

const b = document.querySelector('.btn_sound_line')

function videoChangeVolume() { //Меняем громкость
    var volume = progressBar2.value / 100;
    video.forEach((item) => {
        item.volume = volume;
        if(item.volume == 0) {
            b.style.display = 'block'
        } else {
            item.volume != 0;
            b.style.display = 'none'
        }
    })
}

function videoMute() { //Убираем звук
    video.forEach((item) => {
        if(item.volume == 0) {
            item.volume = progressBar2.value / 100;
            b.style.display = 'none'
        } else {
            item.volume = 0;
            b.style.display = 'block'
        }
    })
}

function openFullscreen() {
    if (player.requestFullscreen) {
        player.requestFullscreen();
        wrapPlayer.className = 'full_video'; 
        fullSizeBtn.style.marginLeft = '100px';
    } 
    if (document.fullscreenElement) {
        document.exitFullscreen();
        wrapPlayer.className = 'video_player';
        fullSizeBtn.style.marginLeft = '50px';
    }
}


btnPlay.addEventListener('click', function(){togglePlay.call(video[videoIndex - 1])});
btnPlayLarge.addEventListener('click', function(){togglePlay.call(video[videoIndex - 1])});

muteButton.addEventListener('click',videoMute);
progressBar2.addEventListener('change',videoChangeVolume);

progressBar.addEventListener('input',videoChangeTime);

fullSizeBtn.addEventListener('click',openFullscreen);

video.forEach((item) => {
    item.addEventListener('click', togglePlay);
    item.addEventListener('play', updateButton);
    item.addEventListener('pause', updateButton);
    item.addEventListener('timeupdate', videoProgress);
    item.addEventListener('ratechange', function () {
        player.querySelector('.playbackrate').innerHTML = `${item.playbackRate}`
        player.querySelector('.playbackrate').classList.add('playbackrate-show');
        setTimeout(() => player.querySelector('.playbackrate').classList.remove('playbackrate-show'), 2000);
      });
})

prevBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', togglePlay);



function keyPress(e) {
    let rate;
    if(e.key === '>' || e.key === 'Ю') {
        rate = video[videoIndex - 1].playbackRate;
        rate = (rate + 0.2 > 4) ? 4 : rate + 0.2;
        video[videoIndex - 1].playbackRate = rate.toFixed(1)
    } else if(e.key === '<' || e.key === 'Б') {
        rate = video[videoIndex - 1].playbackRate;
        rate = (rate - 0.2 < 0) ? 0 : rate - 0.2;
        video[videoIndex - 1].playbackRate = rate.toFixed(1)
    } else {
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                togglePlay.call(video[videoIndex - 1]);
                break;
            case 'KeyM':
                videoMute();
                break;
            case 'KeyF':
                openFullscreen();
                break;
        }
    }
}
// настройки
let options = {
    root: document.querySelector('.scroll-list'),
    rootMargin: '5px',
    threshold: 0.5
}

window.onload = () => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                document.documentElement.addEventListener('keypress', keyPress); 
                gallery_images.forEach(function (elem) {
                    elem.classList.remove('active')
                  })
            } else {
                document.documentElement.removeEventListener('keypress', keyPress, false);
            }    
        })   
    }, { threshold: 0.4 })
    observer.observe(player)
}
