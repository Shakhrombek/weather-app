<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 my-3">
    <div class="lg:col-span-1 card-shadow bg-white rounded-2xl p-5">
      <div class="flex justify-between mb-8">
        <div>
          <h2 class="text-7xl sm:text-8xl font-[500] text-[#4793FF]">
            {{ temp }}°
          </h2>

          <p class="text-2xl sm:text-4xl text-black">Сегодня</p>
        </div>

        <img :src="icon" class="w-20 sm:w-30" />
      </div>

      <div class="space-y-2 text-gray">
        <p class="text-md sm:text-xl">Время: {{ time }}</p>
        <p class="text-md sm:text-xl">Город: {{ cityName }}</p>
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

          <span class="text-black text-sm">
            {{ temp }}° - ощущается как {{ feelsLike }}°
          </span>
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
            {{ pressure }} мм ртутного столба - {{ pressureLabel }}
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

          <span class="text-black text-sm">{{ precipitationLabel }}</span>
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

          <span class="text-black text-sm">
            {{ windSpeed }} м/с {{ windDirection }} - {{ windLabel }}
          </span>
        </div>
      </div>

      <img
        src="/images/cloud-image.png"
        class="absolute right-0 top-0 rounded-tr-2xl w-[60%]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getWeatherInfo } from "../utils/weather";

interface CurrentWeather {
  temperature_2m: number;
  apparent_temperature: number;
  weather_code: number;
  surface_pressure: number;
  precipitation: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  time: string;
}

const props = defineProps<{
  cityName?: string;
  current?: CurrentWeather;
}>();

const temp = computed(() => Math.round(props.current?.temperature_2m ?? 0));

const feelsLike = computed(() =>
  Math.round(props.current?.apparent_temperature ?? 0),
);

const icon = computed(() => {
  const code = props.current?.weather_code ?? 0;
  return `/images/weather/${getWeatherInfo(code).icon}.svg`;
});

const time = computed(() => {
  if (!props.current?.time) {
    return new Intl.DateTimeFormat("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  }
  return new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(props.current.time));
});

const pressure = computed(() =>
  Math.round((props.current?.surface_pressure ?? 0) * 0.750062),
);

const pressureLabel = computed(() => {
  const p = pressure.value;
  if (p < 750) return "пониженное";
  if (p > 770) return "повышенное";
  return "нормальное";
});

const precipitationLabel = computed(() => {
  const p = props.current?.precipitation ?? 0;
  if (p <= 0) return "Без осадков";
  if (p < 2.5) return `Небольшие осадки, ${p} мм`;
  if (p < 10) return `Умеренные осадки, ${p} мм`;
  return `Сильные осадки, ${p} мм`;
});

const windSpeed = computed(() =>
  Math.round(props.current?.wind_speed_10m ?? 0),
);

const windLabel = computed(() => {
  const w = windSpeed.value;
  if (w < 2) return "штиль";
  if (w < 6) return "легкий ветер";
  if (w < 12) return "умеренный ветер";
  
  return "сильный ветер";
});

const windDirection = computed(() => {
  const deg = props.current?.wind_direction_10m ?? 0;
  const directions = [
    "север",
    "северо-восток",
    "восток",
    "юго-восток",
    "юг",
    "юго-запад",
    "запад",
    "северо-запад",
  ];
  const index = Math.round(deg / 45) % 8;

  return directions[index];
});
</script>
