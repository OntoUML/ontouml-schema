---
sidebar_position: 3
description: The Project element — the named container that aggregates an entire OntoUML ontology, its model elements, and its diagrams, views, and shapes.
---

# Project

A `Project` is a [`NamedElement`](./named-element.md) that serves as the container of an entire
OntoUML ontology, including both the abstract syntax (the [model elements](../abstract-syntax/index.md))
and the concrete syntax (the [diagrams, views, and shapes](../concrete-syntax/index.md)). In
practice the `Project` is the root of an exchanged document: it is the object you serialize to share
a whole ontology. Alongside the [identity](../document-structure.md#identity-properties) and
[descriptive](../document-structure.md#descriptive-properties) properties it inherits, it defines the
following.

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

`Project` also carries the [identity properties](../document-structure.md#identity-properties) `id`,
`created`, and `modified` from [`OntoumlElement`](./ontouml-element.md), and the
[descriptive properties](../document-structure.md#descriptive-properties) `name`,
`alternativeNames`, `description`, `editorialNotes`, `creators`, and `contributors` from
[`NamedElement`](./named-element.md). Because
[every property is required](../document-structure.md#every-property-is-required), a `Project` with
only `type`, `id`, and `name` is **invalid** — every property of its type must be present, even when
its value is `null` or `[]`.

The datatypes above are documented under [`id`](../datatypes/index.md#id),
[`resource`](../datatypes/index.md#resource), [`languageString`](../datatypes/language-string.md),
and [`pointInTime`](../datatypes/index.md#pointintime).

:::tip Controlled vocabularies
Several metadata properties — `designedForTasks`, `contexts`, `ontologyTypes`, and
`representationStyle` — draw their values from the OntoUML/UFO Catalog Metadata Vocabulary (OCMV),
which defines recommended values such as `ocmv:Research`, `ocmv:Domain`, and `ocmv:OntoumlStyle`.
See the [OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel) for the underlying
conceptual specification.
:::

## Example

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
