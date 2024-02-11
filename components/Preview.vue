<script setup>
import { ref, onMounted } from 'vue';

let isLoaded = ref(false);
let data = ref({});

onMounted(async () => {
  isLoaded.value = true;

  // let data = await useFetch('http://www.google.com');
  // console.log(data);

  data.value = {
    title: '미모 (17) / 원숭이',
    description: '주로 나무에서 생활하며, 다른 동물과 다르게 인간이나 침팬지처럼 손(앞발)의 사용 빈도가 높다. 나무막대기 같은 간단한 도구를 손에 들고 가지고 다니며 사용하기도 한다.',
    logo: 'https://cdn.discordapp.com/attachments/1180539161300713472/1180556909749739611/mim9.png?ex=65da234c&is=65c7ae4c&hm=9f7aa8579214b91c56c6ee65c455b57a14cea8acd1dcde7512d4dab3dbe6bd4b&',
    banner: 'https://cdn.discordapp.com/attachments/1180539415261630555/1180557491378061333/mimo.gif?ex=65da23d7&is=65c7aed7&hm=c3fe946bd3baaffbd39899b4cabca81eb86d6bd9239b8e66f9732169c78250b6&',
    fade: true,
    fadeIntensity: 0
  };
});

function hideImage(e) {
  e.target.style.display = 'none';
}
</script>

<template>
  <div class="spotlight"></div>
  <div v-if="isLoaded">
    <div class="desktop">
      <div class="fade" v-show="data.fade"></div>
      <img v-if="data.banner" :src="data.banner" alt="Banner" class="banner" @error="hideImage">
      <div class="info-container">
        <img v-if="data.logo" :src="data.logo" alt="Logo" class="logo" @error="hideImage">
        <span class="title">{{ data.title }}</span>
        <span class="description">{{ data.description }}</span>
        <button class="play" @click="$emit('play')">
          <span class="material-symbols-outlined">&#xe037;</span>
          <span>재생</span>
        </button>
      </div>
    </div>
    <div class="mobile">
      <div class="top-banner">
        <div class="fade" v-show="data.fade"></div>
        <img v-if="data.banner" :src="data.banner" alt="Banner" class="banner" @error="hideImage">
        <img v-if="data.logo" :src="data.logo" alt="Logo" class="logo" @error="hideImage">
      </div>
      <div class="info-container">
        <span class="title">{{ data.title }}</span>
        <span class="description">{{ data.description }}</span>
      </div>
      <button class="play" @click="$emit('play')">
        <span class="material-symbols-outlined">&#xe037;</span>
        <span>재생</span>
      </button>
    </div>
  </div>
  <div v-else>
    <h1>sus</h1>
  </div>
</template>

<style scoped>
.spotlight {
  background: linear-gradient(45deg, #0028dc 0%, #36cae4 50%, #0004e1 100%);
  opacity: 0.8;
  filter: blur(30vh);
  height: 60vh;
  bottom: -40vh;
  position: fixed;
  right: 0;
  left: 0;
}

.fade {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 105%;
  height: 105%;
  background: linear-gradient(to right,
      rgba(0, 0, 0, calc(0.7 + v-bind('data.fadeIntensity'))) 0%,
      rgba(0, 0, 0, calc(0.692 + v-bind('data.fadeIntensity'))) 10.3%,
      rgba(0, 0, 0, calc(0.671 + v-bind('data.fadeIntensity'))) 18.7%,
      rgba(0, 0, 0, calc(0.638 + v-bind('data.fadeIntensity'))) 25.4%,
      rgba(0, 0, 0, calc(0.595 + v-bind('data.fadeIntensity'))) 30.8%,
      rgba(0, 0, 0, calc(0.544 + v-bind('data.fadeIntensity'))) 35.3%,
      rgba(0, 0, 0, calc(0.489 + v-bind('data.fadeIntensity'))) 39.1%,
      rgba(0, 0, 0, calc(0.43 + v-bind('data.fadeIntensity'))) 42.6%,
      rgba(0, 0, 0, calc(0.37 + v-bind('data.fadeIntensity'))) 46.2%,
      rgba(0, 0, 0, calc(0.311 + v-bind('data.fadeIntensity'))) 50.1%,
      rgba(0, 0, 0, calc(0.256 + v-bind('data.fadeIntensity'))) 54.7%,
      rgba(0, 0, 0, calc(0.205 + v-bind('data.fadeIntensity'))) 60.4%,
      rgba(0, 0, 0, calc(0.162 + v-bind('data.fadeIntensity'))) 67.4%,
      rgba(0, 0, 0, calc(0.129 + v-bind('data.fadeIntensity'))) 76.1%,
      rgba(0, 0, 0, calc(0.108 + v-bind('data.fadeIntensity'))) 86.9%,
      rgba(0, 0, 0, calc(0.1 + v-bind('data.fadeIntensity'))) 100%);
  z-index: 99;
}

.info-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 35%;
  left: 5%;
  z-index: 100;
}

.title {
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 20px;
}

.description {
  font-size: max(1rem, 2.3vh);
  color: #cccccc;
}

.banner {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.logo {
  height: 25vh;
  object-fit: contain;
  align-self: self-start;
  margin-bottom: 20px;
}

.play {
  width: 200px;
  background: #ffffff;
  color: #222222;
  padding: 5px 0;
  font-size: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: filter 0.1s ease-out;
  font-family: inherit;
}

.play:hover {
  filter: brightness(0.8);
}

.mobile {
  display: none;
}

.top-banner {
  width: 100%;
  height: 56.25vw;
  position: relative;
}

@media (max-aspect-ratio: 1/1.2) {
  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }

  .banner {
    width: 100%;
    height: 100%;
  }

  .fade {
    height: calc(100% + 2px);
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 100;
    transform: translateY(-50%);
    width: 30vw;
    margin-bottom: 0px;
  }

  .info-container {
    position: unset;
    top: auto;
    left: auto;
    transform: none;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .description {
    white-space: break-spaces;
  }

  .play {
    position: absolute;
    bottom: 20px;
    width: calc(100% - 40px);
    transform: translateX(-50%);
    left: 50%;
  }
}
</style>