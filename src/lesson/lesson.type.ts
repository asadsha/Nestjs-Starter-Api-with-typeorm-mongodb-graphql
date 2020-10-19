import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Lesson')
export class LessonType {
    @Field(type => ID)
    _id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;
}