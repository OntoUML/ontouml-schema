---
sidebar_position: 2
description: The metadata the Project element adds on top of element metadata — attribution, rights, classification, and identification — organised into thematic groups with usage guidance.
---

# Project Metadata

The [`Project`](../structural/project.md) is the container of an entire OntoUML ontology, and it is
where model-wide metadata lives. On top of the [element metadata](./element-metadata.md) it inherits
as a named element — identity (`id`, `created`, `modified`) and descriptive fields (`name`,
`description`, `creators`, `contributors`, and so on) — the `Project` defines a further set of
properties that document the ontology as a whole.

This page organises those project-level properties into four themes with practical guidance. The
structural properties `type`, `elements`, and `root` are covered in the
[Project reference](../structural/project.md) and the
[Document Structure](../document-structure.md#the-project-element) page; they are omitted here
because they describe the model's *shape*, not its *metadata*.

## Attribution & provenance

Who made the ontology, and what informed it.

| Property | Type | Description |
| --- | --- | --- |
| `publisher` | `resource` or `null` | The agent responsible for making the project available. |
| `sources` | `string (uri)[]` | Resources that influenced the project (e.g. DOIs). |
| `bibliographicCitations` | `languageString[]` | Bibliographic references for the project. |

Use `publisher` for the organization or person that releases the ontology (as a
[`resource`](../datatypes/resource.md) — a name plus URI). Record the material the model draws on in
`sources` (prefer stable, resolvable URIs such as DOIs) and give human-readable citations in
`bibliographicCitations`. Together with the element-level
[`creators` and `contributors`](./element-metadata.md#descriptive), these properties establish the
model's provenance.

## Rights & access

Under what terms, and from where, the ontology may be obtained.

| Property | Type | Description |
| --- | --- | --- |
| `license` | `resource` or `null` | The legal document under which the project is made available. |
| `accessRights` | `resource[]` | Documents describing who may access the project and how. |
| `landingPages` | `string (uri)[]` | Web pages where the project can be accessed. |

Always set a `license` when a model is meant to be shared — a
[`resource`](../datatypes/resource.md) pointing at, for example, `CC BY 4.0`. Use `accessRights` to
describe any access constraints, and `landingPages` to point at the web pages from which the project
is distributed. These properties are what make a model *accessible* and *reusable*.

## Classification (OCMV vocabularies)

What kind of ontology this is, and what it is for. The recommended values for these properties come
from the **OntoUML/UFO Catalog Metadata Vocabulary (OCMV)**.

| Property | Type | Description |
| --- | --- | --- |
| `designedForTasks` | `resource[]` | The goals that motivated the project (e.g. OCMV modeling goals). |
| `contexts` | `resource[]` | The contexts in which the project was developed (e.g. OCMV contexts). |
| `ontologyTypes` | `resource[]` | The project's classification by scope (e.g. OCMV core/domain/application). |
| `representationStyle` | `resource` or `null` | The representation style — OntoUML style or UFO style. |
| `themes` | `resource[]` | Central themes of the project according to a theme taxonomy. |

Draw the values of these properties from OCMV wherever possible — for example
`ocmv:Research` for `contexts`, `ocmv:Domain` for `ontologyTypes`, and `ocmv:OntoumlStyle` for
`representationStyle`. Using shared vocabulary values (rather than free text) is what makes models
comparable and *interoperable* across the catalog. See the
[OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel) for the underlying conceptual
specification.

## Identification & indexing

How the ontology is identified on the web and surfaced to search.

| Property | Type | Description |
| --- | --- | --- |
| `namespace` | `string (uri)` or `null` | Base URI for the ids of the project's elements. |
| `acronyms` | `string[]` | Acronyms used to refer to the project. |
| `keywords` | `languageString[]` | Keywords describing the domain(s) the project covers. |
| `languages` | `string[]` | IANA language tags for the labels used in the project (e.g. `"en"`, `"pt"`). |

The `namespace` is the cornerstone of the model's FAIR identifiers: appending each element's
[`id`](../datatypes/id.md) to this base URI produces a globally unique, resolvable identifier for
that element. Provide `acronyms` and `keywords` to make the project findable, and declare the
[IANA language tags](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
used across the model in `languages` (e.g. `["en", "pt"]`), matching the keys used in the model's
[`languageString`](../datatypes/language-string.md) values.

:::tip This is what makes a model FAIR
Good project metadata is precisely what makes an ontology **Findable** and **Reusable**: a declared
`namespace` gives every element a resolvable identifier, `keywords`/`acronyms` aid discovery, and
`license`/`publisher`/`sources` make reuse safe. See [FAIR by design](./index.md#fair) for the full
mapping.
:::

## Example

A well-described `Project` metadata block (structural `elements` and `root` omitted for brevity):

```json
{
  "type": "Project",
  "id": "project_1",
  "name": { "en": "Person Ontology", "pt-BR": "Ontologia de Pessoa" },
  "created": "2024-09-03",
  "modified": "2024-09-04",
  "alternativeNames": [],
  "description": { "en": "A small reference ontology about people and organizations." },
  "editorialNotes": [],
  "creators": [
    { "name": { "en": "Jane Doe" }, "URI": "https://orcid.org/0000-0000-0000-0000" }
  ],
  "contributors": [],
  "publisher": {
    "name": { "en": "Example Ontology Group" },
    "URI": "http://example.org/group"
  },
  "sources": ["https://doi.org/10.1000/example"],
  "bibliographicCitations": [{ "en": "Doe, J. (2024). Person Ontology. Example Press." }],
  "license": {
    "name": { "en": "CC BY 4.0" },
    "URI": "https://creativecommons.org/licenses/by/4.0/"
  },
  "accessRights": [],
  "landingPages": ["http://example.org/person-ontology"],
  "designedForTasks": [
    { "name": { "en": "Conceptual Clarification" }, "URI": "https://w3id.org/ocmv#ConceptualClarification" }
  ],
  "contexts": [
    { "name": { "en": "Research" }, "URI": "https://w3id.org/ocmv#Research" }
  ],
  "ontologyTypes": [
    { "name": { "en": "Domain" }, "URI": "https://w3id.org/ocmv#Domain" }
  ],
  "representationStyle": {
    "name": { "en": "OntoUML Style" },
    "URI": "https://w3id.org/ocmv#OntoumlStyle"
  },
  "themes": [],
  "namespace": "http://example.org/person-ontology#",
  "acronyms": ["PO"],
  "keywords": [{ "en": "person" }, { "en": "organization" }],
  "languages": ["en", "pt-BR"]
}
```
