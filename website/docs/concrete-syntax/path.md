---
sidebar_position: 13
description: The Path shape — a line defined by an ordered list of points connecting two shapes.
---

# Path

A [shape](./shape.md) defined by an ordered list of points connecting two other shapes. A path
renders the line of a [binary connector view](./index.md#binary-connector-views), and each of the
[paths](./nary-relation-view.md) running from the diamond of an n-ary relation view to a member
class view.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"Path"` | Discriminator. |
| `points` | `point[]` | At least two [points](../datatypes/index.md#point), ordered from the edge of the source shape to the edge of the target shape. |

As a [shape](./shape.md), `Path` also carries the identity properties `id`, `created`, and
`modified` [common to all OntoUML elements](./index.md); it does not carry descriptive properties
such as `name` or `description`. Every listed property is
[required](../document-structure.md#every-property-is-required).

The example below is a straight, horizontal path between two rectangular shapes.

```json
{
  "type": "Path",
  "id": "path_1",
  "points": [
    { "x": 100, "y": 50 },
    { "x": 260, "y": 50 }
  ],
  "created": "2024-09-04",
  "modified": null
}
```
