const ONTOUML_2_FILE = './../schemas/ontouml2.schema.json';
const ONTOUML_2 = 'https://ontouml.org/ontouml-schema/2.0/0.1.202001091222';

module.exports = {
  ONTOUML_2: ONTOUML_2,

  getSchema: function(selectedSchema) {
    switch (selectedSchema) {
      case ONTOUML_2:
        return require(ONTOUML_2_FILE);
    }

    return {};
  },
};
