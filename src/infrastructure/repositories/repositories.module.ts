import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config';
import { Todo } from '../entities';
import { DatabaseTodoRepository } from './todo.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Todo])],
  providers: [DatabaseTodoRepository],
  exports: [DatabaseTodoRepository],
})
export class RepositoriesModule {}
