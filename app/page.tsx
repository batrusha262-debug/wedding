import Link from "next/link";
import { site } from "@/lib/site";
import { TornEdge } from "@/components/TornEdge";
import { PhotoCard, StoryPhotoCard } from "@/components/PhotoCard";
import { ScheduleIcon } from "@/components/ScheduleIcons";
import { Heart, HeartField } from "@/components/Hearts";
import { RsvpForm } from "@/components/RsvpForm";

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
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(91,126,95,0.08),transparent_24%),linear-gradient(to_bottom,#fbe9ee,#fbe9ee_70%,rgba(251,233,238,0.95))] px-5 pb-10 pt-12">
        <HeartField />
        <h1 className="font-script relative text-center text-5xl text-burgundy drop-shadow-sm md:text-6xl font-bold">
          {site.hero.title}
        </h1>

        <div className="relative mt-8 flex flex-nowrap items-start justify-center -space-x-3 sm:-space-x-1">
          <div className="relative z-10 flex flex-col items-center">
            <span className="font-script text-3xl leading-none text-burgundy sm:text-4xl">{site.hero.groomLabel}</span>
            <StoryPhotoCard src={site.hero.groomPhoto} alt="Жених в детстве" rotate={-2} />
          </div>
          <div className="relative flex flex-col items-center">
            <span className="font-script text-3xl leading-none text-burgundy sm:text-4xl">{site.hero.brideLabel}</span>
            <StoryPhotoCard src={site.hero.bridePhoto} alt="Невеста в детстве" rotate={2} />
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 max-w-xs">
          <div className="rounded-lg bg-gradient-to-r from-burgundy to-burgundy/90 px-8 py-4 text-center shadow-lg backdrop-blur-sm">
            <p className="font-script text-3xl text-white tracking-wide font-semibold">{site.hero.ribbon}</p>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 max-w-md text-center">
          <h2 className="font-script text-3xl text-burgundy">{site.hero.storyTitle}</h2>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-burgundy/40" />
          <p className="mt-4 text-sm leading-relaxed text-navy/90">{site.hero.story}</p>
        </div>
      </section>

      <TornEdge fill="#5b7e5f" />

      {/* Invite + calendar */}
      <section className="relative overflow-hidden bg-cream px-5 py-12 text-center text-navy">
        <HeartField className="opacity-60" color="text-burgundy/45" />
        <Heart className="relative z-10 mx-auto text-burgundy" size={34} />
        <p className="relative z-10 mt-6 text-sm leading-relaxed">{site.invite.lead}</p>

        <p className="relative z-10 mt-10 text-lg font-medium tracking-wide">{invite.monthYear}</p>
        <div className="relative z-10 mx-auto mt-6 grid max-w-sm grid-cols-3 gap-2 rounded-lg border border-burgundy/10 bg-white/35 px-2 py-5 text-sm shadow-sm">
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
                          d="M24 4c-4 8-14 12-14 22 0 8 6 14 14 14s14-6 14-14c0-10-10-14-14-22z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-90"
                        />
                        <path
                          d="M23 6c-3.4 7.3-12.1 11.5-12 19.7.1 7.1 5.4 12.6 12.7 12.8 7.5.2 13.3-5.5 13.3-12.8C37 17.5 27.7 13.3 23 6z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-50"
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

      <TornEdge fill="#5b7e5f" />

      {/* Location */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(to_bottom,#5b7e5f,#5b7e5f_76%,rgba(91,126,95,0.95))] px-5 py-16 text-center text-white">
        <HeartField className="opacity-50" color="text-white/55" />
        <h2 className="relative z-10 font-script text-5xl drop-shadow-sm font-bold">{site.location.title}</h2>
        <svg className="relative z-10 mx-auto mt-2 h-5 w-44 text-white/85" viewBox="0 0 180 24" fill="none" aria-hidden>
          <path
            d="M4 13c16-13 30 12 46-1s29-12 45 0 29 12 45-1 25-6 36 1"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 16c16-10 30 8 46-2 16-11 29-10 45 1 15 10 29 8 45-2 15-9 25-4 35 1"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.45"
          />
        </svg>
        <p className="relative z-10 mx-auto mt-6 max-w-xs text-sm leading-relaxed text-white/90">{site.location.address}</p>
        <div className="relative z-10 mx-auto mt-8 max-w-[280px]">
          <PhotoCard
            src={site.location.photo}
            alt={site.location.venue}
            polaroid
            rotate={1}
            grayscale={site.location.photoGrayscale}
            caption={site.location.glamping}
          />
        </div>
        <p className="relative z-10 mx-auto mt-8 max-w-xs text-sm leading-relaxed text-white/90">{site.location.mapHint}</p>
        <Link
          href={site.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-4 inline-block min-w-[220px] rounded-lg border-2 border-white bg-white px-10 py-4 text-sm font-bold uppercase tracking-wider text-burgundy transition-all duration-300 hover:bg-burgundy hover:text-white hover:shadow-lg hover:scale-105"
        >
          {site.location.mapLabel}
        </Link>
      </section>

      <TornEdge fill="#fbe9ee" flip />

      {/* Dress Code */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_30%,rgba(231,184,198,0.25),transparent_25%),linear-gradient(to_bottom,#fbe9ee,#fbe9ee_78%,rgba(251,233,238,0.95))] px-5 py-16 text-center text-navy">
        <HeartField className="opacity-50" color="text-burgundy/45" />
        <Heart className="relative z-10 mx-auto text-burgundy" size={36} />
        <h2 className="relative z-10 font-script mt-8 text-5xl text-burgundy drop-shadow-sm font-bold">{site.dresscode.title}</h2>
        <div className="relative z-10 mx-auto mt-3 h-1 w-28 rounded-full bg-burgundy/35" />

        <p className="relative z-10 mx-auto mt-8 max-w-md text-sm leading-relaxed text-navy/85">{site.dresscode.description}</p>

        <div className="relative z-10 mx-auto mt-10 max-w-md space-y-4">
          {site.dresscode.recommendations.map((rec, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-lg bg-white/60 p-3 text-left transition-all hover:bg-white/100 hover:shadow-md">
              <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-burgundy/20 text-xs font-bold text-burgundy">
                ✓
              </span>
              <p className="text-sm text-navy/85 leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </section>

      <TornEdge fill="#5b7e5f" />

      {/* Schedule */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(91,126,95,0.08),transparent_24%),linear-gradient(to_bottom,#fbe9ee,#fbe9ee_72%,rgba(251,233,238,0.95))] px-5 pb-16 pt-16">
        <HeartField className="opacity-45" color="text-burgundy/45" />
        <h2 className="relative z-10 font-script text-center text-5xl text-burgundy drop-shadow-sm font-bold">{site.schedule.title}</h2>
        <div className="relative z-10 mx-auto mt-3 h-1 w-28 rounded-full bg-burgundy/35" />

        <div className="relative z-10 mx-auto mt-10 max-w-md pl-2">
          <div className="absolute bottom-8 right-[1.35rem] top-0 w-8 overflow-visible">
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
              <li key={item.time} className="grid grid-cols-[3.25rem_2rem_1fr] items-start gap-3 text-left">
                <div className="pt-1 text-sm font-bold tabular-nums leading-none text-burgundy">{item.time}</div>
                <div className="-mt-1 flex items-start justify-center">
                  <ScheduleIcon kind={item.icon} />
                </div>
                <p className="pt-1 text-sm leading-none text-navy/90">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mr-10 mt-6 flex justify-end">
            <Heart className="text-burgundy" size={22} />
          </div>
        </div>
      </section>

      <TornEdge fill="#fbe9ee" />

      {/* RSVP */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(91,126,95,0.08),transparent_24%),linear-gradient(to_bottom,#fbe9ee,#fbe9ee_72%,rgba(251,233,238,0.95))] px-5 pb-16 pt-14 text-center text-navy">
        <HeartField className="opacity-55" color="text-burgundy/45" />
        <Heart className="relative z-10 mx-auto text-burgundy" size={34} />
        <h2 className="relative z-10 font-script mt-6 text-5xl text-burgundy drop-shadow-sm font-bold">{site.rsvp.title}</h2>
        <p className="relative z-10 mx-auto mt-4 max-w-md text-sm leading-relaxed text-navy/85">{site.rsvp.description}</p>
        <div className="relative z-10">
          <RsvpForm />
        </div>
      </section>
    </main>
  );
}
