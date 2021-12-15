import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GET_ALL_USERS } from './queries/UserQuery'
import { CREATE_USER } from './mutations/UserMutation'

// queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: GET_ALL_USERS,
    }
})

// mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER,
    }
})

// the schema with queries & mutations exported to graphqlHTTP
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
}) 