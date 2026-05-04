/**
 * Правьте здесь тексты и пути к фото.
 * Положите файлы в `public/images/` и укажите путь вида `/images/имя.jpg`.
 */
export const site = {
  brand: {
    title: "",
    subtitle: "",
  },
  hero: {
    title: "Тили-Тили Тесто!",
    ribbon: "мы женимся!",
    storyTitle: "Узнали?",
    story:
      "Эти малыши выросли — и теперь решили пожениться. Будем рады разделить с вами этот день.",
    groomLabel: "жених",
    brideLabel: "невеста",
    /** Замените на свои файлы в `public/images/` */
    groomPhoto: "/images/placeholder.svg",
    bridePhoto: "/images/placeholder.svg",
  },
  couple: {
    line: "Андрей + Алина =",
    photoLeft: "/images/placeholder.svg",
    photoRight: "/images/placeholder.svg",
  },
  invite: {
    lead: "Поэтому мы приглашаем вас...",
    monthYear: "Июль 2026",
    highlightDay: 25,
    days: [
      { label: "четверг", date: 24 },
      { label: "пятница", date: 25 },
      { label: "суббота", date: 26 },
    ],
  },
  location: {
    title: "Локация",
    venue: "Малина",
    photo: "/images/malina.jpg",
    /** false — цветное фото усадьбы */
    photoGrayscale: false,
    mapUrl: "https://yandex.kz/maps/org/malina/154555901189/?ll=20.438092%2C54.950211&z=14",
    mapLabel: "Карта",
  },
  schedule: {
    title: "Во сколько?",
    items: [
      { time: "15:30", text: "Сбор гостей, фуршет", icon: "drink" as const },
      { time: "16:00", text: "Церемония", icon: "rings" as const },
      { time: "17:00", text: "Банкет", icon: "plate" as const },
      { time: "23:00", text: "Афтерпарти", icon: "drink" as const },
    ],
  },
  dresscode: {
    title: "Дресс-код",
    description: "Дорогие гости, предлагаем вам одеться в светлые пастельные тона — это будет прекрасно гармонировать с нашим праздником и обеспечит вам комфорт в тёплый летний день!",
    recommendations: [
      "Светлые пастельные оттенки: бежевый, кремовый, светло-розовый, светло-голубой, светлый лавандовый",
      "Избегайте чёрного цвета — будет жарко, а светлые ткани гораздо комфортнее",
      "Откажитесь от очень ярких, неоновых цветов",
      "Лёгкие, воздухопроницаемые ткани приветствуются",
    ],
  },
} as const;
