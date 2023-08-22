# OntoUML Schema

This repository provides a JSON Schema representation of ontologies based on the [OntoUML Metamodel](https://github.com/OntoUML/ontouml-metamodel). This serialization of ontologies in JSON is intended to support the exchange of models over HTTP requests.

## How to use

[JSON Schema](https://json-schema.org/) is a popular web standard for the definition and validation of JSON files. The standard employs JSON files to describe schemas of valid input data.

This standard is language-independent and the schema can be recovered directly through its dedicated URI \<https://w3id.org/ontouml/schema/v1.0.0\> (unstable as of August 22). Some [implementations](https://json-schema.org/implementations.html) of JSON Schema can directly resolve this URI and download the schema.

Javascript developers, however, can directly download this dependency using the command below.

```bash
> npm install ontouml-schema
```

The code snippet below shows how a developer can then use a dedicated library such as [Ajv](https://ajv.js.org/) to validate objects against this schema.

```javascript
const schema = require('ontouml-schema');
const Ajv = require('ajv');

const validator = new Ajv().compile(schema);
const project = {
    "type": "Project",
    "id": "p1",
    "name": {
        "en": "My Ontology"
    }
};
const isValid = validator(project);

if(isValid) {
    console.log(`Project '${project.name.en}' is valid!`);
}
else {
    console.log(`Project '${project.name.en}' is NOT valid!`);
    console.log(validator.errors);
}
```


## Development

For development purposes only, this repository is designed as a NodeJS project. This project includes a small set of development dependencies, none of which is required on dependent projects. Users should only refer to the JSON file `src/ontouml-schema.json` and available usage guides.

Developers interacting with this project must start by installing its dependencies. The `start` command then activates the automated code formatting for all relevant files when these are saved.

```bash
> npm install
> npm start
```

All changes to the OntoUML Schema must be performed in the YAML file `src/ontouml-schema.yaml`. The command below should then be executed to generate its JSON equivalent.

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
