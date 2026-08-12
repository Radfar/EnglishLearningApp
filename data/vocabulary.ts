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
      "The company introduced new safety measures to mitigate the risk of workplace accidents.",
    meaning: "To make something less severe, harmful, or serious.",
    category: "Verb",
    status: "Learning",
  },
  {
    word: "dwindle",
    example:
      "Our savings began to dwindle after several unexpected expenses.",
    meaning: "To gradually become smaller or less.",
    category: "Verb",
    status: "Review",
  },
  {
    word: "allocate",
    example:
      "The government allocated additional funding to improve public transportation.",
    meaning: "To officially give or assign something for a particular purpose.",
    category: "Verb",
    status: "Learning",
  },
  {
    word: "reliable",
    example:
      "We need a reliable supplier that can deliver the material on time.",
    meaning: "Consistently dependable or trustworthy.",
    category: "Adjective",
    status: "Mastered",
  },
  {
    word: "overwhelming",
    example:
      "The amount of information available online can be overwhelming for new learners.",
    meaning: "Very difficult to deal with because there is too much of something.",
    category: "Adjective",
    status: "Learning",
  },
  {
    word: "feasible",
    example:
      "We need to determine whether the proposed automation project is financially feasible.",
    meaning: "Possible and practical to achieve.",
    category: "Adjective",
    status: "Review",
  },
  {
    word: "enhance",
    example:
      "Adding real examples can enhance the learning experience.",
    meaning: "To improve something or make it better.",
    category: "Verb",
    status: "Learning",
  },
  {
    word: "encounter",
    example:
      "You may encounter unfamiliar expressions while watching a Canadian TV show.",
    meaning: "To experience or come across something unexpectedly.",
    category: "Verb",
    status: "Mastered",
  },
];