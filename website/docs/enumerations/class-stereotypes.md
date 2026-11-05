---
sidebar_position: 3
description: The standard OntoUML class stereotypes — kind, role, relator, category, type, and the rest — with the rigidity, sortality, restrictedTo natures, and order each expects.
---

# Class Stereotypes

Class stereotypes decorate [`Class`](../abstract-syntax/class.md) elements, naming the UFO notion
each class instantiates — `kind`, `role`, `relator`, and so on. A class's stereotype also constrains
the [ontological natures](./ontological-nature.md) it may list in `restrictedTo` and the
[`order`](../abstract-syntax/class.md) it may carry.

The schema lists these values in its `classStereotype` definition and suggests them for
`Class.stereotype`, so editors can autocomplete them. Unlike [Ontological Nature](./ontological-nature.md)
and [Aggregation Kind](./aggregation-kind.md), however, this vocabulary is **open**: `stereotype`
accepts any non-empty string (see [`Decoratable`](../abstract-syntax/decoratable.md)), so the values
below are the recommended standard set, not a closed enumeration.

## Standard values {#standard-values}

For each standard stereotype, the table gives its rigidity and sortality, and the `restrictedTo`
natures, `order`, and `isAbstract` expected in a serialized [`Class`](../abstract-syntax/class.md),
using the schema's [ontological-nature tokens](./ontological-nature.md).

| Stereotype            | Rigidity   | Sortality          | `restrictedTo`                                                                        | `order`                              | `isAbstract` |
| --------------------- | ---------- | ------------------ | ------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| `kind`                | rigid      | ultimate sortal    | `["functional-complex"]`                                                              | `"1"`                                | –            |
| `collective`          | rigid      | ultimate sortal    | `["collective"]`                                                                      | `"1"`                                | –            |
| `quantity`            | rigid      | ultimate sortal    | `["quantity"]`                                                                        | `"1"`                                | –            |
| `relator`             | rigid      | ultimate sortal    | `["relator"]`                                                                         | `"1"`                                | –            |
| `intrinsicMode`       | rigid      | ultimate sortal    | `["intrinsic-mode"]`                                                                  | `"1"`                                | –            |
| `extrinsicMode`       | rigid      | ultimate sortal    | `["extrinsic-mode"]`                                                                  | `"1"`                                | –            |
| `quality`             | rigid      | ultimate sortal    | `["quality"]`                                                                         | `"1"`                                | –            |
| `event`               | rigid      | ultimate sortal    | `["event"]`                                                                           | `"1"`                                | –            |
| `situation`           | rigid      | ultimate sortal    | `["situation"]`                                                                       | `"1"`                                | –            |
| `type`                | rigid      | ultimate sortal    | `["type"]`                                                                            | `"2"`, `"3"`, … (not `"1"` or `"*"`) | –            |
| `subkind`             | rigid      | subordinate sortal | a single nature, inherited from its ultimate sortal                                   | any                                  | –            |
| `role`                | anti-rigid | subordinate sortal | a single nature, inherited from its ultimate sortal, other than `event` or `abstract` | any                                  | –            |
| `phase`               | anti-rigid | subordinate sortal | a single nature, inherited from its ultimate sortal, other than `event` or `abstract` | any                                  | –            |
| `historicalRole`      | anti-rigid | subordinate sortal | a single nature, inherited from its ultimate sortal, other than `event` or `abstract` | any                                  | –            |
| `category`            | rigid      | non-sortal         | a non-empty subset of the natures                                                     | any                                  | `true`       |
| `mixin`               | semi-rigid | non-sortal         | a non-empty subset of the natures                                                     | any                                  | `true`       |
| `roleMixin`           | anti-rigid | non-sortal         | a non-empty subset of the natures                                                     | any                                  | `true`       |
| `phaseMixin`          | anti-rigid | non-sortal         | a non-empty subset of the natures                                                     | any                                  | `true`       |
| `historicalRoleMixin` | anti-rigid | non-sortal         | a non-empty subset of the natures                                                     | any                                  | `true`       |

:::note
The **non-sortal** stereotypes — `category`, `mixin`, `roleMixin`, `phaseMixin`, and
`historicalRoleMixin` — decorate classes that must be abstract (`isAbstract: true`), since their
instances always carry an identity principle supplied by some sortal. Any class whose `restrictedTo`
does not include `type` must have `order` `"1"` and `isPowertype` `false`.
:::

## By domain {#by-domain}

Grouped by the kind of entity they classify:

- **Endurants:** `kind`, `collective`, `quantity`, `relator`, `intrinsicMode`, `extrinsicMode`,
  `quality`, `subkind`, `role`, `phase`, `category`, `mixin`, `roleMixin`, `phaseMixin`.
- **Events:** `event`, `historicalRole`, `historicalRoleMixin`.
- **Situations:** `situation`.
- **Multi-level (types):** `type`.

## Example {#example}

The `«kind» Person` class, decorated with the `kind` stereotype and restricted to
`functional-complex`:

```json
{
  "type": "Class",
  "id": "class_person",
  "name": { "en": "Person" },
  "stereotype": "kind",
  "isDerived": false,
  "isAbstract": false,
  "properties": ["prop_age"],
  "literals": [],
  "restrictedTo": ["functional-complex"],
  "isPowertype": false,
  "order": "1",
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
schema, which leaves the profile's constraints to OntoUML tools. Earlier OntoUML vocabularies used a
single `mode` stereotype; the profile splits it into `intrinsicMode` and `extrinsicMode`. Because
`stereotype` is an open string ([`Decoratable`](../abstract-syntax/decoratable.md)), **custom values
are allowed** — prefer the standard vocabulary for interoperability, and reserve custom stereotypes
for deliberate extensions.
:::
