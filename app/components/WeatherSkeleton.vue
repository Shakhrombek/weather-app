<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 my-3">
      <div class="lg:col-span-1 card-shadow bg-white rounded-2xl p-5">
        <div class="flex justify-between mb-8">
          <div class="space-y-3">
            <div class="h-16 sm:h-20 w-28 sm:w-36 rounded-lg skeleton-pulse" />
            <div class="h-6 sm:h-8 w-24 rounded-lg skeleton-pulse" />
          </div>
          <div class="w-20 h-20 sm:w-30 sm:h-30 rounded-full skeleton-pulse" />
        </div>

        <div class="space-y-3">
          <div class="h-5 w-40 rounded skeleton-pulse" />
          <div class="h-5 w-32 rounded skeleton-pulse" />
        </div>
      </div>

      <div class="lg:col-span-2 card-shadow rounded-2xl bg-white p-8">
        <div class="space-y-6">
          <div v-for="i in 4" :key="i" class="flex items-center gap-4">
            <div class="min-w-[160px] flex items-center gap-5">
              <div class="w-9 h-9 rounded-full skeleton-pulse" />
              <div class="h-4 w-24 rounded skeleton-pulse" />
            </div>
            <div class="h-4 w-48 rounded skeleton-pulse" />
          </div>
        </div>
      </div>
    </div>

    <div class="card-shadow bg-white rounded-2xl p-5 my-10">
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5">
        <div
          v-for="i in 7"
          :key="i"
          class="bg-gray-100 rounded-lg p-3 space-y-2"
        >
          <div class="h-6 w-10 rounded skeleton-pulse" />
          <div class="h-4 w-14 rounded skeleton-pulse" />
          <div class="w-12 h-12 my-3 rounded-full skeleton-pulse" />
          <div class="h-6 w-12 rounded skeleton-pulse" />
          <div class="h-4 w-10 rounded skeleton-pulse mb-2" />
          <div class="h-4 w-16 rounded skeleton-pulse" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
