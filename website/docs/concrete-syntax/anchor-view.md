---
sidebar_position: 11
description: The AnchorView element — represents a single occurrence of an anchor in a diagram.
---

# AnchorView

A [binary connector view](./binary-connector-view.md) that represents a single occurrence of an
[anchor](../abstract-syntax/anchor.md) in a [diagram](./diagram.md), drawn as a line between two
views.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"AnchorView"` | Discriminator. |

`AnchorView` carries the [`BinaryConnectorView`](./binary-connector-view.md) properties
(`sourceView`, `targetView`, `path`), `isViewOf` from [`View`](./view.md), and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

```json
{
  "type": "AnchorView",
  "id": "anchorview_1",
  "isViewOf": "anchor_1",
  "sourceView": "noteview_1",
  "targetView": "classview_1",
  "path": "path_3",
  "created": "2024-09-04",
  "modified": null
}
```
