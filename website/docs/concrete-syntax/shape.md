---
sidebar_position: 12
description: The abstract Shape element — describes how to render a view, or a portion of one, in a diagram.
---

# Shape

A **shape** describes how to render a [view](./index.md#views), or a portion of one, in a diagram.
It identifies the actual drawing — the position, dimensions, or line of what is shown. A shape is
either a **[path](./path.md)** (a line) or a **[rectangular shape](./rectangular-shape.md)** (a box).

Coordinates are expressed with the [`point`](../datatypes/index.md#point) datatype. The origin
`(0, 0)` is the top-left corner of the diagram, with values increasing rightwards along the x axis
and downwards along the y axis.

`Shape` is **abstract**: it is never serialized directly. Every shape in a document is one of its
concrete subtypes, distinguished by its `type`. As an [OntoUML element](./index.md), every shape
carries the identity properties `id`, `created`, and `modified`; shapes do **not** carry descriptive
properties such as `name` or `description`.

`Shape` has two subtypes:

- **[Path](./path.md)** — a line defined by an ordered list of points.
- **[Rectangular shape](./rectangular-shape.md)** — a box defined by a top-left position and a
  size, itself specialized by [`Rectangle`](./rectangle.md), [`Diamond`](./diamond.md), and
  [`Text`](./text.md).
