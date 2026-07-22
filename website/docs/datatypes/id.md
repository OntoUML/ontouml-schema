---
sidebar_position: 1
description: The id datatype — a non-empty string that uniquely identifies an OntoUML element and lets elements reference one another.
---

# ID

Every OntoUML element carries an **`id`**: a non-empty string that identifies it uniquely within an
ontology. Ids are the backbone of the serialization's structure — they are how elements
[reference one another](../document-structure.md#references-not-nesting). Wherever an element needs
to point at another (a package's `contents`, a generalization's `general` and `specific`, a view's
`isViewOf`, and so on), it does not nest that element; it stores the target element's `id`.

## Structure {#structure}

- **JSON type:** `string`
- **Constraint:** at least one character — the value must not be empty.

```json
"class_person"
```

There is no required syntax beyond non-emptiness: an `id` can be a human-readable slug such as
`class_person`, a UUID, or any other string, as long as it is unique among the elements of the
ontology.

## Where it is used {#where-it-is-used}

An `id` appears in two roles:

- **Declaration** — every element has its own `id` field, established as one of its
  [identity properties](../document-structure.md#identity-properties).
- **Reference** — properties that link to other elements hold an `id` (or a list of ids, `id[]`)
  rather than the element itself. Examples include a package's `contents`, a class's `properties`
  and `literals`, a generalization's `general` and `specific`, and a view's `isViewOf`.

## Namespaces and global identifiers {#namespaces}

:::tip Toward FAIR Digital Objects
When a [`Project`](../structural/project.md) declares a `namespace`, appending an element's `id` to
that namespace should yield a globally unique, resolvable URI. This turns each element into a
[FAIR Digital Object](../structural/project.md), addressable on the semantic web while remaining a
short, local identifier inside the model.
:::

:::note
`id` is one of the reusable [datatypes](./index.md); the others are
[`languageString`](./language-string.md), [`resource`](./resource.md),
[`pointInTime`](./point-in-time.md), and [`point`](./point.md).
:::
