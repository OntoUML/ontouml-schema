---
sidebar_position: 2
description: How to obtain the OntoUML Schema and validate a JSON document against it.
---

# Getting Started

This page shows how to obtain the OntoUML Schema and use it to **validate** a JSON document. JSON
Schema is language-independent, so the same schema can be consumed by validators written in
JavaScript, Python, Java, and many other languages — see the
[list of implementations](https://json-schema.org/implementations.html).

## Obtaining the schema

You can get the schema in three ways.

### By URI

The schema is published under a stable, versioned identifier:

```
https://w3id.org/ontouml/schema/v1.0.0
```

Many JSON Schema validators can resolve and download a schema directly from its URI. Referencing
the schema by URI is the recommended approach because it pins your tooling to an explicit version.

### From npm

JavaScript and TypeScript projects can install the schema as a dependency:

```bash
npm install ontouml-schema
```

The package exposes the compiled JSON Schema as its default export:

```javascript
const schema = require('ontouml-schema');
```

### From the repository

The compiled schema lives in the [`ontouml-schema` repository](https://github.com/OntoUML/ontouml-schema)
at `dist/ontouml-schema.json`. This is the file to consume directly; the authoritative source is
the YAML file `src/ontouml-schema.yaml`, from which the JSON is generated.

## Validating a document

The example below uses [Ajv](https://ajv.js.org/), a popular JavaScript validator, to check a
`Project` object against the schema.

```javascript
const schema = require('ontouml-schema');
const Ajv = require('ajv/dist/2020');

const validator = new Ajv().compile(schema);

const project = {
  type: 'Project',
  id: 'p1',
  name: { en: 'My Ontology' }
  // ...remaining required properties omitted for brevity
};

const isValid = validator(project);

if (isValid) {
  console.log(`Project '${project.name.en}' is valid!`);
} else {
  console.log(`Project '${project.name.en}' is NOT valid!`);
  console.log(validator.errors);
}
```

:::caution Validate the whole object
The snippet above omits properties for brevity, but the OntoUML Schema requires **every** property
of an element to be present (see [Document Structure](./document-structure.md#every-property-is-required)).
A `Project` that only carries `type`, `id`, and `name` will therefore fail validation. Start from
the complete minimal document on the [Welcome](./intro.md) page instead.
:::

### Validating formats

The schema uses the JSON Schema `format` keyword for several properties — for example
`format: uri` on `namespace` and `landingPages`, and `format: date` / `format: date-time` on
`created` and `modified`. As of Ajv v7, format validators are not bundled with the library. To
enforce these formats, add the [`ajv-formats`](https://github.com/ajv-validator/ajv-formats)
package:

```javascript
const Ajv = require('ajv/dist/2020');
const addFormats = require('ajv-formats');

const ajv = new Ajv();
addFormats(ajv);

const validator = ajv.compile(schema);
```

Without `ajv-formats`, Ajv silently ignores unknown formats: structural validation still succeeds,
but values such as a malformed URI are **not** rejected.

:::note Dialect
The OntoUML Schema targets JSON Schema **Draft 2020-12**, declared through its `$schema` keyword.
Make sure your validator is configured for the 2020-12 dialect. With Ajv this means importing the
2020-12 build — `require('ajv/dist/2020')`, as shown above — because the default `ajv` entry point
targets Draft 07.
:::

## Next steps

- Read [Document Structure](./document-structure.md) to understand the overall shape of a
  serialization before you generate or consume one.
- Consult the [Abstract Syntax](./abstract-syntax/index.md) and [Concrete Syntax](./concrete-syntax/index.md)
  references for the properties of each element type.
