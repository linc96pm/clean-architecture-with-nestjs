import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  EnvironmentConfigModule,
  TypeOrmConfigModule,
  LoggerModule,
  ExceptionsModule,
  RepositoriesModule,
  UsecasesProxyModule,
  ControllersModule,
} from './infrastructure';

@Module({
  imports: [
    EnvironmentConfigModule,
    TypeOrmConfigModule,
    LoggerModule,
    ExceptionsModule,
    RepositoriesModule,
    UsecasesProxyModule,
    ControllersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
