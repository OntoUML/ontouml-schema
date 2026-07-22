---
slug: /datatypes
description: Reference for the reusable OntoUML Schema datatypes — id, languageString, resource, pointInTime, and point.
---

# Datatypes

Several value types recur throughout the schema. Rather than repeat their definitions on every
element, the schema factors them out as reusable datatypes, described here.

Each datatype summarized below also has a dedicated reference page: [id](./id.md) ·
[language string](./language-string.md) · [resource](./resource.md) ·
[point in time](./point-in-time.md) · [point](./point.md).

## id {#id}

A non-empty string that uniquely identifies an OntoUML element within an ontology. Ids are how
elements [reference one another](../document-structure.md#references-not-nesting): wherever an
element needs to point at another (a package's `contents`, a generalization's `general`, a view's
`isViewOf`, and so on), it stores the target element's `id`.

- **JSON type:** `string`
- **Constraint:** at least one character (must not be empty).

```json
"class_person"
```

:::tip Namespaces and global identifiers
When a [`Project`](../document-structure.md#the-project-element) declares a `namespace`, appending an
element's `id` to that namespace should yield a globally unique, resolvable URI — turning each
element into a FAIR Digital Object.
:::

## languageString {#languagestring}

An object whose key-value pairs map an [IANA language tag](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
to the text in that language. It is used for all human-readable, translatable text, such as `name`,
`description`, and a note's `text`.

- **JSON type:** `object`
- **Keys:** IANA language tags (e.g. `en`, `pt-BR`). The empty key `""` denotes text in an unknown language.
- **Values:** non-empty strings.

```json
{
  "en": "Person",
  "pt-BR": "Pessoa"
}
```

Because it underpins every label and piece of documentation in a model, `languageString` has its
own reference page: see [language string](./language-string.md) for how it is structured, where it
is used, and how absent text is represented.

## resource {#resource}

A reference to an external resource by name and URI, allowing links into the semantic web. It is
used for properties such as a project's `publisher`, `license`, `creators`, and `contributors`.

- **JSON type:** `object`
- **Properties** (both required):

| Property | Type | Description |
| --- | --- | --- |
| `URI` | `string (uri)` or `null` | The Uniform Resource Identifier of the resource. |
| `name` | `languageString` or `null` | The name of the resource. |

```json
{
  "name": { "en": "CC BY 4.0" },
  "URI": "https://creativecommons.org/licenses/by/4.0/"
}
```

## pointInTime {#pointintime}

A string denoting a point in time, used by the [identity properties](../document-structure.md#identity-properties)
`created` and `modified`. It supports four levels of precision, so a value can be as coarse as a
year or as fine as a second.

- **JSON type:** `string`
- **Accepted formats:**

| Precision | Format | Example |
| --- | --- | --- |
| Year | `YYYY` | `"2024"` |
| Year-month | `YYYY-MM` | `"2024-09"` |
| Date | `YYYY-MM-DD` (full date) | `"2024-09-04"` |
| Date-time | full date-time | `"2024-09-04T10:30:00Z"` |

```json
"2024-09-04T10:30:00Z"
```

## point {#point}

A pair of coordinates locating a position in a diagram, used by [shapes](../concrete-syntax/index.md#shapes)
for `topLeft` and for the entries of a path's `points`. The origin `(0, 0)` is the diagram's
top-left corner; `x` increases rightwards and `y` increases downwards.

- **JSON type:** `object`
- **Properties** (both required):

| Property | Type | Description |
| --- | --- | --- |
| `x` | `integer` | The horizontal coordinate; zero or greater. |
| `y` | `integer` | The vertical coordinate; zero or greater. |

```json
{ "x": 813, "y": 20 }
```
