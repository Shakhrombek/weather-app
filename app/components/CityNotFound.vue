<template>
  <div class="card-shadow bg-white rounded-2xl p-10 sm:p-16 my-3">
    <div class="flex flex-col items-center text-center max-w-md mx-auto">
      <img
        src="/images/weather/partly-rain.svg"
        class="w-28 sm:w-36 mb-6"
        alt="Город не найден"
      />

      <h3 class="text-2xl sm:text-3xl font-[500] text-black mb-3">
        Город не найден
      </h3>

      <p class="text-gray text-md sm:text-lg">
        Не удалось найти город
        <span class="text-black font-[500]">«{{ city }}»</span>. Проверьте
        правильность написания и попробуйте снова.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  city: string;
}>();
</script>
