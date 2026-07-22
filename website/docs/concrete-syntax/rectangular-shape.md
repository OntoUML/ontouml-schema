---
sidebar_position: 14
description: The abstract RectangularShape element — a shape defined by a top-left position and a size.
---

# Rectangular Shape

A [shape](./shape.md) defined by a top-left position and a size (width and height). It renders a
view backed by a rectangular region.

| Property | Type | Description |
| --- | --- | --- |
| `topLeft` | `point` | The coordinates of the shape's top-left corner. See [`point`](../datatypes/index.md#point). |
| `width` | `integer` | The shape's width; zero or greater. |
| `height` | `integer` | The shape's height; zero or greater. |

As a [shape](./shape.md), a rectangular shape also carries the identity properties `id`, `created`,
and `modified` [common to all OntoUML elements](./index.md); it does not carry descriptive
properties such as `name` or `description`.

`RectangularShape` is **abstract**: it is never serialized directly. Every rectangular shape in a
document is one of its concrete subtypes, distinguished by its `type`:

- **[Rectangle](./rectangle.md)** — renders a [class view](./class-view.md) or
  [package view](./package-view.md).
- **[Diamond](./diamond.md)** — renders the joining diamond of an
  [n-ary relation view](./nary-relation-view.md).
- **[Text](./text.md)** — renders a [generalization set view](./generalization-set-view.md) or a
  [note view](./note-view.md).
