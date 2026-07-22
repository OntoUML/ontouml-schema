---
sidebar_position: 2
description: The abstract View element — ties one model element to the shapes that draw a single occurrence of it in a diagram.
---

# View

A **view** is an OntoUML element that represents a single occurrence of a
[model element](../abstract-syntax/index.md) in a [diagram](./diagram.md). A view connects a model
element to the [shapes](./shape.md) needed to draw it — for example, an
[n-ary relation view](./nary-relation-view.md) connects one relation to a
[diamond](./diamond.md) and a set of [paths](./path.md). Multiple views can represent multiple
occurrences of the same element, whether in one diagram or across several.

A view is responsible for *what* portions of a model element are shown (for example, whether a
property's cardinality is displayed), while a [shape](./shape.md) is responsible for *how* the
drawing is rendered (its position and dimensions).

`View` is **abstract**: it is never serialized on its own. Every serialized object is one of the
concrete subtypes below, distinguished by its `type` discriminator.

| Property | Type | Description |
| --- | --- | --- |
| `isViewOf` | `id` | The model element that the view represents in the diagram. |

Every view also carries the [identity properties](../document-structure.md#identity-properties)
(`id`, `created`, `modified`). Being views rather than
[named elements](../structural/named-element.md), they do **not** carry descriptive properties such
as `name` or `description`.

The concrete view types fall into two families:

- **Rectangular-region views**, backed by a box or label shape:
  [`ClassView`](./class-view.md), [`PackageView`](./package-view.md),
  [`NoteView`](./note-view.md), [`GeneralizationSetView`](./generalization-set-view.md), and
  [`NaryRelationView`](./nary-relation-view.md).
- **[Binary connector views](./binary-connector-view.md)**, drawn as a line between two other
  views: [`BinaryRelationView`](./binary-relation-view.md),
  [`GeneralizationView`](./generalization-view.md), and [`AnchorView`](./anchor-view.md).
