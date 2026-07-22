---
sidebar_position: 6
description: The GeneralizationSetView element — represents a single occurrence of a generalization set in a diagram.
---

# Generalization Set View

A [view](./view.md) that represents a single occurrence of a
[generalization set](../abstract-syntax/generalization-set.md) in a [diagram](./diagram.md). It
groups the [generalization views](./generalization-view.md) that make up the set and renders the
set's label.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"GeneralizationSetView"` | Discriminator. |
| `generalizations` | `id[]` | The [generalization views](./generalization-view.md) grouped by this view. |
| `text` | `id` | The [text](./text.md) shape that renders the set's label in the diagram. |

`GeneralizationSetView` also carries `isViewOf` from [`View`](./view.md) and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

```json
{
  "type": "GeneralizationSetView",
  "id": "gsview_1",
  "isViewOf": "gs_1",
  "generalizations": ["genview_1", "genview_2"],
  "text": "text_2",
  "created": "2024-09-04",
  "modified": null
}
```
