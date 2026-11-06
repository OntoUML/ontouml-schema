---
sidebar_position: 4
description: The standard OntoUML relation stereotypes — material, mediation, characterization, componenthood, participation, instantiation, and the rest — that decorate binary and n-ary relations.
---

# Relation Stereotypes

Relation stereotypes decorate [binary](../abstract-syntax/binary-relation.md) and
[n-ary](../abstract-syntax/nary-relation.md) relations, naming the UFO relation notion each one
instantiates.

The schema lists these values in its `relationStereotype` definition and suggests them for the
`stereotype` of every [relation](../abstract-syntax/relation.md). As with
[class stereotypes](./class-stereotypes.md), this vocabulary is **open**: `stereotype` accepts any
non-empty string (see [`Decoratable`](../abstract-syntax/decoratable.md)), so the values below are
the recommended standard set from the OntoUML profile, not a closed enumeration.

Only `material` and `comparative` can decorate **n-ary** relations; every other stereotype decorates
**binary** relations.

## Standard values {#standard-values}

Grouped by the kind of entity they relate.

### Endurants {#endurants}

| Stereotype           | Connects                                                                                                                | Example                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `material`           | Two or more endurants related in virtue of an extrinsic aspect — a relator or an extrinsic mode.                        | `rents`, derived from a `Rental Agreement`        |
| `comparative`        | Two or more concrete individuals compared in terms of their qualities.                                                  | `taller than`, derived from `Height`              |
| `characterization`   | A mode or quality to the concrete individual it inheres in (its bearer).                                                | `Weight` characterizing `Person`                  |
| `mediation`          | A relator to an endurant it existentially depends on.                                                                   | `Employment` mediating `Employee`                 |
| `externalDependence` | An extrinsic mode to an endurant it externally depends on, other than its bearer.                                       | `Love` depending on the loved `Person`            |
| `componenthood`      | Parthood between two functional complexes, the part playing a functional role in the whole.                             | `Engine` as a component of `Car`                  |
| `membership`         | Parthood between a substantial (the member) and a collective, every member playing the same role.                       | `Tree` as a member of `Forest`                    |
| `subCollection`      | Parthood between two collectives.                                                                                       | `English-Speaking Segment` of `Group of Visitors` |
| `subQuantity`        | Parthood between two quantities.                                                                                        | `Water Portion` of `Wine Portion`                 |
| `constitution`       | A concrete individual to another of the same broad category but a different kind, which it constitutes. Not a parthood. | `Lump of Clay` constituting `Statue`              |

### Events {#events}

| Stereotype             | Connects                                                                                     | Example                                          |
| ---------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `historicalDependence` | Two endurants or events, where one could not exist without the prior existence of the other. | `Person` born in `Place`                         |
| `participation`        | An event to an endurant that participates in it.                                             | `Composer` participating in `Act of Composition` |
| `creation`             | An event to an endurant that begins to exist because of it.                                  | `Birth` creating `Person`                        |
| `termination`          | An event to an endurant that ceases to exist because of it.                                  | `Death` terminating `Person`                     |
| `change`               | An event to an endurant that changes because of it, existing both before and after.          | `Repainting` changing `Car`                      |
| `manifestation`        | A mode to an event that manifests it.                                                        | `Fragility` manifested in `Breaking`             |
| `structural`           | Parthood between two events, the part belonging to the definition of the whole.              | `Goal` as part of `Soccer Match`                 |
| `temporal`             | Parthood between two events, the part being a temporal segment of the whole.                 | `First Half` of `Soccer Match`                   |
| `participational`      | Parthood between two events, the part being one endurant's whole participation in the whole. | `Player Participation` in `Soccer Match`         |

### Situations {#situations}

| Stereotype      | Connects                                                              | Example                                                 |
| --------------- | --------------------------------------------------------------------- | ------------------------------------------------------- |
| `triggering`    | A situation to an event that manifests the dispositions it activates. | `Hazardous Gas Concentration` triggering `Explosion`    |
| `bringingAbout` | An event to a situation that begins to obtain when the event ends.    | `Gas Leak` bringing about `Hazardous Gas Concentration` |
| `presence`      | A situation to an entity that stands in a relation exemplified in it. | `King` present in `Checkmate`                           |

### Multi-level (types) {#multi-level}

| Stereotype      | Connects                                                        | Example                                    |
| --------------- | --------------------------------------------------------------- | ------------------------------------------ |
| `instantiation` | Instances of a base type to an instance of a higher-order type. | each `Tree` instantiating a `Tree Species` |

:::note Derivation is not a relation stereotype
In the OntoUML profile, a derived relation — such as a `material` relation derived from a relator,
or a `comparative` relation derived from a quality — is linked to its truthmaker by a
[dependency](../abstract-syntax/dependency.md#derivation) stereotyped `derive`, not by a relation. Earlier OntoUML vocabularies serialized that link as
a relation stereotyped `derivation`; the profile does not. Mark the derived relation itself with
`isDerived: true`.
:::

## Example {#example}

The `«material» studies in` relation connecting `Student` and `University`, with its stereotype
recorded on the [`BinaryRelation`](../abstract-syntax/binary-relation.md). Material relations are
derived from their truthmaker (here, an `Enrollment` relator), so `isDerived` is `true`:

```json
{
  "type": "BinaryRelation",
  "id": "relation_studies_in",
  "name": { "en": "studies in" },
  "stereotype": "material",
  "isDerived": true,
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
These values follow the **OntoUML 1.0 profile** — the _UML Profile for Ontology-Driven Conceptual
Modeling (OntoUML)_ RFC under review at the OMG (OMG document ad/2026-11-01) — not this serialization
schema. Earlier OntoUML vocabularies also used names the profile does not define, such as
`componentOf` (now `componenthood`), `derivation`, and `exemplification`. Because `stereotype` is an
open string ([`Decoratable`](../abstract-syntax/decoratable.md)), **custom values are allowed** —
prefer the standard vocabulary for interoperability.
:::

:::tip Parthood ends
Parthood stereotypes (`componenthood`, `membership`, `subCollection`, `subQuantity`, `structural`,
`temporal`, and `participational`) mark the whole end through its
[`aggregationKind`](./aggregation-kind.md). `constitution` is not a parthood.
:::
