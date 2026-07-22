---
sidebar_position: 1
description: The abstract root type of every OntoUML element, contributing the identity properties id, created, and modified.
---

# OntoUML Element

`OntoumlElement` is the **abstract** root of the type hierarchy: every element in a serialization —
projects, model elements, diagrams, views, and shapes — is an `OntoumlElement`. It is an abstract
grouping that never appears directly in a document (it has no `type` value of its own); it only
contributes the [identity properties](../document-structure.md#identity-properties) that every
element carries.

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | A non-empty string that uniquely identifies the element within the ontology. |
| `created` | `pointInTime` | When the element was created. |
| `modified` | `pointInTime` or `null` | When the element was last modified, or `null`. |

Because [every property is required](../document-structure.md#every-property-is-required), all three
are always present; an unknown `modified` is written explicitly as `null`.

The `id` must be **unique** across the whole ontology: OntoUML serializations are flat and express
structure by [reference](../document-structure.md#references-not-nesting), so one element points at
another by storing its `id`. If a [`Project`](./project.md) declares a `namespace`, the `id`
appended to that namespace should form a globally unique, resolvable URI. See
[`id`](../datatypes/index.md#id) for the string constraints and
[`pointInTime`](../datatypes/index.md#pointintime) for the accepted date formats of `created` and
`modified`.

## Subtypes

`OntoumlElement` specializes into three branches:

- [`NamedElement`](./named-element.md) — elements that can be named and described: the
  [`Project`](./project.md), the [`ModelElement`](../abstract-syntax/model-element.md) branch (the whole
  [abstract syntax](../abstract-syntax/index.md)), and the
  [`Diagram`](../concrete-syntax/diagram.md).
- [`View`](../concrete-syntax/index.md#views) — the depictions of model elements in the concrete
  syntax.
- [`Shape`](../concrete-syntax/index.md#shapes) — the geometry that backs those views.

## Shared properties

Since `OntoumlElement` is abstract, it is never serialized on its own. Its properties appear inside
every concrete element. For example, the identity block of any element looks like this:

```json
{
  "id": "element_1",
  "created": "2024-09-03",
  "modified": null
}
```

A complete, serializable object always adds a `type` discriminator and the remaining properties of
its concrete type — see [`Project`](./project.md) or any [model element](../abstract-syntax/index.md)
for full examples.
