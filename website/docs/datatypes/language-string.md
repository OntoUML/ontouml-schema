---
sidebar_position: 2
description: How OntoUML serializes human-readable, translatable text — the languageString datatype used by name, description, a note's text, and more.
---

# Language String

Every piece of human-readable text in an OntoUML serialization — an element's `name`, its
`description`, a note's `text`, a project's `keywords`, and so on — is written as a
**`languageString`** object rather than a plain string. This lets a single model carry its labels
and documentation in any number of languages at once.

## Structure {#structure}

A `languageString` is a JSON object whose keys are language tags and whose values are the text in
that language.

- **JSON type:** `object`
- **Keys:** [IANA language tags](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
  such as `en`, `pt-BR`, or `de`. The empty key `""` denotes text in an **unknown** language.
- **Values:** non-empty strings.

```json
{
  "en": "Person",
  "pt-BR": "Pessoa",
  "de": "Person"
}
```

A single-language value is simply an object with one entry:

```json
{ "en": "My Ontology" }
```

and text whose language is unspecified uses the empty key:

```json
{ "": "Unknown Language Value" }
```

## Where it is used {#where-it-is-used}

`languageString` appears wherever text is meant to be read by people and potentially translated.
Each property below is described in full on its own page; this table shows only its shape and where
that description lives.

| Property | Shape | Described in |
| --- | --- | --- |
| `name` | `languageString` or `null` | [descriptive properties](../document-structure.md#descriptive-properties) of every named element |
| `alternativeNames` | `languageString[]` | [descriptive properties](../document-structure.md#descriptive-properties) |
| `description` | `languageString` or `null` | [descriptive properties](../document-structure.md#descriptive-properties) |
| `editorialNotes` | `languageString[]` | [descriptive properties](../document-structure.md#descriptive-properties) |
| `text` | `languageString` | the [`Note`](../abstract-syntax/note.md) element |
| `keywords`, `bibliographicCitations` | `languageString[]` | the [`Project`](../document-structure.md#the-project-element) element |

Note the difference between a single `languageString` (one multilingual value, as for `name`) and a
`languageString[]` (a list of multilingual values, as for `alternativeNames` — each entry is itself
a full multilingual object).

## Absent versus empty {#absent-versus-empty}

Because [every property is required](../document-structure.md#every-property-is-required), text that
has not been provided is not omitted — it is written explicitly:

- a single optional value such as `name` is `null` when unset;
- a list such as `alternativeNames` is `[]` when empty.

An empty object `{}` is **not** used to mean "no text"; use `null` (or `[]` for a list) instead. A
`languageString` that is present always has at least one entry.

:::tip
`languageString` is one of the reusable [datatypes](./index.md); the other value types (`id`,
`resource`, `pointInTime`, and `point`) are described there.
:::
