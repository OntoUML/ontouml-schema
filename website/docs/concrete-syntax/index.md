---
slug: /concrete-syntax
description: Reference for the OntoUML concrete syntax — diagrams, views, and shapes that describe how a model is drawn.
---

# Concrete Syntax

The **concrete syntax** is the visual representation of a model: where and how its
[model elements](../abstract-syntax/index.md) are drawn. It is organized into three kinds of element:

- a **[Diagram](#diagram)** groups the visual representation of a model (or part of it);
- a **[View](#views)** represents a single occurrence of one model element in a diagram; and
- a **[Shape](#shapes)** describes the actual drawing — position and dimensions — of a view.

The separation of *view* from *shape* is deliberate: a view decides *what* of a model element is
shown (for example, whether a property's cardinality is displayed), while a shape decides *how* it
is rendered (position, width, height, the points of a line). The same model element can be shown in
several diagrams, each occurrence being a distinct view.

:::note Identity, but no name
Views and shapes are OntoUML elements, so they carry the
[identity properties](../document-structure.md#identity-properties) `id`, `created`, and `modified`.
Unlike named elements, they do **not** carry descriptive properties such as `name` or `description`.
Diagrams, being named elements, do carry both.
:::

Each element type summarized below also has a dedicated reference page:

- **Diagram:** [Diagram](./diagram.md)
- **Views:** [View](./view.md) (abstract) · [Class view](./class-view.md) · [Package view](./package-view.md) · [Note view](./note-view.md) · [Generalization set view](./generalization-set-view.md) · [N-ary relation view](./nary-relation-view.md) · [Binary connector view](./binary-connector-view.md) (abstract) · [Binary relation view](./binary-relation-view.md) · [Generalization view](./generalization-view.md) · [Anchor view](./anchor-view.md)
- **Shapes:** [Shape](./shape.md) (abstract) · [Path](./path.md) · [Rectangular shape](./rectangular-shape.md) (abstract) · [Rectangle](./rectangle.md) · [Diamond](./diamond.md) · [Text](./text.md)

## Diagram {#diagram}

A named element that contains the visual representation of an OntoUML model, or of a portion of it.
In addition to the [identity](../document-structure.md#identity-properties) and
[descriptive](../document-structure.md#descriptive-properties) properties of a named element, a
diagram defines:

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"Diagram"` | Discriminator. |
| `owner` | `id` or `null` | The model element that owns the diagram, if any. |
| `views` | `id[]` | The [views](#views) contained in the diagram. |

```json
{
  "type": "Diagram",
  "id": "diagram_1",
  "name": { "en": "Main Diagram" },
  "owner": null,
  "views": ["classview_1", "classview_2", "relationview_1"],
  "created": "2024-09-04",
  "modified": null,
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": []
}
```

## Views {#views}

A **view** represents a single occurrence of a model element in a diagram, tying that model element
to the [shapes](#shapes) needed to draw it. Every view specializes the abstract `View` type, which
contributes one property.

| Property | Type | Description |
| --- | --- | --- |
| `isViewOf` | `id` | The model element that the view represents. |

The concrete view types fall into two groups: views backed by a rectangular region (class,
package, note, generalization set, n-ary relation) and **binary connector** views backed by a line
(binary relation, generalization, anchor).

### Class view {#class-view}

Represents a single occurrence of a [class](../abstract-syntax/class.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"ClassView"` | Discriminator. |
| `rectangle` | `id` | The [rectangle](./rectangle.md) shape that renders the class. |

```json
{
  "type": "ClassView",
  "id": "classview_1",
  "isViewOf": "class_1",
  "rectangle": "rectangle_1",
  "created": "2024-09-04",
  "modified": null
}
```

### Package view {#package-view}

Represents a single occurrence of a [package](../abstract-syntax/package.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"PackageView"` | Discriminator. |
| `rectangle` | `id` | The [rectangle](./rectangle.md) shape that renders the package. |

### Note view {#note-view}

Represents a single occurrence of a [note](../abstract-syntax/note.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"NoteView"` | Discriminator. |
| `text` | `id` | The [text](./text.md) shape that renders the note. |

### Generalization set view {#generalization-set-view}

Represents a single occurrence of a
[generalization set](../abstract-syntax/generalization-set.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"GeneralizationSetView"` | Discriminator. |
| `generalizations` | `id[]` | The [generalization views](./generalization-view.md) grouped by this view. |
| `text` | `id` | The [text](./text.md) shape that renders the set's label. |

### N-ary relation view {#nary-relation-view}

Represents a single occurrence of an
[n-ary relation](../abstract-syntax/nary-relation.md). Its central diamond joins three or more
paths, each running to a participating class view.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"NaryRelationView"` | Discriminator. |
| `members` | `id[]` | The class views connected by the relation, **ordered** to match the relation's properties. At least three. |
| `diamond` | `id` | The [diamond](./diamond.md) shape where the paths join. |
| `paths` | `id[]` | The [path](#path) shapes, one per member, **ordered** to match the relation's properties. At least three. |

### Binary connector views {#binary-connector-views}

A **binary connector view** is a view drawn as a line between two other views. All binary connector
views share three properties (from the abstract `BinaryConnectorView` type):

| Property | Type | Description |
| --- | --- | --- |
| `sourceView` | `id` | The view at the source end of the connector. |
| `targetView` | `id` | The view at the target end of the connector. |
| `path` | `id` | The [path](#path) shape that renders the connector. |

There are three concrete binary connector views, each distinguished only by its `type`:

| Type | Renders |
| --- | --- |
| `"BinaryRelationView"` | a [binary relation](../abstract-syntax/binary-relation.md) |
| `"GeneralizationView"` | a [generalization](../abstract-syntax/generalization.md) |
| `"AnchorView"` | an [anchor](../abstract-syntax/anchor.md) |

```json
{
  "type": "BinaryRelationView",
  "id": "relationview_1",
  "isViewOf": "relation_1",
  "sourceView": "classview_1",
  "targetView": "classview_2",
  "path": "path_1",
  "created": "2024-09-04",
  "modified": null
}
```

## Shapes {#shapes}

A **shape** describes how to render a view, or a portion of one, in a diagram. A shape is either a
**[path](#path)** (a line) or a **rectangular shape** (a box). Coordinates are expressed with the
[`point`](../datatypes/index.md#point) datatype, whose origin `(0, 0)` is the top-left corner of the
diagram, with values increasing downwards and rightwards.

### Path {#path}

A shape defined by an ordered list of points connecting two other shapes.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"Path"` | Discriminator. |
| `points` | `point[]` | At least two points, ordered from the edge of the source shape to the edge of the target shape. |

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

### Rectangular shapes {#rectangular-shapes}

A **rectangular shape** is defined by a top-left position and a size. All rectangular shapes share
three properties (from the abstract `RectangularShape` type):

| Property | Type | Description |
| --- | --- | --- |
| `topLeft` | `point` | The coordinates of the shape's top-left corner. |
| `width` | `integer` | The shape's width; zero or greater. |
| `height` | `integer` | The shape's height; zero or greater. |

There are three concrete rectangular shapes, each distinguished only by its `type`:

| Type | Renders |
| --- | --- |
| `"Rectangle"` | a [class view](#class-view) or [package view](#package-view) |
| `"Diamond"` | the joining diamond of an [n-ary relation view](#nary-relation-view) |
| `"Text"` | a [generalization set view](#generalization-set-view) or [note view](#note-view) |

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

## Putting it together

A single class drawn in one diagram involves a `ClassView` (which references the `Class` it depicts
and the `Rectangle` that positions it), plus that `Rectangle`. Rendering a binary relation adds a
`BinaryRelationView` (referencing the two class views it connects and a `Path`), plus that `Path`.
All of these elements live side by side in the Project's `elements` array and refer to one another
by [`id`](../datatypes/index.md#id), exactly as described in
[Document Structure](../document-structure.md#references-not-nesting).
