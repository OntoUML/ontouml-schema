# OntoUML Schema

This repository provides a JSON Schema representation of ontologies based on the [OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel). This serialization of ontologies in JSON is intended to support the exchange of models over HTTP requests.

The schema follows the [JSON Schema 2020-12](https://json-schema.org/) specification.

## Documentation

Full documentation of the schema — including every definition, enumeration, and metadata structure — is available on the documentation website:

**<https://ontouml.github.io/ontouml-schema/>**

## How to use

[JSON Schema](https://json-schema.org/) is a popular web standard for the definition and validation of JSON files. The standard employs JSON files to describe schemas of valid input data.

This standard is language-independent and the schema can be recovered directly through its dedicated URI \<https://w3id.org/ontouml/schema/v1.0.1\>. Some [implementations](https://json-schema.org/implementations.html) of JSON Schema can directly resolve this URI and download the schema.

Javascript developers, however, can directly download this dependency using the command below.

```bash
> npm install ontouml-schema
```

The code snippet below shows how a developer can then use a dedicated library such as [Ajv](https://ajv.js.org/) to validate objects against this schema.

```javascript
const schema = require('ontouml-schema');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv();
addFormats(ajv);
const validator = ajv.compile(schema);

const project = {
  id: '1234',
  type: 'Project',
  name: { en: 'Project Name' },
  alternativeNames: [],
  description: { en: 'The Project Description' },
  keywords: [],
  created: '2024-09-04T00:00:00Z',
  modified: '2024-09-04T00:00:00Z',
  propertyAssignments: null,
  editorialNotes: [],
  creators: [],
  contributors: [],
  elements: [],
  root: null,
  publisher: null,
  designedForTasks: [],
  license: null,
  accessRights: [],
  themes: [],
  contexts: [],
  ontologyTypes: [],
  representationStyle: null,
  namespace: null,
  landingPages: [],
  sources: [],
  bibliographicCitations: [],
  acronyms: [],
  languages: ['en', 'pt-br']
};

const isValid = validator(project);

if (isValid) {
  console.log(`Project '${project.name.en}' is valid!`);
} else {
  console.log(`Project '${project.name.en}' is NOT valid!`);
  console.log(validator.errors);
}
```

> The schema uses string formats (e.g. `date-time` for `created` and `modified`), so [ajv-formats](https://github.com/ajv-validator/ajv-formats) is required for full validation. See [`test/new_models/`](test/new_models/) for more example serializations.

## Development

For development purposes only, this repository is designed as a NodeJS project. This project includes a small set of development dependencies, none of which is required on dependent projects. Users should only refer to the JSON file `dist/ontouml-schema.json` and available usage guides.

Developers interacting with this project must start by installing its dependencies. The `start` command then activates the automated code formatting for all relevant files when these are saved.

```bash
> npm ci
```

All changes to the OntoUML Schema must be performed in the YAML file `src/ontouml-schema.yaml`. The command below should then be executed to generate its JSON equivalent. To ensure that changes to the source file are not ignored, **this command is automated on commit and on prepublish**.

```bash
> npm run generate
```

The command below then tests the JSON version of the schema file, raising error messages in case of mistakes in the usage of JSON Schema.

```bash
> npm test
```

Testing scripts and updated usage guides shall be introduced to this repository in the next steps.

## Contributors

This project is maintained by the [Semantics, Cybersecurity & Services (SCS) Group](https://www.utwente.nl/en/eemcs/scs/) of the [University of Twente](https://www.utwente.nl/), The Netherlands.

The main contributors are:

- Tiago Prince Sales - [[ORCID]](https://orcid.org/0000-0002-5385-5761) [[GitHub]](https://github.com/tgoprince) [[LinkedIn]](https://www.linkedin.com/in/tiago-sales/)
- Claudenir M. Fonseca - [[ORCID]](https://orcid.org/0000-0003-2528-3118) [[GitHub]](https://github.com/claudenirmf) [[LinkedIn]](https://www.linkedin.com/in/claudenir-fonseca-52b251216/)
- Pedro Paulo Favato Barcelos - [[ORCID]](https://orcid.org/0000-0003-2736-7817) [[GitHub]](https://github.com/pedropaulofb) [[LinkedIn]](https://www.linkedin.com/in/pedro-paulo-favato-barcelos/)
- Lucas Bassetti - [GitHub](https://github.com/LucasBassetti)
- Victor Viola - [GitHub](https://github.com/victorviola)
