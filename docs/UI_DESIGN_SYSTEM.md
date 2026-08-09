# EnglishLearningApp — UI Design System

## 1. Purpose

The UI should feel like a focused learning/work tool rather than a game, social network, or generic dashboard.

The visual language should communicate:

- clarity
- organization
- concentration
- trust
- professional quality
- low cognitive load

The interface should remain comfortable during long desktop study sessions while also working well on mobile.

---

## 2. Design Direction

Primary characteristics:

- Clean
- Modern
- Calm
- Professional
- Compact
- Information-dense without feeling crowded

Avoid:

- excessive gradients
- excessive animation
- oversized cards
- unnecessary decorative elements
- gamification-heavy visual effects
- excessive use of bright colors

---

## 3. Color System

The initial color system should be neutral with one primary accent.

### Primary

Use a blue-based primary color.

Purpose:

- primary buttons
- active navigation
- links
- selected filters
- focus states

### Background

Use a very light neutral background.

### Surface

Cards, lists, dialogs, and panels should use white or near-white surfaces.

### Text

Primary text:

Dark neutral.

Secondary text:

Medium neutral gray.

Muted text:

Light gray.

---

## 4. Semantic Colors

Semantic colors should communicate meaning consistently.

### Success

Green.

Used for:

- mastered
- successful review
- positive confirmation

### Warning

Amber/yellow.

Used for:

- difficult items
- recognition status
- attention required

### Error

Red.

Used for:

- mistakes
- validation errors
- destructive actions

### Informational

Blue.

Used for:

- active vocabulary
- information messages
- neutral status

Colors should never be the only way of communicating meaning.

Use text or icons as well.

---

## 5. Typography

Use a modern sans-serif font.

Recommended initial font:

Inter or an equivalent system sans-serif.

Typography hierarchy:

### Page Title

Large and prominent.

### Section Title

Medium-large.

### Item Title

Medium.

### Body

Comfortable reading size.

### Metadata

Smaller and muted.

The interface should prioritize readability over visual novelty.

---

## 6. Vocabulary Item Density

Vocabulary screens should be relatively compact.

A learner should be able to see several related vocabulary items at once.

Avoid:

- huge cards
- excessive padding
- unnecessary images
- long empty spaces

The goal is rapid scanning.

---

## 7. Cards

Cards should be used selectively.

Good uses:

- dashboard summary
- review card
- cluster summary
- vocabulary detail sections

Avoid using cards for every piece of information.

A simple list may be better when many items need to be compared.

---

## 8. Navigation

Desktop:

Use a persistent left sidebar.

Mobile:

Use a compact navigation pattern.

The active section must be visually obvious.

Primary navigation:

- Dashboard
- Vocabulary
- Review
- CELPIP
- Progress

Secondary vocabulary navigation:

- All Items
- Clusters
- Inbox
- Mistakes
- Phrase Bank

---

## 9. Buttons

Primary action:

Solid primary-color button.

Secondary action:

Neutral or outlined button.

Destructive action:

Red or clearly destructive styling.

Text/link action:

Use when the action is low emphasis.

Avoid presenting many competing primary buttons on one screen.

---

## 10. Status Indicators

Learning status should use both color and text.

Examples:

🟢 Active

🔵 Recognition

🟣 Mastered

⚪ New

The exact colors may be refined during implementation.

Status should remain visually consistent across:

- vocabulary lists
- cluster detail
- vocabulary detail
- review
- dashboard

---

## 11. Search

Search is a primary interaction.

The vocabulary search field should:

- be easy to find
- support keyboard interaction
- provide immediate feedback
- preserve the current filters where possible

Future versions may add semantic search.

---

## 12. Filters

Filters should be compact.

Examples:

[ Cluster ] [ Status ] [ Priority ] [ Type ]

On desktop, filters can remain visible.

On mobile, they may be presented through a filter drawer.

---

## 13. Forms

Forms should be simple.

Do not ask for information that is unnecessary for the current task.

For example, capturing:

"move on"

should not require the learner to complete ten fields.

Minimum capture:

- expression
- context

Additional information can be added later.

---

## 14. Feedback

User actions should receive clear feedback.

Examples:

"Saved to Inbox"

"Vocabulary item updated"

"Review completed"

"Example added"

Feedback should normally be brief and non-disruptive.

---

## 15. Loading States

Use skeletons or subtle loading indicators where appropriate.

Avoid full-page blocking spinners for small operations.

---

## 16. Empty States

Empty states should explain what the learner can do next.

Example:

### No Inbox Items

"Your Inbox is empty."

"Capture a new expression whenever you encounter one."

[ Add Vocabulary ]

Avoid empty screens with no guidance.

---

## 17. Error States

Errors should:

- explain what happened
- avoid technical jargon
- provide a recovery action when possible

Example:

"Unable to save this vocabulary item."

[ Try Again ]

Technical details can be logged separately.

---

## 18. Responsive Design

The application must support:

- desktop
- laptop
- tablet
- mobile

Desktop should prioritize information density.

Mobile should prioritize focused interaction.

Do not simply shrink the desktop layout.

---

## 19. Accessibility

The application should aim for WCAG 2.1 AA principles.

Important requirements:

- keyboard navigation
- visible focus states
- sufficient color contrast
- semantic HTML
- accessible labels
- screen-reader-friendly controls
- no color-only status communication
- appropriate touch target sizes

Accessibility should be considered during implementation rather than added at the end.

---

## 20. Animation

Animation should be subtle and functional.

Good uses:

- opening a panel
- changing review cards
- showing success feedback
- navigation transitions

Avoid:

- decorative animations
- excessive bouncing
- distracting effects during review

The learner's attention should remain on the language.

---

## 21. Icons

Use one consistent icon library.

Icons should support text rather than replace it where meaning could be ambiguous.

Do not use decorative icons excessively.

---

## 22. Dark Mode

Dark mode should be considered in the architecture but does not need to block the MVP.

If implemented later, all semantic colors and contrast requirements must remain accessible.

---

## 23. Design Principle

The most important visual principle is:

> The interface should make the learner's vocabulary easier to see, compare, remember, and use.

The design should never become more visually interesting at the expense of learning efficiency.

---

## 24. UI Success Criteria

The UI is successful if:

1. The learner can understand the current screen immediately.
2. Related vocabulary is visually grouped.
3. Important actions are obvious.
4. Screens remain compact.
5. The interface does not require unnecessary scrolling.
6. Desktop and mobile experiences both feel intentional.
7. Accessibility is built into the interface.
8. Visual styling supports learning rather than distracting from it.
