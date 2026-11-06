---
sidebar_position: 12
description: The DependencyView element — represents a single occurrence of a dependency in a diagram.
---

# Dependency View

A [binary connector view](./binary-connector-view.md) that represents a single occurrence of a
[dependency](../abstract-syntax/dependency.md) in a [diagram](./diagram.md), drawn as a line from
the view of its depender (`sourceView`) to the view of its dependee (`targetView`).

| Property | Type               | Description    |
| -------- | ------------------ | -------------- |
| `type`   | `"DependencyView"` | Discriminator. |

`DependencyView` carries the [`BinaryConnectorView`](./binary-connector-view.md) properties
(`sourceView`, `targetView`, `path`), `isViewOf` from [`View`](./view.md), and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

In a derivation, the source view is usually the
[`BinaryRelationView`](./binary-relation-view.md) of the derived relation, and the target view is the
[`ClassView`](./class-view.md) of its truthmaker:

```json
{
  "type": "DependencyView",
  "id": "dependencyview_1",
  "isViewOf": "dependency_1",
  "sourceView": "relationview_1",
  "targetView": "classview_3",
  "path": "path_4",
  "created": "2024-09-04",
  "modified": null
}
```
