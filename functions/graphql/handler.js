import { graphql } from 'graphql';
import Schema from './schema';

const handler = (event, context, cb) => {
  graphql(Schema, event.body.query)
    .then(result => cb(null, result))
    .catch(err => cb(err));
};

export default handler;
