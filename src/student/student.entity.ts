import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Student {
    @ObjectIdColumn()
    _id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}