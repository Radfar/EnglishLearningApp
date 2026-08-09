# EnglishLearningApp — Review UX

## 1. Purpose

The Review system converts stored vocabulary into active learning.

The goal is not simply to show definitions.

The goal is to help the learner:

- recognize vocabulary;
- recall vocabulary;
- distinguish similar words;
- use vocabulary naturally;
- identify weak items;
- gradually move items toward mastery.

The Review system should be short, focused, and practical.

---

## 2. Review Entry Points

The learner can start a review session from:

### Dashboard

"8 items due"

→ Start Review

### Cluster

Decrease / Reduction

→ Review Cluster

### Vocabulary Item

dwindle

→ Review Item

### Review Page

→ Start Due Review

→ Choose Cluster

---

## 3. Review Modes

The MVP should support three core modes.

### Mode 1 — Recognition

Test whether the learner understands the meaning.

Example:

What does "dwindle" mean?

A. Become gradually smaller
B. Use something completely
C. Become suddenly larger
D. Refuse to do something

The learner selects an answer.

---

### Mode 2 — Recall

The learner must produce the word.

Example:

"Our savings are ________."

Expected concept:

dwindle

The answer does not have to be an exact string match in the MVP.

The learner can reveal the answer and self-rate.

---

### Mode 3 — Comparison

The learner distinguishes similar vocabulary.

Example:

Which word is most appropriate?

"The drought ________ the region's water reserves."

A. dwindled
B. depleted
C. mitigated
D. aroused

Correct:

depleted

This mode is especially important for semantic clusters.

---

## 4. Review Card

A review card should remain visually simple.

Example:

┌──────────────────────────────────────┐
│                                      │
│              dwindle                 │
│                                      │
│        Do you know this word?        │
│                                      │
│            [ Show Answer ]            │
│                                      │
└──────────────────────────────────────┘

After selecting "Show Answer":

┌──────────────────────────────────────┐
│              dwindle                 │
│                                      │
│ Gradually become smaller or less.    │
│                                      │
│ dwindling resources                  │
│ dwindling interest                   │
│                                      │
│ "Our savings are dwindling."         │
│                                      │
│ How well did you know it?            │
│                                      │
│ [Again] [Hard] [Good] [Easy]        │
└──────────────────────────────────────┘

---

## 5. Self-Rating

The MVP uses four ratings:

### Again

I did not know it.

### Hard

I eventually remembered it, but it was difficult.

### Good

I remembered it normally.

### Easy

I knew it immediately.

These ratings will later feed the spaced-repetition algorithm.

---

## 6. Review Session

A review session should have a clear beginning and end.

Example:

Review

8 items

[ Start ]

---

During review:

Item 3 of 8

dwindle

[ Show Answer ]

---

After completing:

Review Complete

8 items reviewed

6 Good
1 Hard
1 Again

Weak items:

dwindle
deplete

[ Review Weak Items ]

[ Done ]

---

## 7. Cluster Review

Cluster review should preserve the semantic relationship between items.

Example:

Cluster:

Decrease / Reduction

Items:

dwindle
diminish
decline
deplete
mitigate

The system should preferentially test comparisons between these items.

Example:

Which word means "use up most or all of something"?

deplete

This is more valuable than simply asking:

"What does deplete mean?"

---

## 8. Review Selection

The MVP can use a simple selection strategy.

Priority:

1. Items explicitly selected by the learner.
2. Items marked "Again".
3. Items that are due.
4. New high-priority items.
5. Older active items.

This does not need sophisticated spaced repetition initially.

---

## 9. Review Limits

The learner should be able to choose:

- 5 items
- 10 items
- 20 items

Default:

10 items.

The application should avoid overwhelming the learner.

---

## 10. Weak Items

If an item repeatedly receives:

Again
or
Hard

it becomes a weak item.

Weak items should be available from:

Dashboard
Review
Cluster Detail

Example:

Weak Items: 7

[ Practice Weak Items ]

---

## 11. Learning Status Changes

Review performance can influence learning status.

Suggested progression:

New
↓
Active
↓
Recognition
↓
Mastered

However, automatic status changes should be conservative.

The learner should always be able to change status manually.

---

## 12. Mastery

Mastered does not mean the learner will never forget the item.

It means:

> The learner can recognize and use the item confidently.

Mastered items should still be eligible for occasional review.

---

## 13. Personal Examples

During review, the learner may optionally create a personal example.

Example:

Target:

dwindle

Prompt:

Write your own sentence.

Learner:

"Our company's resources are dwindling."

The application stores the sentence with the learning item.

This reinforces active production.

---

## 14. Speaking Review — Future

A later version can support speaking practice.

Example:

Prompt:

"Use 'dwindle' in a sentence about your workplace."

The learner speaks.

AI can later evaluate:

- vocabulary usage
- grammar
- naturalness
- pronunciation
- collocation

This is outside the MVP.

---

## 15. CELPIP Review — Future

Review can eventually be filtered by:

### Speaking

Useful spoken expressions.

### Writing

Formal vocabulary and sentence patterns.

### Reading

Recognition vocabulary.

### Listening

Common spoken expressions and phrasal verbs.

The same learning item can belong to multiple CELPIP skills.

---

## 16. Spaced Repetition — Future Enhancement

The MVP should store:

- review date
- rating
- next review date

A simple scheduling algorithm can initially be used.

A sophisticated algorithm such as FSRS can be introduced later if needed.

The database should therefore be designed to support more advanced scheduling without requiring a redesign.

---

## 17. Review History

Each review should create a record.

Example:

dwindle

Review history:

2026-08-10 — Good
2026-08-13 — Hard
2026-08-16 — Good
2026-08-24 — Easy

This allows future progress analytics.

---

## 18. Review UX Principles

1. One task at a time.
2. Minimal distractions.
3. No unnecessary navigation.
4. Fast feedback.
5. Encourage recall before revealing the answer.
6. Prefer practical examples over dictionary definitions.
7. Use comparison questions for confusing vocabulary.
8. Keep sessions short.
9. Allow the learner to stop at any time.
10. Do not turn learning into a game unless it genuinely improves learning.

---

## 19. Review Success Criteria

The review system is successful if the learner can:

1. Start a review in a few actions.
2. Review 5–20 items without confusion.
3. Practice both recognition and recall.
4. Compare similar vocabulary.
5. Mark difficulty quickly.
6. Identify weak vocabulary.
7. Create personal examples.
8. Continue reviewing weak items.
9. See meaningful review history.
10. Eventually use the vocabulary naturally rather than merely recognizing definitions.
