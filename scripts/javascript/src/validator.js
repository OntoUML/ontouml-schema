const Ajv = require('ajv');
const fs = require('fs');

let schemaFiles = [
  "../../schemas/General/Formats.schema.json",
  "../../schemas/General/BasicProperties.schema.json",
  "../../schemas/General/MediaObject.schema.json",
  "../../schemas/General/MultimediaDescription.schema.json",
  "../../schemas/General/Agent.schema.json",
  "../../schemas/General/ContactPoint.schema.json",
  "../../schemas/General/Address.schema.json",
  "../../schemas/General/HoursSpecification.schema.json",
  "../../schemas/General/Place.schema.json",
  "../../schemas/General/Offering.schema.json",
  "../../schemas/General/PriceSpecification.schema.json",
  "../../schemas/General/TicketType.schema.json",
  "../../schemas/General/Metadata.schema.json",
  "../../schemas/GeoJSON/Geometry.schema.json",
  "../../schemas/GeoJSON/Point.schema.json",
  "../../schemas/GeoJSON/LineString.schema.json",
  "../../schemas/GeoJSON/Polygon.schema.json",
  "../../schemas/GeoJSON/MultiPoint.schema.json",
  "../../schemas/GeoJSON/MultiLineString.schema.json",
  "../../schemas/GeoJSON/MultiPolygon.schema.json",
  "../../schemas/EventData/EventSeries.schema.json",
  "../../schemas/EventData/BasicEvent.schema.json",
  "../../schemas/EventData/Event.schema.json"
];

let schemas = schemaFiles.map( file => {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
})

let ajv = new Ajv({schemas: schemas});
let validate = ajv.getSchema("https://www.alpinebits.org/schemas/v1/eventdata/Event");

let object = JSON.parse(fs.readFileSync("../../examples/EventData/Event/jazzfestival2018.example.json", 'utf8'))
let isValid = validate(object);

if(isValid)
  console.log("Event example is VALID!");
else {
  console.log("Event example is INVALID!");
  console.log(validate.errors);
}

schemaFiles = [
  "../../schemas/General/Formats.schema.json",
  "../../schemas/General/BasicProperties.schema.json",
  "../../schemas/General/MediaObject.schema.json",
  "../../schemas/General/MultimediaDescription.schema.json",
  "../../schemas/General/Agent.schema.json",
  "../../schemas/General/ContactPoint.schema.json",
  "../../schemas/General/Address.schema.json",
  "../../schemas/General/HoursSpecification.schema.json",
  "../../schemas/General/Place.schema.json",
  "../../schemas/General/Metadata.schema.json",
  "../../schemas/GeoJSON/Geometry.schema.json",
  "../../schemas/GeoJSON/Point.schema.json",
  "../../schemas/GeoJSON/LineString.schema.json",
  "../../schemas/GeoJSON/Polygon.schema.json",
  "../../schemas/GeoJSON/MultiPoint.schema.json",
  "../../schemas/GeoJSON/MultiLineString.schema.json",
  "../../schemas/GeoJSON/MultiPolygon.schema.json",
  "../../schemas/EventData/Venue.schema.json",
  "../../schemas/EventData/VenueOffering.schema.json"
];

schemas = schemaFiles.map( file => {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
})

ajv = new Ajv({schemas: schemas});
validate = ajv.getSchema("https://www.alpinebits.org/schemas/v1/eventdata/VenueOffering");

object = JSON.parse(fs.readFileSync("../../examples/EventData/VenueOffering/venue-offering-1.example.json", 'utf8'))
isValid = validate(object);

if(isValid)
  console.log("VenueOffering example is VALID!");
else {
  console.log("VenueOffering example is INVALID!");
  console.log(validate.errors);
}
