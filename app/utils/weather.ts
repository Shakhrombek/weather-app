export function getWeatherInfo(code: number): {
  icon: string;
  description: string;
} {
  const map: Record<number, { icon: string; description: string }> = {
    0: { icon: "sun", description: "Ясно" },
    1: { icon: "sun", description: "Преимущественно ясно" },
    2: { icon: "cloud", description: "Переменная облачность" },
    3: { icon: "cloud", description: "Облачно" },
    45: { icon: "cloud", description: "Туман" },
    48: { icon: "cloud", description: "Туман" },
    51: { icon: "slow-rain", description: "Лёгкая морось" },
    53: { icon: "slow-rain", description: "Морось" },
    55: { icon: "slow-rain", description: "Сильная морось" },
    56: { icon: "slow-rain", description: "Ледяная морось" },
    57: { icon: "slow-rain", description: "Ледяная морось" },
    61: { icon: "slow-rain", description: "Небольшой дождь" },
    63: { icon: "rain", description: "Дождь" },
    65: { icon: "rain", description: "Сильный дождь" },
    66: { icon: "rain", description: "Ледяной дождь" },
    67: { icon: "rain", description: "Ледяной дождь" },
    71: { icon: "slow-rain", description: "Небольшой снег" },
    73: { icon: "rain", description: "Снег" },
    75: { icon: "rain", description: "Сильный снег" },
    77: { icon: "slow-rain", description: "Снежные зёрна" },
    80: { icon: "partly-rain", description: "Небольшой ливень" },
    81: { icon: "partly-rain", description: "Ливень" },
    82: { icon: "rain", description: "Сильный ливень" },
    85: { icon: "slow-rain", description: "Снегопад" },
    86: { icon: "rain", description: "Сильный снегопад" },
    95: { icon: "rain", description: "Гроза" },
    96: { icon: "rain", description: "Гроза с градом" },
    99: { icon: "rain", description: "Сильная гроза с градом" },
  };
  return map[code] ?? { icon: "sun", description: "Ясно" };
}
