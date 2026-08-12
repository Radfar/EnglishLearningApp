export type VocabularyItem = {
  word: string;
  example: string;
  meaning: string;
  category: string;
  status: "Learning" | "Review" | "Mastered";
};

export const vocabulary: VocabularyItem[] = [
  {
    word: "mitigate",
    example:
      "The company took several steps to mitigate the financial risk.",
    meaning: "to make something less severe, harmful, or difficult",
    category: "Academic",
    status: "Learning",
  },
  {
    word: "dwindle",
    example:
      "Our savings began to dwindle after several unexpected expenses.",
    meaning: "to gradually become smaller or less",
    category: "General",
    status: "Review",
  },
  {
    word: "allocate",
    example:
      "The company allocated more money to employee training this year.",
    meaning: "to distribute something for a particular purpose",
    category: "Academic",
    status: "Learning",
  },
  {
    word: "dubious",
    example:
      "I was dubious about the offer because the details were unclear.",
    meaning: "feeling uncertain or doubtful about something",
    category: "General",
    status: "Mastered",
  },
  {
    word: "stimulate",
    example:
      "The government introduced new programs to stimulate the local economy.",
    meaning: "to encourage activity, growth, or development",
    category: "Academic",
    status: "Learning",
  },
  {
    word: "deplete",
    example:
      "The long winter can quickly deplete the city's salt supplies.",
    meaning: "to use up most or all of something",
    category: "Academic",
    status: "Learning",
  },
  {
    word: "diminish",
    example:
      "The pain gradually diminished after the treatment.",
    meaning: "to become or make something less",
    category: "General",
    status: "Mastered",
  },
  {
    word: "trigger",
    example:
      "The announcement triggered a strong reaction from employees.",
    meaning: "to cause something to happen",
    category: "General",
    status: "Review",
  },
];