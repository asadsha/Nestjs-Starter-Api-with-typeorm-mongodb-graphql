import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './input/lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private lessonRepository: Repository<Lesson>,
    ) { }

    async getLessonById(id: string): Promise<Lesson> {
        // return this.lessonRepository.findOne({ name: "The Old Book" });
        return this.lessonRepository.findOne(id);
    }

    async getAllLessons(): Promise<Lesson[]> {
        return this.lessonRepository.find();
    }

    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
        const { name, startDate, endDate } = createLessonInput;

        const lesson = this.lessonRepository.create({
            name,
            startDate,
            endDate
        });

        return this.lessonRepository.save(lesson);
    }
}
