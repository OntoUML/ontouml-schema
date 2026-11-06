---
sidebar_position: 2
description: The Decoratable abstract type — a model element that can be decorated with a stereotype, such as a property, a classifier, or a dependency.
---

# Decoratable

A **model element that can be decorated with a stereotype**. On classes, relations, and
properties, the stereotype identifies the element's ontological nature according to the Unified
Foundational Ontology (UFO) — for example a class decorated with `"kind"`, marking it as a type of
object that provides an identity principle to its instances. On a dependency, it identifies the kind
of dependency — for example `"derive"` for a derivation.

`Decoratable` is **abstract**: it is never serialized on its own and has no `type` of its own. Every
decoratable element is one of its subtypes:

- a [`Property`](./property.md) — an attribute of a class or one end of a relation;
- a [`Classifier`](./classifier.md) — which is in turn a [class](./class.md) or a
  [relation](./relation.md); or
- a [`Dependency`](./dependency.md) — a dependency between two model elements, such as the
  derivation of a relation from its truthmaker.

| Property     | Type               | Description                                      |
| ------------ | ------------------ | ------------------------------------------------ |
| `stereotype` | `string` or `null` | The element's type, e.g. `"kind"` or `"derive"`. |

`Decoratable` also carries the [properties common to all model elements](./index.md), including
`customProperties`.

On a class, relation, or property, a `stereotype` names the UFO notion the element instantiates.
Each of these has its own standard vocabulary from the OntoUML profile, which the schema suggests
for its `stereotype`:

- a [`Class`](./class.md) takes a [class stereotype](../enumerations/class-stereotypes.md), such as
  `kind`, `role`, `phase`, or `subkind`;
- a [`Relation`](./relation.md) takes a [relation stereotype](../enumerations/relation-stereotypes.md),
  such as `material`, `mediation`, or `componenthood`; and
- a [`Property`](./property.md) takes a [property stereotype](../enumerations/property-stereotypes.md):
  `addOnly`, `begin`, or `end`.

These suggestions help editors autocomplete the standard values, but the schema only requires a
non-empty string — see [Enumerations](../enumerations/index.md) for how custom stereotypes are
supported.

A [`Dependency`](./dependency.md) uses `derive`, from UML's standard profile, to mark a
[derivation](./dependency.md#derivation). Unlike the vocabularies above, this value is documented but
not suggested by the schema.
