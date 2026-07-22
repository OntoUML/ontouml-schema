---
sidebar_position: 1
description: The Diagram element — a named element that contains the visual representation of an OntoUML model or a portion of it.
---

# Diagram

A **named element** that contains the visual representation (i.e., the concrete syntax) of an
OntoUML model, or of a portion of it. A diagram groups the [views](./view.md) that draw a model's
elements; the same model can be depicted across several diagrams.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"Diagram"` | Discriminator. |
| `owner` | `id` or `null` | The model element that owns the diagram, if any. |
| `views` | `id[]` | The [views](./view.md) contained in the diagram. |

Unlike views and shapes, a `Diagram` is a [named element](../structural/named-element.md). It
therefore carries both the [identity properties](../document-structure.md#identity-properties)
(`id`, `created`, `modified`) and the
[descriptive properties](../document-structure.md#descriptive-properties) (`name`,
`alternativeNames`, `description`, `editorialNotes`, `creators`, `contributors`) common to all
named elements.

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
