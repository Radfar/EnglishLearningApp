export type VocabularyItem = {
  word: string;
  meaning: string;
  category: string;
  status: "Learning" | "Review" | "Mastered";
};

export const vocabulary: VocabularyItem[] = [
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
  {
    word: "trigger",
    meaning: "cause something to happen",
    category: "General",
    status: "Review",
  },
];