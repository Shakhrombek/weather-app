<template>
  <div class="min-h-screen flex items-center justify-center bg-[#f5f8ff]">
    <div class="flex flex-col items-center gap-5">
      <div class="relative w-16 h-16">
        <img
          src="/images/weather/sun.svg"
          class="w-16 h-16 animate-spin-slow"
          alt="Загрузка"
        />
      </div>

      <p class="text-gray text-lg font-[500]">Загрузка погоды...</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 2.5s linear infinite;
}
</style>
