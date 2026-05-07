import { NextResponse } from "next/server";

type RsvpPayload = {
  name?: unknown;
  side?: unknown;
  withChildren?: unknown;
  childrenCount?: unknown;
  childrenNames?: unknown;
  withPlusOne?: unknown;
};

const sideLabels = {
  groom: "Жениха",
  bride: "Невесты",
} as const;

const answerLabels = {
  yes: "Да",
  no: "Нет",
} as const;

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as RsvpPayload | null;
  const name = typeof payload?.name === "string" ? payload.name.trim() : "";
  const side = payload?.side;
  const withChildren = payload?.withChildren;
  const childrenCount = typeof payload?.childrenCount === "number" ? payload.childrenCount : 0;
  const childrenNames = typeof payload?.childrenNames === "string" ? payload.childrenNames.trim() : "";
  const withPlusOne = payload?.withPlusOne;

  if (
    !name ||
    (side !== "groom" && side !== "bride") ||
    (withChildren !== "yes" && withChildren !== "no") ||
    (withPlusOne !== "yes" && withPlusOne !== "no") ||
    (withChildren === "yes" && (!Number.isInteger(childrenCount) || childrenCount < 1)) ||
    (withChildren === "yes" && !childrenNames)
  ) {
    return NextResponse.json({ error: "Invalid RSVP payload" }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Telegram is not configured" }, { status: 500 });
  }

  const messageLines = [
    "Новое соглашение на свадьбу",
    "",
    `Имя: ${name}`,
    `Сторона: ${sideLabels[side]}`,
    `Будут с детьми: ${answerLabels[withChildren]}`,
    `Придет с парой: ${answerLabels[withPlusOne]}`,
  ];

  if (withChildren === "yes") {
    messageLines.splice(
      5,
      0,
      `Количество детей: ${childrenCount}`,
      `Имена детей: ${childrenNames}`,
    );
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
    }),
  }).catch(() => null);

  if (!telegramResponse?.ok) {
    return NextResponse.json({ error: "Telegram request failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
