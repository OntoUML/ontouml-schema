---
sidebar_position: 3
description: The standard OntoUML class stereotypes — kind, role, relator, category, type, and the rest — with the restrictedTo natures and order each expects.
---

# Class Stereotypes

Class stereotypes decorate [`Class`](../abstract-syntax/class.md) elements, naming the UFO notion
each class instantiates — `kind`, `role`, `relator`, and so on. A class's stereotype also constrains
the [ontological natures](./ontological-nature.md) it may list in `restrictedTo` and the
[`order`](../abstract-syntax/class.md) it may carry.

Unlike [Ontological Nature](./ontological-nature.md) and [Aggregation Kind](./aggregation-kind.md),
this vocabulary is **open**: the schema stores `stereotype` as a plain non-empty string (see
[`Decoratable`](../abstract-syntax/decoratable.md)), so the values below are the recommended
standard set, not a closed enumeration.

## Standard values {#standard-values}

For each standard stereotype, the table gives the `restrictedTo` natures and the `order` expected in
a serialized [`Class`](../abstract-syntax/class.md), using the schema's
[ontological-nature tokens](./ontological-nature.md).

| Stereotype | `restrictedTo` | `order` |
| --- | --- | --- |
| `kind` | `["functional-complex"]` | `"1"` |
| `collective` | `["collective"]` | `"1"` |
| `quantity` | `["quantity"]` | `"1"` |
| `relator` | `["relator"]` | `"1"` |
| `mode` | non-empty subset of `["intrinsic-mode", "extrinsic-mode"]` | `"1"` |
| `quality` | `["quality"]` | `"1"` |
| `event` | `["event"]` | `"1"` |
| `situation` | `["situation"]` | `"1"` |
| `type` | `["type"]` | higher-order (`"2"`, `"3"`, … or `"*"` — not `"1"`) |
| `subkind` | a single nature, inherited from the ultimate sortal | any |
| `role` | a single nature, inherited from the ultimate sortal | any |
| `phase` | a single nature, inherited from the ultimate sortal | any |
| `historicalRole` | a single nature, inherited from the ultimate sortal | any |
| `category` | a non-empty subset of the natures | any |
| `mixin` | a non-empty subset of the natures | any |
| `roleMixin` | a non-empty subset of the natures | any |
| `phaseMixin` | a non-empty subset of the natures | any |
| `historicalRoleMixin` | a non-empty subset of the natures | any |

:::note
The **non-sortal** stereotypes — `category`, `mixin`, `roleMixin`, `phaseMixin`, and
`historicalRoleMixin` — decorate classes that must be abstract (`isAbstract: true`), since their
instances always carry an identity principle supplied by some sortal.
:::

## By domain {#by-domain}

Grouped by the kind of entity they classify:

- **Endurants:** `kind`, `collective`, `quantity`, `relator`, `mode`, `quality`, `subkind`, `role`,
  `phase`, `category`, `mixin`, `roleMixin`, `phaseMixin`.
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
These values come from the **OntoUML profile**, not from this serialization schema. See the
[OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel) for the formal definitions and
constraints of each stereotype. Because `stereotype` is an unconstrained string
([`Decoratable`](../abstract-syntax/decoratable.md)), **custom values are allowed** — prefer the
standard vocabulary for interoperability, and reserve custom stereotypes for deliberate extensions.
:::
