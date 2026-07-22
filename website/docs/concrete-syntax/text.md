---
sidebar_position: 17
description: The Text shape — renders a generalization set view or a note view.
---

# Text

A [rectangular shape](./rectangular-shape.md) that renders the shape of a
[generalization set view](./generalization-set-view.md) or a [note view](./note-view.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"Text"` | Discriminator. |

`Text` also carries the properties of [`RectangularShape`](./rectangular-shape.md) (`topLeft`,
`width`, `height`) and the identity properties `id`, `created`, and `modified`
[common to all OntoUML elements](./index.md); it does not carry descriptive properties such as
`name` or `description`. Every listed property is
[required](../document-structure.md#every-property-is-required).

```json
{
  "type": "Text",
  "id": "text_1",
  "topLeft": { "x": 200, "y": 120 },
  "width": 160,
  "height": 24,
  "created": "2024-09-04",
  "modified": null
}
```
