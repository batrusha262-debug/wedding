/**
 * Правьте здесь тексты и пути к фото.
 * Положите файлы в `public/images/` и укажите путь вида `/images/имя.jpg`.
 */
export const site = {
  brand: {
    title: "BOMA",
    subtitle: "сайты-пригласительные",
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
    highlightDay: 19,
    days: [
      { label: "четверг", date: 18 },
      { label: "пятница", date: 19 },
      { label: "суббота", date: 20 },
    ],
  },
  location: {
    title: "Локация",
    venue: "Усадьба Богдановичей",
    photo: "/images/placeholder.svg",
    /** false — цветное фото усадьбы */
    photoGrayscale: true,
    mapUrl: "https://maps.google.com",
    mapLabel: "Карта",
  },
  schedule: {
    title: "Во сколько?",
    items: [
      { time: "15:30", text: "Сбор гостей, фуршет", icon: "drink" as const },
      { time: "16:00", text: "Церемония", icon: "rings" as const },
      { time: "17:00", text: "Банкет", icon: "plate" as const },
      { time: "23:00", text: "Торт", icon: "champagne" as const },
    ],
  },
} as const;
