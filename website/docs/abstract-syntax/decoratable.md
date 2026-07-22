---
sidebar_position: 1
description: The Decoratable abstract type — a model element that can be decorated with a UFO stereotype.
---

# Decoratable

A **model element that can be decorated with a stereotype** identifying its ontological nature
according to the Unified Foundational Ontology (UFO) — for example a class decorated with `"kind"`,
marking it as a type of object that provides an identity principle to its instances.

`Decoratable` is **abstract**: it is never serialized on its own and has no `type` of its own. Every
decoratable element is one of its subtypes:

- a [`Property`](./property.md) — an attribute of a class or one end of a relation; or
- a [`Classifier`](./classifier.md) — which is in turn a [class](./class.md) or a
  [relation](./relation.md).

| Property | Type | Description |
| --- | --- | --- |
| `stereotype` | `string` or `null` | The element's type according to UFO, e.g. `"kind"`. |
| `isDerived` | `boolean` or `null` | Whether the element is derived from another — i.e. some other element serves as its truthmaker. |

`Decoratable` also carries the [properties common to all model elements](./index.md), including
`customProperties`.

A `stereotype` names the UFO notion the element instantiates. For classes these values include
`kind`, `role`, `phase`, and `material`, among others; for relations they include stereotypes such
as `material` and `mediation`. The set of admissible stereotypes comes from UFO rather than from the
schema, which only requires the value to be a non-empty string.

`isDerived` marks an element whose existence is entailed by another. A common example is the
comparative relation `is heavier than` between two physical objects, which is derived from their
`Weight` quality.
