import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./input/lesson.input";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService
    ) { }

    // get all lessons
    @Query(returns => [LessonType])
    getAllLessons() {
        return this.lessonService.getAllLessons();
    }

    // get lesson by id
    @Query(returns => LessonType)
    getLessonById(
        @Args('id') id: string,
    ) {
        return this.lessonService.getLessonById(id);
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonInput,
    ) {
        return this.lessonService.createLesson(createLessonInput);
    }
}