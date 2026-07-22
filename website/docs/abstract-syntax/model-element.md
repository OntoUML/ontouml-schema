---
sidebar_position: 1
description: The abstract root of the abstract syntax — a named element that adds customProperties (UML tagged values) to every model element.
---

# Model Element

A `ModelElement` is a [`NamedElement`](../structural/named-element.md) that represents an element of the
language's **abstract syntax** — a class, a relation, a generalization, and so on. It is an
**abstract** grouping that never appears directly in a document (it has no `type` value of its own);
it only contributes the single property below to its many subtypes.

| Property | Type | Description |
| --- | --- | --- |
| `customProperties` | `object` or `null` | Custom key-value pairs attached to the element. In UML these correspond to tagged values. |

`ModelElement` also carries the [identity properties](../document-structure.md#identity-properties)
`id`, `created`, and `modified` from [`OntoumlElement`](../structural/ontouml-element.md), and the
[descriptive properties](../document-structure.md#descriptive-properties) `name`,
`alternativeNames`, `description`, `editorialNotes`, `creators`, and `contributors` from
[`NamedElement`](../structural/named-element.md). Because
[every property is required](../document-structure.md#every-property-is-required),
`customProperties` is always present, written as `null` when the element carries no custom
key-value pairs.

`customProperties` is the schema's counterpart to UML **tagged values**: a free-form bag of
extra key-value data that a tool or modeler can attach to any model element without extending the
metamodel.

## Subtypes

Every model element in the [abstract syntax](./index.md) specializes
`ModelElement`. Its direct descendants are:

- [`Generalization`](./generalization.md)
- [`GeneralizationSet`](./generalization-set.md)
- [`Anchor`](./anchor.md)
- [`Literal`](./literal.md)
- [`Note`](./note.md)
- [`Package`](./package.md)
- `Decoratable` — the abstract branch of elements that can carry a UFO stereotype, comprising
  [`Property`](./property.md) and `Classifier`
  ([`Class`](./class.md) and `Relation` →
  [binary](./relation.md#binary-relation) and
  [n-ary](./relation.md#nary-relation) relations).

```mermaid
classDiagram
  direction TB
  class ModelElement {
    <<abstract>>
    customProperties
  }
  class Decoratable {
    <<abstract>>
  }
  class Classifier {
    <<abstract>>
  }
  class Relation {
    <<abstract>>
  }

  ModelElement <|-- Generalization
  ModelElement <|-- GeneralizationSet
  ModelElement <|-- Anchor
  ModelElement <|-- Literal
  ModelElement <|-- Note
  ModelElement <|-- Package
  ModelElement <|-- Decoratable
  Decoratable <|-- Property
  Decoratable <|-- Classifier
  Classifier <|-- Class
  Classifier <|-- Relation
  Relation <|-- BinaryRelation
  Relation <|-- NaryRelation
```

## Shared properties

Since `ModelElement` is abstract, it is never serialized on its own. Its `customProperties` appears
inside every model element, alongside the identity and descriptive blocks:

```json
{
  "id": "class_1",
  "created": "2024-09-03",
  "modified": null,
  "name": { "en": "Person" },
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": [],
  "customProperties": null
}
```

See the [Abstract Syntax](./index.md) reference — for example
[`Class`](./class.md) — for complete, serializable objects that embed this block.
