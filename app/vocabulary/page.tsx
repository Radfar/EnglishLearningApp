"use client";

import { useMemo, useState } from "react";

type VocabularyItem = {
  word: string;
  meaning: string;
  category: string;
  status: "Learning" | "Review" | "Mastered";
};

const vocabulary: VocabularyItem[] = [
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
  {
    word: "stimulate",
    meaning: "encourage activity or growth",
    category: "Academic",
    status: "Learning",
  },
  {
    word: "trigger",
    meaning: "cause something to happen",
    category: "General",
    status: "Review",
  },
  {
    word: "deplete",
    meaning: "use up a supply",
    category: "Academic",
    status: "Learning",
  },
  {
    word: "diminish",
    meaning: "become or make less",
    category: "General",
    status: "Mastered",
  },
];

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

function StatusBadge({ status }: { status: VocabularyItem["status"] }) {
  const styles = {
    Learning: "bg-blue-50 text-blue-700",
    Review: "bg-amber-50 text-amber-700",
    Mastered: "bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function VocabularyPage() {
  const [search, setSearch] = useState("");

  const filteredVocabulary = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return vocabulary;
    }

    return vocabulary.filter(
      (item) =>
        item.word.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700"
                aria-label="Back to dashboard"
              >
                <ArrowLeftIcon />
              </a>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  EnglishLearningApp
                </p>
                <h1 className="text-lg font-semibold text-slate-900">
                  Vocabulary
                </h1>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <a
                href="/"
                className="text-sm font-medium text-slate-500 hover:text-slate-900"
              >
                Dashboard
              </a>

              <div className="h-9 w-9 rounded-full bg-blue-100 text-center text-sm font-semibold leading-9 text-blue-700">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            {/* Page heading */}
            <div>
              <p className="text-sm font-medium text-blue-600">
                Your vocabulary collection
              </p>

              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Words & expressions
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Search, review, and organize the vocabulary you are learning.
              </p>
            </div>

            {/* Toolbar */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-md">
                <SearchIcon />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search vocabulary..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">
                <PlusIcon />
                Add Word
              </button>
            </div>

            {/* Table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left">
                  <thead className="border-b border-slate-100 bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Word
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Meaning
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Category
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {filteredVocabulary.map((item) => (
                      <tr
                        key={item.word}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="px-6 py-4">
                          <span className="font-semibold text-slate-900">
                            {item.word}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-500">
                          {item.meaning}
                        </td>

                        <td className="px-6 py-4">
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                            {item.category}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <StatusBadge status={item.status} />
                        </td>
                      </tr>
                    ))}

                    {filteredVocabulary.length === 0 && (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-6 py-12 text-center text-sm text-slate-500"
                        >
                          No vocabulary matches your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Table footer */}
              <div className="border-t border-slate-100 px-6 py-4">
                <p className="text-sm text-slate-500">
                  Showing{" "}
                  <span className="font-medium text-slate-700">
                    {filteredVocabulary.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium text-slate-700">
                    {vocabulary.length}
                  </span>{" "}
                  words
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}