---
sidebar_position: 4
description: The PackageView element — represents a single occurrence of a package in a diagram.
---

# Package View

A [view](./view.md) that represents a single occurrence of a
[package](../abstract-syntax/package.md) in a [diagram](./diagram.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"PackageView"` | Discriminator. |
| `rectangle` | `id` | The [rectangle](./rectangle.md) shape that renders the package view in the diagram. |

`PackageView` also carries `isViewOf` from [`View`](./view.md) and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

```json
{
  "type": "PackageView",
  "id": "packageview_1",
  "isViewOf": "package_1",
  "rectangle": "rectangle_2",
  "created": "2024-09-04",
  "modified": null
}
```
