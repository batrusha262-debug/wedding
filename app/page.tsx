import Link from "next/link";
import { site } from "@/lib/site";
import { TornEdge } from "@/components/TornEdge";
import { PhotoCard, StoryPhotoCard } from "@/components/PhotoCard";
import { ScheduleIcon } from "@/components/ScheduleIcons";
import { Heart, HeartField } from "@/components/Hearts";

export default function Home() {
  const { invite } = site;

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-navy shadow-2xl">
      {/* Header */}
      <header className="bg-navy px-6 py-6 text-center text-white">
        <p className="text-2xl font-bold tracking-[0.2em]">{site.brand.title}</p>
        <p className="mt-1 text-xs uppercase tracking-widest text-white/70">{site.brand.subtitle}</p>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream px-5 pb-10 pt-8">
        <HeartField />
        <h1 className="font-script relative text-center text-4xl text-burgundy md:text-5xl">
          {site.hero.title}
        </h1>

        <div className="relative mt-8 flex flex-wrap items-start justify-center gap-6">
          <div className="flex flex-col items-center">
            <span className="font-script text-lg text-burgundy">{site.hero.groomLabel}</span>
            <StoryPhotoCard src={site.hero.groomPhoto} alt="Жених в детстве" rotate={-2} />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-script text-lg text-burgundy">{site.hero.brideLabel}</span>
            <StoryPhotoCard src={site.hero.bridePhoto} alt="Невеста в детстве" rotate={2} />
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-6 max-w-xs">
          <div className="rounded-sm bg-burgundy px-6 py-3 text-center shadow-md">
            <p className="font-script text-2xl text-white">{site.hero.ribbon}</p>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 max-w-md text-center">
          <h2 className="font-script text-3xl text-burgundy">{site.hero.storyTitle}</h2>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-burgundy/40" />
          <p className="mt-4 text-sm leading-relaxed text-navy/90">{site.hero.story}</p>
        </div>
      </section>

      <TornEdge fill="#800020" />

      {/* Couple polaroids */}
      <section className="relative bg-burgundy px-5 py-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PhotoCard
            src={site.couple.photoLeft}
            alt="Пара"
            polaroid
            rotate={-3}
          />
          <PhotoCard
            src={site.couple.photoRight}
            alt="Пара"
            polaroid
            rotate={4}
          />
        </div>
        <p className="font-script mt-10 text-center text-3xl text-white">{site.couple.line}</p>
        <div className="mt-4 flex justify-center gap-3 text-white/90">
          <Heart className="text-white" size={22} />
          <Heart className="text-white" size={18} />
          <Heart className="text-white" size={22} />
        </div>
      </section>

      <TornEdge fill="#f9f4ee" flip />

      {/* Invite + calendar */}
      <section className="bg-cream px-5 py-12 text-center text-navy">
        <Heart className="mx-auto text-burgundy" size={28} />
        <p className="mt-6 text-sm leading-relaxed">{site.invite.lead}</p>

        <p className="mt-10 text-lg font-medium tracking-wide">{invite.monthYear}</p>
        <div className="mx-auto mt-6 grid max-w-sm grid-cols-3 gap-2 text-sm">
          {invite.days.map((d) => {
            const isHighlight = d.date === invite.highlightDay;
            return (
              <div key={d.date} className="flex flex-col items-center gap-2">
                <span className="text-navy/70">{d.label}</span>
                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold ${
                    isHighlight ? "text-burgundy" : "text-navy"
                  }`}
                >
                  {isHighlight && (
                    <span className="absolute inset-0 text-burgundy" aria-hidden>
                      <svg viewBox="0 0 48 48" className="h-full w-full">
                        <path
                          d="M24 6c-4 8-14 12-14 22 0 8 6 14 14 14s14-6 14-14c0-10-10-14-14-22z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="opacity-90"
                        />
                      </svg>
                    </span>
                  )}
                  <span className="relative z-10">{d.date}</span>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <TornEdge fill="#800020" />

      {/* Location */}
      <section className="bg-burgundy px-5 py-12 text-center text-white">
        <h2 className="font-script text-4xl">{site.location.title}</h2>
        <p className="mt-4 text-lg font-medium">{site.location.venue}</p>
        <div className="mx-auto mt-8 max-w-[280px]">
          <PhotoCard
            src={site.location.photo}
            alt={site.location.venue}
            polaroid
            rotate={1}
            grayscale={site.location.photoGrayscale}
          />
        </div>
        <Link
          href={site.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block min-w-[200px] rounded border-2 border-white bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-burgundy transition hover:bg-burgundy hover:text-white"
        >
          {site.location.mapLabel}
        </Link>
      </section>

      <TornEdge fill="#f9f4ee" flip />

      {/* Schedule */}
      <section className="relative bg-cream px-5 pb-16 pt-12">
        <h2 className="font-script text-center text-4xl text-burgundy">{site.schedule.title}</h2>
        <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-burgundy/35" />

        <div className="relative mx-auto mt-10 max-w-md pl-2">
          <div className="absolute bottom-4 right-[1.35rem] top-4 w-8 overflow-visible">
            <svg className="h-full w-full text-burgundy" preserveAspectRatio="none" viewBox="0 0 32 400" aria-hidden>
              <path
                d="M20 0 Q8 40 22 80 Q10 120 24 160 Q12 200 22 240 Q10 280 24 320 Q14 360 20 400"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <ul className="relative z-10 space-y-8 pr-14">
            {site.schedule.items.map((item) => (
              <li key={item.time} className="flex gap-4 text-left">
                <div className="min-w-[3.25rem] text-sm font-bold tabular-nums text-burgundy">{item.time}</div>
                <div className="flex flex-1 items-start gap-3">
                  <ScheduleIcon kind={item.icon} />
                  <p className="text-sm leading-snug text-navy/90">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mr-10 mt-6 flex justify-end">
            <Heart className="text-burgundy" size={22} />
          </div>
        </div>
      </section>
    </main>
  );
}
