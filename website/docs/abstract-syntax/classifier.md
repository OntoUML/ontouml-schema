---
sidebar_position: 3
description: The Classifier abstract type — a decoratable element that defines the properties exhibited by its instances.
---

# Classifier

A **decoratable element that defines the properties exhibited by its instances** — a
[class](./class.md) or a [relation](./relation.md).

`Classifier` is **abstract**: it is never serialized on its own and has no `type` of its own. Every
classifier is one of its subtypes:

- a [`Class`](./class.md) — the properties of a set of individualized entities; or
- a [`Relation`](./relation.md) — the properties of a set of relations, itself always a
  [binary](./binary-relation.md) or [n-ary](./nary-relation.md) relation.

| Property | Type | Description |
| --- | --- | --- |
| `isAbstract` | `boolean` or `null` | Whether the classifier can have direct instances. An abstract classifier is instantiated only through its non-abstract specializations. |
| `properties` | `id[]` | The [properties](./property.md) contained in the classifier, referenced by id. |

`Classifier` is a [`Decoratable`](./decoratable.md), so it also carries `stereotype` and
`isDerived`, along with the [properties common to all model elements](./index.md).

The `properties` array holds the classifier's **attributes** when the classifier is a class, and its
**relation ends** when the classifier is a relation. Each entry is the id of a
[`Property`](./property.md) element defined elsewhere in the document. For relations this array must
be **ordered**, since the position of each end (source, target, …) is significant.
