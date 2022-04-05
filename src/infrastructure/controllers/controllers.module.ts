import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy';
import { TodoController } from './todo';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [TodoController],
})
export class ControllersModule {}
