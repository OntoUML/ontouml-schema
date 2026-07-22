---
sidebar_position: 1
description: The metadata every OntoUML element carries — identity, descriptive, and custom properties — and practical guidance on how to use each.
---

# Element Metadata

Every OntoUML element carries metadata, regardless of what kind of element it is. This page gathers
that shared metadata into three groups and explains how to use each property. The formal definitions
live with the abstract types that introduce them —
[`OntoumlElement`](../structural/ontouml-element.md),
[`NamedElement`](../structural/named-element.md), and
[`ModelElement`](../abstract-syntax/model-element.md) — which this page cross-links.

## Identity

Every element is an [`OntoumlElement`](../structural/ontouml-element.md) and therefore carries three
identity properties. See [Identity properties](../document-structure.md#identity-properties) for the
formal definition.

| Property | Type | Description |
| --- | --- | --- |
| `id` | `id` | A non-empty string that uniquely identifies the element within the ontology. |
| `created` | `pointInTime` | When the element was created. |
| `modified` | `pointInTime` or `null` | When the element was last modified, or `null` if never modified. |

The [`id`](../datatypes/id.md) must be unique within the ontology, because ids are how elements
[reference one another](../document-structure.md#references-not-nesting) instead of being physically
nested. The id is also the basis of the model's **FAIR** identifiers: when the enclosing
[`Project`](../structural/project.md) declares a `namespace`, appending an element's `id` to that
base URI yields a globally unique, resolvable identifier — a FAIR Digital Object. Choosing stable,
meaningful ids therefore pays off well beyond the local document.

`created` and `modified` use the [`pointInTime`](../datatypes/point-in-time.md) type, which accepts
several levels of precision (from a year down to a full timestamp). Use `modified` to record
provenance over time; set it to `null` when the element has not changed since creation.

## Descriptive

Named elements — projects, [diagrams](../concrete-syntax/diagram.md), and
[model elements](../abstract-syntax/model-element.md) — additionally carry descriptive metadata from
[`NamedElement`](../structural/named-element.md). See
[Descriptive properties](../document-structure.md#descriptive-properties) for the formal definition.

| Property | Type | Description |
| --- | --- | --- |
| `name` | `languageString` or `null` | The name of the element. |
| `alternativeNames` | `languageString[]` | Synonyms or alternatives to the main name (not translations). |
| `description` | `languageString` or `null` | A free-text account of the element. |
| `editorialNotes` | `languageString[]` | Notes about the development process; not to be confused with `description`. |
| `creators` | `resource[]` | Agents who contributed to creating the element. |
| `contributors` | `resource[]` | Agents who contributed to developing the element. |

How to use each:

- **`name`** — the primary label. Because it is a
  [`languageString`](../datatypes/language-string.md), one name can be given in several languages
  (e.g. `{ "en": "Person", "pt-BR": "Pessoa" }`).
- **`alternativeNames`** — synonyms or alternative labels for the *same* concept in the *same*
  language (e.g. "Human" alongside "Person"). These are **not translations** — translations belong
  inside the `languageString` of `name` as additional language keys.
- **`description`** — a human-facing, free-text account of what the element means. This is the text
  intended for readers of the model.
- **`editorialNotes`** — notes about the *modeling process* (open questions, decisions still to be
  made, review remarks). Keep these separate from `description`: editorial notes are for modelers,
  not for end users of the ontology.
- **`creators`** and **`contributors`** — the agents behind the element, given as
  [`resource`](../datatypes/resource.md) references (a name plus a URI), so an author can be linked
  to an ORCID, a homepage, or another identifier. Use `creators` for those principally responsible
  and `contributors` for others who helped.

All text-bearing descriptive fields use the [`languageString`](../datatypes/language-string.md)
type, so every label and account can be **multilingual**.

## Custom

Model elements also carry a slot for tool- and domain-specific extensions, introduced by
[`ModelElement`](../abstract-syntax/model-element.md).

| Property | Type | Description |
| --- | --- | --- |
| `customProperties` | `object` or `null` | UML tagged values — arbitrary key-value pairs for extensions not covered by the standard schema. |

`customProperties` is the schema's equivalent of UML **tagged values**. Use it to attach
tool-specific settings or domain-specific attributes that the standard metadata does not capture.
Set it to `null` when there are none. Because these values are outside the controlled part of the
schema, prefer the standard metadata properties whenever one fits — reserve `customProperties` for
genuine extensions.

:::note Every property is required
Like all OntoUML properties, every metadata property above is
[required](../document-structure.md#every-property-is-required). A property that carries no
information is still written out explicitly: a nullable single value as `null`, and a collection as
an empty array `[]`. There are no optional metadata fields.
:::
