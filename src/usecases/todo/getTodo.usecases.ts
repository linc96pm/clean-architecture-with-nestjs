import { TodoM, ITodoRepository } from '../../domain';

export class GetTodoUseCases {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async execute(id: number): Promise<TodoM> {
    return await this.todoRepository.findById(id);
  }
}
