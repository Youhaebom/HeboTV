<script setup>
import { ref } from 'vue';

const showVideo = ref(false);
</script>

<template>
  <Preview v-if="!showVideo" @play="() => showVideo = true" />
</template>