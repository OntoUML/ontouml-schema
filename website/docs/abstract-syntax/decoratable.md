---
sidebar_position: 2
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

| Property     | Type                | Description                                                                                     |
| ------------ | ------------------- | ----------------------------------------------------------------------------------------------- |
| `stereotype` | `string` or `null`  | The element's type according to UFO, e.g. `"kind"`.                                             |
| `isDerived`  | `boolean` or `null` | Whether the element is derived from another — i.e. some other element serves as its truthmaker. |

`Decoratable` also carries the [properties common to all model elements](./index.md), including
`customProperties`.

A `stereotype` names the UFO notion the element instantiates. Each subtype has its own standard
vocabulary from the OntoUML profile, which the schema suggests for that subtype's `stereotype`:

- a [`Class`](./class.md) takes a [class stereotype](../enumerations/class-stereotypes.md), such as
  `kind`, `role`, `phase`, or `subkind`;
- a [`Relation`](./relation.md) takes a [relation stereotype](../enumerations/relation-stereotypes.md),
  such as `material`, `mediation`, or `componenthood`; and
- a [`Property`](./property.md) takes a [property stereotype](../enumerations/property-stereotypes.md):
  `addOnly`, `begin`, or `end`.

These suggestions help editors autocomplete the standard values, but the schema only requires a
non-empty string — see [Enumerations](../enumerations/index.md) for how custom stereotypes are
supported.

`isDerived` marks an element whose existence is entailed by another. A common example is the
comparative relation `is heavier than` between two physical objects, which is derived from their
`Weight` quality.
