---
sidebar_position: 3
description: The overall shape of an OntoUML serialization — the type hierarchy, the type discriminator, references by id, and the required-property rule.
---

# Document Structure

Before consulting the element-by-element reference, it helps to understand the handful of rules
that govern *every* OntoUML serialization. This page covers the overall shape of a document: what
sits at the root, how elements are typed and linked, and which properties must always be present.

## A document is a single element

At the root, a valid document is a single **OntoUML element**. Every OntoUML element carries an
identity (`id`, `created`, `modified`) and is one of three broad kinds:

- a **named element** — a [`Project`](#the-project-element), a
  [`Diagram`](./concrete-syntax/index.md#diagram), or a [model element](./abstract-syntax/index.md);
- a **view** — part of the [concrete syntax](./concrete-syntax/index.md#views); or
- a **shape** — part of the [concrete syntax](./concrete-syntax/index.md#shapes).

In practice the root of an exchanged document is a [`Project`](#the-project-element), because the
Project is the container that aggregates an entire ontology — both its abstract syntax (the model
elements) and its concrete syntax (diagrams, views, and shapes).

## The `type` discriminator

Every concrete element carries a `type` property whose value is a fixed string, such as `"Class"`,
`"BinaryRelation"`, or `"ClassView"`. This discriminator tells a consumer exactly which kind of
element it is reading and which properties to expect. When you build an element, setting `type`
correctly is what makes the rest of the object validate against the right definition.

Abstract grouping types — `OntoumlElement`, `NamedElement`, `ModelElement`, `Decoratable`,
`Classifier`, `Relation`, `View`, `BinaryConnectorView`, `Shape`, and `RectangularShape` — are
**never serialized directly**. They exist only to factor out shared properties, and they have no
`type` value of their own. Only the leaf types listed in the [hierarchy](#the-type-hierarchy)
appear in a document.

## Common properties

Because of that shared structure, a few groups of properties recur across many elements.

### Identity properties

Every element is an `OntoumlElement` and therefore carries these three properties:

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | A non-empty string that uniquely identifies the element within the ontology. |
| `created` | `pointInTime` | When the element was created. |
| `modified` | `pointInTime` or `null` | When the element was last modified, or `null`. |

See [`pointInTime`](./datatypes/index.md#pointintime) for the accepted date formats.

### Descriptive properties

Named elements — projects, diagrams, and model elements — additionally carry descriptive
information:

| Property | Type | Description |
| --- | --- | --- |
| `name` | `languageString` or `null` | The name of the element. |
| `alternativeNames` | `languageString[]` | Synonyms or alternatives to the main name (not translations). |
| `description` | `languageString` or `null` | A free-text account of the element. |
| `editorialNotes` | `languageString[]` | Notes about the development process; not to be confused with `description`. |
| `creators` | `resource[]` | Agents who contributed to creating the element. |
| `contributors` | `resource[]` | Agents who contributed to developing the element. |

See [language string](./datatypes/language-string.md) for `languageString` and
[`resource`](./datatypes/index.md#resource) for that datatype.

## Every property is required {#every-property-is-required}

The OntoUML Schema is **total**: for each element, *all* of the properties defined for its type are
listed as `required`. There are no optional properties. A property that carries no information is
still written out explicitly:

- a missing single value is written as `null` (when the property is nullable); and
- a missing collection is written as an empty array `[]`.

This is the single most common source of validation errors. For example, a `Project` with only
`type`, `id`, and `name` is **invalid** — it must also carry `description`, `elements`, `root`,
`license`, and every other property of its type, even if their values are `null` or `[]`. The
[Welcome](./intro.md) page shows a complete minimal `Project` you can use as a starting point.

:::note Additional properties are tolerated
The schema does not set `additionalProperties: false`. A document may therefore carry extra
properties beyond those defined here without failing validation. Consumers should not rely on
unknown properties, and producers should not emit them unless they have a good reason to.
:::

## References, not nesting

OntoUML serializations are **flat**. A `Project` holds all of its model elements, views, and
diagrams in a single `elements` array. Structural relationships between those elements are then
expressed by **reference** — one element stores the [`id`](./datatypes/index.md#id) of another — rather
than by physically nesting one object inside another.

For instance, a [`Package`](./abstract-syntax/package.md) does not contain its members inline;
it lists their ids in its `contents` array. Likewise, a [`Class`](./abstract-syntax/class.md)
references its attributes by id in `properties`, and a
[`Generalization`](./abstract-syntax/generalization.md) references its `general` and `specific`
classifiers by id. The elements themselves are siblings in the Project's `elements` array.

```json
{
  "type": "Project",
  "id": "project_1",
  "root": "package_1",
  "elements": [
    { "type": "Package", "id": "package_1", "contents": ["class_1", "class_2", "gen_1"] },
    { "type": "Class", "id": "class_1" },
    { "type": "Class", "id": "class_2" },
    { "type": "Generalization", "id": "gen_1", "general": "class_1", "specific": "class_2" }
  ]
}
```

:::info
The JSON above is abbreviated to highlight the reference structure — the required properties of each
element are omitted. See the [Abstract Syntax](./abstract-syntax/index.md) reference for complete objects.
:::

Reading a serialization therefore usually means: locate the `Project`, index its `elements` by
`id`, and then resolve references as you traverse the model.

## Abstract syntax vs. concrete syntax

Every OntoUML element belongs to one of two layers:

- The **abstract syntax** is the model itself — the classes, relations, properties,
  generalizations, and packages that carry ontological meaning. These are the
  [model elements](./abstract-syntax/index.md).
- The **concrete syntax** is the visual representation — the [diagrams, views, and
  shapes](./concrete-syntax/index.md) that describe how (and where) model elements are drawn. A model
  element can be depicted zero, one, or many times; each depiction is a *view* backed by one or
  more *shapes*.

Keeping the two layers separate means the meaning of a model is independent of how it is drawn, and
the same element can appear in several diagrams.

## The type hierarchy

The following tree shows how every element type relates to the others. Indented types specialize the
type above them and inherit its properties. Types shown with a quoted `type` value are concrete and
appear in documents; the rest are abstract groupings that only contribute shared properties.

```text
OntoumlElement  (abstract — id, created, modified)
├── NamedElement  (abstract — name, alternativeNames, description,
│   │                         editorialNotes, creators, contributors)
│   ├── Project  → type: "Project"          the ontology container
│   ├── Diagram  → type: "Diagram"          concrete syntax
│   └── ModelElement  (abstract — customProperties)     abstract syntax
│       ├── Package  → type: "Package"
│       ├── Generalization  → type: "Generalization"
│       ├── GeneralizationSet  → type: "GeneralizationSet"
│       ├── Anchor  → type: "Anchor"
│       ├── Literal  → type: "Literal"
│       ├── Note  → type: "Note"
│       └── Decoratable  (abstract — stereotype, isDerived)
│           ├── Property  → type: "Property"
│           └── Classifier  (abstract — isAbstract, properties)
│               ├── Class  → type: "Class"
│               └── Relation  (abstract)
│                   ├── BinaryRelation  → type: "BinaryRelation"
│                   └── NaryRelation  → type: "NaryRelation"
├── View  (abstract — isViewOf)                         concrete syntax
│   ├── ClassView  → type: "ClassView"
│   ├── PackageView  → type: "PackageView"
│   ├── NoteView  → type: "NoteView"
│   ├── GeneralizationSetView  → type: "GeneralizationSetView"
│   ├── NaryRelationView  → type: "NaryRelationView"
│   └── BinaryConnectorView  (abstract — sourceView, targetView, path)
│       ├── BinaryRelationView  → type: "BinaryRelationView"
│       ├── GeneralizationView  → type: "GeneralizationView"
│       └── AnchorView  → type: "AnchorView"
└── Shape  (abstract)                                   concrete syntax
    ├── Path  → type: "Path"  (points)
    └── RectangularShape  (abstract — topLeft, width, height)
        ├── Rectangle  → type: "Rectangle"
        ├── Diamond  → type: "Diamond"
        └── Text  → type: "Text"
```

The [Abstract Syntax](./abstract-syntax/index.md) page documents the named/model-element branch, and the
[Concrete Syntax](./concrete-syntax/index.md) page documents the view and shape branches.

## The `Project` element {#the-project-element}

A `Project` is a named element that serves as the container of an entire OntoUML ontology. Alongside
the [identity](#identity-properties) and [descriptive](#descriptive-properties) properties it
inherits, it defines the following.

| Property | Type | Description |
| --- | --- | --- |
| `type` | `"Project"` | Discriminator; always `"Project"`. |
| `elements` | `array` | All OntoUML elements — model elements, views, and diagrams — that make up the project. |
| `root` | `id` or `null` | The root package containing all other model elements, if any. |
| `publisher` | `resource` or `null` | The agent responsible for making the project available. |
| `designedForTasks` | `resource[]` | The goals that motivated the project (e.g. OCMV modeling goals). |
| `license` | `resource` or `null` | The legal document under which the project is made available. |
| `accessRights` | `resource[]` | Documents describing who may access the project and how. |
| `themes` | `resource[]` | Central themes of the project according to a theme taxonomy. |
| `contexts` | `resource[]` | The contexts in which the project was developed (e.g. OCMV contexts). |
| `ontologyTypes` | `resource[]` | The project's classification by scope (e.g. OCMV core/domain/application). |
| `representationStyle` | `resource` or `null` | The representation style — OntoUML style or UFO style. |
| `namespace` | `string (uri)` or `null` | Base URI for the ids of the project's elements. |
| `landingPages` | `string (uri)[]` | Web pages where the project can be accessed. |
| `sources` | `string (uri)[]` | Resources that influenced the project (e.g. DOIs). |
| `bibliographicCitations` | `languageString[]` | Bibliographic references for the project. |
| `keywords` | `languageString[]` | Keywords describing the domain(s) the project covers. |
| `acronyms` | `string[]` | Acronyms used to refer to the project. |
| `languages` | `string[]` | IANA language tags for the labels used in the project (e.g. `"en"`, `"pt"`). |

:::tip Controlled vocabularies
Several metadata properties — `designedForTasks`, `contexts`, `ontologyTypes`, and
`representationStyle` — draw their values from the OntoUML/UFO Catalog Metadata Vocabulary (OCMV),
which defines recommended values such as `ocmv:Research`, `ocmv:Domain`, and `ocmv:OntoumlStyle`.
See the [OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel) for the underlying
conceptual specification.
:::

### Example

A minimal but complete `Project` with a single class inside a root package:

```json
{
  "type": "Project",
  "id": "project_1",
  "name": { "en": "Project 1" },
  "created": "2024-09-03",
  "modified": "2024-09-04",
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": [],
  "publisher": {
    "name": { "en": "Publisher 1" },
    "URI": "http://example.org/publisher1"
  },
  "license": {
    "name": { "en": "CC BY 4.0" },
    "URI": "https://creativecommons.org/licenses/by/4.0/"
  },
  "designedForTasks": [],
  "accessRights": [],
  "themes": [],
  "contexts": [],
  "ontologyTypes": [],
  "representationStyle": null,
  "namespace": null,
  "landingPages": [],
  "sources": [],
  "bibliographicCitations": [],
  "keywords": [],
  "acronyms": [],
  "languages": ["en"],
  "root": "package_1",
  "elements": [
    {
      "type": "Package",
      "id": "package_1",
      "name": { "en": "Root Package" },
      "contents": ["class_1"],
      "customProperties": null,
      "created": "2024-09-03",
      "modified": null,
      "alternativeNames": [],
      "description": null,
      "editorialNotes": [],
      "creators": [],
      "contributors": []
    },
    {
      "type": "Class",
      "id": "class_1",
      "name": { "en": "Person" },
      "stereotype": "kind",
      "isDerived": false,
      "isAbstract": false,
      "properties": [],
      "literals": [],
      "restrictedTo": ["functional-complex"],
      "isPowertype": false,
      "order": "1",
      "customProperties": null,
      "created": "2024-09-03",
      "modified": null,
      "alternativeNames": [],
      "description": null,
      "editorialNotes": [],
      "creators": [],
      "contributors": []
    }
  ]
}
```
