import { TodoM, ITodoRepository } from '../../domain';

export class GetTodosUseCases {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async execute(): Promise<TodoM[]> {
    return await this.todoRepository.findAll();
  }
}
