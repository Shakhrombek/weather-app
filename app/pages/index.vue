<template>
  <div class="min-h-screen">
    <Header />

    <main class="container px-6 mt-8">
      <WeatherSkeleton v-if="pending" />
      <div v-else-if="error" class="my-3">
        <CityNotFound :city="city" />
      </div>

      <template v-else>
        <CurrentWeatherCard
          :city-name="locationName"
          :current="forecast?.current"
          :daily="forecast?.daily"
        />

        <WeeklyForecast :daily="forecast?.daily" class="my-10" />
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const city = computed(() => (route.query.city as string) || "Ташкент");

const {
  data: forecast,
  pending,
  error,
  refresh,
} = useAsyncData(
  "weather",
  async () => {
    const geo = await $fetch<{
      results?: {
        name: string;
        latitude: number;
        longitude: number;
        country: string;
      }[];
    }>("https://geocoding-api.open-meteo.com/v1/search", {
      params: { name: city.value, count: 1, language: "ru" },
    });

    const place = geo.results?.[0];
    if (!place) {
      throw new Error("City not found");
    }

    locationName.value = `${place.name}, ${place.country}`;

    const data = await $fetch<{
      current: {
        temperature_2m: number;
        weather_code: number;
        wind_speed_10m: number;
      };
      daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weather_code: number[];
        precipitation_sum: number[];
      };
    }>("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: place.latitude,
        longitude: place.longitude,
        current:
          "temperature_2m,apparent_temperature,weather_code,surface_pressure,precipitation,wind_speed_10m,wind_direction_10m",
        daily:
          "temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum",
        timezone: "auto",
        forecast_days: 7,
      },
    });

    return data;
  },
  { watch: [city] },
);

const locationName = ref(city.value);
</script>
