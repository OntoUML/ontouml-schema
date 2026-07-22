---
sidebar_position: 1
description: The closed enumeration of ontological natures a class's instances may have — the values allowed in a Class's restrictedTo array.
---

# Ontological Nature

A [`Class`](../abstract-syntax/class.md) carries a `restrictedTo` array listing the **ontological
natures** its instances may have — the fundamental UFO categories that its individuals fall under.
An instance of a class restricted to `functional-complex` is a functional whole such as a person or
a car; an instance of a class restricted to `event` is an occurrence such as a soccer match.

This is a **closed enumeration**: `restrictedTo` is an array whose entries must each be one of the
eleven tokens below. A validator rejects any other value.

- **JSON type:** `string[]` — an array of enum strings.
- **Constraint:** each entry is one of the eleven tokens listed below.

## Values {#values}

| Nature | Meaning | Example |
| --- | --- | --- |
| `functional-complex` | Objects whose parts play distinct functional roles. | Person, Car |
| `collective` | Wholes whose parts play a uniform role. | Deck of Cards, Forest |
| `quantity` | Portions of matter or stuff. | Water Portion, Gold Portion |
| `relator` | Extrinsic aspects existentially dependent on two or more endurants. | Marriage, Employment |
| `intrinsic-mode` | Aspects depending only on their bearer. | an intention, a skill, a symptom |
| `extrinsic-mode` | Externally dependent modes. | a commitment, a love |
| `quality` | Measurable aspects projected into a quality structure. | Weight, Color, Temperature |
| `event` | Perdurants / occurrents that unfold in time. | Soccer Match, Birth |
| `situation` | Configurations of entities that obtain at a time. | Checkmate, Settled Debt |
| `type` | High-order types whose instances are themselves types. | Ship Type, Dog Breed |
| `abstract` | Entities outside space-time. | Number, Set, Proposition |

## Named subsets {#named-subsets}

Several rules in OntoUML — in particular the constraints on relation ends — refer to groups of these
natures by name rather than one by one. The three nested subsets below are the most common.

| Subset | Members |
| --- | --- |
| **substantial** | `functional-complex`, `collective`, `quantity` |
| **endurant** | *substantial* ∪ `relator`, `intrinsic-mode`, `extrinsic-mode`, `quality`, `type` |
| **concrete individual** | *endurant* ∪ `event`, `situation` |

:::note
These subsets are nested: every *substantial* nature is an *endurant*, and every *endurant* is a
*concrete individual*. The remaining token, `abstract`, lies outside all three — abstract entities
are neither endurants nor perdurants.
:::

## Examples {#examples}

A sortal class such as `«kind» Person` restricts its instances to a single nature:

```json
"restrictedTo": ["functional-complex"]
```

A non-sortal class such as a `«category»` may generalize instances of several natures, in which case
`restrictedTo` lists more than one token:

```json
"restrictedTo": ["functional-complex", "relator"]
```

:::info
Which natures are appropriate depends on the class's stereotype. See
[Class Stereotypes](./class-stereotypes.md) for the `restrictedTo` values expected for each standard
stereotype (for example, `relator` classes are restricted to `["relator"]`, while non-sortals take a
non-empty subset of the natures).
:::
