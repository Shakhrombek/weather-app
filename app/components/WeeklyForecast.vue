<template>
  <div class="card-shadow bg-white rounded-2xl p-5">
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5">
      <div v-for="i in 7" :key="i" class="bg-blue-200 rounded-lg p-3">
        <p class="text-lg font-[500] text-black mb-2">Пн</p>

        <p class="text-gray">28 авг</p>

        <img src="/images/weather/rain.svg" class="w-12 my-3 p-1" />

        <p class="text-lg font-[500] text-black leading-none">+18°</p>

        <p class="text-gray text-sm mb-2">+15°</p>

        <p class="text-gray text-sm">Облачно</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
