import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './input/create-student.input';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ) { }


    async getStudentById(id: string): Promise<Student> {
        // return this.lessonRepository.findOne({ name: "The Old Book" });
        return this.studentRepository.findOne(id);
    }

    async getAllStudents(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
        const { firstName, lastName } = createStudentInput;

        const student = this.studentRepository.create({
            lastName,
            firstName
        });

        return this.studentRepository.save(student);
    }
}
