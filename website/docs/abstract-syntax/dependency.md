---
sidebar_position: 9
description: The Dependency model element — a decoratable element relating two model elements, used for the derivation of a relation from its truthmaker.
---

# Dependency

A **decoratable** element that represents a dependency between two model elements, in which the
meaning of the **depender** is not complete without the **dependee**. Unlike a
[relation](./relation.md), a dependency has no instances in the subject domain: it relates the model
elements themselves. The depender and dependee correspond to the _client_ and _supplier_ of a UML
dependency.

| Property   | Type           | Description                                                                              |
| ---------- | -------------- | ---------------------------------------------------------------------------------------- |
| `type`     | `"Dependency"` | Discriminator.                                                                           |
| `depender` | `id`           | The model element that depends on the dependee (e.g. the derived relation).              |
| `dependee` | `id`           | The model element the depender depends on (e.g. the truthmaker of the derived relation). |

`Dependency` also carries the properties of [`Decoratable`](./decoratable.md) (`stereotype`) and
the [properties common to all model elements](./index.md). It is a
[packageable element](./packageable-element.md), so a [package](./package.md) can contain it.

## Derivation {#derivation}

The OntoUML profile uses a dependency stereotyped `derive` (the «Derive» stereotype from UML's
standard profile) to link a **derived relation** to its **truthmaker**: a `material` relation to the
relator it is derived from, or a `comparative` relation to the quality it compares. The derived
relation is the depender and the truthmaker is the dependee. In UML, a dependency is drawn as a
dashed arrow from the depender to the dependee.

Earlier OntoUML vocabularies serialized this link as a relation stereotyped `derivation`; the profile
does not (see [Relation Stereotypes](../enumerations/relation-stereotypes.md)). The derived relation
itself is marked with `isDerived: true`. The dependency has no `isDerived` of its own since, as in
UML, a dependency cannot be derived.

The example below derives the `«material» studies in` relation from the `«relator» Enrollment`
class:

```json
{
  "type": "Dependency",
  "id": "dependency_1",
  "name": null,
  "stereotype": "derive",
  "depender": "relation_studies_in",
  "dependee": "class_enrollment",
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

`derive` is the only dependency stereotype the OntoUML profile uses. As with every
[`Decoratable`](./decoratable.md), `stereotype` accepts any non-empty string, so other dependencies (for example UML's `trace` or
`refine`) can be serialized with custom stereotypes.

A dependency is rendered in a diagram by a
[`DependencyView`](../concrete-syntax/dependency-view.md).
