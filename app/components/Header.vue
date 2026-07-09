<template>
  <header
    class="container py-5 flex justify-between items-center sm:flex-row flex-col"
  >
    <div class="flex items-center gap-4 select-none mb-2 sm:mb-0">
      <img src="/images/logo.png" class="w-13 sm:w-16" />

      <h1 class="text-xl sm:text-2xl font-bold text-blue-800">VUE WEATHER</h1>
    </div>

    <div class="flex gap-4">
      <button class="cursor-pointer" @click="toggleTheme">
        <img src="/images/theme.svg" class="h-6" />
      </button>

      <input
        v-model="city"
        @input="updateCity"
        class="custom-input h-9 rounded-lg bg-gray-100 px-3 text-black placeholder:text-black"
        placeholder="Выбрать город"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    isDark.value = true;
    document.body.classList.add("dark");
  }
});

const route = useRoute();
const router = useRouter();
const isDark = ref(false);
const city = ref((route.query.city as string) || "");
let timeout: ReturnType<typeof setTimeout>;

const updateCity = () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    router.replace({
      query: {
        ...route.query,
        city: city.value || undefined,
      },
    });
  }, 500);
};

const toggleTheme = () => {
  isDark.value = !isDark.value;

  document.body.classList.toggle("dark", isDark.value);

  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};
</script>
