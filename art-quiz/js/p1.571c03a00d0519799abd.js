(()=>{var e={670:()=>{const e=document.querySelector(".all-images"),t=["./assets/images/mobile/0.jpg","./assets/images/mobile/1.jpg","./assets/images/mobile/2.jpg","./assets/images/mobile/3.jpg","./assets/images/mobile/4.jpg","./assets/images/mobile/5.jpg","./assets/images/mobile/6.jpg","./assets/images/mobile/7.jpg","./assets/images/mobile/8.jpg","./assets/images/mobile/9.jpg"];t.forEach(((s,o)=>{const n=document.createElement("img");n.classList.add("image-result"),n.src=t[o],e.append(n)}))},86:()=>{const e=document.querySelector(".all-images2"),t=["./assets/images/mobile/120.jpg","./assets/images/mobile/121.jpg","./assets/images/mobile/122.jpg","./assets/images/mobile/123.jpg","./assets/images/mobile/124.jpg","./assets/images/mobile/125.jpg","./assets/images/mobile/126.jpg","./assets/images/mobile/127.jpg","./assets/images/mobile/128.jpg","./assets/images/mobile/129.jpg"];t.forEach(((s,o)=>{const n=document.createElement("img");n.classList.add("image-result"),n.src=t[o],e.append(n)}))}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,s),l.exports}(()=>{"use strict";const e=document.querySelector(".main-page"),t=document.querySelector(".btn-painters"),o=document.querySelector(".btn-images"),n=document.querySelector(".btn-settings"),l=document.querySelector(".settings"),a=document.querySelector(".category-painters"),c=document.querySelector(".category-images");n.addEventListener("click",(()=>{e.style.display="none",l.style.display="block"})),t.addEventListener("click",(()=>{e.style.display="none",a.style.display="block"})),o.addEventListener("click",(()=>{e.style.display="none",c.style.display="block"})),s(670);const r=document.querySelector(".btn-home-painters"),i=document.querySelector(".quiz-block"),u=document.querySelector("#input-time"),m=document.querySelectorAll("[class^='category-painters-']");r.addEventListener("click",(()=>{a.style.display="none",e.style.display="block"}));let d=[],g=0;async function y(t){const s=await fetch("./data/images.json"),o=await s.json();let n=[];"category-painters-realism"===t.className&&(n=o.filter((e=>"realism"===e.category))),"category-painters-impressionism"===t.className&&(n=o.filter((e=>"impressionism"===e.category))),"category-painters-renaissance"===t.className&&(n=o.filter((e=>"renaissance"===e.category))),"category-painters-portrait"===t.className&&(n=o.filter((e=>"portrait"===e.category))),"category-painters-painting"===t.className&&(n=o.filter((e=>"painting"===e.category))),"category-painters-landscape"===t.className&&(n=o.filter((e=>"landscape"===e.category))),"category-painters-avantgarde"===t.className&&(n=o.filter((e=>"avant-garde"===e.category))),"category-painters-surrealism"===t.className&&(n=o.filter((e=>"surrealism"===e.category))),"category-painters-romanticism"===t.className&&(n=o.filter((e=>"romanticism"===e.category))),"category-painters-expressionism"===t.className&&(n=o.filter((e=>"expressionism"===e.category))),"category-painters-religion"===t.className&&(n=o.filter((e=>"religion"===e.category))),"category-painters-marine"===t.className&&(n=o.filter((e=>"marine"===e.category)));const l=n.slice(0,10),c=t.className;a.style.display="none",i.style.display="block";const r=l[g].imageNum,m=l[g].author;let v=o[Math.floor(Math.random()*o.length)].author,b=o[Math.floor(Math.random()*o.length)].author,q=o[Math.floor(Math.random()*o.length)].author;const S=`./assets/images/mobile/${r}.jpg`,h=[m,v,b,q];v===m&&(v=o[Math.floor(Math.random()*o.length)].author),b===m&&(b=o[Math.floor(Math.random()*o.length)].author),q===m&&(q=o[Math.floor(Math.random()*o.length)].author),h[2]===h[3]&&(h[2]=o[Math.floor(Math.random()*o.length)].author),h[4]===h[3]&&(h[4]=o[Math.floor(Math.random()*o.length)].author),h[4]===h[3]&&(h[4]=o[Math.floor(Math.random()*o.length)].author),function(){let e="";e+='\n      <div class="question-block">\n        <div class="overlay"></div>\n        <div class="modal-to-close">\n            <img src="./assets/svg/close-modal.svg" class="modal-to-close__btn">\n            <p>Вы действительно хотите выйти из игры?</p>\n            <button class="cancel">Отмена</button>\n            <button class="yes">Да</button>\n        </div>\n        <div class="progress-time">\n            <img src="./assets/svg/back-pageCategory.svg" class="back-btn">\n            <div>\n                <img src="./assets/svg/timer-picture.svg" class="timer-picture">\n                <span></span>\n            </div>\n        </div>\n        <p class="question">Кто автор этой картины?</p>\n        <img class="question-image">\n        <div class="answers-painters">\n            <button></button>\n            <button></button>\n            <button></button>\n            <button></button>\n        </div>\n        <div class="footer">\n            <ul class="footer-list">\n                <li><a href="https://rs.school/js/"><img src="./assets/svg/rs-school-logo.svg"></a></li>\n                <li><a href="https://github.com/Anastasiya220394">Anastasiya Nitievskaya</a></li>\n                <li>2021</li>\n            </ul>\n        </div>\n        <div class="modal-question">\n            <img class="trueAnswer">\n            <img class="question-image2">\n            <p class="picture-modal"></p>\n            <span class="author-modal"></span>\n            <span class="year-modal"></span>\n            <button class="continue-question">Продолжить</button>\n        </div>\n        <div class="results-painters">\n            <img src="./assets/svg/close-modal.svg" class="modal-results-close__btn">\n            <img class="modal-results-cup">\n            <p class="congr"></p>\n            <p class="score-results"></p>\n            <button class="results-painters__btnHome"></button>\n            <button class="results-painters__btnNext"></button>\n        </div>\n      </div>\n      \n      ',document.querySelector(".quiz-block").innerHTML='\n      <div class="question-block">\n        <div class="overlay"></div>\n        <div class="modal-to-close">\n            <img src="./assets/svg/close-modal.svg" class="modal-to-close__btn">\n            <p>Вы действительно хотите выйти из игры?</p>\n            <button class="cancel">Отмена</button>\n            <button class="yes">Да</button>\n        </div>\n        <div class="progress-time">\n            <img src="./assets/svg/back-pageCategory.svg" class="back-btn">\n            <div>\n                <img src="./assets/svg/timer-picture.svg" class="timer-picture">\n                <span></span>\n            </div>\n        </div>\n        <p class="question">Кто автор этой картины?</p>\n        <img class="question-image">\n        <div class="answers-painters">\n            <button></button>\n            <button></button>\n            <button></button>\n            <button></button>\n        </div>\n        <div class="footer">\n            <ul class="footer-list">\n                <li><a href="https://rs.school/js/"><img src="./assets/svg/rs-school-logo.svg"></a></li>\n                <li><a href="https://github.com/Anastasiya220394">Anastasiya Nitievskaya</a></li>\n                <li>2021</li>\n            </ul>\n        </div>\n        <div class="modal-question">\n            <img class="trueAnswer">\n            <img class="question-image2">\n            <p class="picture-modal"></p>\n            <span class="author-modal"></span>\n            <span class="year-modal"></span>\n            <button class="continue-question">Продолжить</button>\n        </div>\n        <div class="results-painters">\n            <img src="./assets/svg/close-modal.svg" class="modal-results-close__btn">\n            <img class="modal-results-cup">\n            <p class="congr"></p>\n            <p class="score-results"></p>\n            <button class="results-painters__btnHome"></button>\n            <button class="results-painters__btnNext"></button>\n        </div>\n      </div>\n      \n      '}();const k=document.querySelector(".question-image2"),f=document.querySelector(".author-modal"),_=document.querySelector(".picture-modal"),L=document.querySelector(".year-modal");document.querySelector(".question-image").src=S;const C=Array.from(document.querySelector(".answers-painters").children),w=C[Math.floor(Math.random()*C.length)];w.textContent=m;const I=C.indexOf(w);I>-1&&C.splice(I,1),C[0].textContent=v,C[1].textContent=b,C[2].textContent=q,k.src=S,f.textContent=`${m}, `,_.textContent=l[g].name,L.textContent=`${l[g].year} г.`;const j=document.querySelector(".results-painters"),M=document.querySelector(".trueAnswer"),A=document.querySelector(".overlay"),$=document.querySelector(".modal-question");function H(){g<9?(g+=1,setTimeout((()=>{y(t)}),1e3)):(g=0,j.classList.toggle("show"),A.style.display="block",$.classList.toggle("show"),localStorage.setItem(c,d),d=[],p(),E.play(),function(){let e=localStorage.getItem(c);e&&(e=e.split(",").length),e<=7&&(document.querySelector(".modal-results-cup").src="./assets/svg/game-over-cup.svg",document.querySelector(".congr").textContent="Сыграем еще?",document.querySelector(".score-results").textContent=`Game over ${e}/10`,document.querySelector(".results-painters__btnHome").textContent="Отмена",document.querySelector(".results-painters__btnNext").textContent="Да"),""===e&&(document.querySelector(".modal-results-cup").src="./assets/svg/game-over-cup.svg",document.querySelector(".congr").textContent="Сыграем еще?",document.querySelector(".score-results").textContent="Game over 0/10",document.querySelector(".results-painters__btnHome").textContent="Отмена",document.querySelector(".results-painters__btnNext").textContent="Да"),e>8&&(document.querySelector(".modal-results-cup").src="./assets/svg/champion-cup.svg",document.querySelector(".score-results").textContent=" ",document.querySelector(".congr").textContent=`Поздравляем! ${e}/10`,document.querySelector(".results-painters__btnHome").textContent="Домой",document.querySelector(".results-painters__btnNext").textContent="Следующая игра"),console.log(e)}())}document.querySelector(".answers-painters").addEventListener("click",(e=>{$.classList.toggle("show"),A.style.display="block",e.target.textContent===m?(d.push(l[g].imageNum),e.target.style.background="green",x.play(),M.src="./assets/svg/true.svg"):(e.target.style.background="red",N.play(),M.src="./assets/svg/false.svg")})),document.querySelector(".continue-question").addEventListener("click",H);const T=document.querySelector(".modal-to-close");document.querySelector(".back-btn").addEventListener("click",(()=>{A.style.display="block",T.classList.toggle("show")})),document.querySelector(".modal-to-close__btn").addEventListener("click",(()=>{A.style.display="none",T.classList.toggle("show"),$.classList.toggle("show")})),document.querySelector(".cancel").addEventListener("click",(()=>{A.style.display="none",T.classList.toggle("show")})),document.querySelector(".yes").addEventListener("click",(()=>{i.style.display="none",a.style.display="block"})),document.querySelector(".modal-results-close__btn").addEventListener("click",(()=>{j.classList.toggle("show"),A.style.display="none"})),document.querySelector(".results-painters__btnHome").addEventListener("click",(()=>{j.classList.toggle("show"),i.style.display="none",e.style.display="block"})),document.querySelector(".results-painters__btnNext").addEventListener("click",(()=>{j.classList.toggle("show"),document.querySelector(".question-block").style.display="none",a.style.display="block"})),u.checked&&(document.querySelector(".timer-picture").style.display="block",document.querySelector(".progress-time span").style.display="block",function(){let e=document.querySelector("#count_time").value;const t=setInterval((()=>{document.querySelector(".progress-time span").innerHTML=`00 : ${e}`,e--,0===e&&(clearInterval(t),N.play(),H(),$.style.display="none"),"none"===i.style.display&&clearInterval(t),$.classList.contains("show")&&clearInterval(t)}),1e3)}())}function p(){m.forEach((e=>{const t=localStorage.getItem(e.className),s=e.querySelector(".score"),o=e.querySelector(".page-score"),n=e.querySelector(".categories-img");t&&(s.textContent=`${t.split(",").length}/10`,o.style.display="block",n.classList.add("gray")),""===t&&(s.textContent="0/10",o.style.display="block",n.classList.add("gray"))}))}m.forEach((e=>{e.getElementsByTagName("button")[0].addEventListener("click",(e=>{document.querySelector(".results-page").style.display="block",a.style.display="none";const t=e.target.parentNode.className;let s=localStorage.getItem(t);s&&(s=s.split(",").length),document.querySelector(".score-pageResults").textContent=`${s}/10`,e.stopPropagation()}))})),document.querySelector(".back-btn-pageResults").addEventListener("click",(()=>{document.querySelector(".results-page").style.display="none",a.style.display="block"})),document.querySelector(".btn-settings-categories").addEventListener("click",(()=>{a.style.display="none",l.style.display="block"})),document.querySelector(".logo-cat").addEventListener("click",(()=>{a.style.display="none",e.style.display="block"})),m.forEach((e=>{e.querySelector("img").addEventListener("click",(e=>{y(e.target.parentNode)}))})),p();const v=u,b=document.querySelector(".save-btn"),q=document.querySelector(".volume-mute-img"),S=document.querySelector(".volume-img"),h=document.querySelector(".input-volume"),k=document.querySelector(".btn-minus"),f=document.querySelector(".btn-plus"),_=document.querySelector("#count_time"),L=document.querySelector(".default-btn");k.addEventListener("click",(()=>{_.stepDown(),localStorage.setItem("time of game",_.value)})),f.addEventListener("click",(()=>{_.stepUp(),localStorage.setItem("time of game",_.value)})),b.addEventListener("click",(()=>{l.style.display="none",e.style.display="block"})),document.querySelector(".back-settings").addEventListener("click",(()=>{l.style.display="none",e.style.display="block"}));const x=document.createElement("audio");x.setAttribute("src","./assets/sounds/true-answer.mp3");const N=document.createElement("audio");N.setAttribute("src","./assets/sounds/false-answer.mp3");const E=document.createElement("audio");E.setAttribute("src","./assets/sounds/game-over.mp3"),localStorage.getItem("volume")?(x.volume=h.value/100,N.volume=h.value/100,E.volume=h.value/100):(x.volume=.5,N.volume=.5,E.volume=.5),q.addEventListener("click",(()=>{x.muted=!0,N.muted=!0,E.muted=!0,x.volume=0,N.volume=0,E.volume=0,h.value=0,localStorage.setItem("volume",h.value)})),S.addEventListener("click",(()=>{x.muted=!1,N.muted=!1,E.muted=!1,x.volume=.5,N.volume=.5,E.volume=.5,h.value=50,localStorage.setItem("volume",h.value)})),h.addEventListener("change",(function(){const e=h.value/100;x.volume=e,N.volume=e,E.volume=e,0!==h.value?(x.muted=!1,N.muted=!1,E.muted=!1):(x.muted=!0,N.muted=!0,E.muted=!0),localStorage.setItem("volume",h.value)})),v.addEventListener("change",(()=>{localStorage.setItem("game time",JSON.stringify(v.checked))})),window.addEventListener("load",(()=>{v.checked=JSON.parse(localStorage.getItem("game time")),h.value=localStorage.getItem("volume")})),localStorage.getItem("time of game")?_.value=localStorage.getItem("time of game"):_.value=5,L.addEventListener("click",(()=>{_.value=5,h.value=50,v.checked=!1,localStorage.setItem("game time",JSON.stringify(v.checked)),localStorage.setItem("volume",h.value),localStorage.setItem("time of game",_.value)})),s(86);const C=document.querySelector(".btn-home-images"),w=document.querySelectorAll("[class^='category-images-']");C.addEventListener("click",(()=>{c.style.display="none",e.style.display="block"}));let I=[],j=0;async function M(t){const s=await fetch("./data/images.json"),o=await s.json();let n=[];n=o.slice(120,240);let l=[];"category-images-realism"===t.className&&(l=n.slice(0,10)),"category-images-impressionism"===t.className&&(l=n.slice(10,20)),"category-images-portrait"===t.className&&(l=n.slice(20,30)),"category-images-painting"===t.className&&(l=n.slice(30,40)),"category-images-landscape"===t.className&&(l=n.slice(40,50)),"category-images-avant-garde"===t.className&&(l=n.slice(50,60)),"category-images-surrealism"===t.className&&(l=n.slice(60,70)),"category-images-romanticism"===t.className&&(l=n.slice(70,80)),"category-images-expressionism"===t.className&&(l=n.slice(80,90)),"category-images-religion"===t.className&&(l=n.slice(90,100)),"category-images-marine"===t.className&&(l=n.slice(100,110)),"category-images-renaissance"===t.className&&(l=n.slice(110,120));const a=t.className;c.style.display="none",document.querySelector(".quiz2-block").style.display="block";const r=l[j].author,i=l[j].imageNum,u=`./assets/images/mobile/${i}.jpg`,m=`./assets/images/mobile/${o[Math.floor(Math.random()*o.length)].imageNum}.jpg`,d=`./assets/images/mobile/${o[Math.floor(Math.random()*o.length)].imageNum}.jpg`,g=`./assets/images/mobile/${o[Math.floor(Math.random()*o.length)].imageNum}.jpg`;!function(){let e="";e+='\n      <div class="question-block2">\n      <div class="overlay2"></div>\n        <div class="modal-to-close2">\n            <img src="./assets/svg/close-modal.svg" class="modal-to-close__btn2">\n            <p>Вы действительно хотите выйти из игры?</p>\n            <button class="cancel2">Отмена</button>\n            <button class="yes2">Да</button>\n        </div>\n        <div class="progress-time2">\n        <img src="./assets/svg/back-pageCategory.svg" class="back-btn2">\n        <div>\n            <img src="./assets/svg/timer-picture.svg" class="timer-picture2">\n            <span></span>\n        </div>\n        </div>\n        <p class="author-question"> ?</p>\n        <div class="images-block">\n            <img></img>\n            <img></img>\n            <img></img>\n            <img></img>\n        </div>\n        <div class="footer">\n            <ul class="footer-list">\n                <li><a href="https://rs.school/js/"><img src="./assets/svg/rs-school-logo.svg"></a></li>\n                <li><a href="https://github.com/Anastasiya220394">Anastasiya Nitievskaya</a></li>\n                <li>2021</li>\n            </ul>\n        </div>\n        <div class="modal-question2">\n            <img class="trueAnswer2">\n            <img class="question-image3">\n            <p class="author-modal2">Автор</p>\n            <p class="picture-modal2">Название картины</p>\n            <p class="year-modal2">Год</p>\n            <button class="continue-question2">Продолжить</button>\n        </div>\n        <div class="results-images">\n            <img src="./assets/svg/close-modal.svg" class="modal-results-close__btn2">\n            <img class="modal-results-cup2">\n            <p class="congr2"></p>\n            <p class="score-results2"></p>\n            <button class="results-painters__btnHome2"></button>\n            <button class="results-painters__btnNext2"></button>\n        </div>\n      </div>\n      ',document.querySelector(".quiz2-block").innerHTML='\n      <div class="question-block2">\n      <div class="overlay2"></div>\n        <div class="modal-to-close2">\n            <img src="./assets/svg/close-modal.svg" class="modal-to-close__btn2">\n            <p>Вы действительно хотите выйти из игры?</p>\n            <button class="cancel2">Отмена</button>\n            <button class="yes2">Да</button>\n        </div>\n        <div class="progress-time2">\n        <img src="./assets/svg/back-pageCategory.svg" class="back-btn2">\n        <div>\n            <img src="./assets/svg/timer-picture.svg" class="timer-picture2">\n            <span></span>\n        </div>\n        </div>\n        <p class="author-question"> ?</p>\n        <div class="images-block">\n            <img></img>\n            <img></img>\n            <img></img>\n            <img></img>\n        </div>\n        <div class="footer">\n            <ul class="footer-list">\n                <li><a href="https://rs.school/js/"><img src="./assets/svg/rs-school-logo.svg"></a></li>\n                <li><a href="https://github.com/Anastasiya220394">Anastasiya Nitievskaya</a></li>\n                <li>2021</li>\n            </ul>\n        </div>\n        <div class="modal-question2">\n            <img class="trueAnswer2">\n            <img class="question-image3">\n            <p class="author-modal2">Автор</p>\n            <p class="picture-modal2">Название картины</p>\n            <p class="year-modal2">Год</p>\n            <button class="continue-question2">Продолжить</button>\n        </div>\n        <div class="results-images">\n            <img src="./assets/svg/close-modal.svg" class="modal-results-close__btn2">\n            <img class="modal-results-cup2">\n            <p class="congr2"></p>\n            <p class="score-results2"></p>\n            <button class="results-painters__btnHome2"></button>\n            <button class="results-painters__btnNext2"></button>\n        </div>\n      </div>\n      '}(),document.querySelector(".author-question").textContent=`Какую картину написал ${r}?`;const y=Array.from(document.querySelector(".images-block").children),p=y[Math.floor(Math.random()*y.length)];p.src=u;const b=y.indexOf(p);function q(){j<9?(j+=1,setTimeout((()=>{M(t)}),1e3)):(j=0,document.querySelector(".results-images").classList.toggle("show"),document.querySelector(".overlay2").style.display="block",document.querySelector(".modal-question2").classList.toggle("show"),localStorage.setItem(a,I),I=[],A(),E.play(),function(){let e=localStorage.getItem(a);e&&(e=e.split(",").length),e<=7&&(document.querySelector(".modal-results-cup2").src="./assets/svg/game-over-cup.svg",document.querySelector(".congr2").textContent="Сыграем еще?",document.querySelector(".score-results2").textContent=`Game over ${e}/10`,document.querySelector(".results-painters__btnHome2").textContent="Отмена",document.querySelector(".results-painters__btnNext2").textContent="Да"),""===e&&(document.querySelector(".modal-results-cup2").src="./assets/svg/game-over-cup.svg",document.querySelector(".congr2").textContent="Сыграем еще?",document.querySelector(".score-results2").textContent="Game over 0/10",document.querySelector(".results-painters__btnHome2").textContent="Отмена",document.querySelector(".results-painters__btnNext2").textContent="Да"),e>8&&(document.querySelector(".modal-results-cup2").src="./assets/svg/champion-cup.svg",document.querySelector(".score-results2").textContent=" ",document.querySelector(".congr2").textContent="Поздравляем!",document.querySelector(".results-painters__btnHome2").textContent="Домой",document.querySelector(".results-painters__btnNext2").textContent="Следующая игра")}())}b>-1&&y.splice(b,1),y[0].src=m,y[1].src=d,y[2].src=g,document.querySelector(".images-block").addEventListener("click",(e=>{document.querySelector(".modal-question2").classList.toggle("show"),String(e.target.src).includes(i)?(I.push(l[j].imageNum),e.target.style.border="5px solid green",x.play(),document.querySelector(".trueAnswer2").src="./assets/svg/true.svg"):(e.target.style.border="5px solid red",N.play(),document.querySelector(".trueAnswer2").src="./assets/svg/false.svg")})),document.querySelector(".question-image3").src=u,document.querySelector(".author-modal2").textContent=r,document.querySelector(".picture-modal2").textContent=l[j].name,document.querySelector(".year-modal2").textContent=l[j].year,document.querySelector(".continue-question2").addEventListener("click",q),document.querySelector(".back-btn2").addEventListener("click",(()=>{document.querySelector(".overlay2").style.display="block",document.querySelector(".modal-to-close2").classList.toggle("show")})),document.querySelector(".modal-to-close__btn2").addEventListener("click",(()=>{document.querySelector(".overlay2").style.display="none",document.querySelector(".modal-to-close2").classList.toggle("show")})),document.querySelector(".cancel2").addEventListener("click",(()=>{document.querySelector(".overlay2").style.display="none",document.querySelector(".modal-to-close2").classList.toggle("show")})),document.querySelector(".yes2").addEventListener("click",(()=>{document.querySelector(".quiz2-block").style.display="none",c.style.display="block"})),document.querySelector(".modal-results-close__btn2").addEventListener("click",(()=>{document.querySelector(".results-images").classList.toggle("show"),document.querySelector(".overlay2").style.display="none"})),document.querySelector(".results-painters__btnHome2").addEventListener("click",(()=>{document.querySelector(".results-images").classList.toggle("show"),document.querySelector(".quiz2-block").style.display="none",e.style.display="block"})),document.querySelector(".results-painters__btnNext2").addEventListener("click",(()=>{document.querySelector(".results-images").classList.toggle("show"),document.querySelector(".question-block2").style.display="none",c.style.display="block"})),v.checked&&(document.querySelector(".timer-picture2").style.display="block",document.querySelector(".progress-time2 span").style.display="block",function(){let e=document.querySelector("#count_time").value;const t=setInterval((()=>{document.querySelector(".progress-time2 span").innerHTML=`00 : ${e}`,e--,0===e&&(clearInterval(t),N.play(),q()),"none"===document.querySelector(".quiz2-block").style.display&&clearInterval(t),document.querySelector(".modal-question2").classList.contains("show")&&clearInterval(t)}),1e3)}())}function A(){w.forEach((e=>{const t=localStorage.getItem(e.className),s=e.querySelector(".score"),o=e.querySelector(".page-score"),n=e.querySelector(".categories-img");t&&(s.textContent=`${t.split(",").length}/10`,o.style.display="block",n.classList.add("gray")),""===t&&(s.textContent="0/10",o.style.display="block",n.classList.add("gray"))}))}w.forEach((e=>{e.getElementsByTagName("button")[0].addEventListener("click",(e=>{document.querySelector(".results-page2").style.display="block",c.style.display="none";const t=e.target.parentNode.className;let s=localStorage.getItem(t);s&&(s=s.split(",").length),document.querySelector(".score-pageResults2").textContent=`${s}/10`,e.stopPropagation()}))})),document.querySelector(".back-btn-pageResults2").addEventListener("click",(()=>{document.querySelector(".results-page2").style.display="none",c.style.display="block"})),document.querySelector(".btn-settings-categories2").addEventListener("click",(()=>{c.style.display="none",l.style.display="block"})),document.querySelector(".logo-cat2").addEventListener("click",(()=>{c.style.display="none",e.style.display="block"})),w.forEach((e=>{e.querySelector("img").addEventListener("click",(e=>{M(e.target.parentNode)}))})),A(),console.log('Score: 192 / 220\n \nОтзыв по пунктам ТЗ:\nНе выполненные/не засчитанные пункты:\n1) картины, на вопросы про которые или про их авторов был дан правильный ответ, цветные; картины, на вопросы про которые или про их авторов был дан неправильный ответ, черно-белые \n\n2) при клике по картине выводится информация о ней - название, автор, год создания \n\nЧастично выполненные пункты:\n1) страница с результатами содержит превью всех картин категории \n\n2) если раунд проигрывался повторно и результаты изменились, эти изменения отображаются на странице с результатами \n\n3) дополнительными баллами оценивается очень высокое качество оформления приложения, продуманность отдельных деталей интерфейса, улучшающие внешний вид приложения и удобство пользования им, а также выполненный на высоком уровне и сложный в реализации свой собственный дополнительный функционал, существенно улучшающий качество и/или возможности приложения (разные уведомления по окончанию раунда в зависимости от результата +2)\n\nВыполненные пункты:\n1) вёрстка, дизайн, UI стартовой страницы приложения. Выполняются требования к вёрстке и оформлению приложения. На стартовой странице есть кнопка, при клике по которой открываются настройки викторины, и две кнопки, при кликах по которым можно выбрать тип вопроса: угадать художника по картине, угадать картину по имени её автора \n\n2) реализована навигация по страницам приложения. Со стартовой страницы при клике по кнопке с типом вопроса пользователь попадает на страницу категорий выбранного типа вопросов. Со страницы категорий пользователь может вернуться на стартовую страницу приложения. Со страницы категорий при клике по карточке категории пользователь попадает на страницу с вопросами категории. На карточке сыгранной категории есть кнопка или ссылка, при клике по которой пользователь попадает  на страницу с результатами прохождения раунда. Со страницы с вопросами и со страницы с результатами пользователь может вернуться на страницу категорий или на стартовую страницу приложения \n\n3) в настройках есть возможность включать/выключать звук, есть регулятор громкости звука. Если звук включён, есть звуковая индикация правильных и неправильных ответов, звуковое сопровождение окончания раунда \n\n4) в настройках есть возможность включать/выключать игру на время. Если выбрана игра на время, на странице с вопросами викторины отображается таймер, отсчитывающий время, которое отведено для ответа на вопрос \n\n5) в настройках можно указать время для ответа на вопрос в интервале от 5 до 30 секунд с шагом в 5 секунд. Если время истекает, а ответа нет, это засчитывается как неправильный ответ на вопрос \n\n6) при перезагрузке страницы приложения настройки сохраняются \n\n7) вёрстка, дизайн, UI страницы категории. Выполняются требования к вёрстке и оформлению приложения. На странице категорий размещаются карточки категорий. Карточки категорий могут иметь названия, или их можно просто пронумеровать. \n\n8) карточка сыгранной категории внешне отличается от карточки категории, которая ещё не игралась \n\n9) на карточке сыгранной категории отображается результат прохождения раунда - количество вопросов, на которые был дан правильный ответ \n\n10) вёрстка, дизайн, UI страницы с вопросами. Выполняются требования к вёрстке и оформлению приложения. Вопросы в викторине идут в том порядке, в каком информация про картины и их авторов размещается в коллекции исходных данных. \n\n11) варианты ответов на вопросы генерируются случайным образом. В вариантах ответов на вопросы викторины должен быть правильный ответ и только один. Правильный ответ в разных вопросах должен находиться на разных местах, а не, например, всегда быть только первым. Варианты ответов должны быть разными. В вариантах ответов не должны повторяться картины одного и того же художника. \n\n12) правильным и неправильным ответам пользователя соответствуют индикаторы разного цвета \n\n13) после того, как ответ выбран, появляется модальное окно с правильным ответом на вопрос и кнопкой "Продолжить". При клике по кнопке "Продолжить" пользователь переходит к следующему вопросу категории \n\n14) после окончания раунда выводится уведомление об окончании раунда и отображается результат прохождения раунда - количество вопросов, на которые был дан правильный ответ. Есть кнопка "Продолжить" при клике по которой пользователь перенаправляется на страницу категорий данного типа вопросов \n\n15) вёрстка, дизайн, UI страницы с результатами. Выполняются требования к вёрстке и оформлению приложения \n\n16) Плавная смена изображений, картинки сначала загружаются, потом отображаются, нет ситуации, когда пользователь видит частично загрузившиеся изображения. Плавную смену изображений не проверяем: 1) при загрузке и перезагрузке приложения 2) при открытой консоли браузера \n\n17) 5 баллов за каждую уникальную сложную анимацию, улучшающую интерфейс и удобство использования приложения, но не больше 20 баллов (кнопки на главной странице, модальные окна появляются плавно, кнопка "Домой", ответы(кнопки) в квизе Художники)\n\n')})()})();