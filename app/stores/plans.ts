export const usePlansStore = defineStore("plans", () => {
  interface Plan {
    id: number;
    name: string;
    price_monthly: string;
  }

  const plans = ref<Plan[]>([]);
  const loading = ref(false);

  async function fetchPlans() {
    if (plans.value.length > 0) return;
    loading.value = true;
    try {
      const data = await $fetch<Plan[]>("/api/subscription-plans");
      plans.value = data.filter((p) => p.name.toUpperCase() !== "START");
    } catch (e) {
      console.error("Failed to fetch plans:", e);
    } finally {
      loading.value = false;
    }
  }

  return { plans, loading, fetchPlans };
});
