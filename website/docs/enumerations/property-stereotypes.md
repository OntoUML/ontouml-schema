---
sidebar_position: 5
description: The standard OntoUML property stereotypes — addOnly, begin, and end — that mark add-only properties and the attributes recording when an individual begins and ceases to exist.
---

# Property Stereotypes

Property stereotypes decorate [`Property`](../abstract-syntax/property.md) elements. The standard
vocabulary marks **add-only** properties and the attributes that record an individual's **temporal
boundaries**.

The schema lists these values in its `propertyStereotype` definition and suggests them for
`Property.stereotype`. As with the [class](./class-stereotypes.md) and
[relation](./relation-stereotypes.md) stereotypes, this vocabulary is **open**: `stereotype` accepts
any non-empty string (see [`Decoratable`](../abstract-syntax/decoratable.md)), so the values below
are the recommended standard set, not a closed enumeration.

## Standard values {#standard-values}

| Stereotype | Meaning                                                                                                                                                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addOnly`  | A property whose values can be added at any time but, once added, are never removed or altered while its owner exists — e.g. the `purchases` of a `Customer`. It must be multivalued or optional (`0..1`), and must not be read-only.                                             |
| `begin`    | The instant at which an individual begins to exist: when an endurant comes into existence, an event starts to occur, or a situation begins to obtain — e.g. the `dateOfBirth` of a `Person`. It must be read-only.                                                                |
| `end`      | The instant at which an individual ceases to exist: when an endurant ceases to exist, an event finishes occurring, or a situation ceases to obtain — e.g. the `dateOfDeath` of a `Person`. On an endurant class it should be optional, since an existing endurant has no end yet. |

:::note
`begin` and `end` decorate **attributes typed by a temporal datatype**, owned by classes whose
instances are concrete individuals — a `restrictedTo` that is non-empty and includes neither
[`type`](./ontological-nature.md) nor `abstract`. They apply to endurants, events, and situations
alike.
:::

## Example {#example}

The `begin` attribute of an event class, recording when the occurrence starts:

```json
{
  "type": "Property",
  "id": "prop_begin",
  "name": { "en": "begin" },
  "stereotype": "begin",
  "isDerived": false,
  "propertyType": "class_datetime",
  "cardinality": "1",
  "aggregationKind": null,
  "isOrdered": false,
  "isReadOnly": true,
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

:::info Source of truth
These values follow the **OntoUML 1.0 profile** — the _UML Profile for Ontology-Driven Conceptual
Modeling (OntoUML)_ RFC under review at the OMG (OMG document ad/2026-11-01) — not this serialization
schema. Because `stereotype` is an open string ([`Decoratable`](../abstract-syntax/decoratable.md)),
**custom values are allowed**.
:::
