import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [MongooseModule.forRoot(databaseConfig.uri), TasksModule],
})
export class AppModule {}
