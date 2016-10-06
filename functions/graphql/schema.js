import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

const Query = new GraphQLObjectType({
  name: 'RootQueries',
  fields: () => ({
    echo: {
      type: GraphQLString,
      args: {
        message: { type: GraphQLString },
      },
      resolve: (root, { message }) => message,
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
