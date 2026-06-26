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
    venue: "Soul Garden (Душевный Сад)",
    address: "г. Калининград",
    street: "улица Верхнеозёрная, 2А/5",
    glamping: "Ресторан Soul Garden (Душевный Сад)",
    mapHint: "Нажмите на карту, чтобы увидеть местоположение",
    photo: "/images/malina.png",
    /** false — цветное фото усадьбы */
    photoGrayscale: false,
    mapUrl: "https://yandex.ru/maps/org/dushevny_sad/69171284239/?ll=20.519820%2C54.729871&mode=search&sll=20.519820%2C54.729871&sspn=0.011984%2C0.005408&text=%D0%B4%D1%83%D1%88%D0%B5%D0%B2%D0%BD%D1%8B%D0%B9%20%D1%81%D0%B0%D0%B4&z=17",
    mapLabel: "Карта",
  },
  schedule: {
    title: "Во сколько?",
    items: [
      { time: "15:30", text: "Сбор гостей, фуршет", icon: "drink" as const },
      { time: "16:00", text: "Церемония", icon: "rings" as const },
      { time: "17:00", text: "Банкет", icon: "plate" as const },
      { time: "23:00", text: "The End", icon: "moon" as const },
    ],
  },
  dresscode: {
    title: "Дресс-код",
    description: "Дорогие гости, предлагаем вам одеться в светлые пастельные и нейтральные тона — это будет прекрасно гармонировать с нашим праздником и обеспечит вам комфорт в тёплый летний день!",
    recommendations: [
      "Светлые пастельные и нейтральные оттенки: бежевый, кремовый, светло-розовый, светло-голубой, светлый лавандовый",
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
