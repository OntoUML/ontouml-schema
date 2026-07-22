---
sidebar_position: 16
description: The Diamond shape — renders the joining diamond of an n-ary relation view.
---

# Diamond

A [rectangular shape](./rectangular-shape.md) that renders the joining diamond of an
[n-ary relation view](./nary-relation-view.md), where the paths to the participating class views
meet.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"Diamond"` | Discriminator. |

`Diamond` also carries the properties of [`RectangularShape`](./rectangular-shape.md) (`topLeft`,
`width`, `height`) and the identity properties `id`, `created`, and `modified`
[common to all OntoUML elements](./index.md); it does not carry descriptive properties such as
`name` or `description`. Every listed property is
[required](../document-structure.md#every-property-is-required).

```json
{
  "type": "Diamond",
  "id": "diamond_1",
  "topLeft": { "x": 420, "y": 300 },
  "width": 40,
  "height": 40,
  "created": "2024-09-04",
  "modified": null
}
```
