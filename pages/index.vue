<script setup>
import { ref, onMounted } from 'vue';

let isLoaded = ref(false);
let data = ref({});

onMounted(async () => {
  isLoaded.value = true;

  // let data = await useFetch('http://www.google.com');
  // console.log(data);

  data.value = {
    title: 'Breaking Bad',
    description: 'Diagnosed with terminal lung cancer, a high school chemistry teacher resorts to cooking and selling methamphetamine to provide for his family.',
    logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecd51263-bb0f-4465-af86-f7ed25e58e70/degmcke-c0607fde-c054-4415-a82f-40976ea8ca1c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjZDUxMjYzLWJiMGYtNDQ2NS1hZjg2LWY3ZWQyNWU1OGU3MFwvZGVnbWNrZS1jMDYwN2ZkZS1jMDU0LTQ0MTUtYTgyZi00MDk3NmVhOGNhMWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gzVmoiOcUFRITyCnAGI0N1IwUpPskykB02LRmBsC2yE',
    banner: 'https://cdn.discordapp.com/attachments/1136571463453909023/1206152585677905920/bb.jpg?ex=65daf821&is=65c88321&hm=91830165202a3821c0df3ed2fe356d0594c64950202ed3fa55f53785695b7583&'
  };
});

function hideImage(e) {
  e.target.style.display = 'none';
}
</script>

<template>
  <div class="spotlight"></div>
  <div v-if="isLoaded">
    <div class="fade"></div>
    <img :src="data.banner" alt="Banner" class="banner" @error="hideImage">
    <div class="info-container">
      <img :src="data.logo" alt="Logo" class="logo" @error="hideImage">
      <span class="title">{{ data.title }}</span>
      <span class="description">{{ data.description }}</span>
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
      hsla(0, 0%, 0%, 0.7) 0%,
      hsla(0, 0%, 0%, 0.692) 10.3%,
      hsla(0, 0%, 0%, 0.671) 18.7%,
      hsla(0, 0%, 0%, 0.638) 25.4%,
      hsla(0, 0%, 0%, 0.595) 30.8%,
      hsla(0, 0%, 0%, 0.544) 35.3%,
      hsla(0, 0%, 0%, 0.489) 39.1%,
      hsla(0, 0%, 0%, 0.43) 42.6%,
      hsla(0, 0%, 0%, 0.37) 46.2%,
      hsla(0, 0%, 0%, 0.311) 50.1%,
      hsla(0, 0%, 0%, 0.256) 54.7%,
      hsla(0, 0%, 0%, 0.205) 60.4%,
      hsla(0, 0%, 0%, 0.162) 67.4%,
      hsla(0, 0%, 0%, 0.129) 76.1%,
      hsla(0, 0%, 0%, 0.108) 86.9%,
      hsla(0, 0%, 0%, 0.1) 100%);
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
}

.description {
  font-size: 25px;
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
}
</style>