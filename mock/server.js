const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require('graphql-tools');
const cors = require('cors');

const resolvers = {
  Query: {
    user() {
      return { name: 'hoge', id: 'hoge' };
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql')).toString(),
  resolvers
});

const app = express();
app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(7777);
