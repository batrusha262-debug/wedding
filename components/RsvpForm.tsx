"use client";

import { FormEvent, useState } from "react";

type GuestSide = "groom" | "bride" | "";
type BinaryAnswer = "yes" | "no" | "";
type HotMeal = "meat" | "poultry" | "fish";

type Notice = {
  type: "error" | "success";
  message: string;
};

const hotMealOptions: { value: HotMeal; label: string }[] = [
  { value: "meat", label: "Мясо" },
  { value: "poultry", label: "Птица" },
  { value: "fish", label: "Рыба" },
];

export function RsvpForm() {
  const [name, setName] = useState("");
  const [side, setSide] = useState<GuestSide>("");
  const [withChildren, setWithChildren] = useState<BinaryAnswer>("");
  const [childrenCount, setChildrenCount] = useState("");
  const [childrenNames, setChildrenNames] = useState("");
  const [withPlusOne, setWithPlusOne] = useState(false);
  const [plusOneName, setPlusOneName] = useState("");
  const [hotMeal, setHotMeal] = useState<HotMeal[]>([]);
  const [notice, setNotice] = useState<Notice | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showNotice = (nextNotice: Notice) => {
    setNotice(nextNotice);
    window.setTimeout(() => setNotice(null), 3600);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedChildrenNames = childrenNames.trim();
    const trimmedPlusOneName = plusOneName.trim();
    const normalizedChildrenCount =
      withChildren === "yes" ? Number.parseInt(childrenCount, 10) : 0;

    if (!trimmedName || !side || !withChildren) {
      showNotice({
        type: "error",
        message: "Заполните имя и все обязательные поля",
      });
      return;
    }

    if (hotMeal.length < 1) {
      showNotice({
        type: "error",
        message: "Выберите предпочтения по горячему",
      });
      return;
    }

    if (withPlusOne && !trimmedPlusOneName) {
      showNotice({
        type: "error",
        message: "Укажите имя второй половинки",
      });
      return;
    }

    if (withChildren === "yes" && (!Number.isFinite(normalizedChildrenCount) || normalizedChildrenCount < 1)) {
      showNotice({
        type: "error",
        message: "Укажите количество детей",
      });
      return;
    }

    if (withChildren === "yes" && !trimmedChildrenNames) {
      showNotice({
        type: "error",
        message: "Укажите имена детей",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          side,
          withChildren,
          childrenCount: normalizedChildrenCount,
          childrenNames: withChildren === "yes" ? trimmedChildrenNames : "",
          withPlusOne: withPlusOne ? "yes" : "no",
          plusOneName: withPlusOne ? trimmedPlusOneName : "",
          hotMeal,
        }),
      });

      if (!response.ok) {
        throw new Error("Telegram request failed");
      }

      setName("");
      setSide("");
      setWithChildren("");
      setChildrenCount("");
      setChildrenNames("");
      setWithPlusOne(false);
      setPlusOneName("");
      setHotMeal([]);
      showNotice({
        type: "success",
        message: "Соглашение отправлено",
      });
    } catch {
      showNotice({
        type: "error",
        message: "Не удалось отправить. Попробуйте еще раз",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md text-left">
      <label className="block text-sm font-semibold text-navy" htmlFor="guest-name">
        Имя
      </label>
      <input
        id="guest-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="mt-2 w-full rounded-lg border border-burgundy/25 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
        placeholder="Ваше имя"
        autoComplete="name"
      />

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy">С чьей стороны гость?</legend>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {[
            { value: "groom" as const, label: "Жениха" },
            { value: "bride" as const, label: "Невесты" },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex min-h-12 cursor-pointer items-center justify-center rounded-lg border px-4 text-sm font-bold uppercase tracking-wide transition ${
                side === option.value
                  ? "border-burgundy bg-burgundy text-white shadow-md"
                  : "border-burgundy/25 bg-white text-burgundy hover:border-burgundy/60"
              }`}
            >
              <input
                className="sr-only"
                type="radio"
                name="guest-side"
                value={option.value}
                checked={side === option.value}
                onChange={() => setSide(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy">Будете с детьми?</legend>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {[
            { value: "yes" as const, label: "Да" },
            { value: "no" as const, label: "Нет" },
          ].map((option) => (
            <label
              key={option.value}
              className={`flex min-h-12 cursor-pointer items-center justify-center rounded-lg border px-4 text-sm font-bold uppercase tracking-wide transition ${
                withChildren === option.value
                  ? "border-burgundy bg-burgundy text-white shadow-md"
                  : "border-burgundy/25 bg-white text-burgundy hover:border-burgundy/60"
              }`}
            >
              <input
                className="sr-only"
                type="radio"
                name="with-children"
                value={option.value}
                checked={withChildren === option.value}
                onChange={() => {
                  setWithChildren(option.value);
                  if (option.value === "no") {
                    setChildrenCount("");
                    setChildrenNames("");
                  }
                }}
              />
              {option.label}
            </label>
          ))}
        </div>

        {withChildren === "yes" && (
          <div className="mt-4">
            <label className="block text-sm font-semibold text-navy" htmlFor="children-count">
              Укажите количество детей
            </label>
            <input
              id="children-count"
              type="number"
              min="1"
              inputMode="numeric"
              value={childrenCount}
              onChange={(event) => setChildrenCount(event.target.value)}
              className="mt-2 w-full rounded-lg border border-burgundy/25 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
              placeholder="Например, 2"
            />

            <label className="mt-4 block text-sm font-semibold text-navy" htmlFor="children-names">
              Имена детей
            </label>
            <textarea
              id="children-names"
              value={childrenNames}
              onChange={(event) => setChildrenNames(event.target.value)}
              className="mt-2 min-h-24 w-full resize-none rounded-lg border border-burgundy/25 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
              placeholder="Например: Маша, Ваня"
            />
          </div>
        )}
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy">Что предпочитаете по горячему?</legend>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {hotMealOptions.map((option) => {
            const checked = hotMeal.includes(option.value);
            return (
              <label
                key={option.value}
                className={`flex min-h-12 cursor-pointer items-center justify-center rounded-lg border px-3 text-center text-sm font-bold uppercase tracking-wide transition ${
                  checked
                    ? "border-burgundy bg-burgundy text-white shadow-md"
                    : "border-burgundy/25 bg-white text-burgundy hover:border-burgundy/60"
                }`}
              >
                <input
                  className="sr-only"
                  type="checkbox"
                  name="hot-meal"
                  value={option.value}
                  checked={checked}
                  onChange={() =>
                    setHotMeal((prev) =>
                      prev.includes(option.value)
                        ? prev.filter((m) => m !== option.value)
                        : [...prev, option.value],
                    )
                  }
                />
                {option.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-navy">Придёте со второй половинкой?</legend>
        <p className="mt-1 text-xs leading-relaxed text-navy/60">
          Необязательно. Отметьте, только если приведёте с собой вторую половинку.
        </p>

        <label
          className={`mt-3 flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 text-sm font-bold uppercase tracking-wide transition ${
            withPlusOne
              ? "border-burgundy bg-burgundy text-white shadow-md"
              : "border-burgundy/25 bg-white text-burgundy hover:border-burgundy/60"
          }`}
        >
          <input
            className="sr-only"
            type="checkbox"
            name="with-plus-one"
            checked={withPlusOne}
            onChange={(event) => {
              const next = event.target.checked;
              setWithPlusOne(next);
              if (!next) {
                setPlusOneName("");
              }
            }}
          />
          {withPlusOne ? "Приду со второй половинкой ✓" : "Приду со второй половинкой"}
        </label>

        <div className="mt-4 flex items-start gap-3 rounded-lg border border-burgundy/40 bg-burgundy/10 p-3 text-left">
          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-burgundy text-sm font-bold text-white">
            !
          </span>
          <p className="text-sm font-semibold leading-relaxed text-burgundy">
            Если ваша вторая половинка заполнит анкету самостоятельно, <span className="underline">не отмечайте</span> «Приду со второй половинкой».
          </p>
        </div>

        {withPlusOne && (
          <div className="mt-4">
            <label className="block text-sm font-semibold text-navy" htmlFor="plus-one-name">
              Укажите имя второй половинки
            </label>
            <input
              id="plus-one-name"
              value={plusOneName}
              onChange={(event) => setPlusOneName(event.target.value)}
              className="mt-2 w-full rounded-lg border border-burgundy/25 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-burgundy focus:ring-4 focus:ring-burgundy/10"
              placeholder="Имя второй половинки"
              autoComplete="name"
            />
          </div>
        )}
      </fieldset>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full rounded-lg bg-burgundy px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-burgundy/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Отправляем..." : "Отправить соглашение"}
      </button>

      {notice && (
        <div
          role="status"
          className={`fixed bottom-5 left-1/2 z-50 w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 rounded-lg px-4 py-3 text-center text-sm font-semibold text-white shadow-2xl ${
            notice.type === "error" ? "bg-burgundy" : "bg-navy"
          }`}
        >
          {notice.message}
        </div>
      )}
    </form>
  );
}
