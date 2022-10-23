import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const basePath = process.env.BASE_PATH || '/api/auth';
  app.setGlobalPrefix(basePath);
  const documentBuilder = new DocumentBuilder()
    .setTitle('Auth Service')
    .setDescription('The Auth API service')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  const swaggerPath = process.env.SWAGGER_PATH || '/docs/auth';
  SwaggerModule.setup(swaggerPath, app, document);
  const port = process.env.PORT || 3000;
  await app.listen(port, () => console.log(`Auth Service start on ${port}`));
}
bootstrap();
