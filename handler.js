import { graphql } from 'graphql';
import Schema from './schema';

module.exports.graphql = (event, context, cb) => {
  // function graphql(schema, requestString, rootValue, contextValue, variableValues, operationName)
  graphql(Schema, event.body.query)
    .then(result => cb(null, result))
    .catch(err => cb(err, null));
};
