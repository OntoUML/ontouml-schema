---
slug: /metadata
description: How the OntoUML Schema captures rich, standards-aligned metadata at two levels — element metadata and project metadata — and how that makes models FAIR by design.
---

# Metadata

Beyond the structure of a model, the OntoUML Schema captures rich, standards-aligned
**metadata** — the descriptive, provenance, rights, and classification information that turns a
serialized ontology into a well-documented, shareable artifact. This chapter aggregates, in one
place, every metadata property the schema records and — just as importantly — explains *how* to
use them. Where each property is formally defined elsewhere, this chapter links back to that
definition rather than restating it.

The schema captures metadata at two levels:

- **[Element metadata](./element-metadata.md)** is carried by *every* element (identity such as
  [`id`](../datatypes/id.md), `created`, and `modified`) and by every *named* element — projects,
  diagrams, and [model elements](../abstract-syntax/model-element.md) — which additionally carry
  descriptive information such as `name`, `description`, `creators`, and `contributors`.
- **[Project metadata](./project-metadata.md)** is carried by the
  [`Project`](../structural/project.md) container. It documents the ontology as a whole:
  attribution and provenance, rights and access, classification against controlled vocabularies,
  and identification and indexing.

## FAIR by design {#fair}

The metadata layer is not decorative — it is the mechanism by which the schema makes OntoUML models
**FAIR**: Findable, Accessible, Interoperable, and Reusable. Each FAIR principle maps onto concrete
features of the schema.

- **Findable.** Every element carries rich descriptive metadata — `name`, `keywords`,
  `description` — that makes it discoverable by humans and search tools. More fundamentally, every
  element has a globally unique, persistent identifier: appending an element's
  [`id`](../datatypes/id.md) to the project's `namespace` (a resolvable base URI) yields a stable
  URI that identifies the element on the web — a *FAIR Digital Object*.
- **Accessible.** Because identifiers are resolvable URIs, elements are retrievable by their
  identifier over standard web protocols. At the project level, `landingPages` say where a project
  can be obtained and `accessRights` describe who may access it and how.
- **Interoperable.** Every serialization shares a single, standard shape defined by one JSON Schema.
  Metadata values are drawn from controlled vocabularies — the OntoUML/UFO Catalog Metadata
  Vocabulary (OCMV) and [IANA language tags](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
  — and external references use the [`resource`](../datatypes/resource.md) type (a name plus a URI),
  linking a model into the wider semantic web.
- **Reusable.** A clear `license`, explicit provenance (`creators`, `contributors`, `publisher`,
  `sources`), and rich usage context (`contexts`, `ontologyTypes`, `designedForTasks`) tell a
  potential reuser exactly what a model is, where it came from, and under what terms it may be
  reused.

:::tip FAIR by design
The OntoUML Schema is **FAIR by design**. Findability and accessibility come from resolvable,
namespace-based identifiers; interoperability from a single standard shape plus controlled
vocabularies; and reusability from explicit licensing and provenance. Populating the metadata
described in this chapter is what activates these guarantees for a given model — the more complete
the metadata, the more FAIR the model.
:::
