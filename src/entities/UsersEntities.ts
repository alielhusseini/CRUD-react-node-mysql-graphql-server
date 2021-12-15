// ! FOR TABLE CREATION

// create users table for our db in the User entity file inside entities folder that would be passed inside the entities array of createConnection in typeorm

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"; // means we are creating an enitity
@Entity() // decorators, every entity must have decorators

// every single table you want to create in typeorm you make a class
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn() // for creating an incremental id
    id!: number

    @Column() // passing all of our columns we want ot have in our table
    name!: string

    @Column() 
    username!: string

    @Column() 
    password!: string
}