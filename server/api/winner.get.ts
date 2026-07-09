export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);
  
  const id = query.id as string;
  if (!id) {
    throw createError({ statusCode: 400, message: "ID required" });
  }

  const data = await $fetch(`${config.public.apiBase}/user/`, {
    params: { id },
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      Accept: "application/json",
      Referer: "https://finora.uz/",
    },
  });

  return data;
});
