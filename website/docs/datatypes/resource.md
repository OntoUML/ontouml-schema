---
sidebar_position: 3
description: The resource datatype — a reference to an external resource by name and URI, linking an OntoUML model into the semantic web.
---

# Resource

A **`resource`** is a reference to something outside the model — a license, a person, an
organization, a publication — identified by a name and a URI. By pairing a human-readable label with
a Uniform Resource Identifier, a `resource` lets an OntoUML model link out into the semantic web.

## Structure {#structure}

- **JSON type:** `object`
- **Properties** (both required):

| Property | Type | Description |
| --- | --- | --- |
| `URI` | `string (uri)` or `null` | The Uniform Resource Identifier of the resource. |
| `name` | [`languageString`](./language-string.md) or `null` | The name of the resource. |

Both properties are [always present](../document-structure.md#every-property-is-required); when a
value is unknown it is written explicitly as `null` rather than omitted. The `name` follows the
[`languageString`](./language-string.md) datatype, so a resource can be named in multiple languages.

```json
{
  "name": { "en": "CC BY 4.0" },
  "URI": "https://creativecommons.org/licenses/by/4.0/"
}
```

A resource with only a URI and no name:

```json
{
  "name": null,
  "URI": "https://orcid.org/0000-0002-1825-0097"
}
```

## Where it is used {#where-it-is-used}

`resource` is used for the metadata properties of a project that point at external entities:

| Property | Shape | Described in |
| --- | --- | --- |
| `publisher` | `resource` or `null` | the [`Project`](../structural/project.md) element |
| `license` | `resource` or `null` | the [`Project`](../structural/project.md) element |
| `creators` | `resource[]` | the [`Project`](../structural/project.md) element |
| `contributors` | `resource[]` | the [`Project`](../structural/project.md) element |

:::note
`resource` is one of the reusable [datatypes](./index.md); the others are
[`id`](./id.md), [`languageString`](./language-string.md),
[`pointInTime`](./point-in-time.md), and [`point`](./point.md).
:::
