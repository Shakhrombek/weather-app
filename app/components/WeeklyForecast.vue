<template>
  <div v-if="days" class="card-shadow bg-white rounded-2xl p-5">
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5">
      <div
        v-for="(day, index) in days"
        :key="day.date"
        class="bg-blue-200 rounded-lg p-3"
      >
        <p class="text-lg font-[500] text-black mb-2">
          {{ index === 0 ? "Сегодня" : day.weekday }}
        </p>

        <p class="text-gray">{{ day.dateLabel }}</p>

        <img :src="day.icon" class="w-12 my-3 p-1" />

        <p class="text-lg font-[500] text-black leading-none">
          +{{ day.max }}°
        </p>

        <p class="text-gray text-sm mb-2">+{{ day.min }}°</p>

        <p class="text-gray text-sm break-words">{{ day.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getWeatherInfo } from "../utils/weather";

interface DailyForecast {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
  precipitation_sum: number[];
}

const props = defineProps<{
  daily?: DailyForecast;
}>();

const days = computed(() => {
  if (!props.daily) return [];

  return props.daily.time.map((dateStr, i) => {
    const date = new Date(dateStr);
    const { icon, description } = getWeatherInfo(
      props.daily!.weather_code[i] as number,
    );

    return {
      date: dateStr,
      weekday: new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(
        date,
      ),
      dateLabel: new Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "short",
      }).format(date),
      icon: `/images/weather/${icon}.svg`,
      max: Math.round(props.daily!.temperature_2m_max[i] as number),
      min: Math.round(props.daily!.temperature_2m_min[i] as number),
      description,
    };
  });
});
</script>
