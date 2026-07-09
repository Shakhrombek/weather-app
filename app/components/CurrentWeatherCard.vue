<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 my-3">
    <div class="lg:col-span-1 card-shadow bg-white rounded-2xl p-5">
      <div class="flex justify-between mb-8">
        <div>
          <h2 class="text-7xl sm:text-8xl font-[500] text-[#4793FF]">20°</h2>

          <p class="text-2xl sm:text-4xl text-black">Сегодня</p>
        </div>

        <img src="/images/weather/partly-rain.svg" class="w-20 sm:w-30" />
      </div>

      <div class="space-y-2 text-gray">
        <p class="text-md sm:text-xl">Время: 21:54</p>
        <p class="text-md sm:text-xl">Город: Санкт-Петербург</p>
      </div>
    </div>

    <div class="lg:col-span-2 card-shadow rounded-2xl bg-white p-8 relative">
      <div class="space-y-6 relative z-1">
        <div class="flex items-center gap-4">
          <div class="min-w-[160px] flex items-center gap-5">
            <div
              class="inline-flex items-center justify-center w-9 h-9 rounded-full weather-icon-shadow"
            >
              <img src="/images/icons/temp.svg" />
            </div>
            <span class="text-gray text-sm">Температура</span>
          </div>

          <span class="text-black text-sm">20° - ощущается как 17°</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="min-w-[160px] flex items-center gap-5">
            <div
              class="inline-flex items-center justify-center w-9 h-9 rounded-full weather-icon-shadow"
            >
              <img src="/images/icons/pressure.svg" />
            </div>
            <span class="text-gray text-sm">Давление </span>
          </div>

          <span class="text-black text-sm">
            765 мм ртутного столба - нормальное
          </span>
        </div>

        <div class="flex items-center gap-4">
          <div class="min-w-[160px] flex items-center gap-5">
            <div
              class="inline-flex items-center justify-center w-9 h-9 rounded-full weather-icon-shadow"
            >
              <img src="/images/icons/rainy.svg" />
            </div>
            <span class="text-gray text-sm">Осадки</span>
          </div>

          <span class="text-black text-sm">Без осадков</span>
        </div>

        <div class="flex items-center gap-4">
          <div class="min-w-[160px] flex items-center gap-5">
            <div
              class="inline-flex items-center justify-center w-9 h-9 rounded-full weather-icon-shadow"
            >
              <img src="/images/icons/wind.svg" />
            </div>
            <span class="text-gray text-sm">Ветер</span>
          </div>

          <span class="text-black text-sm">3 м/с юго-запад - легкий ветер</span>
        </div>
      </div>

      <img
        src="/images/cloud-image.png"
        class="absolute right-0 top-0 rounded-tr-2xl w-[60%]"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
