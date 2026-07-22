---
sidebar_position: 15
description: The Rectangle shape — renders a class view or a package view.
---

# Rectangle

A [rectangular shape](./rectangular-shape.md) that renders the shape of a
[class view](./class-view.md) or a [package view](./package-view.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"Rectangle"` | Discriminator. |

`Rectangle` also carries the properties of [`RectangularShape`](./rectangular-shape.md) (`topLeft`,
`width`, `height`) and the identity properties `id`, `created`, and `modified`
[common to all OntoUML elements](./index.md); it does not carry descriptive properties such as
`name` or `description`. Every listed property is
[required](../document-structure.md#every-property-is-required).

```json
{
  "type": "Rectangle",
  "id": "rectangle_1",
  "topLeft": { "x": 813, "y": 20 },
  "width": 95,
  "height": 40,
  "created": "2024-09-04",
  "modified": null
}
```
