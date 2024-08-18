import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT');
  const host = configService.get<string>('HOST');

  app.enableCors({
    origin: `http://localhost:8080` && `http://localhost:5173`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(port, host, () => {
    console.log(`Application is running on: http://${host}:${port}`);
  });
}
bootstrap();
