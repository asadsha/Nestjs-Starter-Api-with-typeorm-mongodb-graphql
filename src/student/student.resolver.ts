import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";
import { CreateStudentInput } from "./input/create-student.input";

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private studentService: StudentService
    ) { }

    // get all students
    @Query(returns => [StudentType])
    getAllStudents() {
        return this.studentService.getAllStudents();
    }

    // get lesson by id
    @Query(returns => StudentType)
    getStudentById(
        @Args('id') id: string,
    ) {
        return this.studentService.getStudentById(id);
    }

    @Mutation(returns => StudentType)
    createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput,
    ) {
        return this.studentService.createStudent(createStudentInput);
    }
}