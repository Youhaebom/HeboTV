const $ = (id) => document.getElementById(id);
Element.prototype.hide = function () { this.style.display = 'none'; };
Element.prototype.show = function () { this.style.display = null; };

const video = $('video');
const overlay = $('overlay');
const loading = $('loading');
const infoWrapper = $('info-wrapper');

let ip;
let loaded = false;

['waiting', 'error', 'stalled'].forEach(e => video.addEventListener(e, () => changeState(false)));
['play', 'playing'].forEach(e => video.addEventListener(e, () => changeState(true)));

let init = false;
document.onclick = () => {
  if (init) return;
  video.volume = 0.5;
  video.muted = false;
  init = true;
};

(async () => {
  await getInfo();
  video.src = `http://${ip}:8080/asjdf2938yr98y9y9uhdksahf1gyt44bnb.webm`;
  video.load();

  // video.src = 'https://cdn.discordapp.com/attachments/1077557699207770122/1126816168250974288/FiveStagesOfGrief.mp4?ex=654e0055&is=653b8b55&hm=8cb76c172eb0e60a4783a5ab0a44b78e63a86dca5816c4b01c3231798e9a6fe7&'

})();

async function getInfo() {
  const info = await (await fetch('http://elecball.kro.kr:622')).json();
  ip = info.ip;
  $('title').innerText = info.title;
  $('desc').innerText = info.desc;
}

function changeState(state) {
  if (state) {
    overlay.hide();
    video.classList.remove('blur');
    infoWrapper.show();
    loaded = true;
    loadUI();
  } else {
    video.classList.add('blur');
    loading.classList.remove('init');
    overlay.show();
  }

}

$('fullscreen-btn').onclick = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    $('fullscreen-btn').querySelector('span').innerText = 'fullscreen';
  } else {
    document.documentElement.requestFullscreen();
    $('fullscreen-btn').querySelector('span').innerText = 'fullscreen_exit';
  }
};

$('volume-range').oninput = () => {
  $('volume-range').style.setProperty('--current', `${$('volume-range').value}%`);
  video.volume = $('volume-range').value / 100;
}

let last;
let pending;
document.onmousemove = loadUI;

function loadUI() {
  if (!loaded) return;
  last = Date.now() + 3000;
  if (!pending) showUI();
  pending = true;
}

setInterval(() => {
  if (last <= Date.now() && pending) {
    hideUI();
    pending = false;
  }
}, 100);

function showUI() {
  infoWrapper.classList.add('visible');
  document.documentElement.style.cursor = null;
}

function hideUI() {
  document.documentElement.style.cursor = 'none';
  infoWrapper.classList.remove('visible');
}

const modes = [
  ['contain', 'fit_screen'],
  ['cover', 'capture'],
  ['fill', 'open_in_full']
];
let idx = 1;

$('mode-btn').onclick = () => {
  $('mode-btn').querySelector('span').innerText = modes[idx][1];
  video.style.objectFit = modes[idx][0];
  idx++;
  idx %= 3;
};

setInterval(() => {
  if (!video.paused) return;
  video.play();
}, 1000);