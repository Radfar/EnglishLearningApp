# EnglishLearningApp — Vocabulary UX

## 1. Purpose

Vocabulary is the core learning area of EnglishLearningApp.

The UX must preserve the strongest feature of the user's existing spreadsheet workflow:

> Find a semantic cluster → see related vocabulary together → compare → practice.

The application should not behave like a traditional dictionary or a long vocabulary document.

---

## 2. Vocabulary Architecture

The Vocabulary section contains:

- All Items
- Clusters
- Inbox
- Vocabulary Detail

Primary learning path:

Vocabulary → Clusters → Cluster Detail → Vocabulary Detail

---

## 3. All Items

### Purpose

Provide a searchable library of every learning item.

### Layout

The screen should contain:

1. Search bar
2. Filters
3. Compact vocabulary list
4. Optional sorting

### Search

Search should support:

- exact word
- partial word
- phrase
- meaning
- collocation
- cluster

Example:

Searching:

`decrease`

may return:

- dwindle
- diminish
- decline
- deplete
- mitigate

### Filters

Initial filters:

- Cluster
- Learning Status
- Priority
- Type
- Register
- CELPIP relevance

### Learning Status

Use four primary statuses:

- New
- Active
- Recognition
- Mastered

Avoid too many states in the MVP.

---

## 4. Clusters

Clusters are first-class objects.

They are not simply filters applied to a flat vocabulary list.

### Example

Decrease / Reduction

- dwindle
- diminish
- decline
- deplete
- mitigate

Doubt / Uncertainty

- skeptical
- dubious
- suspicious
- not convinced

Opposition / Contradiction

- contradict
- violate
- breach
- deny
- defy
- dismiss
- oppose
- object to

### Cluster List

Each cluster should display:

- cluster name
- short description
- number of learning items
- optional progress indicator

Example:

Decrease / Reduction
12 items
██████░░░░ 60%

---

## 5. Cluster Detail

This is one of the most important screens in the application.

### Purpose

Allow rapid comparison of related vocabulary.

### Layout

Header:

- Back to Clusters
- Cluster name
- Short explanation
- Item count

Controls:

- All
- New
- Active
- Recognition
- Mastered

Vocabulary items appear in a compact list.

### Example

dwindle
Gradually become smaller, weaker, or less.

Common:
- dwindling resources
- dwindling interest
- dwindling supply

Example:
"Our savings are dwindling."

Status: Active

---

diminish
Become smaller, weaker, or less important.

Common:
- diminish the impact
- diminish importance

Example:
"The effect gradually diminished."

Status: Active

---

deplete
Use up most or all of something.

Common:
- deplete resources
- deplete reserves

Example:
"The drought depleted the water supply."

Status: Recognition

### Important UX Principle

The cluster screen should optimize for comparison.

Do not show every possible detail.

The learner should be able to scan several related items quickly.

---

## 6. Vocabulary Detail

Selecting an item opens the complete learning view.

### Example

# dwindle

VERB

### Core Meaning

Gradually become smaller, weaker, or less.

### Common Collocations

- dwindling resources
- dwindling interest
- dwindling supply
- dwindle away

### Example

"Our savings are dwindling."

### Compare

- diminish
- decline
- deplete

### Usage Note

Usually describes something gradually becoming smaller or less.

### My Example

Editable learner sentence:

"Our company's resources are dwindling."

### Learning Status

Active

### Actions

- Review
- Edit
- Change Status
- Add Example
- Add Collocation

---

## 7. Similar Words

Similar vocabulary should be displayed together when useful.

Example:

dwindle

Compare:

diminish
decline
deplete

The comparison should eventually explain the distinction between them.

This feature can later be enhanced by AI.

---

## 8. Collocations

Collocations are a first-class learning component.

Do not treat them as plain notes.

Example:

dwindle

- dwindling resources
- dwindling interest
- dwindling supply
- dwindle away

This allows future features such as:

- collocation search
- collocation quizzes
- sentence generation
- speaking practice

---

## 9. Examples

Examples have two possible sources:

### Reference Example

A natural example provided during vocabulary research.

### Learner Example

A sentence written by the learner.

Learner examples are especially important because they connect vocabulary to the user's real life and professional context.

---

## 10. Learning Status

### New

The learner has captured the item but has not studied it.

### Active

The learner is currently learning the item.

### Recognition

The learner understands the item when encountered but does not confidently use it.

### Mastered

The learner can recognize and use the item confidently.

Status should be easy to change.

---

## 11. Priority

Priority is independent of learning status.

Suggested values:

- Low
- Medium
- High

A word can therefore be:

High Priority + Recognition

or:

Low Priority + Active

This distinction is important.

---

## 12. Item Types

The system should support more than single words.

Initial types:

- Word
- Phrase
- Collocation
- Phrasal Verb
- Sentence Pattern
- Expression

Example:

"move on"

Type:

Phrasal Verb

Example:

"It's time to move on."

---

## 13. Inbox Integration

A new expression should be capturable with minimal information.

Example:

Term:

move on

Context:

"It's time to move on."

Source:

The Witcher

The learner should be able to save this immediately.

Detailed processing can happen later.

---

## 14. Processing an Inbox Item

Processing workflow:

Inbox Item
↓
Identify Type
↓
Confirm Meaning
↓
Choose Cluster
↓
Add Collocations
↓
Add Example
↓
Set Priority
↓
Set Learning Status
↓
Save as Learning Item

The processing screen should not require every field.

Only essential fields should be mandatory.

---

## 15. Review Integration

Every vocabulary item should have a Review action.

From Cluster Detail:

Review Cluster

From Vocabulary Detail:

Review Item

From Dashboard:

Review Due Items

This allows the same learning item to be reached through multiple workflows.

---

## 16. Search Philosophy

Search should be forgiving.

A learner may remember:

- part of a word
- approximate phrase
- meaning
- collocation
- cluster

The search system should eventually support all of these.

MVP can begin with text search.

Semantic/AI search can be added later.

---

## 17. Mobile UX

On mobile:

- Cluster list becomes a compact list.
- Vocabulary items remain vertically scannable.
- Search remains accessible.
- Important actions remain near the bottom or top of the screen.
- Avoid large cards that require excessive scrolling.

The mobile version must preserve the cluster-first workflow.

---

## 18. UX Success Criteria

The vocabulary UX is successful if the learner can:

1. Find a vocabulary item quickly.
2. Find all related vocabulary in a cluster.
3. Compare similar words without excessive navigation.
4. Capture a new word in seconds.
5. Add a personal example.
6. Change learning status easily.
7. Start review from the cluster or item.
8. Use the application without long continuous scrolling.

The application should feel faster and easier than the current spreadsheet workflow.
