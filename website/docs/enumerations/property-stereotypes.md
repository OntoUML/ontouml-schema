---
sidebar_position: 5
description: The standard OntoUML property stereotypes — begin and end — that mark the temporal boundaries of an event on a class's attributes.
---

# Property Stereotypes

Property stereotypes decorate [`Property`](../abstract-syntax/property.md) elements. The standard
vocabulary marks the attributes that record an event's **temporal boundaries**.

As with the [class](./class-stereotypes.md) and [relation](./relation-stereotypes.md) stereotypes,
this vocabulary is **open**: the schema stores `stereotype` as a plain non-empty string (see
[`Decoratable`](../abstract-syntax/decoratable.md)), so the values below are the recommended
standard set, not a closed enumeration.

## Standard values {#standard-values}

| Stereotype | Meaning |
| --- | --- |
| `begin` | The instant at which an event starts to occur. |
| `end` | The instant at which an event finishes occurring. |

:::note
These stereotypes typically decorate **attributes of event classes** (classes restricted to the
[`event`](./ontological-nature.md) nature), pinning down when the event begins and ends.
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

:::info Source of truth
These values come from the **OntoUML profile**, not from this serialization schema. See the
[OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel) for the formal definitions.
Because `stereotype` is an unconstrained string ([`Decoratable`](../abstract-syntax/decoratable.md)),
**custom values are allowed**.
:::
