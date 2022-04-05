import { ILogger, ITodoRepository } from '../../domain';

export class DeleteTodoUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly todoRepository: ITodoRepository,
  ) {}

  async execute(id: number): Promise<void> {
    await this.todoRepository.deleteById(id);
    this.logger.log(
      'deleteTodoUseCases execute',
      `Todo ${id} have been deleted`,
    );
  }
}
