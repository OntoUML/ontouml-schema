---
sidebar_position: 5
description: The point datatype — an (x, y) coordinate pair locating a position in a diagram, used by the shapes of the concrete syntax.
---

# Point

A **`point`** is a pair of coordinates locating a position in a diagram. Points belong to the
[concrete syntax](../concrete-syntax/index.md#shapes): they describe *where* a shape is drawn, not
what a model element means.

## Structure {#structure}

- **JSON type:** `object`
- **Properties** (both required):

| Property | Type | Description |
| --- | --- | --- |
| `x` | `integer` | The horizontal coordinate; zero or greater. |
| `y` | `integer` | The vertical coordinate; zero or greater. |

The origin `(0, 0)` is the diagram's **top-left** corner. From there `x` increases **rightwards**
and `y` increases **downwards** — the usual screen-coordinate convention, where the vertical axis
points down rather than up.

```json
{ "x": 813, "y": 20 }
```

## Where it is used {#where-it-is-used}

`point` is used by the [shapes](../concrete-syntax/index.md#shapes) of the concrete syntax to place
and route them on a diagram:

| Property | Shape | Used by |
| --- | --- | --- |
| `topLeft` | `point` | a [rectangular shape](../concrete-syntax/rectangular-shape.md), anchoring its top-left corner |
| `points` | `point[]` | a [path](../concrete-syntax/path.md), listing the vertices the line passes through in order |

:::note
`point` is one of the reusable [datatypes](./index.md); the others are
[`id`](./id.md), [`languageString`](./language-string.md),
[`resource`](./resource.md), and [`pointInTime`](./point-in-time.md).
:::
