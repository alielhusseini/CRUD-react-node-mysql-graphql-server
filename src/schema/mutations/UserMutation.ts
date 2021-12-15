import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { UserType } from '../typedefs/User'
import { MessageType } from '../typedefs/Message'
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

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(parent: any, args: any) {
        const id = args.id

        // delete from db
        await Users.delete(id) // if based on any other prop ---> Users.delete({ username: 'mike' })
        return { successful: true, message: 'User deleted' }
    }
}

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        oldPassword: { type: new GraphQLNonNull(GraphQLString) },
        newPassword: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent: any, args: any) {
        const { username, oldPassword, newPassword } = args

        const user = await Users.findOne({ username })
        if(!user) throw new Error('User does not exist')

        const userPassword = user?.password 
        if (userPassword === oldPassword) {
            await Users.update({ username }, { password: newPassword }) // first we find the which to update & set the updated props
            return { successful: true, message: 'Password was updated' }
        }
        else {
            throw new Error('passwords do not match')
        }
    }
}