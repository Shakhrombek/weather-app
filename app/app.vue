<template>
  <Suspense>
    <template #default>
      <NuxtPage />
    </template>
    <template #fallback> loading </template>
  </Suspense>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/weather");
</script>
