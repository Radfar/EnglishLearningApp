import Link from "next/link";
import { vocabulary } from "@/data/vocabulary";

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
    </svg>
  );
}

function RotateIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20 11a8 8 0 0 0-14.9-4" />
      <path d="M4 4v4h4" />
      <path d="M4 13a8 8 0 0 0 14.9 4" />
      <path d="M20 20v-4h-4" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 3-4 3 2 5-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const stats = [
  {
    label: "Words",
    value: "247",
    description: "in your vocabulary",
    icon: BookIcon,
  },
  {
    label: "Reviews Due",
    value: "18",
    description: "ready for review",
    icon: RotateIcon,
  },
  {
    label: "Mastery",
    value: "72%",
    description: "overall progress",
    icon: ChartIcon,
  },
];

export default function Home() {
  const recentVocabulary = vocabulary.slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
          <div className="border-b border-slate-200 px-6 py-6">
            <p className="text-lg font-bold tracking-tight text-slate-900">
              EnglishLearningApp
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Learn through context
            </p>
          </div>

          <nav className="flex-1 px-4 py-6">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Learning
            </p>

            <Link
              href="/"
              className="mt-3 flex items-center gap-3 rounded-xl bg-blue-50 px-3 py-3 text-sm font-medium text-blue-700"
            >
              <ChartIcon />
              Dashboard
            </Link>

            <Link
              href="/vocabulary"
              className="mt-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <BookIcon />
              Vocabulary
            </Link>

            <button
              type="button"
              className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-400"
            >
              <RotateIcon />
              Review
            </button>
          </nav>

          <div className="border-t border-slate-200 p-5">
            <p className="text-xs text-slate-400">Current goal</p>

            <p className="mt-1 text-sm font-medium text-slate-700">
              Build contextual vocabulary
            </p>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="border-b border-slate-200 bg-white">
            <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10">
              <div>
                <p className="text-xs font-medium text-blue-600">
                  Learning Dashboard
                </p>

                <h1 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                  Good morning
                </h1>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                A
              </div>
            </div>
          </header>

          <section className="px-5 py-8 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Keep building your vocabulary.
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Learn new words through useful examples and real-world
                  context.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Icon />
                        </div>

                        <span className="text-xs font-medium text-slate-400">
                          Progress
                        </span>
                      </div>

                      <p className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {stat.label}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">
                      Contextual learning
                    </p>

                    <h2 className="mt-1 text-xl font-semibold text-slate-900">
                      Recent examples
                    </h2>
                  </div>

                  <Link
                    href="/vocabulary"
                    className="hidden items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-700 sm:flex"
                  >
                    View all
                    <ArrowIcon />
                  </Link>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  {recentVocabulary.map((item) => (
                    <article
                      key={item.word}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {item.word}
                          </h3>

                          <span className="mt-1 inline-block text-xs font-medium text-slate-400">
                            {item.category}
                          </span>
                        </div>

                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-4 rounded-xl bg-slate-50 p-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          Example
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          {item.example}
                        </p>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-slate-500">
                        {item.meaning}
                      </p>
                    </article>
                  ))}
                </div>

                <Link
                  href="/vocabulary"
                  className="mt-4 flex items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-blue-600 sm:hidden"
                >
                  View all vocabulary
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}