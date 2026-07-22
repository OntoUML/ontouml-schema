---
slug: /enumerations
description: The controlled value sets of the OntoUML Schema — the closed enumerations for ontological nature and aggregation kind, and the open, standardized stereotype vocabularies for classes, relations, and properties.
---

# Enumerations

Several places in the schema draw their values from a fixed vocabulary rather than from free text.
This chapter documents those **enumerated / controlled value sets**. They come in two flavours,
and the distinction matters for validation.

## Closed enumerations

Some value sets are **fixed by the schema itself**. Only the listed tokens are legal, and a
validator rejects anything outside them. There are two:

- **[Ontological Nature](./ontological-nature.md)** — the values a [`Class`](../abstract-syntax/class.md)
  may list in its `restrictedTo` array, naming the natures its instances may have.
- **[Aggregation Kind](./aggregation-kind.md)** — the values a [`Property`](../abstract-syntax/property.md)
  may carry in `aggregationKind`, marking the whole end of a parthood relation.

## Open, standardized vocabularies

The OntoUML **stereotypes** are different. The schema stores a `stereotype` as a plain **non-empty
string** (see [`Decoratable`](../abstract-syntax/decoratable.md)) and does **not** constrain it to
an enumeration. The lists below are therefore the *recommended* standard vocabulary — drawn from the
OntoUML profile — rather than a closed set. **Custom stereotypes are allowed**, deliberately, so
that tools and modelers can extend the notation.

- **[Class Stereotypes](./class-stereotypes.md)** — decorate [class](../abstract-syntax/class.md)
  elements (`kind`, `role`, `relator`, …).
- **[Relation Stereotypes](./relation-stereotypes.md)** — decorate
  [binary](../abstract-syntax/binary-relation.md) and [n-ary](../abstract-syntax/nary-relation.md)
  relations (`material`, `mediation`, …).
- **[Property Stereotypes](./property-stereotypes.md)** — decorate
  [property](../abstract-syntax/property.md) elements (`begin`, `end`).

:::info Closed versus open
Ontological Nature and Aggregation Kind are **closed** enumerations — validators enforce them. The
three stereotype lists are **open** — the schema accepts any non-empty string, and the standard
vocabulary exists for interoperability, not enforcement.
:::
