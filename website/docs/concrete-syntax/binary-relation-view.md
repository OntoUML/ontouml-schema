---
sidebar_position: 9
description: The BinaryRelationView element — represents a single occurrence of a binary relation in a diagram.
---

# Binary Relation View

A [binary connector view](./binary-connector-view.md) that represents a single occurrence of a
[binary relation](../abstract-syntax/binary-relation.md) in a [diagram](./diagram.md), drawn as a
line between two views.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"BinaryRelationView"` | Discriminator. |

`BinaryRelationView` carries the [`BinaryConnectorView`](./binary-connector-view.md) properties
(`sourceView`, `targetView`, `path`), `isViewOf` from [`View`](./view.md), and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

```json
{
  "type": "BinaryRelationView",
  "id": "relationview_1",
  "isViewOf": "relation_1",
  "sourceView": "classview_1",
  "targetView": "classview_2",
  "path": "path_1",
  "created": "2024-09-04",
  "modified": null
}
```
