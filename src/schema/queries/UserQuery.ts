import { GraphQLList } from "graphql"
import { UserType } from '../typedefs/User' 
import { Users } from '../../entities/UsersEntities'

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() { // :Promise<IUSER[]>
        // get all users from db
        return await Users.find()
    }
}