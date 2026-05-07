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
      "Эти малыши выросли — и теперь решили пожениться. Будем рады разделить с Вами этот день!",
    groomLabel: "жених",
    brideLabel: "невеста",
    /** Замените на свои файлы в `public/images/` */
    groomPhoto: "/images/groom-child.png",
    bridePhoto: "/images/bride-child.png",
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
      { label: "пятница", date: 24 },
      { label: "суббота", date: 25 },
      { label: "воскресенье", date: 26 },
    ],
  },
  location: {
    title: "Локация",
    venue: "Малина",
    address: "Улица Берлинская 43, Зеленоградск",
    glamping: "Малина Глэмпинг",
    mapHint: "Нажмите на карту, чтобы увидеть местоположение",
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
      { time: "23:00", text: "Afterparty", icon: "disco" as const },
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
  rsvp: {
    title: "Вы с нами?",
    description: "Заполните, пожалуйста, имя и укажите, с чьей стороны вы приглашены.",
  },
} as const;
