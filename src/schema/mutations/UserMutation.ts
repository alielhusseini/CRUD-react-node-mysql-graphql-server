import { GraphQLString, GraphQLNonNull } from 'graphql';
import { UserType } from '../typedefs/User' 
import { Users } from '../../entities/UsersEntities'

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent: any, args: any) {
        const { name, password, username } = args

        // insert into db
        await Users.insert({ name, username, password }) // or Users.insert(args) 

        return args
    }
}