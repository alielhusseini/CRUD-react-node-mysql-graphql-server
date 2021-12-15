// npm init -y ---> git init ---> npm i typescript ---> npx tsc --init

// imports
import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql' // for graphql
import { createConnection } from 'typeorm' // for crating & mutating tables
import { schema } from './schema' // with the query & mutation
import { Users } from './entities/UsersEntities' // tables

// setup
const main = async() => {

    // setting up a connection to our db using typeorm
    await createConnection({
        type: "mysql",
        database: 'graphqlcrud',
        username: 'root',
        password: 'password',
        // essential properties to how typeorm runs
        logging: true, // whenever typeorm runs sql statements, it will log the sql statement
        synchronize: false, // every table you create, you need to create a file entity(which comes with typeorm) / first it's false & when you create an entity & push it to entites array you set it to true & it will auto create the table in the db / after creation set it to false so that it won't create the table again
        entities: [Users] // every single table we have in our db or create would be passed inside this array / to create user table, we should create a User entity file inside entities folder and pass it into the array
    })

    // setting up express
    const app = express()
    app.use(cors())
    app.use(express.json())

    // setting up graphql
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(5001, () => console.log('server running'))
}

main().catch(err => console.log(err))
