"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { vocabulary as initialVocabulary, type VocabularyItem } from "@/data/vocabulary";

type Filter = "All" | VocabularyItem["status"];

const STORAGE_KEY = "english-learning-vocabulary";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="m9 18 6-6-6-6" />
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
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}

function HighlightWord({
  example,
  word,
}: {
  example: string;
  word: string;
}) {
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = example.split(new RegExp(`(${escapedWord})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === word.toLowerCase() ? (
          <strong key={index} className="font-semibold text-slate-900">
            {part}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

const filters: Filter[] = ["All", "Learning", "Review", "Mastered"];

export default function VocabularyPage() {
  const [items, setItems] = useState<VocabularyItem[]>(initialVocabulary);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedVocabulary = localStorage.getItem(STORAGE_KEY);

      if (savedVocabulary) {
        const parsedVocabulary = JSON.parse(savedVocabulary);

        if (Array.isArray(parsedVocabulary)) {
          setItems(parsedVocabulary);
        }
      }
    } catch {
      console.warn("Could not load saved vocabulary.");
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      console.warn("Could not save vocabulary.");
    }
  }, [items, loaded]);

  const counts = useMemo(() => {
    return {
      All: items.length,
      Learning: items.filter((item) => item.status === "Learning").length,
      Review: items.filter((item) => item.status === "Review").length,
      Mastered: items.filter((item) => item.status === "Mastered").length,
    };
  }, [items]);

  const filteredVocabulary = useMemo(() => {
    const query = search.trim().toLowerCase();

    return items.filter((item) => {
      const matchesFilter =
        activeFilter === "All" || item.status === activeFilter;

      const matchesSearch =
        !query ||
        item.word.toLowerCase().includes(query) ||
        item.example.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [items, activeFilter, search]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700"
              aria-label="Back to dashboard"
            >
              <ArrowLeftIcon />
            </Link>

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
            <Link
              href="/"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Dashboard
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
              A
            </div>
          </div>
        </div>
      </header>

      <section className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Learn through context
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Vocabulary
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Review your words through natural examples and meaningful
              context.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex overflow-x-auto rounded-xl border border-slate-200 bg-white p-1">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {filter}

                    <span
                      className={`ml-1.5 text-xs ${
                        isActive ? "text-blue-100" : "text-slate-400"
                      }`}
                    >
                      {counts[filter]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex w-full gap-3 lg:w-auto">
              <div className="relative min-w-0 flex-1 lg:w-80">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <SearchIcon />
                </div>

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search vocabulary..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <button
                type="button"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                <PlusIcon />
                <span className="hidden sm:inline">Add Word</span>
              </button>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-[180px_minmax(0,1fr)_130px_40px] gap-4 border-b border-slate-200 bg-slate-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 md:grid">
              <div>Word</div>
              <div>Example</div>
              <div>Status</div>
              <div />
            </div>

            <div className="divide-y divide-slate-100">
              {filteredVocabulary.map((item) => (
                <Link
                  key={item.word}
                  href={`/vocabulary/${encodeURIComponent(item.word)}`}
                  className="group block transition hover:bg-blue-50/40"
                >
                  <div className="grid gap-3 px-5 py-5 md:grid-cols-[180px_minmax(0,1fr)_130px_40px] md:items-center md:gap-4 md:px-6">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.word}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {item.category}
                      </p>
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm leading-6 text-slate-700">
                        <HighlightWord
                          example={item.example}
                          word={item.word}
                        />
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400 md:hidden">
                        {item.meaning}
                      </p>
                    </div>

                    <div>
                      <StatusBadge status={item.status} />
                    </div>

                    <div className="hidden text-slate-300 transition group-hover:text-blue-500 md:flex md:justify-end">
                      <ChevronIcon />
                    </div>
                  </div>

                  <div className="px-5 pb-5 md:hidden">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Meaning
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.meaning}
                    </p>
                  </div>
                </Link>
              ))}

              {filteredVocabulary.length === 0 && (
                <div className="px-6 py-16 text-center">
                  <p className="text-sm font-medium text-slate-700">
                    No vocabulary matches your search.
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Try another word or change the selected tab.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-medium text-slate-700">
                {filteredVocabulary.length}
              </span>{" "}
              words
            </p>

            <p className="hidden text-xs text-slate-400 sm:block">
              Select a word to view details
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}