"use client";

import { useMemo, useState } from "react";
import { vocabulary, type VocabularyItem } from "@/data/vocabulary";

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

function StatusBadge({
  status,
}: {
  status: VocabularyItem["status"];
}) {
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

function VocabularyCard({ item }: { item: VocabularyItem }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">
              {item.word}
            </h3>

            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              {item.category}
            </span>
          </div>

          <p className="mt-1 text-xs text-slate-400">
            Contextual example
          </p>
        </div>

        <StatusBadge status={item.status} />
      </div>

      <div className="mt-5 rounded-xl bg-blue-50/70 p-5">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-500">
          Example
        </p>

        <p className="mt-2 text-base leading-7 text-slate-800">
          {item.example}
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Meaning
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          {item.meaning}
        </p>
      </div>
    </article>
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
        item.example.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
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
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Dashboard
            </a>

            <div className="h-9 w-9 rounded-full bg-blue-100 text-center text-sm font-semibold leading-9 text-blue-700">
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
              Understand new words through natural examples instead of
              memorizing isolated definitions.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-md">
              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <SearchIcon />
              </div>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search words, examples, or meanings..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              />
            </div>

            <button
              type="button"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
            >
              <PlusIcon />
              Add Word
            </button>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {filteredVocabulary.map((item) => (
              <VocabularyCard key={item.word} item={item} />
            ))}
          </div>

          {filteredVocabulary.length === 0 && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
              <p className="text-sm font-medium text-slate-700">
                No vocabulary matches your search.
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Try another word, example, or meaning.
              </p>
            </div>
          )}

          <div className="mt-6">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-medium text-slate-700">
                {filteredVocabulary.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-700">
                {vocabulary.length}
              </span>{" "}
              vocabulary items
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}