---
sidebar_position: 2
description: The closed enumeration of aggregation kinds a relation end may carry — COMPOSITE, SHARED, and NONE — marking the whole end of a parthood relation.
---

# Aggregation Kind

A [`Property`](../abstract-syntax/property.md) that is a **relation end** may carry an
`aggregationKind`. On the *whole* end of a parthood (part-of) relation it records how the parts
relate to the whole, mirroring UML's aggregation and composition diamonds. On any other end it is
simply `NONE` — a plain association end.

This is a **closed enumeration**: `aggregationKind` must be one of the three tokens below, or `null`.

- **JSON type:** `string` (enum) or `null`.
- **Values:** `COMPOSITE`, `SHARED`, `NONE`.
- **Constraint:** `null` is interpreted as `NONE`.

## Values {#values}

| Value | Meaning | Example |
| --- | --- | --- |
| `COMPOSITE` | Parts are exclusive to a single whole (UML filled diamond). | an Engine as composite part of a Car |
| `SHARED` | Parts may be shared across wholes (UML hollow diamond). | a Person as shared member of Teams |
| `NONE` | Not a parthood / whole end — a plain association end. | either end of `studies in` |

:::note
`null` is interpreted as `NONE`. A relation end with no aggregation semantics may therefore be
serialized as either `"aggregationKind": "NONE"` or `"aggregationKind": null`.
:::

## Example {#example}

The whole end of a `«componenthood»` relation, marking `Car` as the composite whole of its parts:

```json
{
  "type": "Property",
  "id": "end_car",
  "name": { "en": "car" },
  "stereotype": null,
  "isDerived": false,
  "propertyType": "class_car",
  "cardinality": "1",
  "aggregationKind": "COMPOSITE",
  "isOrdered": false,
  "isReadOnly": false,
  "subsettedProperties": [],
  "redefinedProperties": [],
  "customProperties": null,
  "created": "2024-09-04",
  "modified": null,
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": []
}
```

:::tip
Aggregation kind is most meaningful alongside a parthood [relation stereotype](./relation-stereotypes.md)
such as `componenthood`, `subCollection`, `subQuantity`, or `membership`.
:::
