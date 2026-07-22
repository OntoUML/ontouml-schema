---
sidebar_position: 8
description: The abstract BinaryConnectorView element — a view drawn as a line connecting two other views.
---

# Binary Connector View

A **binary connector view** is a [view](./view.md) drawn as a line between two other views — for
example, a binary relation or a generalization connecting two [class views](./class-view.md).

`BinaryConnectorView` is **abstract**: it is never serialized on its own. Every serialized object is
one of the concrete subtypes below, distinguished by its `type` discriminator.

| Property | Type | Description |
| --- | --- | --- |
| `sourceView` | `id` | The view at the source end of the connector. |
| `targetView` | `id` | The view at the target end of the connector. |
| `path` | `id` | The [path](./path.md) shape that renders the connector. |

Every binary connector view also carries `isViewOf` from [`View`](./view.md) and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

There are three concrete binary connector views:

- [`BinaryRelationView`](./binary-relation-view.md) — renders a
  [binary relation](../abstract-syntax/binary-relation.md).
- [`GeneralizationView`](./generalization-view.md) — renders a
  [generalization](../abstract-syntax/generalization.md).
- [`AnchorView`](./anchor-view.md) — renders an [anchor](../abstract-syntax/anchor.md).
