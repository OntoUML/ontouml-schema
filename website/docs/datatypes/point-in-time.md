---
sidebar_position: 4
description: The pointInTime datatype — a string denoting a moment in time at year, month, day, or second precision, used by created and modified.
---

# point in time

A **`pointInTime`** is a string that denotes a moment in time. It is used by the
[identity properties](../document-structure.md#identity-properties) `created` and `modified` to
record when an element came into being and when it was last changed. A `pointInTime` supports four
levels of precision, so a value can be as coarse as a year or as fine as a second.

## Structure {#structure}

- **JSON type:** `string`
- **Accepted formats:**

| Precision | Format | Example |
| --- | --- | --- |
| Year | `YYYY` | `"2024"` |
| Year-month | `YYYY-MM` | `"2024-09"` |
| Date | `YYYY-MM-DD` (full date) | `"2024-09-04"` |
| Date-time | full date-time | `"2024-09-04T10:30:00Z"` |

A value must match one of these forms. Choose the coarsest precision that faithfully captures what
is known: recording only a year is perfectly valid when the exact day is unknown.

```json
"2024-09-04T10:30:00Z"
```

A year-only value is equally valid:

```json
"2024"
```

## Where it is used {#where-it-is-used}

`pointInTime` records the temporal [identity properties](../document-structure.md#identity-properties)
carried by every element:

| Property | Shape | Meaning |
| --- | --- | --- |
| `created` | `pointInTime` or `null` | When the element was created. |
| `modified` | `pointInTime` or `null` | When the element was last modified. |

Both are [always present](../document-structure.md#every-property-is-required); an unknown value is
written as `null`.

:::note
`pointInTime` is one of the reusable [datatypes](./index.md); the others are
[`id`](./id.md), [`languageString`](./language-string.md),
[`resource`](./resource.md), and [`point`](./point.md).
:::
