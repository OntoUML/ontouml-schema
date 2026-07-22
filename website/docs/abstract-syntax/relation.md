---
sidebar_position: 5
description: The Relation abstract type — binary and n-ary classifiers that define the properties of relations of the subject domain.
---

# Relation

A **classifier** that defines the properties of a set of relations of the subject domain, such as
`studies in` or `buys product from`. `Relation` is **abstract**: it is never serialized on its own
and has no `type` of its own. A serialized relation is always either a
[**binary relation**](./binary-relation.md) or an [**n-ary relation**](./nary-relation.md).

Being a [`Classifier`](./classifier.md), `Relation` carries `isAbstract` and `properties`; being a
[`Decoratable`](./decoratable.md), it also carries `stereotype` and `isDerived`; and it carries the
[properties common to all model elements](./index.md). A relation's ends are
[`Property`](./property.md) elements referenced, **in order**, from its `properties` array.

## Binary relation {#binary-relation}

A relation between two members — for example the `«material» studies in` relation connecting
`Student` and `University`. See [`BinaryRelation`](./binary-relation.md) for its properties,
diagrams, and JSON examples (including [parthood and aggregation](./binary-relation.md#parthood)).

## N-ary relation {#nary-relation}

A relation that connects more than two members — for example a ternary `allocation` relation joining
`Employee`, `Project`, and `Role`. See [`NaryRelation`](./nary-relation.md) for its properties,
diagram, and JSON examples.
