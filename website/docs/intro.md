---
sidebar_position: 1
slug: /
description: Documentation and user guide for the OntoUML Schema, the JSON serialization of OntoUML ontologies.
---

# Welcome

This section documents the [**OntoUML Schema**](https://github.com/OntoUML/ontouml-schema), a
[JSON Schema](https://json-schema.org/) that defines how OntoUML ontologies are serialized as JSON.

The schema is a faithful, machine-readable rendering of the
[OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel). Where the Metamodel documentation describes *what*
OntoUML elements mean, this section describes *how* those elements are written to — and read
from — a JSON document, so that tools can exchange models reliably over the web.

## Why a JSON Schema?

JSON Schema is a widely adopted web standard for describing and **validating** the structure of
JSON data. Publishing the OntoUML serialization as a JSON Schema gives the ecosystem three things:

- **Interoperability.** Any tool, in any programming language, can produce and consume OntoUML
  models in the same shape. The serialization is designed to support the exchange of models over
  HTTP requests.
- **Validation.** A JSON document can be automatically checked against the schema, catching
  malformed models before they reach a tool that assumes they are well formed.
- **A single source of truth.** The schema is versioned and resolvable by a stable URI, so
  producers and consumers can agree on exactly which structure they are exchanging.

## The schema at a glance

- **Standard:** JSON Schema [Draft 2020-12](https://json-schema.org/specification-links.html#2020-12).
- **Identifier:** the schema is published under the versioned URI
  `https://w3id.org/ontouml/schema/v1.0.0`.
- **Package:** it is distributed on npm as [`ontouml-schema`](https://www.npmjs.com/package/ontouml-schema).
- **Source of truth:** the schema is authored in YAML (`src/ontouml-schema.yaml`) and compiled to
  JSON (`dist/ontouml-schema.json`).

A minimal valid document is a single **Project** — the container of an entire ontology:

```json
{
  "type": "Project",
  "id": "my-ontology",
  "name": { "en": "My Ontology" },
  "created": "2024-09-04",
  "modified": null,
  "alternativeNames": [],
  "description": null,
  "editorialNotes": [],
  "creators": [],
  "contributors": [],
  "elements": [],
  "root": null,
  "publisher": null,
  "designedForTasks": [],
  "license": null,
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
  "languages": []
}
```

:::note
The schema is **total**: every property defined for an element must be present, even when it
carries no information. Absent values are written explicitly as `null` (for single values) or `[]`
(for collections). The [Document Structure](./document-structure.md) page explains this rule in
detail.
:::

## How this documentation is organized

| Page | What you will find |
| --- | --- |
| [Getting Started](./getting-started.md) | How to obtain the schema and validate a document against it. |
| [Document Structure](./document-structure.md) | The overall shape of a serialization: the type hierarchy, the `type` discriminator, references by `id`, and the required-property rule. |
| [Structural](./structural/index.md) | The reference for the identity/naming backbone: `OntoumlElement`, `NamedElement`, `Project`, and `ModelElement`. |
| [Abstract Syntax](./abstract-syntax/index.md) | The reference for **model elements** — classes, relations, properties, generalizations, packages, and more. |
| [Concrete Syntax](./concrete-syntax/index.md) | The reference for **diagrams, views, and shapes** — the visual representation of a model. |
| [Datatypes](./datatypes/index.md) | The reusable value types: `id`, `languageString`, `resource`, `pointInTime`, and `point`. |

## Related resources

- [OntoUML Metamodel documentation](https://github.com/OntoUML/ontouml-metamodel) — the conceptual specification this schema serializes.
- [`ontouml-schema` repository](https://github.com/OntoUML/ontouml-schema) — source, distribution, and tests.
- [`ontouml-metamodel` repository](https://github.com/OntoUML/ontouml-metamodel) — the metamodel itself.
