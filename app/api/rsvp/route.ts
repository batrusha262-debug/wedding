import { NextResponse } from "next/server";

type RsvpPayload = {
  name?: unknown;
  side?: unknown;
  withChildren?: unknown;
  childrenCount?: unknown;
  childrenNames?: unknown;
  withPlusOne?: unknown;
  plusOneName?: unknown;
  hotMeal?: unknown;
};

const sideLabels = {
  groom: "Жениха",
  bride: "Невесты",
} as const;

const hotMealLabels = {
  meat: "Мясо",
  poultry: "Птица",
  fish: "Рыба",
} as const;

type HotMeal = keyof typeof hotMealLabels;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as RsvpPayload | null;
  const name = typeof payload?.name === "string" ? payload.name.trim() : "";
  const side = payload?.side;
  const withChildren = payload?.withChildren;
  const childrenCount = typeof payload?.childrenCount === "number" ? payload.childrenCount : 0;
  const childrenNames = typeof payload?.childrenNames === "string" ? payload.childrenNames.trim() : "";
  const withPlusOne = payload?.withPlusOne;
  const plusOneName = typeof payload?.plusOneName === "string" ? payload.plusOneName.trim() : "";
  const hotMeal = Array.isArray(payload?.hotMeal)
    ? payload.hotMeal.filter((m): m is HotMeal => m === "meat" || m === "poultry" || m === "fish")
    : [];

  if (
    !name ||
    (side !== "groom" && side !== "bride") ||
    (withChildren !== "yes" && withChildren !== "no") ||
    (withPlusOne !== "yes" && withPlusOne !== "no") ||
    (withChildren === "yes" && (!Number.isInteger(childrenCount) || childrenCount < 1)) ||
    (withChildren === "yes" && !childrenNames) ||
    (withPlusOne === "yes" && !plusOneName) ||
    hotMeal.length < 1
  ) {
    return NextResponse.json({ error: "Invalid RSVP payload" }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Telegram is not configured" }, { status: 500 });
  }

  const messageLines = [
    "💌 <b>Новое подтверждение на свадьбу</b>",
    "➖➖➖➖➖➖➖➖➖➖",
    `👤 <b>Имя:</b> ${escapeHtml(name)}`,
    `💍 <b>Сторона:</b> ${sideLabels[side]}`,
    `🍽 <b>Горячее:</b> ${hotMeal.map((m) => hotMealLabels[m]).join(", ")}`,
  ];

  if (withChildren === "yes") {
    messageLines.push(
      "👶 <b>Дети:</b>",
      `      ├ <b>Количество:</b> ${childrenCount}`,
      `      └ <b>Имена:</b> ${escapeHtml(childrenNames)}`,
    );
  }

  if (withPlusOne === "yes") {
    messageLines.push(`🥂 <b>Вторая половинка:</b> ${escapeHtml(plusOneName)}`);
  }

  const message = messageLines.join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  }).catch(() => null);

  if (!telegramResponse?.ok) {
    return NextResponse.json({ error: "Telegram request failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
