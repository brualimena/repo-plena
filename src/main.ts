import { NestFactory } from '@nestjs/core';
import { PersonalInfoModule } from './personalinfo.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(PersonalInfoModule);
  
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();
