---
sidebar_position: 2
description: The abstract type that adds name and descriptive metadata — alternativeNames, description, editorialNotes, creators, and contributors.
---

# Named Element

A `NamedElement` is an [`OntoumlElement`](./ontouml-element.md) that can be assigned a name and other
descriptive information. It is an **abstract** grouping that never appears directly in a document (it
has no `type` value of its own); it only contributes the six
[descriptive properties](../document-structure.md#descriptive-properties) below to its subtypes.

| Property | Type | Description |
| --- | --- | --- |
| `name` | `languageString` or `null` | The name of the element. |
| `alternativeNames` | `languageString[]` | Synonyms or alternatives to the main name — *not* translations of it. |
| `description` | `languageString` or `null` | A free-text account of the element. |
| `editorialNotes` | `languageString[]` | Notes about the development process; not to be confused with `description`. |
| `creators` | `resource[]` | Agents who contributed to creating the element. |
| `contributors` | `resource[]` | Agents who contributed to developing the element. |

`NamedElement` also carries the [identity properties](../document-structure.md#identity-properties)
`id`, `created`, and `modified` from [`OntoumlElement`](./ontouml-element.md). Remember that
[every property is required](../document-structure.md#every-property-is-required): an absent single
value is written as `null` and an absent collection as `[]`.

## Textual vs. agent metadata

The descriptive properties fall into two groups by datatype:

- `name`, `alternativeNames`, `description`, and `editorialNotes` are all
  [`languageString`](../datatypes/language-string.md) values, so each can hold the text in several
  languages at once. Keep the distinctions in mind: `alternativeNames` are synonyms rather than
  translations of `name`, and `editorialNotes` document the *process* rather than the subject the
  way `description` does.
- `creators` and `contributors` are arrays of [`resource`](../datatypes/index.md#resource) values,
  identifying the agents behind the element rather than describing it.

## Subtypes

`NamedElement` has three concrete/abstract descendants:

- [`Project`](./project.md) — the ontology container.
- [`ModelElement`](../abstract-syntax/model-element.md) — the abstract root of the
  [abstract syntax](../abstract-syntax/index.md), and thus of all its model-element subtypes
  (classes, relations, properties, generalizations, packages, and so on).
- [`Diagram`](../concrete-syntax/diagram.md) — a named element in the
  [concrete syntax](../concrete-syntax/index.md).

## Shared properties

Since `NamedElement` is abstract, it is never serialized on its own. Its properties appear inside
every named element, alongside the identity block:

```json
{
  "id": "element_1",
  "created": "2024-09-03",
  "modified": null,
  "name": { "en": "Person" },
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": []
}
```

See [`Project`](./project.md) and the [abstract syntax](../abstract-syntax/index.md) reference for
complete, serializable objects that embed this block.
