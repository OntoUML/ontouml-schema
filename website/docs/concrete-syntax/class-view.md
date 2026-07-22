---
sidebar_position: 3
description: The ClassView element — represents a single occurrence of a class in a diagram.
---

# ClassView

A [view](./view.md) that represents a single occurrence of a
[class](../abstract-syntax/class.md) in a [diagram](./diagram.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"ClassView"` | Discriminator. |
| `rectangle` | `id` | The [rectangle](./rectangle.md) shape that renders the class view in the diagram. |

`ClassView` also carries `isViewOf` from [`View`](./view.md) and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

```json
{
  "type": "ClassView",
  "id": "classview_1",
  "isViewOf": "class_1",
  "rectangle": "rectangle_1",
  "created": "2024-09-04",
  "modified": null
}
```
