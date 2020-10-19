import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Student')
export class StudentType {
    @Field(type => ID)
    _id: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;
}