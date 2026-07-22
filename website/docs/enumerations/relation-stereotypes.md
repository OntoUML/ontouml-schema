---
sidebar_position: 4
description: The standard OntoUML relation stereotypes — material, mediation, characterization, participation, instantiation, and the rest — that decorate binary and n-ary relations.
---

# Relation Stereotypes

Relation stereotypes decorate [binary](../abstract-syntax/binary-relation.md) and
[n-ary](../abstract-syntax/nary-relation.md) relations, naming the UFO relation notion each one
instantiates.

As with [class stereotypes](./class-stereotypes.md), this vocabulary is **open**: the schema stores
`stereotype` as a plain non-empty string (see [`Decoratable`](../abstract-syntax/decoratable.md)),
so the values below are the recommended standard set from the OntoUML profile, not a closed
enumeration.

## Standard values {#standard-values}

Grouped by the kind of entity they relate:

- **Endurants:** `material`, `comparative`, `characterization`, `mediation`, `externalDependence`,
  `componenthood`, `membership`, `subCollection`, `subQuantity`.
- **Events:** `historicalDependence`, `participation`, `creation`, `termination`, `manifestation`,
  `structural`, `temporal`, `participational`.
- **Situations:** `triggering`, `bringingAbout`, `presence`, `exemplification`.
- **Multi-level (types):** `instantiation`.

## Common stereotypes at a glance {#common}

| Stereotype | Meaning |
| --- | --- |
| `material` | A relation with material content, founded on a relator — e.g. `studies in`, founded on an `Enrollment`. |
| `mediation` | The existential dependence of a relator on the endurants it connects — e.g. an `Enrollment` mediating a `Student`. |
| `characterization` | The dependence of a mode or quality on the endurant that bears it — e.g. a `Symptom` characterizing a `Patient`. |
| `componenthood` | Parthood between a functional complex and one of its functional parts — e.g. an `Engine` as component of a `Car`. |
| `participation` | The involvement of an endurant in an event — e.g. a `Player` participating in a `Match`. |
| `instantiation` | The relation between a higher-order type and the instances that instantiate it — e.g. `Ship Type` instantiated by `Ship`. |

## Example {#example}

The `«material» studies in` relation connecting `Student` and `University`, with its stereotype
recorded on the [`BinaryRelation`](../abstract-syntax/binary-relation.md):

```json
{
  "type": "BinaryRelation",
  "id": "relation_studies_in",
  "name": { "en": "studies in" },
  "stereotype": "material",
  "isDerived": false,
  "isAbstract": false,
  "properties": ["end_source", "end_target"],
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
[OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel) for the formal definitions and
constraints of each stereotype. Because `stereotype` is an unconstrained string
([`Decoratable`](../abstract-syntax/decoratable.md)), **custom values are allowed** — prefer the
standard vocabulary for interoperability.
:::

:::tip Parthood ends
Parthood stereotypes (`componenthood`, `membership`, `subCollection`, `subQuantity`) mark the whole
end through its [`aggregationKind`](./aggregation-kind.md).
:::
