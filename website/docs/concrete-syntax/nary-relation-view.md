---
sidebar_position: 7
description: The NaryRelationView element — represents a single occurrence of an n-ary relation in a diagram.
---

# N-ary Relation View

A [view](./view.md) that represents a single occurrence of an
[n-ary relation](../abstract-syntax/nary-relation.md) in a [diagram](./diagram.md). Its central
[diamond](./diamond.md) joins three or more [paths](./path.md), each running to a participating
[class view](./class-view.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"NaryRelationView"` | Discriminator. |
| `members` | `id[]` | The [class views](./class-view.md) connected by the relation, **ordered** to match the relation's properties. At least three. |
| `diamond` | `id` | The [diamond](./diamond.md) shape where the paths join. |
| `paths` | `id[]` | The [path](./path.md) shapes, one per member, **ordered** to match the relation's properties. At least three. |

`NaryRelationView` also carries `isViewOf` from [`View`](./view.md) and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

```json
{
  "type": "NaryRelationView",
  "id": "naryview_1",
  "isViewOf": "relation_1",
  "members": ["classview_1", "classview_2", "classview_3"],
  "diamond": "diamond_1",
  "paths": ["path_1", "path_2", "path_3"],
  "created": "2024-09-04",
  "modified": null
}
```
