<template>
  <div class="min-h-screen">
    <Header />
    <pre>{{ data }}</pre>
    <main class="container px-6 mt-8">
      <CurrentWeatherCard />

      <WeeklyForecast class="my-10" />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

const city = computed(() => (route.query.city as string) || "Tashkent");

const { data, pending, error } = await useFetch(
  "https://api.openweathermap.org/data/2.5/forecast",
  {
    query: () => ({
      q: city.value,
      units: "metric",
      appid: config.public.weatherApiKey,
    }),
    watch: [city],
    server: false,
  },
);
</script>
