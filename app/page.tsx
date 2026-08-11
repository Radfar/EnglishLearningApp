type IconProps = {
  className?: string;
};

function DashboardIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function BookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 5.5v16" />
      <path d="M8 7h8M8 11h8" />
    </svg>
  );
}

function LayersIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

function ReviewIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3a9 9 0 1 0 8.5 6" />
      <path d="M12 7v5l3 2" />
      <path d="M16 3h5v5" />
      <path d="m21 3-5 5" />
    </svg>
  );
}

function ProgressIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 4-4 3 2 5-6" />
      <path d="M16 7h3v3" />
    </svg>
  );
}

function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function BellIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function StatCard({
  label,
  value,
  description,
  color,
}: {
  label: string;
  value: string;
  description: string;
  color: "blue" | "amber" | "emerald";
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    emerald: "bg-emerald-50 text-emerald-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-slate-500">{label}</p>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${colors[color]}`}
        >
          <span className="text-sm font-bold">{value}</span>
        </div>
      </div>

      <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  );
}

const navigation = [
  { label: "Dashboard", icon: DashboardIcon, active: true },
  { label: "Vocabulary", icon: BookIcon, active: false },
  { label: "Clusters", icon: LayersIcon, active: false },
  { label: "Review", icon: ReviewIcon, active: false },
  { label: "Progress", icon: ProgressIcon, active: false },
];

const vocabulary = [
  {
    word: "mitigate",
    meaning: "make something less severe",
    category: "Academic",
    status: "Learning",
  },
  {
    word: "dwindle",
    meaning: "become gradually smaller",
    category: "General",
    status: "Review",
  },
  {
    word: "allocate",
    meaning: "distribute for a specific purpose",
    category: "Academic",
    status: "Learning",
  },
  {
    word: "dubious",
    meaning: "uncertain or doubtful",
    category: "General",
    status: "Mastered",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          <div className="flex h-20 items-center border-b border-slate-100 px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              E
            </div>

            <div className="ml-3">
              <h1 className="text-sm font-semibold text-slate-900">
                EnglishLearning
              </h1>
              <p className="text-xs text-slate-400">Personal learning</p>
            </div>
          </div>

          <nav className="flex-1 px-3 py-6">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Workspace
            </p>

            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      item.active
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="border-t border-slate-100 p-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500">
                Daily goal
              </p>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[72%] rounded-full bg-blue-600" />
              </div>

              <div className="mt-2 flex justify-between text-xs">
                <span className="text-slate-500">18 / 25 words</span>
                <span className="font-medium text-blue-600">72%</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main area */}
        <section className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
            <div>
              <p className="text-xs font-medium text-slate-400">Workspace</p>
              <h2 className="text-lg font-semibold text-slate-900">
                Dashboard
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                aria-label="Search"
                className="hidden h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 sm:flex"
              >
                <SearchIcon />
              </button>

              <button
                aria-label="Notifications"
                className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100"
              >
                <BellIcon />
              </button>

              <div className="h-9 w-9 rounded-full bg-blue-100 text-center text-sm font-semibold leading-9 text-blue-700">
                A
              </div>
            </div>
          </header>

          {/* Dashboard content */}
          <div className="flex-1 px-5 py-8 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              {/* Welcome */}
              <div>
                <p className="text-sm font-medium text-blue-600">
                  Tuesday, August 11
                </p>

                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Welcome back, Alireza
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Keep building your vocabulary. You&apos;re making steady
                  progress.
                </p>
              </div>

              {/* Statistics */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <StatCard
                  label="Vocabulary"
                  value="247"
                  description="Words in your collection"
                  color="blue"
                />

                <StatCard
                  label="Reviews Due"
                  value="18"
                  description="Words ready for review"
                  color="amber"
                />

                <StatCard
                  label="Mastery"
                  value="72%"
                  description="Overall vocabulary mastery"
                  color="emerald"
                />
              </div>

              {/* Recent vocabulary */}
              <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Recent vocabulary
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      Words you&apos;ve recently added or reviewed
                    </p>
                  </div>

                  <button className="hidden items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 sm:flex">
                    View all
                    <ArrowRightIcon />
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {vocabulary.map((item) => (
                    <div
                      key={item.word}
                      className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-slate-50 sm:px-6"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <h5 className="font-semibold text-slate-900">
                            {item.word}
                          </h5>

                          <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500 sm:inline">
                            {item.category}
                          </span>
                        </div>

                        <p className="mt-1 truncate text-sm text-slate-500">
                          {item.meaning}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                          item.status === "Mastered"
                            ? "bg-emerald-50 text-emerald-700"
                            : item.status === "Review"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 px-5 py-4 sm:hidden">
                  <button className="flex items-center gap-1 text-sm font-medium text-blue-600">
                    View all
                    <ArrowRightIcon />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}