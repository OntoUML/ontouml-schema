---
sidebar_position: 5
description: The NoteView element — represents a single occurrence of a note in a diagram.
---

# Note View

A [view](./view.md) that represents a single occurrence of a
[note](../abstract-syntax/note.md) in a [diagram](./diagram.md).

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"NoteView"` | Discriminator. |
| `text` | `id` | The [text](./text.md) shape that renders the note view in the diagram. |

`NoteView` also carries `isViewOf` from [`View`](./view.md) and the
[identity properties](../document-structure.md#identity-properties) (`id`, `created`, `modified`).
It does not carry descriptive properties.

```json
{
  "type": "NoteView",
  "id": "noteview_1",
  "isViewOf": "note_1",
  "text": "text_1",
  "created": "2024-09-04",
  "modified": null
}
```
