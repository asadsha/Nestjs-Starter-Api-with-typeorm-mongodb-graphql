import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonResolver } from './lesson.resolver';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Lesson])
    ],
    providers: [
        LessonResolver,
        LessonService
    ]
})
export class LessonModule { }
