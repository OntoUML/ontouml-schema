---
sidebar_position: 10
description: The GeneralizationView element — represents a single occurrence of a generalization in a diagram.
---

# GeneralizationView

A [binary connector view](./binary-connector-view.md) that represents a single occurrence of a
[generalization](../abstract-syntax/generalization.md) in a [diagram](./diagram.md), drawn as a
line between two views.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"GeneralizationView"` | Discriminator. |

`GeneralizationView` carries the [`BinaryConnectorView`](./binary-connector-view.md) properties
(`sourceView`, `targetView`, `path`), `isViewOf` from [`View`](./view.md), and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

```json
{
  "type": "GeneralizationView",
  "id": "genview_1",
  "isViewOf": "gen_1",
  "sourceView": "classview_1",
  "targetView": "classview_2",
  "path": "path_2",
  "created": "2024-09-04",
  "modified": null
}
```
